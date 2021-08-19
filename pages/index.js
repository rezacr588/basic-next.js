import Link from "next/link"
function HomePage() {
  return (
    <div>
      <h1>
        Home Page
      </h1>
      <Link href="/portfolio">Portfolio</Link>
    </div>
  )
}

export default HomePage