

export default function MainContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="m1-[280px] w-full min-h-screen">
            {children}
        </main>
    )
}