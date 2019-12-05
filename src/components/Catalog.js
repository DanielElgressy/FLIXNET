import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// import '../styles/Landing.css'

class Catalog extends Component {

    changeRentStatus = (event) => {
        const movieId = Number(event.target.getAttribute('name'))
        this.props.changeRentStatus(movieId)
    }


    render() {
        const data = this.props.state.data

        return (
            <div>
                <h2 id="catalog-title">search for a movie</h2>
                <div id="budget">budget</div>


                <div id="catalog-container">
                    <input type="text"></input>
                    <button>Search</button>
                </div>

                <div id="movies-list">
                    {data.filter(f => !f.isRented).map((m, i) => {

                        return (
                            <div className="movie" key={i}>
                                <span>{m.title}</span>
                                <div className="rent" name={m.id} onClick={this.changeRentStatus}>{m.isRented ? "-" : "+"}</div>
                            </div>
                        )

                    })
                    }
                    <hr></hr>
                </div>


                <div>
                    {data.find(m => m.isRented) ?

                        <div>
                            <h4>Rented Movies</h4>
                            {data.filter(f => f.isRented).map((m, i) => {

                                return (
                                    <div className="rentedMovie" key={i}>
                                        <span>{m.title}</span>
                                        <div id="rent" name={m.id} onClick={this.changeRentStatus}>{m.isRented ? "-" : "+"}</div>
                                    </div>
                                )

                            })}

                        </div>
                        : null}
                </div>


            </div>
        );
    }
}

export default Catalog;


