import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				You have to implement a function called <Code>promiseMerge</Code> that
				can take n no. of promises as input.
			</Text>
			<Text>It should return a promise that fulfils with</Text>
			<List>
				<List.Item>
					summation of all resulting values if the type of all inputs is number.
				</List.Item>
				<List.Item>
					concatted value if the type of all inputs is string.
				</List.Item>
				<List.Item>
					computed value using <Code>AND</Code> operator if the type of all
					input is boolean.
				</List.Item>
				<List.Item>
					a new concatted array if the type of all inputs is array.
				</List.Item>
				<List.Item>
					a new object with all the keys from inputs if the typeof all inputs is
					object.
				</List.Item>
			</List>
			<Text>
				It should reject with an TypeError if either of the inputs is different
				from other inputs types.
			</Text>
			<Title order={3}>Assumptions</Title>
			<List>
				<List.Item>
					Valid input types are: <Code>Number</Code>, <Code>String</Code>,{' '}
					<Code>Boolean</Code>, <Code>Array</Code>, and <Code>Object</Code>.
				</List.Item>
			</List>
			<Title order={3}>Syntax</Title>
			<Code block>promiseMerge(p1, p2, ..., n);</Code>
		</Stack>
	)
}
export default Question
