import {
	AppShell,
	Burger,
	Center,
	Group,
	Loader,
	NavLink,
	ScrollArea,
	Stack,
	Title,
	Tooltip
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import logo from './assets/javascript.svg'
import { ActionIcon } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Suspense } from 'react'

export default function Root() {
	const [opened, { toggle, close }] = useDisclosure()
	const location = useLocation()

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
			padding="md"
		>
			<AppShell.Header>
				<Group h="100%" px="md" justify="space-between">
					<Group gap="xs">
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>
						<Link to={'/'}>
							<Group gap="xs">
								<img height={36} src={logo} alt="Javascript Logo" />
								<Title order={5}>Interview Questions</Title>
							</Group>
						</Link>
					</Group>
					<Tooltip label="Github Repository">
						<ActionIcon
							component="a"
							href="https://github.com/Akash187/javascript-interview-questions"
							target="_blank"
							variant="default"
							color="gray"
							size="lg"
							aria-label="Settings"
						>
							<IconBrandGithub
								style={{ width: '70%', height: '70%' }}
								stroke={1.5}
							/>
						</ActionIcon>
					</Tooltip>
				</Group>
			</AppShell.Header>
			<AppShell.Navbar>
				<ScrollArea p="xs">
					<NavLink
						label="1. Implement a Credit Card Masker | Klarna"
						component={Link}
						to="/implement-a-credit-card-masker"
						active={location.pathname === '/implement-a-credit-card-masker'}
						onClick={close}
					/>
					<NavLink
						label="2. Count Number In Array | MakeMyTrip"
						component={Link}
						to="/count-number-in-array"
						active={location.pathname === '/count-number-in-array'}
						onClick={close}
					/>
					<NavLink
						label="3. Convert String Input Into Object | Razorpay"
						component={Link}
						to="/convert-string-input-into-object"
						active={location.pathname === '/convert-string-input-into-object'}
						onClick={close}
					/>
				</ScrollArea>
			</AppShell.Navbar>
			<AppShell.Main>
				<Suspense
					fallback={
						<Center h={'calc(100vh - 120px)'}>
							<Stack gap={0} align="center">
								<Loader type="dots" size={50} />
								<Title order={3}>Loading</Title>
							</Stack>
						</Center>
					}
				>
					<Outlet />
				</Suspense>
			</AppShell.Main>
		</AppShell>
	)
}
