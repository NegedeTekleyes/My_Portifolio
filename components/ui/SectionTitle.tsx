import { div } from "framer-motion/client";

type Props = {
    title: string;
    background: string;
};


export default function SectionTitle({ title, background }: Props) {
return (
    <div className="relative text-center mb-16">
        {/* big baground word */}
        <h2 className="absolute inset-0 flex items-center justify-center text-[120px] font-bold text-white/5 select-none">
            {background}
        </h2>
        {/* real title */}
        <h3 className="relative text-4xl font-semibold">
            {title}
            <span className="block w-20 h-1 bg-green-400 mx-auto mt-3 rounded"></span>
        </h3>
    </div>
);


}