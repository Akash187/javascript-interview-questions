import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function mostUsedWord(text, bannedWords = []) {
  const bannedWordsSet = new Set(bannedWords)
  const wordCount = new Map()
  // generate array of words with only english alphabet
  // String prototype match method is interesting
  const words = text.toLowerCase().match(/\\w+/g)

  for(let word of words){
    if(!bannedWordsSet.has(word)){
      wordCount.set(word, (wordCount.get(word) || 0) + 1)
    }
  }
  
  let maxFrequency = 0
  let maxFrequencyWord = ''
  for(let [key, value] of wordCount){
    if (value > maxFrequency){
      maxFrequency = value
      maxFrequencyWord = key
    }
  }

  return maxFrequencyWord
}
`

const Code = () => {
	const jsIcon = <IconBrandJavascript size={18} />
	return (
		<CodeHighlightTabs
			code={[
				{
					fileName: 'index.js',
					code: jsCode,
					language: 'js',
					icon: jsIcon
				}
			]}
		/>
	)
}
export default Code
