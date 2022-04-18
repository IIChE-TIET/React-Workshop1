import styled from "styled-components"
import arcReactor from "./Media/arc.png"

function App() {
  return (
    <StyledApp>
      <header>
        <img src={arcReactor} />
        <h1>Wartrade</h1>
        <nav>
          <span>Prizes</span>
          <span>Sponsors</span>
          <span>Contact</span>
          <button>Register</button>
        </nav>
      </header>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background: red;

  header {
    width: 100%;
    height: 150px;
    background: lightgrey;
  }
`

export default App
