import React from 'react'
//import './Film.css';

//video player
//import {DefaultPlayer as Video} from 'react-html5video';
//import 'react-html5video/dist/styles.css';
//media file

/*import img3 from '../video/NAPO.JPG';
import video3 from '../video/NAPO.mp4';
import img6 from '../video/The Wishgranter.JPG';
import video6 from '../video/The Wishgranter.mp4';
import img7 from '../video/The Wrong Rock.JPG';
import video7 from '../video/The Wrong Rock.mp4';*/



export default function Film (){
 /* let data = [
    
    {
      id:3,
      poster:img3,
      videoUri:video3
    },
  
    {
      id:6,
      poster:img6,
      videoUri:video6
    },
    {
      id:7,
      poster:img7,
      videoUri:video7
    }
   
  ]*/
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Relaxing Movies</h1>
      
    </div>
  )
}

/*<div className="gallery">
        {data.map((item, index)=>{
          return(
            <div className="video" key={index}>
              <div className="video-container">
                <Video
                  style={{width:'100%'}}
                  controls={['PlayPause','seek', 'Time','Volume','Fullscreen']}
                  poster={item.poster}
                >
                  <source src={item.videoUri} type="video/webm"/>
                </Video>
              </div>

            </div>
          )
        })}
      </div>*/

