"use client"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"


export default function ScrollTop() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const handleScroll =() => {
            setShow(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    if (!show) return null
    return (
        <button
        onClick={scrollToTop}
        className="fixed  bottom-6 right-170 bg-green-400 hover:bg-green-500 p-3 text-white rounded-full shadow-lg transition"
        >
            <ArrowUp size={20}/>
        </button>
    )
}