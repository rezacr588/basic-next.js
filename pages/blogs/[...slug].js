import {useRouter} from "next/router"

function BlogPost() {
  const { query } = useRouter()
  return (
    <div>
      {query.slug}
    </div>
  )
}

export default BlogPost