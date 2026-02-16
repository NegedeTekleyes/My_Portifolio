"use client";

import { useState } from "react";
import { navigation } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-[#020617] border-b border-slate-800 flex items-center justify-between px-6 z-50">
        <h2 className="font-semibold">Simone Olivia</h2>

        <button onClick={() => setOpen(true)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#020617] z-50 transform transition ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-green-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
    </>
  );
}
