import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
`;

export const ImageStories = styled.div`
    
  img {
    margin-top: 2px;
    width: 62px;
    height: 62px;
    cursor: pointer;
    transition: 0.50s;
    border-radius: 50%;
  }
  img:hover {
    transition: 0.50s;
    opacity: 80%;
  }
`;

export const NameUser = styled.div`
  span{
    color: #fff;
    font-size: 12px;
    cursor: pointer;
  }
  span:hover{
    color: #F9F9F9;
  }

  
`;

export const DImageStorie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 66px;
    border-radius: 50%;
    background-image: linear-gradient(to top, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
`;