import { useNavigate } from "react-router"

export default function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Home Page</h1>
      <button type="button" onClick={e => navigate("/about")}>To about</button>
    </div>
  )
}
