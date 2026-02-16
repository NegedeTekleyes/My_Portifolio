export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="lg:ml-[280px] pt-16 lg:pt-0">
      {children}
    </main>
  );
}
