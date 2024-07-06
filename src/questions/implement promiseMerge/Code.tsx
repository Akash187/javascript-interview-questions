import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function promiseMerge(...promises) {
  return new Promise((resolve, reject) => {
      Promise.all(promises).then((values) => {

      if(values.length === 0){
        throw new TypeError('No Response')
      }

      const resType = typeof values[0]
    
      for(let value of values){
        if(typeof value !== resType){
          throw new TypeError('All response are not of same Type')
        }
      }

      let result = undefined;
      if (resType === "number"){
        if(!result) result = 0;
        for (let value of values) {
          result += value
        }
      }else if (resType === "string") {
        if (!result) result = '';
        for (let value of values) {
          result += value
        }
      }else if (resType === "boolean") {
        if (!result) result = true;
        for (let value of values) {
          result = result && value
        }
      }else if (resType === "object" && values[0] instanceof Array) {
        if (!result) result = [];
        for (let value of values) {
          result = [...result, ...value]
        }
      } else if (resType === "object" && values[0] instanceof Set) {
        throw new TypeError('Set is not valid type')
      } else if (resType === "object") {
        if (!result) result = {};
        for (let value of values) {
          result = {...result, ...value}
        }
      }

      resolve(result);
    }).catch(reject);
  });
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
