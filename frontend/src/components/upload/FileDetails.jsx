function FileDetails({ selectedFile }) {

  if (!selectedFile) return null;

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-4">
        File Details
      </h2>

      <div className="space-y-2">

        <p>
          <strong>Name:</strong> {selectedFile.name}
        </p>

        <p>
          <strong>Type:</strong> {selectedFile.type}
        </p>

        <p>
          <strong>Size:</strong>{" "}
          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
        </p>

      </div>

    </div>
  );
}

export default FileDetails;