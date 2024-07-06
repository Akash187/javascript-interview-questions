import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs write a function called{' '}
				<Code>deepEqual</Code> that checks deep equality between two JavaScript
				objects. It should perform a deep comparison between two objects to
				determine if they are equivalent.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>deepEqual(value, other);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>value (Object):</Code> The value to compare.
				</List.Item>
				<List.Item>
					<Code>other (Object):</Code> The other value to compare.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					<Code>boolean</Code>: Returns <Code>true</Code> if the values are
					equivalent, else <Code>false</Code>.
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
