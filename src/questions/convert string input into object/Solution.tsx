import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
stringToObject('a.b.c', 1);
// { a: { b: { c: 1 } } }

stringToObject('', 1);
// throw a TypeError

stringToObject('a."b.c"."d.e"', 2);
// consider "b.c" and "d.e" as individual keys
// output => { a: { 'b.c': { 'd.e': 2 } } }

stringToObject('a."b.c".d.e', 2);
// output => { a: { 'b.c': { d: {e: 2} } } }

stringToObject('users.0.name', 'devtools tech')
// { users: [{ name: 'devtools tech' }] }

stringToObject('department.teams.1.members.2', 'Virat')
// { department: { teams: [ , { members: [ , , 'Virat'] } ] } }
`

const Solution = () => {
	return (
		<Stack>
			<Title order={3}>Input and Result</Title>
			<Code block>{INPUT_CODE}</Code>
			<Button
				style={{ alignSelf: 'flex-start' }}
				component="a"
				target="_blank"
				href="https://devtools.tech/questions/how-to-implement-a-function-to-convert-a-string-input-into-an-object-or-razorpay-interview-question-or-javascript/submissions/OkqSOlm7wO14qULDZjcV"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
