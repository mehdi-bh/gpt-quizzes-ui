import './App.css'
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Middle from "./components/Middle/Middle.jsx";

function App() {
  return (
      <div className={"flex flex-row"}>
          <div className={"w-64"}>
              <Sidebar></Sidebar>
          </div>
        <div className={"basis-1/2 p-3"}>
          <Middle></Middle>
        </div>
      </div>
  )
}

export default App
