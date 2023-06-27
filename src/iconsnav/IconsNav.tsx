import { Container, Logo, LogoCompass, LogoCreate, LogoDirect, LogoHeart, LogoHome, LogoIcons, LogoReels, LogoSearch } from "./IconsNav.styles"

import Logoo from "../assets/instagram.svg"
import { Compass, PlayCircle, MagnifyingGlass, House, Chat, Heart, Plus } from "@phosphor-icons/react"






const IconsNav = () => {
  return (
    <Container>

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



        </LogoIcons>

      
    </Container>
  )
}

export default IconsNav