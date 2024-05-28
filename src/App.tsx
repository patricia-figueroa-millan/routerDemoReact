import './App.css'
import {useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();

  
  return (
    <>
      <div>
        <h1> Main page</h1>
        <h2> Navigation...</h2>
        <nav>
          <ul>
            <li>
              <button onClick={()=>navigate("/profile")}>
                Go to profile page!
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
