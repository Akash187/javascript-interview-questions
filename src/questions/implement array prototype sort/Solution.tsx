import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log(numbers);
// expected output: Array [1, 100000, 21, 30, 4]
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
				href="https://www.devtools.tech/questions/how-to-implement-arrayprototypesort-javascript-interview-question-or-problem-solving-or-javascript-polyfills/submissions/n5cFK3XCNV7nZdu4O0sZ"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
