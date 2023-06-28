import { Stories } from './Stories'
import { Container } from './StoriesMap.styles'
import { data } from './data'

export const StoriesMap = () => {
  return (
    <Container>
      {data.map((item) => {
          return(
          <Stories
          image_profile={item.image_profile}
          user_name={item.user_name}
          />
          )
      })}
    </Container>
  )
}
