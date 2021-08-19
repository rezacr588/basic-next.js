import { useRouter } from "next/router"
function ClientIdPage() {
  const router = useRouter()

  const handle = () => 
    router.push(
      {
        pathname: "/clients/[clientid]/[projectid]",
        query: {
          clientid: "213",
          projectid: "2313"
        }
      }
    )
  
  return (
    <div>
      <h1>
        Client Id Page
      </h1>
      <button onClick={handle}>project</button>
    </div>
  )
}

export default ClientIdPage