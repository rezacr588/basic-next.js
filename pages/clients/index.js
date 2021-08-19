import Link from "next/link"
import { useRef } from "react"

function ClientsPage() {
  const clients = useRef([
    { id: "reza", name: "reza" },
    { id: "ali", name: "ali" },
  ])
  return (
    <div>
      <h1>
          Clients Page
      </h1>
      <ul>
        {
          clients.current.map(
            client =>
              <li key={client.id}>
                <Link href={{
                  pathname: "/clients/[clientid]",
                  query: {
                    clientid: client.id
                  }
                }}>
                  {client.name}
                </Link>
              </li>
            )
          }
      </ul>
    </div>
  )
}

export default ClientsPage