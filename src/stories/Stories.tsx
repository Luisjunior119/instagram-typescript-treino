import { Container, DImageStorie, ImageStories, NameUser } from './Stories.styles'

interface IStories {
  image_profile: {
    url: string;
    alt: string;
  },
  user_name: string;
}

export const Stories = ({image_profile, user_name}: IStories) => {
  return (
    <Container>
      <DImageStorie>
        <ImageStories>
          <img src={image_profile.url} alt={image_profile.alt} />
        </ImageStories>
      </DImageStorie>
      <NameUser>
        <span>{user_name}</span>
      </NameUser>
    </Container>
  )
}
