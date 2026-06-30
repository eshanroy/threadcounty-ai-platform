import {
  FileImage,
  HardDrive,
  FileType,
} from "lucide-react";

function FileDetails({ selectedFile }) {
  if (!selectedFile) return null;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        File Information
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-5">
          <FileImage className="mb-3 text-blue-600" size={28} />
          <p className="text-sm text-slate-500">File Name</p>
          <h3 className="mt-1 break-all font-semibold">
            {selectedFile.name}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <FileType className="mb-3 text-green-600" size={28} />
          <p className="text-sm text-slate-500">Type</p>
          <h3 className="mt-1 font-semibold">
            {selectedFile.type}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <HardDrive className="mb-3 text-orange-500" size={28} />
          <p className="text-sm text-slate-500">Size</p>
          <h3 className="mt-1 font-semibold">
            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FileDetails;