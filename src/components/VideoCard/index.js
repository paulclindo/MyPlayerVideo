import React from 'react';
import {
  VideoCardWrapper,
  VideoImageCover,
  VideoImage,
  VideoTitle,
  VideoDescription,
  VideoSubtitle,
  ProfileImage,
} from './style';

type Props = {|
  openModal: Function,
  cover?: string,
  title: string,
  author?: string,
|};

const VideoCard = (props: Props) => {
  const { cover, title, author, openModal } = props;

  const handleClick = () => {
    openModal(props);
  };

  return (
    <VideoCardWrapper
      onClick={handleClick}
      role="button"
      tabIndex="0"
      onKeyDown={handleClick}
    >
      <VideoImageCover>
        <VideoImage src={cover} alt="" width={260} height={160} />
      </VideoImageCover>
      <VideoDescription>
        <ProfileImage src={cover} />
        <VideoTitle>{title}</VideoTitle>
        <VideoSubtitle>
          <span>Author:</span> {author}
        </VideoSubtitle>
      </VideoDescription>
    </VideoCardWrapper>
  );
};

export default VideoCard;
