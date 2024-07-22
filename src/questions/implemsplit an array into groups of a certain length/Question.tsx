import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs to implement a function called{' '}
				<Code>chunk</Code> that splits the input array into groups of length
				size and returns them within a new array. If array can't be split
				evenly, the final chunk will be the remaining elements. The function
				should not modify the original input array.
			</Text>
			<Text>
				This method is similar to the <Code>_.chunk</Code> method provided by
				the popular library <Code>lodash</Code>.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>chunk(array, input);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>array (Array)</Code>: The array to process.
				</List.Item>
				<List.Item>
					<Code>[size=1] (number)</Code>: The length of each chunk.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					<Code>(Array)</Code>: Returns the new array of chunks.
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
