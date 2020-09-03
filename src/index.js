import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from "./Board";
import "bootstrap/dist/css/bootstrap.css"

class Game extends Component {
    constructor(props) {
        super(props);

        let board = new Array(16);
        for (let i = 0; i < board.length; ++i) board[i] = i;

        const coordinates = [
            {x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:3},
            {x:1,y:0},{x:1,y:1},{x:1,y:2},{x:1,y:3},
            {x:2,y:0},{x:2,y:1},{x:2,y:2},{x:2,y:3},
            {x:3,y:0},{x:3,y:1},{x:3,y:2},{x:3,y:3}]
        this.state = {
            selectValue: 4,
            moves:0,
            coordinates:coordinates,
            board:this.shuffle(board),
            progress:"50%"
        };
        this.selectLevel = this.selectLevel.bind(this);
    }

    shuffle(o) {
        const temp = o.slice();
        for(var j, x, i = temp.length; i; j = Math.floor(Math.random() * i), x = temp[--i], temp[i] = temp[j], temp[j] = x);
        return temp;
    }

    selectLevel(e) {
        this.setState({
            selectValue: e.target.value,
            moves:0,
            progress:"50%"
        });
        console.log("ddsds",e.target.value)
    }

    clickHandler(i,value,coord) {
        const clickedValue = value
        const index = i
        const coordinates = coord
    console.log(coord)
        let UP = null
        let DOWN = null
        let LEFT = null
        let RIGHT = null
        if (clickedValue !== 0) {

        }
    }

    render() {
        const styles = {
            marginTop:'30px'
        }
        return (
            <div className="container">
                {/*<div className="row" style={styles}>*/}
                {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                {/*        <label className="label">Select Level</label>*/}
                {/*        <select name="level" className="custom-select" onChange={this.selectLevel}>*/}
                {/*            <option value="4">4 x 4 board</option>*/}
                {/*            <option value="5">5 x 5 board</option>*/}
                {/*            <option value="6">6 x 6 board</option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                {/*        <label className="label">Progress</label>*/}
                {/*        <br/>*/}
                {/*        <div className="progress">*/}
                {/*            <div className="progress-bar" role="progressbar" style={{width:this.state.progress}}*/}
                {/*                 aria-valuetext="25"*/}
                {/*                 aria-valuemin="0" aria-valuemax="100">{this.state.progress}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="col-lg-4 col-md-4 col-sm-4">*/}
                {/*        <label className="label">Moves:</label>*/}
                {/*        <br/>*/}
                {/*        <label className="badge badge-warning">{this.state.moves}</label>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="row" style={styles}>
                    <div className="col-lg-3 col-md-3 col-sm-3"></div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <Board onClick={(i,val,coord)=> this.clickHandler(i,val,coord)} state={this.state}/>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3"></div>

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
