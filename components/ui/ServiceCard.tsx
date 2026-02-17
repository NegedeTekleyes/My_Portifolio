type Props = {
  title: string;
  desc: string;
  Icon: any;
};

export default function ServiceCard({ title, desc, Icon }: Props) {
  return (
    <div className="flex gap-6 group">
      
      {/* Icon Box */}
      <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-[#020617] border border-slate-800 group-hover:border-green-400 transition">
        <Icon className="text-green-400 w-7 h-7" />
      </div>

      {/* Text */}
      <div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-slate-400 leading-relaxed">{desc}</p>
      </div>

    </div>
  );
}
