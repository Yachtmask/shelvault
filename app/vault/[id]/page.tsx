"use client";

import { useEffect, useState } from "react";

export default function Vault({ params }: any) {
  const [vault, setVault] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/vault/${params.id}`)
      .then(res=>res.json())
      .then(setVault);
  }, []);

  if (!vault) return <p>Loading...</p>;

  return (
    <main className="flex justify-center items-center min-h-screen">
      <a href={vault.file_url} className="btn">Download</a>
    </main>
  );
}
