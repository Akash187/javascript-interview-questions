import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				You are tasked with implementing a function{' '}
				<Code>calculatePrizes(awards)</Code> that determines how much prize
				money each winner receives based on the government’s award allocation
				system.
			</Text>
			<Title order={3}>Requirements</Title>
			<List type="ordered">
				<List.Item>
					Award Allocation:
					<List withPadding listStyleType="disc">
						<List.Item>
							Every year, the government allocates a total of 1 rupee per
							category for awards.
						</List.Item>
						<List.Item>
							The 1 rupee allocated to a category is split equally among the
							participating teams within that category for that year.
						</List.Item>
						<List.Item>
							Each team further divides its allocated share equally among its
							team members (the winners).
						</List.Item>
					</List>
				</List.Item>
				<List.Item>
					Final Output:
					<List withPadding listStyleType="disc">
						<List.Item>
							You need to return an array of objects where each object
							represents a category in a given year and the corresponding
							winners with their prize shares.
						</List.Item>
					</List>
				</List.Item>
			</List>
			<Title order={3}>Syntax</Title>
			<Code block>function calculatePrizes(awards)</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>awards</Code> (Array): An array of objects, where each object
					represents a winner's award. Each object contains the following keys:
					<List>
						<List.Item>
							<Code>name</Code>: The name of the winner.
						</List.Item>
						<List.Item>
							<Code>category</Code>: The category of the award (e.g., "javelin",
							"Shooting").
						</List.Item>
						<List.Item>
							<Code>team</Code>: The team the winner is part of.
						</List.Item>
						<List.Item>
							<Code>year</Code>: The year in which the award was won.
						</List.Item>
					</List>
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					<Code>(Arrays)</Code> The function should return an array of objects,
					where each object contains:
					<List>
						<List.Item>
							<Code>category</Code>: The category of the award.
						</List.Item>
						<List.Item>
							<Code>year</Code>: The year of the award.
						</List.Item>
						<List.Item>
							<Code>winners</Code>: An array of objects, where each object
							represents a winner and includes:
							<List>
								<List.Item>
									<Code>name</Code>: The name of the winner.
								</List.Item>
								<List.Item>
									<Code>share</Code>: The amount of prize money the winner
									receives.
								</List.Item>
							</List>
						</List.Item>
					</List>
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
