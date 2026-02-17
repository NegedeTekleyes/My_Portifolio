type Props = {
    year: string;
    title: string;
    place: string;
    desc: string;
}

export default function ResumeCard({ year, title, place, desc }: Props) {
    return (
        <div className="bg-[#111418] p-6 rounded-lg border border-gray-800 hover:border-green-500 transition">
           <span className="text-xs bg-red-600 px-2 py-1 rounded">
                {year}
                <h3 className="text-lg font-semibold mt-3">{title}</h3>

                <p className="text-green-400 text-sm">{place}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    {desc}
                </p>
           </span>
        </div>
    )
}