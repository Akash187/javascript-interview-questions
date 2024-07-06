import { Code, List, Stack, Text, Title } from '@mantine/core'

const code1 = `collection: {Array | Object}`
const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				Camel case is a naming convention where words are combined without
				spaces, and each word's first letter is capitalized except the first
				word. e.g., <Code>topInterviewQuestion</Code>.
			</Text>
			<Text>
				In this question, the candidate needs to implement a function called{' '}
				<Code>camelCaseKeys</Code> that takes an object as the input parameter
				and returns a new object with all its keys converted to camel case.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>camelCaseKeys(collection);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>{code1}</Code>: The collection that we need to iterate over and
					convert keys to camel case.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>A new object with all camel-cased keys.</List.Item>
			</List>
		</Stack>
	)
}
export default Question
