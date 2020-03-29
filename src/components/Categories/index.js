// @flow
import React from 'react';
import Category from '../Category';
import { CategoriesWrapper } from './style';
// import Search from '../../widgets/containers/search';
import SearchBar from '../SearchInput';

type Props = {|
  categories: Array<Object>,
  handleOpenModal: Function,
|};

export default function Categories(props: Props) {
  const { categories, handleOpenModal } = props;
  return (
    <CategoriesWrapper>
      <SearchBar />
      {categories.map(item => (
        <Category handleOpenModal={handleOpenModal} key={item.id} {...item} />
      ))}
    </CategoriesWrapper>
  );
}
