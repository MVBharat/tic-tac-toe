import React, { Component } from 'react';
import Square from './Square'

class Board extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			// value: null,
		};
	}
	renderSquare(i)	{
	 return <Square value={i} /> 
	}


	render(){
		const status = "Next Player: X"

		return(
			<div>
				<div className="status">{status}</div>
				<div className="board-now">
					{this.renderSquare(0)} 
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-now">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-now">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		)
	}


}

export default Board