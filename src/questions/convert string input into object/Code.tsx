import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
//More efficient and fast than replaceAll solutions
function genKeyArray(input){
  let keys = []
  let key = ''
  // subKey here is - "a.c" or "d.e"
  let isSubKey = false
  for (let i = 0; i < input.length; i++) {
    const curr = input[i]
    if (curr === '.' && !isSubKey && key) {
      keys.push(key)
      key = ''
    } else if (curr === '"' && isSubKey && key) {
      keys.push(key)
      key = ''
      isSubKey = false
    } else if (curr === '"' && !isSubKey) {
      isSubKey = true
    } else if (curr === '.' && !key) {
      continue
    } else {
      key += curr
    }
  }
  //Add the last key
  if (key) {
    keys.push(key)
  }
  return keys
}

function stringToObject(input, finalValue) {
  const keys = genKeyArray(input)

  if(keys.length === 0){
    throw new TypeError('Key is not supplied')
  }

  //This is a bottom-up backtracking approach
  const genObject = (keys, value) => {
    //Return if key is empty
    if(keys.length === 0){
      return value
    }
    const currKey = keys.pop()
    let newValue;
    //check if key is number
    if(!isNaN(currKey)){
      newValue = []
      newValue[currKey] = value
    }else{
      newValue = {[currKey] : value}
    }

    return genObject(keys, newValue);
  }

  return genObject(keys, finalValue)
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
