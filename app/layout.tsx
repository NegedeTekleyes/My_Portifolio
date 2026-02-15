import Sidebar from "@/components/layout/Sidebar"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Sidebar/>
        </div>
      </body>
    </html>
  )
}