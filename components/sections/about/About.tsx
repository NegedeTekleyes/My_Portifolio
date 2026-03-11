import SectionTitle from "@/components/ui/SectionTitle";



export default function About() {
  return (
    <section id="about" className="px-16 py-24 bg-[#2E3133]">
      <SectionTitle title="Know Me More" background="ABOUT ME"/>

      {/* content grid */}
      <div className="grid grid-cols-2 gap-16 items-start">

        {/* left side */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            I'm <span className="text-green-400">Negede Tekleyes</span>
          </h2>
          <p className="text-slate-400 mb-4 leading-relaxed">
            I help you build a modern and responsive website that will help you to reach your target audience and grow your business.
             I have a passion for web development and I am always looking for new challenges and opportunities to learn and grow.
          </p>
          <p className="text-slate-400 leading-relaxed">
            I have a strong background in web development and I am proficient in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and other modern web technologies. I have a strong understanding of web design principles and I am able to create beautiful and functional websites that are optimized for performance and user experience.
            I am a self-motivated and hardworking individual who is always looking for new challenges and opportunities to learn and grow. I am a team player who is able to work well with others and I am always willing to help out my colleagues.
          </p>
        </div>

        {/* right side */}
        <div className="bg-[#020617] border border-slate-800 rounded-xl p-8 space-y-4">

          <Info label="Name:" value="Negede Tekleyes" />
          <Info label="Email:" value="negede1921.com" highlight />
          <Info label="Age:" value="24" />
          <Info label="From:" value="Addis Abeba, Ethiopia" />

          <button className="mt-6 w-full bg-green-500 hover:bg-green-600 transition rounded-full py-3 font-medium">
            Download CV
          </button>

        </div>
      </div>
    </section>
  )
}


// info item component
function Info({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{label}</span>
      <span className={`font-medium ${highlight ? "text-green-400" : "text-slate-300"}`}>
        {value}
      </span>
    </div>
  );
}