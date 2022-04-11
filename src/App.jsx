import { useState } from 'react';
import './App.css';

function App() {
	const [score, setScore] = useState(76);
	const [wicket, setWicket] = useState(2);
	const [ball, setBall] = useState(50);

	const handleScore = val => {
		if (score > 100) {
			return;
		}
		setScore(score + val);
	};

	const handlewicket = () => {
		if (wicket >= 12 || score > 100) {
			return;
		}
		setWicket(wicket + 1);
	};

	const handleOver = () => {
		setBall(ball + 1);
	};
	return (
		<div className='App'>
			<h3>India:</h3>
			<div className='banner'>
				<div>
					Score:{' '}
					<h1 className='scoreCount'>
						{
							// show "score" here
							score
						}
					</h1>
				</div>
				<div>
					Wicket:{' '}
					<h1 className='wicketCount'>
						{
							// show wicket here
							wicket
						}
					</h1>
				</div>

				<div>
					Over:{' '}
					<h1 className='overCount'>{`${Math.floor(ball / 6)}.${ball % 6}`}</h1>
				</div>
			</div>

			<div className='addScore'>
				Add Score
				{/* these buttons should add the respective amount in the score */}
				<button className='addScore1' onClick={() => handleScore(1)}>
					Add 1
				</button>
				<button className='addScore4' onClick={() => handleScore(4)}>
					Add 4
				</button>
				<button className='addScore6' onClick={() => handleScore(6)}>
					Add 6
				</button>
			</div>

			<div className='addWicket'>
				Add Wicket
				{/* Increase the count of wicket */}
				<button onClick={handlewicket}>Add 1 wicket</button>
			</div>

			<div className='addBall'>
				Add ball
				{/* Increase the total number of balls thrown here. */}
				<button onClick={handleOver}>Add 1</button>
			</div>

			{/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
			<h1 className='status'>{score > 100 ? 'India Won' : ''}</h1>
		</div>
	);
}

export default App;
