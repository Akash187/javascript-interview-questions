import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function calculatePrizes(awards) {
  const map = new Map();

  for(let award of awards){
    const {name, category, team, year} = award
    const key = [category, year].toString()

    if(map.has(key)){
      let value = map.get(key)
      if (team in value){
        value[team].push(name)
      }else{
        value[team] = [name]
      }
      map.set(key, value)
    }else{
      const value = { [team] : [name]}
      map.set(key, value)
    }
  }

  const prizes = []

  for (const [key, value] of map.entries()){
    const [category, year] = key.split(',')
    const teamShare = 1 / Object.keys(value).length
    const newObj = {
      category,
      'year': parseInt(year)
    }

    const winners = []
    for(let team in value){
      const memberShare = Number((teamShare / value[team].length).toFixed(2))
      for(let player of value[team]){
        winners.push({
          name: player,
          share: memberShare
        })
      }
    }
    newObj['winners'] = winners
    prizes.push(newObj)
  }

  return prizes
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
