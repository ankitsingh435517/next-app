import { useRouter } from 'next/router'
const DetailsPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>{id}</div>
  )
}

export default DetailsPage