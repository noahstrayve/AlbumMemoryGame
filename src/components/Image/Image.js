import React from 'react'
import './image.css'


 const Image = props => (

        <img className="images"         
            id={props.id} 
            key={props.id}
            src={props.src} 
            alt={props.name}
            clicked={props.clicked}
            onClick={props.onClick}    
        >
        </img>
    
            
)                
        

export default Image