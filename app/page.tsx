export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      
      <h1 className="text-6xl font-semibold relative">
        GhostDrop
        <span className="absolute inset-0 blur-2xl opacity-20 bg-white"></span>
      </h1>

      <p className="mt-4 text-gray-400">
        Send encrypted files that self-destruct.
      </p>

      <p className="text-red-400 mt-2">
        Opens once. Then it’s gone forever.
      </p>

      <a href="/upload" className="btn mt-6">
        Create Vault
      </a>

    </main>
  );
}
