import { LoaderCircle } from "lucide-react";

function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center">
      <LoaderCircle
        className="h-12 w-12 animate-spin text-blue-600"
      />

      <p className="mt-4 text-lg font-medium text-slate-600">
        {text}
      </p>
    </div>
  );
}

export default LoadingSpinner;