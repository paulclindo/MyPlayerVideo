import React from "react";
import Media from "./media";
import './playlist.scss';

//Function Component -> for components that doesnt need a cycle

function Playlist(props) {
  // const playlist = props.data.categories[0].playlist

  return ( 
    <div className = "Playlist" > 
    {
      props.playlist.map((item) => {
        return <Media {...item} 
          key = {item.id} 
          openModal={props.handleOpenModal}            
          />
      })
    } 
  </div>
  )
}
export default Playlist;

// class Playlist extends Component {
//   render() {
//     const playlist = this.props.data.categories[0].playlist
//     console.log(playlist)

//     return (
//       <div className="Playlist">
//         {
//           playlist.map((item) => {
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>
//     );
//   }
// }

