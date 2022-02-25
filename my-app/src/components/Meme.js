import React from 'react';
import memesData from '../memesData';

function Meme() {
	function randImg() {
		const memeArray = memesData.data.memes;
		const randNum = Math.floor(Math.random() * memeArray.length);
		const imgUrl = memeArray[randNum].url;
		return imgUrl;
	}

	return (
		<main>
			<div className="form">
				<input className="form--input" type="text" placeholder="text top" />
				<input className="form--input" type="text" placeholder="text bottom" />
				<button onClick={randImg} className="form--btn">
					Get a new image
				</button>
			</div>
		</main>
	);
}

export default Meme;
