"use client"

import SectionTitle from "@/components/ui/SectionTitle"
import { Mail, Phone } from "lucide-react"


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#2E3133]">
      <div className="max-w-6xl mx-auto">
      </div>
      <SectionTitle title="GET IN TOUCH" background="CONTACT" />
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {/* left */}
        <div className="space-y-8">
          <div>
          <h2>ADDRESS</h2>
        
            <p>Addis Abeba Ethiopia,</p> <br /> <br />
            <p className="icons: phone"></p>
          </div>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" size={18}/>
                +251 941416514
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" size={18}/>
                +251 941416514
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-400" size={18} />
                negede1921@gmail.com
              </div>
            </div>
      
        </div>
        {/* right */}

        <div>

            <h3 className="text-white font-semibold mb-6">
              SEND US A NOTE
            </h3>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#1e2124] text-gray-300 p-4 rounded-md outline-none w-full"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#1e2124] text-gray-300 p-4 rounded-md outline-none w-full"
                />

              </div>

              <textarea
                rows={5}
                placeholder="Tell us more about your needs..."
                className="bg-[#1e2124] text-gray-300 p-4 rounded-md outline-none w-full"
              />

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
    

        
    </section>
  )
}