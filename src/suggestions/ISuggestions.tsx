import { Container, DivTexts, FirstContentt, Followzada, PhotoTag, TextSubtitle, TextTitle } from './ISuggestions.styles';

interface ISuggestionsInterface {
  photo: {
    url: string;
    alt: string;
  },
  title: string;
  subtitle: string;
  follow: string;
}

export const ISuggestions = ({photo,
  title,
  subtitle,
  follow}: ISuggestionsInterface)  => {
  return (
    <Container>
      <FirstContentt>
        <PhotoTag>
          <img src={photo.url} alt={photo.alt} />
        </PhotoTag>
        <DivTexts>
          <TextTitle>
            <span>{title}</span>
          </TextTitle>
          <TextSubtitle>
            <span>{subtitle}</span>
          </TextSubtitle>
          </DivTexts>
      </FirstContentt>
      <Followzada>
        <span>{follow}</span>
      </Followzada>
    </Container>
    
  )
}
