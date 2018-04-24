import React from 'react'
import './navbar.css'
// stateless function
const Navbar = ({score=0, topscore=0, headermessage="Click an Image to Begin!", message=""}) => (

    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
        <ul className="nav navbar-nav">
            <li><strong className="title" id="titleId">The Memory Game</strong></li>
            <li><strong className="headermessage" id="headerId">{headermessage}</strong></li>
            <li className="score" id="scoreId">Score: {score} | Top Score: {topscore}</li>
        </ul>
    </div>
    </nav>
    )
//     }   


// }
export default Navbar;


// const Header = props => (
//     <nav class="navbar navbar-default navbar-fixed-top">
//     <div className="container">
//         <ul className="nav navbar-nav">
//             <li><a href="/"><strong>Cactus Memory Game</strong></a></li>
//             <li>{props.message}</li>
//             <li>Score: {props.score} | Top Score: {props.topScore}</li>
//         </ul>
//     </div>
//     </nav>
// );

// export default Header;