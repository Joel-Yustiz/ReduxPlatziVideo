import React from 'react'
import Icon from './icon'
// Componet Tonto o presentacional - solo muestra 
function Play(props) {
    return(
       <Icon {...props}>
           <path d="M6 4l20 12-20 12z"></path>
       </Icon>
    )
}

export default Play;