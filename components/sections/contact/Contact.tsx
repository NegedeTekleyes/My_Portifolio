"use client"

import SectionTitle from "@/components/ui/SectionTitle"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"


export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#2E3133]">
      <div className="max-w-6xl mx-auto">
      </div>
      <SectionTitle title="GET IN TOUCH" background="CONTACT" />
      <div className="grid md:grid-cols-2 mt-16 gap-3">
        {/* left */}
        <div className="space-y-8 px-40">
          <div className="">
          <h2>ADDRESS</h2>
        
           <p className="text-gray-400 leading-7">
                4th Floor, Plot No.22,
                <br />
                145 Murphy Canyon Rd.
                <br />
                San Diego CA 2028
              </p>
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
            <div>
              <h3 className="py-6">FOLLOW ME</h3>
              <div className="flex gap-4 text-gray-400">
                <Link href="https://twitter.com" passHref legacyBehavior>
                  <a aria-label="Twitter"><FaTwitter size={18} className="icon-style" /></a>
                </Link>
                <Link href="https://facebook.com" passHref legacyBehavior>
                  <a aria-label="Facebook"><FaFacebook size={18} className="icon-style" /></a>
                </Link>
                <Link href="https://instagram.com" passHref legacyBehavior>
                  <a aria-label="Instagram"><FaInstagram size={18} className="icon-style" /></a>
                </Link>
                <Link href="https://linkedin.com" passHref legacyBehavior>
                  <a aria-label="Linkedin"><FaLinkedin size={18} className="icon-style" /></a>
                </Link>
                <Link href="https://github.com" passHref legacyBehavior>
                  <a aria-label="Github"><FaGithub size={18} className="icon-style" /></a>
                </Link>
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
                  className="bg-[#1e2124] rounded-lg hover:border-green-500 transition border border-gray-800 text-gray-300 p-4 rounded-md outline-none w-full"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#1e2124] rounded-lg border border-gray-800 hover:border-green-500 text-gray-300 p-4 rounded-md outline-none w-full"
                />

              </div>

              <textarea
                rows={5}
                placeholder="Tell us more about your needs..."
                className="bg-[#1e2124] rounded-lg border border-gray-800 hover:border-green-500 text-gray-300 p-4 rounded-md outline-none w-full"
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



    

        