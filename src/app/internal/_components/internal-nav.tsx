// src/app/internal/_components/internal-nav.tsx
import Link from "next/link";

export function InternalNav() {
  return (
    <nav className="flex gap-4 p-4 bg-slate-800 text-white content-between">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      <Link href="/dashboard" className="hover:underline">
        Dashboard
      </Link>
      <Link href="/documents" className="hover:underline">
        Documents
      </Link>
      <Link href="/inventory" className="hover:underline">
        Inventory
      </Link>
    </nav>
  );
}