import { Container, ContentProfile, Divzao, LinkChange, NameSubName, Suggestionszada } from './Suggestions.styles'
import Euzao from "../assets/luizin.svg"
import { ISuggestions } from './ISuggestions'
import { data } from './data'



export const Suggestions = () => {
  return (
    <Container>
      <ContentProfile>
        <img src={Euzao} alt="" />
        <Divzao>
          <NameSubName>
            <p>luisu.u5</p>
            <span>LuisSantana</span>
          </NameSubName>
          <LinkChange>
          <span>Mudar</span>
          </LinkChange>
        </Divzao>
      </ContentProfile>
      <Suggestionszada>
        <p>Sugestões para você</p>
        <span>Ver tudo</span>
      </Suggestionszada>
      {data.map((item) => {
        return(
          <ISuggestions
          photo={item.photo}
          title={item.title}
          subtitle={item.subtitle}
          follow={item.follow}
          />
          )
      })}

    </Container>
  )
}
