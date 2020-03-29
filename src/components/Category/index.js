import React from 'react';
// import Playlist from '../../playlist/components/playlist';
import { CategoryWrapper, Title, Description } from './style';
import ListVideoCards from '../ListVideoCards';

type Props = {|
  description: string,
  title: string,
  handleOpenModal: Function,
  playlist: any,
|};

export default function Category(props: Props) {
  const { description, title, handleOpenModal, playlist } = props;
  return (
    <CategoryWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ListVideoCards handleOpenModal={handleOpenModal} playlist={playlist} />
    </CategoryWrapper>
  );
}
