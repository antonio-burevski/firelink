import FlContent from "./components/layout/FlContent"
import FlFooter from "./components/layout/FlFooter"
import FlHeader from "./components/layout/FlHeader"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <FlHeader />
      <FlContent />
      <FlFooter />
    </ThemeProvider>
  )
}

export default App;
