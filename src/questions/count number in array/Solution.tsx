import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
countNumbers([ 1,"2", [3,4,[5]], function(){}, 8, 9 ]);
// 6

countNumbers([]);
// 0

countNumbers(["hello", ["world"], [true, false]])
// 0

countNumbers([1, [2, 3], [], [4, []], [5, 6]])
// 6

countNumbers([1, ["hello", 2], [true, 3], [4, false]])
// 4
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
				href="https://devtools.tech/questions/write-a-function-to-return-the-count-of-numbers-in-an-array-or-makemytrip-frontend-interview-question/submissions/NexTAeqVZ02YjkgyXYQz"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
