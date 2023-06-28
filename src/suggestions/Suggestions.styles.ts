import styled from "styled-components";

export const Container = styled.div`
margin-top: 70px;
margin-right: 400px;
`;

export const ContentProfile = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  gap: 10px;
  img {
    width: 50px;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const NameSubName = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #fff;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 14px;
  }
  span {
    color: #9f9f9f;
    font-size: 14px;
  }
`;

export const LinkChange = styled.a`
  color: #0095f6;
  font-weight: 500;
  font-size: 12px;
  transition: 0.50s;
  cursor: pointer;
  span:hover {
    transition: 0.50s;
    color: #fff;
  }
`;

export const Divzao = styled.div`
  display: flex;
  width: 400px;
  align-items: center;
  justify-content: space-between;
`;

export const Suggestionszada = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  p {
    margin-top: 0;
    font-size: 14px;
    margin-bottom: 0;
    color: #9f9f9f;
  }
  span {
    color: #fff;
    font-size: 12px;
  }
`;



