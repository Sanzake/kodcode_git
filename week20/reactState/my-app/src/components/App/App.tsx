import CounterButton from '../CounterButton/CounterButton'
import CounterUpdateLearning from '../CounterUpdateLearning/CounterUpdateLearning'
import Divider from '../Divider/Divider'
import FullName from '../FullName/FullName'
import ItemsList from '../ItemsList/ItemsList'
import Learn from '../Learn/Learn'
import './App.css'

function App() {

  return (
    <>
      <CounterButton />
      <Divider />
      <FullName />
      <Divider />
      <Learn />
      <Divider />
      <ItemsList />
      <Divider />
      <CounterUpdateLearning />
    </>
  )
}

export default App
