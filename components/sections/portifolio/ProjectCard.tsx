import { Project } from "@/data/types";
import Image from "next/image";


export default function ProjectCard({project, onClick}:{project:Project, onClick: () => void}) {
    return (
        <div onClick={onClick} className="group cursor-pointer relative overflow-hidden rounded-xl ">
            <Image 
                src={project.images[0]} 
                alt={project.title} 
                width={600} 
                height={400}
                className="w-full aspect-video object-cover transition duration-500 group-hover:scale-110 mb-6"
            />

            {/* Blur + Dark Overlay */}
            <div
                className="absolute inset-0
                   bg-black/60 backdrop-blur-sm
                   opacity-0 group-hover:opacity-100
                   transition duration-300
                   flex items-center justify-center"
                    >   {/* text content */}
                <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition duration-300">
                    <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                    </h3>
                    <p className="text-green-400 capitalize">
                        {project.category}
                    </p>
                </div>
            </div>
        </div>
    )
}
