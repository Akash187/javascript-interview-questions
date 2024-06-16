import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question the candidate needs to implement a function that takes
				a credit card number and returns the masked version.
			</Text>
			<Text>
				Many users have reported that this question was asked in the frontend
				interview process of global companies like <b>Klarna</b>.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List>
				<List.Item>
					It should replace all but the 1st and last 4 digits in the provided
					sequence.
				</List.Item>
				<List.Item>Should not mask input shorter than 6 characters.</List.Item>
				<List.Item>Should not mask non-numeric characters.</List.Item>
				<List.Item>
					Should return empty string for all other input types apart from string
					and number.
				</List.Item>
			</List>
			<Title order={3}>Syntax</Title>
			<Code block>maskify(cardNumber);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>cardNumber (string | number)</Code>: The credit card number
					provided by the user.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					The masked version of the card number as a string.
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
