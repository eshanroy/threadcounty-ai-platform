function ImagePanel({ image }) {
  return (
    <div className="rounded-3xl bg-white shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        Uploaded Fabric
      </h2>

      <img
        src={image}
        alt="Fabric"
        className="rounded-2xl w-full max-h-[500px] object-contain"
      />

    </div>
  );
}

export default ImagePanel;