import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs to implement a function that
				returns the count of numbers in a provided array.
			</Text>
			<Text>
				The array might contain other data types and nested arrays too.
			</Text>
			<Text>
				Many users have reported that this question was asked in the frontend
				interview process of companies like <b>MakeMyTrip</b>.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>countNumbers(collection);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>collection (Array)</Code>: The input array.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>The total count of numbers inside the array.</List.Item>
			</List>
		</Stack>
	)
}
export default Question
