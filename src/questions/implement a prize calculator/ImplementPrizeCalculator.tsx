import {
	Badge,
	Button,
	Group,
	ScrollArea,
	Stack,
	Tabs,
	Title
} from '@mantine/core'
import Solution from './Solution'
import { useState } from 'react'
import Question from './Question'
import Code from './Code'

const ImplementArrayPrototypeSort = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')
	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Stack gap="xs">
					<Title order={3}>Implement a prize calculator</Title>
					<Group>
						<Badge color="orange" size="md">
							Intermediate
						</Badge>
						<Badge color="teal" size="md">
							Map
						</Badge>
						<Badge color="teal" size="md">
							Array
						</Badge>
						<Badge color="teal" size="md">
							Object
						</Badge>
					</Group>
				</Stack>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/how-to-implement-a-prize-calculator-javascript-interview-question---qid---0rDhVLnqTFqzycgfAGPq"
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
export default ImplementArrayPrototypeSort
