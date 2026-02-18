import { div } from "framer-motion/client";

type Props = {
    active: string;
    setActive: (c: string) => void;
}
const tabs = ["all", "design", "website", "mobile"]

export default function PortifolioTabs({ active, setActive }: Props) {
    return (
        <div className="flex justify-center gap-8">
            {tabs.map(tab=> (
                <button 
                    key={tab}
                    onClick={() => setActive(tab)}
                    className={`px-4 py-2 rounded-full mr-2 
                        ${active === tab 
                            ? "bg-blue-500 text-white"
                             : "bg-gray-200 text-gray-700"}`}
                >
                    {tab}
                </button>
            ))}
        </div>
    )
}