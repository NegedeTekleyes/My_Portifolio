
export default function Footer() {
    return (
        <footer className="bg-[#1e2124] px-6 py-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between item-center text-gray-400 text-sm">
            {/* left side */}
            <p className="mt-3"> Copyright © {new Date().getFullYear()}{" "}
                <span className="font-semibold">
                    Negede Tekleyes
                </span>
                .All Right Reserved
            </p>
            {/* right side */}
            <div className="flex gap-4 mt-3 md:mt:0">
                <a href="">Terms & Policy</a>
                <span>|</span>
                <a href=""> Disclaimer</a>
            </div>

            </div>
        </footer>
    )
}