import { Container } from "./App.styles"
import { Homezao } from "./home/Homezao"
import IconsNav from "./iconsnav/IconsNav"
import { Suggestions } from "./suggestions/Suggestions"


const App = () => {
  return (
    <Container>
    <IconsNav/>
    <Homezao/>
    <Suggestions/>

  </Container>
  )
}


export default App