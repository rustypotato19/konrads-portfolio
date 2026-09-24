export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-linear-to-b from-black to-(--p-green)">
      {children}
    </div>
  );
}
