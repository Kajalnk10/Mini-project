import React, { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Only frontend: backend logic chahiye actual upload ke liye
    if (file) alert("Uploading: " + file.name);
    else alert("No file selected");
  };

  return (
    <form onSubmit={handleUpload} className="p-4">
      <input
        type="file"
        onChange={handleChange}
        className="mb-3"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Upload File
      </button>
    </form>
  );
}