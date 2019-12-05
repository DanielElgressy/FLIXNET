import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import '../styles/Landing.css'

class Home extends Component {

        constructor() {
          super()
          this.state = {
            data: 
            [
              { id: 0, isRented: false, name: "User1", backgroundColor: "lightblue"},
              { id: 1, isRented: false, name: "User2", backgroundColor: "lightred"},
              { id: 2, isRented: false, name: "User3", backgroundColor: "lightyellow"},
              { id: 3, isRented: false, name: "User4", backgroundColor: "orange"}
            ]
        }
      }
        


    render() {
        let color1 = this.state.data[0].backgroundColor
        let color2 = this.state.data[1].backgroundColor
        let color3 = this.state.data[2].backgroundColor
        let color4 = this.state.data[3].backgroundColor


        return (
            <div>
                <h1 id="home-title">This is a landing page</h1>


                <div id="home-container">

                    <Link to="/catalog" > <div id="wizards" style={{backgroundColor: color1}}><span className="main-directory-text">user1</span></div> </Link>
                    <Link to="/catalog" > <div id="wizards" style={{backgroundColor: color2}}><span className="main-directory-text">user2</span></div> </Link>
                    <Link to="/catalog" > <div id="wizards" style={{backgroundColor: color3}}><span className="main-directory-text">user3</span></div> </Link>
                    <Link to="/catalog" > <div id="wizards" style={{backgroundColor: color4}}><span className="main-directory-text">user4</span></div> </Link>
                </div>
            </div>
        );
    }
}

export default Home;