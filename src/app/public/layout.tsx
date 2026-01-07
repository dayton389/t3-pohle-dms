// src/app/(public)/layout.tsx
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="public-layout">
      {/* Public navbar, footer, etc */}
      {children}
    </div>
  );
}