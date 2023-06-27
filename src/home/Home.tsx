import { BookmarkSimple, Chat, Heart, PaperPlaneTilt } from "@phosphor-icons/react";
import { BackContent, Coments, Container, FirstRow, HomeContent, Iam, ImageContent, ImageProfile, Likes, NameTitle, ReactionsContent, SubTitle, Titles, Translater, UniqueIcon, } from "./Home.styles"
import { useState } from "react";


interface IPostHome {
  image_profile: {
    url: string;
    alt: string;
  },
  user_name: string;
  subtitle: string;
  image_post: {
    url: string;
    alt: string;
  },
  likes: string;
  iam: string;
  translate: string;
  coments: string;

}

const Home = ({image_profile, user_name, subtitle, image_post, likes, iam, translate, coments}: IPostHome ) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
      setIsLiked(!isLiked);
  };
  
  return (
    <Container>

      <HomeContent>
        <FirstRow>
          <ImageProfile>
            <img src={image_profile.url} alt={image_profile.url} />
          </ImageProfile>
          <Titles>
          <NameTitle>
            {user_name}
          </NameTitle>
          <SubTitle>
            {subtitle}
          </SubTitle>
          </Titles>
          </FirstRow>
      </HomeContent>

          <BackContent>
            <ImageContent>
              <img src={image_post.url} alt={image_post.alt} />
            </ImageContent>

            <ReactionsContent>
            {isLiked ? (
          <Heart size={28} color="#EF1600" onClick={handleLikeClick} />
        ) : (
          <Heart size={28} color="#fff" onClick={handleLikeClick} />
        )}
              <Chat size={28} color="#fff"></Chat>
              <PaperPlaneTilt size={28} color="#ffffff" />
              <UniqueIcon>
                <BookmarkSimple size={28} color="#ffffff" />
              </UniqueIcon>
            </ReactionsContent>
          </BackContent>

          <Likes>
            {likes}
          </Likes>
          <Iam>
            {iam}
          </Iam>
          <Translater>
            {translate}
          </Translater>
          <Coments>
            {coments}
          </Coments>

    </Container>
  )
}

export default Home