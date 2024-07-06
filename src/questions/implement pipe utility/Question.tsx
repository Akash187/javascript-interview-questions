import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, the candidate needs to implement a utility called{' '}
				<Code>pipe</Code>
				that takes <Code>n</Code> functions as input and returns a function that
				can be invoked to compute the final result by invoking each input
				function and providing the previous functions' output as an argument.
			</Text>
			<Text>
				The users reported that this question was asked in the interview process
				of the companies like <Code>Razorpay</Code>.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>pipe(fn1, fn2, fn3, .... n)(input);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>A list of input functions to be executed</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					A function that can be invoked to compute the final value
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
