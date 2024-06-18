import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
function isNumeric(val) {
  return /^\\d+$/.test(val)
}

function maskify(cardNumber) {
  if (typeof cardNumber !== 'string' && typeof cardNumber !== 'number') {
    return ''
  }

  cardNumber = cardNumber.toString()
  const n = cardNumber.length

  if (n <= 6) {
    return cardNumber
  }

  let maskedNumber = ''

  for (let i = 0; i < n; i++) {
    if (i > 0 && i < n - 4 && isNumeric(cardNumber[i])) {
      maskedNumber += '#'
    } else {
      maskedNumber += cardNumber[i]
    }
  }
  return maskedNumber
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
