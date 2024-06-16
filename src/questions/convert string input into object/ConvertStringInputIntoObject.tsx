import { Button, Group, ScrollArea, Stack, Tabs, Title } from '@mantine/core'
import Solution from './Solution'
import { useState } from 'react'
import Question from './Question'
import Code from './Code'

const ConvertStringInputIntoObject = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')
	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Title order={3}>Convert String Input Into Object | Razorpay</Title>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/how-to-implement-a-function-to-convert-a-string-input-into-an-object-or-razorpay-interview-question-or-javascript---qid---DHZWLUCg446H72ydrXED"
					target="_blank"
				>
					Original Question Link
				</Button>
			</Group>
			<Tabs value={activeTab} onChange={setActiveTab}>
				<Tabs.List>
					<Tabs.Tab value="question">Question</Tabs.Tab>
					<Tabs.Tab value="solution">Solution</Tabs.Tab>
					<Tabs.Tab value="code">Code</Tabs.Tab>
				</Tabs.List>

				<ScrollArea>
					<Tabs.Panel py="md" value="question">
						<Question />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="solution">
						<Solution />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="code">
						<Code />
					</Tabs.Panel>
				</ScrollArea>
			</Tabs>
		</Stack>
	)
}
export default ConvertStringInputIntoObject
