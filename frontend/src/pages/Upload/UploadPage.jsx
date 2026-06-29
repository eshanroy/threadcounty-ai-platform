import Container from "../../components/common/Container";
import UploadDropzone from "../../components/upload/UploadDropzone";
import SupportedFormats from "../../components/upload/SupportedFormats";
import ImagePreview from "../../components/upload/ImagePreview";
import FileDetails from "../../components/upload/FileDetails";
import UploadProgress from "../../components/upload/UploadProgress";
import AnalyzeButton from "../../components/upload/AnalyzeButton";
import { useState } from "react";
import { useUpload } from "../../context/UploadContext";

function UploadPage() {
    const {
  selectedFile,
  setSelectedFile,
  previewUrl,
  setPreviewUrl,
  uploadProgress,
  setUploadProgress,
  isDragging,
  setIsDragging,
  isAnalyzing,
  setIsAnalyzing,
  error,
  setError,
} = useUpload();
  return (
    <section className="py-16 bg-slate-50 min-h-screen">
      <Container>
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-black text-slate-900">
              Upload Fabric Image
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              Upload a fabric image to analyze weave patterns, thread density,
              and generate an AI-powered quality report.
            </p>
          </div>

          <div className="space-y-6">
            <UploadDropzone
  selectedFile={selectedFile}
  setSelectedFile={setSelectedFile}
  previewUrl={previewUrl}
  setPreviewUrl={setPreviewUrl}
  error={error}
  setError={setError}
  isDragging={isDragging}
  setIsDragging={setIsDragging}
/>
            <SupportedFormats />
            <ImagePreview
    previewUrl={previewUrl}
    selectedFile={selectedFile}
/>
            <FileDetails selectedFile={selectedFile} />
            <UploadProgress />
            <AnalyzeButton />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default UploadPage;