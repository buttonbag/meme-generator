import React from 'react';
// import memesData from '../memesData';

function Meme() {
	const [formData, setFormData] = React.useState({
		textOne: '',
		textTwo: '',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	// console.log(formData);

	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((prevText) => ({
			...prevText,
			[name]: value,
		}));
	}

	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(function () {
		fetch('https://api.imgflip.com/get_memes')
			.then((res) => res.json())
			.then((data) => setAllMemes(data.data.memes));
	}, []);

	function randImg() {
		const randNum = Math.floor(Math.random() * allMemes.length);
		const imgUrl = allMemes[randNum].url;
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
