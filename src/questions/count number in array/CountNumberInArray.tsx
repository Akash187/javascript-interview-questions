import { Button, Group, ScrollArea, Stack, Tabs, Title } from '@mantine/core'
import Solution from './Solution'
import { useState } from 'react'
import Question from './Question'
import Code from './Code'

const CountNumberInArray = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')
	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Title order={3}>Count Number In Array | MakeMyTrip</Title>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/write-a-function-to-return-the-count-of-numbers-in-an-array-or-makemytrip-frontend-interview-question---qid---cjzjsfJUP0zHb2lgPJVy"
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
export default CountNumberInArray
