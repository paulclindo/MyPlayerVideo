import React from 'react';
import VideoCard from '../VideoCard/index';
import { ListMovieWrapper } from './style';

type Props = {|
  playlist: Array<Object>,
  handleOpenModal: Function,
|};
const ListVideoCards = (props: Props) => {
  const { playlist, handleOpenModal } = props;
  return (
    <ListMovieWrapper>
      {playlist.map(item => (
        <VideoCard {...item} key={item.id} openModal={handleOpenModal} />
      ))}
    </ListMovieWrapper>
  );
};
export default ListVideoCards;
