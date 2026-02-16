

export default function Button({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <button className="border border-green-400 text-green-400 px-8 py-3 rounded-full hover:bg-green-400 hover:text-black transition">
            {children}
        </button>
    )
}
