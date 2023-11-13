import './App.css'
import useWindowSize from './CustomHook'

function App() {

  const {width} = useWindowSize();

  return (
    <>
      <div>{width}</div>
    </>
  )
}

export default App
