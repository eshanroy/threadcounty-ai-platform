import { createContext, useContext, useState } from "react";

const UploadContext = createContext();

export function UploadProvider({ children }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState("");

  return (
    <UploadContext.Provider
      value={{
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
      }}
    >
      {children}
    </UploadContext.Provider>
  );
}

export function useUpload() {
  return useContext(UploadContext);
}