import React from 'react';
import memesData from '../memesData';

function Meme() {
	// const [memeImg, setMemeImg] = React.useState('http://i.imgflip.com/1bij.jpg');
	const [formData, setFormData] = React.useState({
		textOne: '',
		textTwo: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});
	console.log(formData);
	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevText) => ({
			...prevText,
			[name]: value,
		}));
	}

	const [allMemesImg, setAllMemesImg] = React.useState(memesData);

	function randImg() {
		const memeArray = allMemesImg.data.memes;
		const randNum = Math.floor(Math.random() * memeArray.length);
		const imgUrl = memeArray[randNum].url;
		setFormData((prevMeme) => ({
			...prevMeme,
			randomImage: imgUrl,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					className="form--input"
					type="text"
					placeholder="text top"
					name="textOne"
					value={formData.textOne}
					onChange={handleChange}
				/>
				<input
					className="form--input"
					type="text"
					placeholder="text bottom"
					name="textTwo"
					value={formData.textTwo}
					onChange={handleChange}
				/>
				<button onClick={randImg} className="form--btn">
					Get a new image
				</button>
				<div className="meme">
					<img src={formData.randomImage} className="meme-img" />
					<h2 className="meme-text--top">{formData.textOne}</h2>
					<h2 className="meme-text--bottom">{formData.textTwo}</h2>
				</div>
			</div>
		</main>
	);
}

export default Meme;
