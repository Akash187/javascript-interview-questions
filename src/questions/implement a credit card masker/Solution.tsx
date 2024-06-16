import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
maskify('5512103073210694');
// 5###########0694

maskify('4556-3646-0793-5616')
// 4###-####-####-5616

maskify('');
// ''

maskify('Devtools Tech');
// Devtools Tech

maskify('S2k3i4p65p7y');
// S#k#i#p#5p7y
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
				href="https://www.devtools.tech/questions/implement-a-credit-card-masker-or-klarna-frontend-interview-question-or-javascript/submissions/9q0lcYPHHJr6Z1ON299i?utm_source=social-share"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
