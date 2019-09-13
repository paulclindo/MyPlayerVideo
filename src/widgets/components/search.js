import React from 'react'
import './search.css'


// function Search (props){
//   return(
//     <form action=""></form>
//   )
// }

const Search = (props) => (
  <form 
    onSubmit={props.handleSubmit}
    className="Search" >
    <input 
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Busca tu video favorito ..."
      onChange= {props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search