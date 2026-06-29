import { useEffect, useState } from "react";
import api from "../../services/api";

function BackendStatus() {
  const [status, setStatus] = useState("Checking...");
  const [color, setColor] = useState("text-yellow-600");

  useEffect(() => {
    async function checkBackend() {
      try {
        const response = await api.get("/health");

        if (response.data.status === "healthy") {
          setStatus("Backend Connected");
          setColor("text-green-600");
        }
      } catch {
        setStatus("Backend Offline");
        setColor("text-red-600");
      }
    }

    checkBackend();
  }, []);

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <p className={`font-semibold ${color}`}>
        {status}
      </p>
    </div>
  );
}

export default BackendStatus;