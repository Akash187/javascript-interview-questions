import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'
import Root from './Root'
import Home from './Home'
const ImplementCreditCardMasker = lazy(
	() =>
		import(
			'./questions/implement a credit card masker/ImplementCreditCardMasker'
		)
)

const AppRouters = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>Ooops something went wrong, Try Refreshing Page</div>,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: '/implement-a-credit-card-masker',
				element: <ImplementCreditCardMasker />
			}
		]
	}
])

export default AppRouters
