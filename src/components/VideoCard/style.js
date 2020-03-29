import styled from 'styled-components';

export const VideoImageCover = styled.div`
  width: 100%;
  height: 200px;
`;
export const VideoImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

  transition: all 0.4s;
`;
export const VideoDescription = styled.div`
  position: relative;
  padding: 20px 25px;
`;
export const ProfileImage = styled.img`
  position: absolute;
  top: -20px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: white;
  box-shadow: 0px 2px 21px 0 #c1c5c5;
`;
export const VideoTitle = styled.h3`
  margin: 1.6rem 0 0 0;
  color: #44546b;
  white-space: normal;
`;
export const VideoSubtitle = styled.p`
  font-size: 0.85rem;
  margin: 1rem 0 0 0;
  span {
    font-weight: bold;
  }
`;

export const VideoCardWrapper = styled.a`
  margin-right: 15px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 8px 20px #e3e7ea;
  min-width: 300px;
  flex-basis: 33%;
  transition: 0.6s;
  margin-right: 2rem;
  min-height: 350px;

  :hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 100px rgba(50, 50, 93, 0.12),
      0 10px 20px rgba(50, 50, 93, 0.1);
  }
`;
