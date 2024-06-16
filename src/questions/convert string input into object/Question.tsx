import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs to implement a function that takes
				a string and final value as inputs. It returns a new object created
				based on it.
			</Text>
			<Text>
				Many users have reported that this question was asked in the frontend
				interview process of companies like Razorpay.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>stringToObject(input, finalValue);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>input (String)</Code>: : The object path from which we need to
					create an object.
				</List.Item>
				<List.Item>
					<Code>finalValue (any)</Code>: The final leaf node value.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>a newly created object.</List.Item>
			</List>
		</Stack>
	)
}
export default Question
