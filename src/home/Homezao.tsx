import Home from "./Home"
import { Container } from "./Homezao.styles"
import { data } from "./data"

export const Homezao = () => {
  return (
    <Container>
      {data.map((item) => {
        return(
          <Home
          image_profile={item.image_profile}
          user_name={item.user_name}
          subtitle={item.subtitle}
          image_post={item.image_post}
          likes={item.likes}
          iam={item.iam}
          translate={item.translate}
          coments={item.coments}
          />
          )
      })}
    </Container>
  )
}
