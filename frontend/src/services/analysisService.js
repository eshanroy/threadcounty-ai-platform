const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function analyzeFabric(file) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/analyze/`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to analyze fabric.");
  }

  return await response.json();
}