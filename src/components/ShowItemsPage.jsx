import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  showItemsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "8%"
  },

  image_style: {
    height: "221px",
    width: "156px",
  },

  title:
  {
    display: "flex",
    justifyContent: "center",
  },

  //textStyle:
  //{
    //display: "block",
    //textAlign: "center",
  //}

})

class ShowItemsPage extends Component {
  constructor()
  {
    super(); 
    this.state = {
      films: [{title:"10 Things You Dont Know", img:"../assets/images/10-things-you-dont-know.jpeg"}, {title:"Botched", img:"../assets/images/botched.jpeg"}, {title:"Celebrity Call Center", img:"../assets/images/celebrity-call-center.jpeg"}, {title:"Celebrity Game Face", img:"../assets/images/celebrity-game-face.jpeg"}, {title: "Daily Pop", img:"../assets/images/daily-pop-podcast.jpeg"}, {title:"Dating #NoFilter", img:"../assets/images/dating-nofilter.jpeg"}, {title:"Dr. 90210", img:"../assets/images/dr-90210.jpeg"}, {title:"Flip It Like Disick", img:"../assets/images/flip-it-like-disick.jpeg"}, {title:"For Real: The Story of Reality Tv", img:"../assets/images/for-real-the-story-of-reality-tv.png"}, {title:"Just The Sip Podcast", img:"../assets/images/just-the-sip-podcast.jpeg"}, {title:"Necessary Realness", img:"../assets/images/necessary-realness.jpeg"}, {title:"Nightly Pop Podcast", img:"../assets/images/nightly-pop-podcast.jpeg"}]
    };
    this.handleClick1 = this.handleClick1.bind(this); 
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this); 
  }

  handleClick1() //When "All" is clicked
  {
    this.setState({
      films: [{title:"10 Things You Dont Know", img:"../assets/images/10-things-you-dont-know.jpeg"}, {title:"Botched", img:"../assets/images/botched.jpeg"}, {title:"Celebrity Call Center", img:"../assets/images/celebrity-call-center.jpeg"}, {title:"Celebrity Game Face", img:"../assets/images/celebrity-game-face.jpeg"}, {title: "Daily Pop", img:"../assets/images/daily-pop-podcast.jpeg"}, {title:"Dating #NoFilter", img:"../assets/images/dating-nofilter.jpeg"}, {title:"Dr. 90210", img:"../assets/images/dr-90210.jpeg"}, {title:"Flip It Like Disick", img:"../assets/images/flip-it-like-disick.jpeg"}, {title:"For Real: The Story of Reality Tv", img:"../assets/images/for-real-the-story-of-reality-tv.png"}, {title:"Just The Sip Podcast", img:"../assets/images/just-the-sip-podcast.jpeg"}, {title:"Necessary Realness", img:"../assets/images/necessary-realness.jpeg"}, {title:"Nightly Pop Podcast", img:"../assets/images/nightly-pop-podcast.jpeg"}]
    }); 
  }

  handleClick2() //When "TV" is clicked 
  {
    this.setState({
      films: [{title: "Daily Pop", img:"../assets/images/daily-pop-podcast.jpeg"}, {title:"Dating #NoFilter", img:"../assets/images/dating-nofilter.jpeg"}, {title:"Dr. 90210", img:"../assets/images/dr-90210.jpeg"}, {title:"Flip It Like Disick", img:"../assets/images/flip-it-like-disick.jpeg"}, {title:"For Real: The Story of Reality Tv", img:"../assets/images/for-real-the-story-of-reality-tv.png"}, {title:"Just The Sip Podcast", img:"../assets/images/just-the-sip-podcast.jpeg"}, {title:"Necessary Realness", img:"../assets/images/necessary-realness.jpeg"}, {title:"Nightly Pop Podcast", img:"../assets/images/nightly-pop-podcast.jpeg"}]
    });
  }

  handleClick3() //When "Digital content" is clicked 
  {
    this.setState({
      films: [{title:"For Real: The Story of Reality Tv", img:"../assets/images/for-real-the-story-of-reality-tv.png"}, {title:"Just The Sip Podcast", img:"../assets/images/just-the-sip-podcast.jpeg"}, {title:"Necessary Realness", img:"../assets/images/necessary-realness.jpeg"}, {title:"Nightly Pop Podcast", img:"../assets/images/nightly-pop-podcast.jpeg"}]
    });
  } 

  /* const buttonForAll = () => {
    const [showFilms, setShowFilms] = React.useState(false)
    const onClick = () => setShowFilms(true)

    return(
      <div>
        <label><input type="radio" value="All" onClick= {onClick}></input>All</label>
        { showFilms ? <Films></Films>:null }
      </div>
    )
  }

  const Films = () => (
    <div className="films"></div>
  ) */

  render()
  {
    return(
      <div>
        <label><input type="radio" value="All" onHandleClick= {this.handleClick1()}></input>All</label>
        <label><input type="radio" value="TV" onHandleClick= {this.handleClick2}></input>TV</label>
        <label><input type="radio" value="Digital Content" onHandleClick= {this.handleClick3}></input>Digital Content</label>
        {this.state.films.map((title, img) => {
           <div src={this.state.films}><img src={img}></img></div>
        })} 
      </div>
    );

  }

}
export default ShowItemsPage; 
