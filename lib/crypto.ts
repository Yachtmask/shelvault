export async function encryptFile(file: File) {
  const buffer = await file.arrayBuffer();
  const key = crypto.getRandomValues(new Uint8Array(32));

  const encrypted = new Uint8Array(buffer).map(
    (b, i) => b ^ key[i % key.length]
  );

  return {
    encrypted,
    key: Array.from(key).join(","),
  };
}
