import { Project } from "@/data/types";
import ProjectSlider from "./ProjectSlider";

type Props = {
    projects: Project[];
    currentIndex: number;
    setCurrentIndex: (index: number | null) => void;
    close: () => void;
}
export default function ProjectModal({
    projects, 
    currentIndex,
    setCurrentIndex,
    close,
}: Props) {
    const project = projects[currentIndex!]

    const next = () => {
        setCurrentIndex((currentIndex + 1) % projects.length)
    }
    const prev = () => {
        setCurrentIndex((currentIndex - 1 + projects.length) % projects.length)
    }

    return(
       <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
        <div className="bg-[#1a1a1a] max-w-5xl w-full rounded-xl grid md:grid-cols-2 gap-8 p-8 relative">
             <button onClick={close} className="absolute right-4 top-4 text-2xl">✕</button>


            {/* left arrow */}
            <button 
            onClick={prev}
            className="absolute left-4 top-2 -translate-y-1/2 text-3xl">
             ‹
            </button>
             <ProjectSlider images = {project.images} />

             <div>
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-6">{project.description}</p>

                <ul className="space-y-2 text-sm text-gray-400">
                    <li><b>Client:</b> {project.client}</li>
                    <li><b>Industry:</b> {project.industry}</li>
                    <li><b>Technologies:</b> {project.technologies}</li>
                    <li><b>Date:</b> {project.date}</li>
                </ul>
             </div>
        </div>
       </div> 
    )
}