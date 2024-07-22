import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
function sum(a, b){
  return a + b
}

const limitedSum = limit(sum, 3)
limitedSum(10, 20)
limitedSum(30, 40)
limitedSum(50, 60)
limitedSum(70, 80)

// => 30
// => 70
// => 110
// => 110 (Previous result when invoking more than n times)
`

const Solution = () => {
	return (
		<Stack>
			<Title order={3}>Input and Result</Title>
			<Code block>{INPUT_CODE}</Code>
			<Button
				style={{ alignSelf: 'flex-start' }}
				component="a"
				target="_blank"
				href="https://devtools.tech/questions/implement-a-function-that-accepts-a-callback-and-restricts-its-invocation-to-at-most-n-times-or-lodash-polyfills-or-frontend-problem-solving/submissions/qJKCXZVI8qzrCCWrBm5P"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
