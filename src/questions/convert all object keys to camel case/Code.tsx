import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function isAlphabet(char) {
  return /^[a-zA-Z]+$/.test(char);
}

function isNum(char) {
  return /^[0-9]+$/.test(char);
}

function generateCamelCaseKey(key){
  let isNextUpperCase = false
  let newKey = ''
  for (let i = 0; i < key.length; i++) {
    if(isNum(key[i])){
      newKey += key[i]
      isNextUpperCase = true
    }else if (!isAlphabet(key[i])) {
      isNextUpperCase = true
    } else {
      if (isNextUpperCase) {
        newKey += key[i].toUpperCase()
      } else {
        newKey += key[i]
      }
      isNextUpperCase = false
    }
  }
  return newKey
}

function camelCaseKeys(collection) {
  'use strict';
  if(!collection){
    return collection
  }

  if(typeof collection !== 'object'){
    return collection
  }else if(Array.isArray(collection)){
    let newArr = []
    for(let item of collection){
      newArr.push(camelCaseKeys(item))
    }
    return newArr
  } else{
    let newObj = {}
    for(let key in collection){
      const newKey = generateCamelCaseKey(key)
      newObj[newKey] = camelCaseKeys(collection[key])
    }
    return newObj
  }
};
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
