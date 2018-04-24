import React , {Component}  from 'react'
import './App.css'
import Navbar from './components/Nav/Navbar'
import Wrapper from './components/Wrapper'
import pictures from './pictures.json'
import { Col, Row, Board} from './components/Board'
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
      headermessage: "Click below to get started",
      message: "Click on an image to earn points, but don't click on any more than once!"
      
  }


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
  if(this.state.score > this.state.topscore){
    return (this.setState({topscore: this.state.score }))
  }
};

clickCheck = (event) => {

  const {target: {value}} = event;
  
  this.onScoreChange();
  this.handleImg(event);

  return this.setState({pictures: this.shuffle(pictures)});
  
}

replay = () => {

  this.topScoreUpdate();
  this.setState({
                 score: 0, 
                imgArray: [],
                gameOver: false,
                headermessage:"Click below to get started" 
                })
}

shuffle = picArray => {

    for (let i = picArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [picArray[i], picArray[j]] = [picArray[j], picArray[i]];
    }
    return picArray;

}

handleImg = (event) => {

  console.log(this.state.imgArray);
  
  this.setState({ imgArray: [...this.state.imgArray, event.target.id] }); 
    
  if (this.state.imgArray.includes(event.target.id)){
   
    this.setState({gameOver: true});

  if(this.state.gameOver){

    this.replay();
  };

  }

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
