"use client"

import Image from "next/image";
import { useEffect, useState } from "react"


export default function ProjectSlider({images}:{images:string[]}) {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id= setInterval(() => {
            setIndex(i=>(i+1)%images.length)
        }, 3000)
        return () => clearInterval(id)

    }, [images.length]);

    return (
        <div className="relative h-96 w-full">
            <Image
            src={images[index]}
            alt="project"
            fill
            className="object-cover rounded-lg"
            />
        </div>
    )
}