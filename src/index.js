import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./Board";

class Game extends Component {
    render() {
        return (
            <div>
                <Board />
            </div>
        );
    }
}

// export default Game;

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
