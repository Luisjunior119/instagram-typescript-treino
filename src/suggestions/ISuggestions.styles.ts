import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
`;

export const FirstContentt = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const PhotoTag = styled.div`
  cursor: pointer;
  img:hover {
    opacity: 80%;
  }
`;
export const DivTexts = styled.div`
`;
export const TextTitle = styled.div`

  span {
    color: #fff;
    font-size: 14px;
    margin-bottom: 0;
    cursor: pointer;
  }
`;
export const TextSubtitle = styled.div`
  span {
    font-size: 12px;
    margin-bottom: 0;
    color: #9f9f9f;
    cursor: pointer;
  }
`;
export const Followzada = styled.a`
  color: #0095f6;
  font-size: 12px;
  cursor: pointer;
  span:hover {
    color: #fff;
  }
`;