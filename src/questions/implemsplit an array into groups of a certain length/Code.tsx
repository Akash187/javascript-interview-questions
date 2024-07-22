import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function chunk(array, size=1) {

  if (!Array.isArray(array) || size <= 0){
    return []
  }

  const chuckArr = []
  let i = 0
  while (i < array.length){
    chuckArr.push(array.slice(i, Math.min(i + size, array.length)))
    i += size
  }

  return chuckArr
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
