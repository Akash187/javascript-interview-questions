import { Code, List, Stack, Text, Title } from '@mantine/core'

const code1 = `
// Functionless
sort()

// Arrow function
sort((a, b) => { /* … */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* … */ })
`

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs to implement a function{' '}
				<Code>customSort</Code>
				that mimics the behaviour of <Code>Array.prototype.sort</Code> method.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>{code1}</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>compareFn (Optional)</Code>
					Specifies a function that defines the sort order. If omitted, the
					array elements are converted to strings, then sorted according to each
					character's Unicode code point value. It take 2 parameters{' '}
					<Code>a</Code> and <Code>b</Code>.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<Text>
					The reference to the original array, now sorted. Note that the array
					is sorted in place, and no copy is made.
				</Text>
			</List>
		</Stack>
	)
}
export default Question
