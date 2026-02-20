"use client"

import { Project } from "@/data/types"
import { useState } from "react"
import PortifolioTabs from "./PortifolioTabs"
import { projects } from "@/data/projects.data"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"


export default function Portifolio() {
    const [category, setCategory] = useState("All")
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    const filtered = 
        category === "All" 
        ? projects 
        : projects.filter(p => p.category === category)
    return (
        <section id="portfolio" className=" py-24 bg-[#111] text-white">
            <div className="max-w-6xl mx-auto px-6 ">
                <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
                <PortifolioTabs active={category} setActive={setCategory}/>
                

                <div className="grid gap-8 mt-12 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
                    {filtered.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => setCurrentIndex(index)}
                    />
                    ))}
                </div>
                {currentIndex !== null && (
                    <ProjectModal 
                    projects={filtered}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                     close={() => setCurrentIndex(null)}
                      />
                )}
            </div>
            
        </section>
    )
}