import React, { Componenet } from 'react';
import Board from './Board'
import './App.css';

class Game extends React.Component{

	render(){
		return(
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div> {} </div>
					<ol> {} </ol>
				</div>
			</div>
		);
	}
}

export default Game;
