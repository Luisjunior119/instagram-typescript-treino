import { Container, ContentIcons, Logo, LogoCompass, LogoCreate, LogoDirect, LogoHeart, LogoHome, LogoIcons, LogoMore, LogoReels, LogoSearch } from "./IconsNav.styles"

import Logoo from "../assets/instagram.svg"
import { Compass, PlayCircle, MagnifyingGlass, House, Chat, Heart, Plus, List } from "@phosphor-icons/react"






const IconsNav = () => {
  return (
    <Container>
      
      <ContentIcons>
      <Logo>
        <img src={Logoo} alt="insta-logo" width={100} />
      </Logo>


        <LogoIcons>



        <LogoHome>
          <House size={28} color="#ffffff" weight="bold" />
          <span>Página Inicial</span>
        </LogoHome>

        <LogoSearch>
          <MagnifyingGlass size={28} color="#ffffff" weight="bold" />
          <span>Pesquisa</span>
        </LogoSearch>

        <LogoCompass>
          <Compass size={28} color="#ffffff" weight="bold" />
          <span>Explorar</span>
        </LogoCompass>

        <LogoReels>
          <PlayCircle size={28} color="#ffffff" weight="bold" />
          <span>Reels</span>
        </LogoReels>

        <LogoDirect>
          <Chat size={28} color="#ffffff" weight="bold" />
          <span>Mensagens</span>
        </LogoDirect>

        <LogoHeart>
          <Heart size={28} color="#ffffff" weight="bold" />
          <span>Notificações</span>
        </LogoHeart>

        <LogoCreate>
          <Plus size={28} color="#ffffff" weight="bold" />
          <span>Criar</span>
        </LogoCreate>

        <LogoMore>
          <List size={32} color="#ffffff" weight="bold"/>
          <span>Mais</span>
        </LogoMore>



        </LogoIcons>
      </ContentIcons>
      
    </Container>
  )
}

export default IconsNav