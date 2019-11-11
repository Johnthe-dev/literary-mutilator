//shuffles words using Fisher–Yates-Durstenfeild shuffle
function shuffle(paragraph) {
	let wordsArray = paragraph.split(" ");
	for(let i = 0; i < wordsArray.length - 1; i++) {
		let j = i + Math.floor(Math.random() * (wordsArray.length - i));
		let temp = wordsArray[j];
		wordsArray[j] = wordsArray[i];
		wordsArray[i] = temp;
	}
	paragraph = wordsArray.join(" ");
	return paragraph;
}

//shuffles individual characters in each word
function anagram(paragraph) {
	let wordsArray = paragraph.split(" ");
	wordsArray.forEach(function(word, index, array) {
		let lastChar = "";
		let wordArray = word.split("");
		let letterNumber = /^[0-9a-z]+$/i;
		if(wordArray[wordArray.length - 1].match(letterNumber) === null) {
			lastChar = wordArray.pop();
		}
		for(let i = 0; i < wordArray.length - 1; i++) {
			let j = i + Math.floor(Math.random() * (wordArray.length - i));
			let temp = wordArray[j];
			wordArray[j] = wordArray[i];
			wordArray[i] = temp;
		}
		array[index] = wordArray.join("") + lastChar;
	});
	paragraph = wordsArray.join(" ");
	return paragraph
}

let ipsum = "I love cheese, especially pepper jack camembert de normandie. Squirty cheese bavarian bergkase pepper jack port-salut swiss the big cheese babybel rubber cheese. Squirty cheese monterey jack macaroni cheese cheese strings dolcelatte mozzarella blue castello pecorino. Cheesy grin stilton manchego pecorino monterey jack stilton bocconcini fromage frais. Cream cheese camembert de normandie cheese and wine pepper jack parmesan swiss melted cheese goat. Airedale taleggio ricotta squirty cheese bocconcini everyone loves.";
console.log(shuffle(ipsum));