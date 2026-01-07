// src/app/internal/layout.tsx
import { InternalNav } from "./_components/internal-nav";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <InternalNav />
      <main className="p-4">{children}</main>
    </div>
  );
}