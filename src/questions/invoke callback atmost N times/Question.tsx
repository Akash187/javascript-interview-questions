import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, you need to create a function that accepts a{' '}
				<Code>callback</Code> restricts its invocation to the provided{' '}
				<Code>n</Code> times. It is similar to the <Code>_.before</Code> method
				provided by the <Code>Lodash</Code>
				library.
			</Text>
			<Text>
				Calls to the function after the limit should return the value of the
				last invocation. The <Code>callback</Code> is invoked with the{' '}
				<Code>this</Code> binding and arguments of the created function.
			</Text>
			<Title order={3}>Syntax</Title>
			<Code block>limit(callback, n);</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>callback (Function)</Code>: The function to restrict.
				</List.Item>
				<List.Item>
					<Code>n (number)</Code>: The number of calls at which callback is no
					longer invoked.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					<Code>(Fuction)</Code>: Returns the new restricted function.
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
