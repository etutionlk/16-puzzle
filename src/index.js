import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.css"

class Game extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const styles = {
            marginTop:'30px'
        }
        return (
            <div className="container">
                <div className="row" style={styles}>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label className="label">Select Level</label>
                        <select className="custom-select">
                            <option value="4">4 x 4 board</option>
                            <option value="5">5 x 5 board</option>
                            <option value="6">6 x 6 board</option>
                        </select>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label className="label">Progress</label>
                        <br/>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width:"10%"}}
                                 aria-valuetext="25"
                                 aria-valuemin="0" aria-valuemax="100">25%
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <label className="label">Moves:</label>
                        <br/>
                        <label className="badge badge-warning">0</label>
                    </div>
                </div>

                <div className="row" style={styles}>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <Board />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>

                </div>

            </div>
        );
    }
}

// export default Game;

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
