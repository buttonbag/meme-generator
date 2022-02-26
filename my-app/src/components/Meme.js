import React from 'react';
import memesData from '../memesData';

function Meme() {
	const [memeImg, setMemeImg] = React.useState('');

	function randImg() {
		const memeArray = memesData.data.memes;
		const randNum = Math.floor(Math.random() * memeArray.length);
		const imgUrl = memeArray[randNum].url;
		setMemeImg(imgUrl);
	}

	return (
		<main>
			<div className="form">
				<input className="form--input" type="text" placeholder="text top" />
				<input className="form--input" type="text" placeholder="text bottom" />
				<button onClick={randImg} className="form--btn">
					Get a new image
				</button>
				<img src={memeImg} className="meme-img" />
			</div>
		</main>
	);
}

export default Meme;
