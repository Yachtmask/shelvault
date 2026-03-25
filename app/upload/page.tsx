"use client";

import { useState } from "react";
import { encryptFile } from "@/lib/crypto";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const { encrypted, key } = await encryptFile(file);
    const blob = new Blob([encrypted]);

    const formData = new FormData();
    formData.append("file", blob);
    formData.append("key", key);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    setResult({ link: data.url, key });

    setLoading(false);
  };

  return (
    <main className="flex justify-center items-center min-h-screen px-6">
      
      <div className="glass p-6 rounded-xl w-full max-w-md">

        <h1 className="mb-4">Create Vault</h1>

        <input type="file" onChange={(e)=>setFile(e.target.files?.[0]||null)} />

        <button onClick={handleUpload} className="btn w-full mt-4">
          {loading ? "Encrypting..." : "Upload"}
        </button>

        {result && (
          <div className="mt-4">
            <input value={result.link} readOnly className="input" />
            <input value={result.key} readOnly className="input mt-2" />
          </div>
        )}

      </div>

    </main>
  );
}
