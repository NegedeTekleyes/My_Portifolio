"use client"

import { useState } from "react"
import PortifolioTabs from "./PortifolioTabs"
import { projects } from "@/data/projects.data"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import SectionTitle from "@/components/ui/SectionTitle"


export default function Portifolio() {
    const [category, setCategory] = useState("all")
    const [currentIndex, setCurrentIndex] = useState<number | null>(null)

    const filtered = 
        category === "all" 
        ? projects 
        : projects.filter(p => p.category.toLocaleLowerCase() === category.toLocaleLowerCase())
    return (
        <section id="portfolio" className="  px-6 py-24 bg-[#202122]">
            <SectionTitle title="MY WORK" background="PORTFOLIO" />
            <div className="max-w-6xl mx-auto px-6 ">
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