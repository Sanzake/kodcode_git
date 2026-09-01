import { useParams } from 'react-router'

export default function UserPage() {
  const params = useParams()
  return (
    <div>
      <h1>UserPage</h1>
      <p>User: {params.id}</p>
    </div>
  )
}
