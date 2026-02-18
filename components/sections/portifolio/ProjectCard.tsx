import { Project } from "@/data/types";
import Image from "next/image";


export default function ProjectCard({project, onClick}:{project:Project, onClick: () => void}) {
    return (
        <div onClick={onClick} className="group cursor-pointer relative overflow-hidden rounded-xl">
            <Image 
                src={project.images[0]} 
                alt={project.title} 
                width={400} 
                height={300}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/70 opacity-0 group:hover:opacity-100 transition flex items-center justify-center">
                <div className="text-center">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-green-400 capitalize">{project.category}</p>
                </div>
            </div>
        </div>
    )
}
