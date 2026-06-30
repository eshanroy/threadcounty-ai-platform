import { Upload, Image as ImageIcon, Sparkles } from "lucide-react";
import { motion } from "motion/react";

function UploadDropzone({
  setSelectedFile,
  setPreviewUrl,
  error,
  setError,
  isDragging,
  setIsDragging,
}) {
  const validateFile = (file) => {
    if (!file) return false;

    const allowed = ["image/jpeg", "image/png", "image/jpg"];

    if (!allowed.includes(file.type)) {
      setError("Only JPG and PNG images are allowed.");
      return false;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError("Maximum file size is 10 MB.");
      return false;
    }

    setError("");
    return true;
  };

  const handleFile = (file) => {
    if (!validateFile(file)) return;

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFile(e.dataTransfer.files[0]);
      }}
      className={`rounded-3xl border-2 border-dashed p-14 text-center transition-all duration-300 shadow-lg
      ${
        isDragging
          ? "border-blue-600 bg-blue-50 scale-[1.02]"
          : "border-slate-300 bg-white hover:border-blue-400 hover:shadow-xl"
      }`}
    >
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
        <Upload className="text-blue-600" size={48} />
      </div>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        <Sparkles size={16} />
        AI Powered Upload
      </div>

      <h2 className="mt-6 text-3xl font-bold text-slate-900">
        Drag & Drop Fabric Image
      </h2>

      <p className="mx-auto mt-4 max-w-lg text-slate-500">
        Upload a high-quality textile image to analyze weave type,
        thread density, confidence score, and fabric quality.
      </p>

      <input
        id="fabric-upload"
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <label
        htmlFor="fabric-upload"
        className="mt-10 inline-flex cursor-pointer items-center rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700"
      >
        <ImageIcon size={22} className="mr-2" />
        Browse Files
      </label>

      <p className="mt-6 text-sm text-slate-500">
        Supports JPG, JPEG and PNG • Maximum 10 MB
      </p>

      {error && (
        <p className="mt-5 font-semibold text-red-500">
          {error}
        </p>
      )}
    </motion.div>
  );
}

export default UploadDropzone;