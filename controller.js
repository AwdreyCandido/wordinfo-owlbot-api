const Owlbot = require('owlbot-js')
const client = Owlbot('a3162979e7a9b7f5de0ce6bf8513a9f21b1eda79')

const getInfo = (req, resp)=>{

	client.define(req.query.palavra)
	.then((resultado)=>{

		const {definitions, word, pronunciation} = resultado

		const [wordInfo] = definitions
		const wordName = word
		const wordPronunciation = pronunciation

		const data = [wordInfo, wordName, wordPronunciation]
		return data

	})
	.then((dataWord)=>{


		const [wordInfo, wordName, wordPronunciation] = dataWord ;

		resp.status(200).render('base', {
			name: wordName,
			type: wordInfo.type,
			definition: wordInfo.definition,
			example: wordInfo.example,
			link: wordInfo.image_url,
			emoji: wordInfo.emoji,
			pronunciation: wordPronunciation,
		})

	})

}

module.exports = getInfo