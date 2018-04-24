import React , {Component}  from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar'
import Wrapper from './components/Wrapper'
import pictures from './pictures.json'
import { Col, Row, Board} from './components/Board'
import Jumbotron from './components/Jumbotron'
import Image from './components/Image'
import List from './components/List/List'

class App extends Component {

constructor(props) {
  super(props) 
  this.state = {
      score: 0,
      topscore: 0,
      imgArray: [],
      pictures: pictures,
      gameOver: false,
      headermessage: "Click an Image to Begin",
      message: "Click on an image to earn points, but don't click on any more than once!"
      
  }
  //remember to bind methods inside this constructor so they can be called appropriately.
  this.onScoreChange = this.onScoreChange.bind(this);
  this.clickCheck = this.clickCheck.bind(this);
  this.shuffle = this.shuffle.bind(this);
  this.handleImg = this.handleImg.bind(this);
  this.replay = this.replay.bind(this);
  this.topScoreUpdate = this.topScoreUpdate.bind(this);
}


onScoreChange = () => {

  return( this.setState({
                        score: this.state.score +1,
                        headermessage: "Good Job!"
                        }));

};

topScoreUpdate = () => {
  // console.log("topscore Updated");
  if(this.state.score > this.state.topscore){
    return (this.setState({topscore: this.state.score }))
  }
};

//one click function to rule them all.
clickCheck = (event) => {
  
  // this gets event.target(whats being clicked) and deconstructs the value.
  const {target: {value}} = event;
  
  this.onScoreChange();
  this.handleImg(event);
  
  //method to change clicked property
  // return(this.setState({clicked: true}));
  return this.setState({pictures: this.shuffle(pictures)});
  
}

replay = () => {
  //put all the replay logic
  // console.log("replay function init")
  // reset state and update topscore if current game has new topscore
  this.topScoreUpdate();
  this.setState({
                 score: 0, 
                imgArray: [],
                gameOver: false,
                headermessage:"Click an Image to Begin" 
                })
}

// get new array order every time click event occurs
shuffle = picArray => {

    for (let i = picArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [picArray[i], picArray[j]] = [picArray[j], picArray[i]];
    }
    return picArray;

}
//handles some of click event. This isn't clean. need to seperate out some of this into functions.
handleImg = (event) => {

  console.log(this.state.imgArray);
  
  this.setState({ imgArray: [...this.state.imgArray, event.target.id] }); 
    
  if (this.state.imgArray.includes(event.target.id)){
   
    this.setState({gameOver: true});

  if(this.state.gameOver){

    this.replay();
  };
    // console.log(this.state.gameOver);
  }
  // console.log(this.state.imgArray); 
  // console.log(this.state.imgArray);
 // add code that is going to loop over img array and check
}

 render() {
  return (
        <Wrapper>  
          <Navbar
            headermessage={this.state.headermessage}
            score={this.state.score}
            topscore={this.state.topscore}
          />
            <Board>
                <List>
                  {pictures.map((pic,i) => (
                <Col size="lg-3">
                  <Image id={pic.id} 
                        key={pic.i} 
                        src={pic.src} 
                        alt={pic.name}
                        onClick={this.clickCheck} 
                        
                  />
                </Col>
                ))}
                </List>
            </Board>
        </Wrapper>
      
    )
  }
}
  export default App;
