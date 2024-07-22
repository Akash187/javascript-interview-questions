import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

chunk(['a', 'b', 'c']);
// => [[a], [b], [c]]

chunk([], 2)
// => []

chunk(["a", "b"], -2)
// => []

chunk()
// => []
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
				href="https://www.devtools.tech/questions/implement-a-function-to-split-an-array-into-groups-of-a-certain-length-or-chunk-or-javascript-interview-question-or-lodash-polyfills/submissions/rNuSiItQllrK8gyguFqJ"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
