import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import './css/globals.css'

function App() {

  return (
    <div className="flex bg-primary relative w-full min-h-screen flex-col gap-3 justify-start items-center">
      <NavBar/>
      <Hero/>
      <div className="w-full  h-[48rem] bg-gradient-to-t absolute bottom-0   filter blur-[400px]   "></div>

    </div>
  )
}

export default App
