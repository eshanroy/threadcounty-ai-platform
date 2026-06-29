function ImagePreview({ previewUrl, selectedFile }) {
  if (!selectedFile) return null;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-5">
        Image Preview
      </h2>

      <img
        src={previewUrl}
        alt="Fabric Preview"
        className="w-full max-h-[450px] object-contain rounded-2xl border"
      />

    </div>
  );
}

export default ImagePreview;