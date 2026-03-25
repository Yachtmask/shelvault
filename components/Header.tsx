"use client";

export default function Header() {
  return (
    <header className="flex justify-between p-4 border-b border-white/10">
      <h1>GhostDrop</h1>
      <nav className="flex gap-4 text-sm text-gray-400">
        <a href="/">Home</a>
        <a href="/upload">Upload</a>
      </nav>
    </header>
  );
}
