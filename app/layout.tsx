import './globals.css'
import MainContainer from "@/components/layout/MainContainer"
import Sidebar from "@/components/layout/Sidebar"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b1220] text-white">
        <div className="flex">
          <Sidebar/>
          <MainContainer>{children}</MainContainer>
        </div>
      </body>
    </html>
  )
}