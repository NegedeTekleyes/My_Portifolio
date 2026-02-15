"use client";

import { navigation } from "@/data/navigation";
import useScrollSpy from "@/hooks/useScrollSpy";

export default function Sidebar() {
  const active = useScrollSpy(navigation.map((n) => n.id));

  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-[#020617] border-r border-slate-800 flex flex-col items-center py-10">

      {/* Profile */}
      <div className="text-center mb-10">
        <div className="w-32 h-32 rounded-full bg-slate-700 mb-4" />
        <h2 className="text-xl font-semibold">Negede Tekleyes</h2>
      </div>

      {/* Navigation */}
      <nav className="space-y-4 text-slate-400">
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
