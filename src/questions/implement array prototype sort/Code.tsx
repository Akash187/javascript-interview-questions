import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function customSort(compareFn) {
  // DO NOT REMOVE
  'use strict';

  if(!compareFn){
    compareFn = (a, b) => {
      a = String(a)
      b = String(b)
      return 1 ? a > b : 0 
    }
  }

  //Bubble Sort
  for(let i = 0; i < this.length; i++){
    for(let j = i + 1; j < this.length; j++){
      if(compareFn(this[i], this[j]) > 0){
        const temp = this[j]
        this[j] = this[i]
        this[i] = temp
      }
    }
  }
  return this
}

Array.prototype.customSort = customSort;
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
