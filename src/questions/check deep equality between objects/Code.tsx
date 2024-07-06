import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function deepEqual(value, other) {
  'use strict';
  if (value === null || other === null){
    return value === other
  }
  if (typeof value !== 'object' || typeof other != 'object'){
    return value === other
  }else{
    for(let key in value){
      if(!deepEqual(value[key], other[key])) return false;
    }
  }

  return true;
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
