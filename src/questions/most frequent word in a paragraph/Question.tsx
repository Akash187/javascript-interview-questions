import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, from a given paragraph return the most frequent word.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List>
				<List.Item>Words in the paragraph are not case sensitive.</List.Item>
				<List.Item>The answer should be returned in lowercase.</List.Item>
				<List.Item>
					If the second argument is provided i.e. list of banned words then
					return the most frequent word that is not in the list of banned words.
				</List.Item>
			</List>
			<Title order={3}>Syntax</Title>
			<Code block>mostUsedWord(text, bannedWords);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>text (String)</Code>: The text where we need to perform the
					search.
				</List.Item>
				<List.Item>
					<Code>bannedWords? (Array)</Code>: The list of banned words. This is
					an optional argument.
				</List.Item>
			</List>
			<Title order={3}>Returns</Title>
			<List>
				<List.Item>
					<Code>String</Code>: Returns the most used word in lowercase.
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
