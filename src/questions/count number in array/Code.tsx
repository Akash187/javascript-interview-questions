import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function countNumbers(collection) {
  if(!Array.isArray(collection)){
    return 0
  }

  let count = 0
  for(let item of collection){
    if(typeof item === 'number'){
      count += 1
    }
    if (Array.isArray(item)){
      count += countNumbers(item)
    }
  }
  
  return count
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
