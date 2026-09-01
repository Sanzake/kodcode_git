import { useNavigate } from 'react-router'

export default function Footer() {
    const navigate = useNavigate()
  return (
    <button type='button' onClick={e => navigate(-1)}>Back</button>
  )
}
