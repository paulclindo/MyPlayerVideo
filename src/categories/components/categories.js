import React from 'react'
import Category from './category'
import './categories.css'
import Search from '../../widgets/containers/search'

function Categories (props) {
  return (
  <div className="Categories"> 
    <Search />
      {
        props.categories.map((item) => {
          return (
            <Category 
              handleOpenModal = {
                props.handleOpenModal
              }
              key={item.id} {...item}
              />
          )
        })
      }
    </div>
  );
}
export default Categories