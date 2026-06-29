import { Upload, Image as ImageIcon } from "lucide-react";

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
    <div
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
      className={`rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300
      ${
        isDragging
          ? "border-blue-600 bg-blue-50"
          : "border-slate-300 bg-white"
      }`}
    >
      <Upload className="mx-auto text-blue-600" size={60} />

      <h2 className="mt-6 text-2xl font-bold">
        Drag & Drop Fabric Image
      </h2>

      <p className="mt-2 text-slate-500">
        or click below to browse files
      </p>

      <input
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        id="fabric-upload"
        onChange={(e) => handleFile(e.target.files[0])}
      />

      <label
        htmlFor="fabric-upload"
        className="inline-flex mt-8 cursor-pointer rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
      >
        <ImageIcon size={20} className="mr-2" />
        Browse Files
      </label>

      {error && (
        <p className="mt-6 text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
}

export default UploadDropzone;