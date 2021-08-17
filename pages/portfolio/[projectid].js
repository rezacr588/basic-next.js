import { useRouter } from 'next/router'

function PortfolioProjectIdPage() {
  const router = useRouter()

  console.log(router.query);
  console.log(router.pathname);

  return <div>
    <h1>
      Portfolio Project Id Page
    </h1> 
  </div>
}

export default PortfolioProjectIdPage