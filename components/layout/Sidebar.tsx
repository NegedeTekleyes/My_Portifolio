"use client";

import { navigation } from "@/data/navigation";
import useScrollSpy from "@/hooks/useScrollSpy";
import Image from "next/image";

export default function Sidebar() {
  const active = useScrollSpy(navigation.map((n) => n.id));

  return (
<aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[280px] bg-[#020617] border-r border-slate-800 flex-col items-center py-10">

      {/* Profile */}
      <div className="text-center mb-10">
        <Image 
        src="/images/photo.jpg"
        alt="Profile Image"
        width={128}
        height={128}
        className="rounded-full border-4 border-slate-700 "
        />
        <h2 className="mt-6 text-xl font-semibold">Negede Tekleyes</h2>
      </div>

      {/* Navigation */}
      <nav className=" mt-10 space-y-4 text-slate-400">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block transition ${
              active === item.id
                ? "text-green-400"
                : "hover:text-white"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

    </aside>
  );
}
