import CartController from '../CartController/CartController'
import Counter from '../Counter/Counter'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import {cartStore} from "../Stores/ZustandStore"
import './App.css'


function App() {
  const cart = cartStore((s) => s.items)
  const total = cartStore((s) => s.total)

  {console.log("app render")}

  return (
    <div>
      <Counter />
      <ScoreBoard />
      <CartController />
      <p>cart items: {total()}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{`id: ${item.id} - ${item.name} - ${item.qty}`}</li>
        ))}
      </ul>
    </div>
  ) 
}

export default App
