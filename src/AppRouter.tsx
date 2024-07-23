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
const CountNumberInArray = lazy(
	() => import('./questions/count number in array/CountNumberInArray')
)
const ConvertStringInputIntoObject = lazy(
	() =>
		import(
			'./questions/convert string input into object/ConvertStringInputIntoObject'
		)
)
const FeatureFlagFunctionality = lazy(
	() =>
		import('./questions/feature flag functionality/FeatureFlagFunctionality')
)
const MostFrequentWordInParagraph = lazy(
	() =>
		import(
			'./questions/most frequent word in a paragraph/MostFrequentWordInParagraph'
		)
)
const ImplementPipeUtility = lazy(
	() => import('./questions/implement pipe utility/ImplementPipeUtility')
)
const DeepEqualityBetweenObjects = lazy(
	() =>
		import(
			'./questions/check deep equality between objects/DeepEqualityBetweenObjects'
		)
)
const ImplementPromiseMerge = lazy(
	() => import('./questions/implement promiseMerge/ImplementPromiseMerge')
)
const ConvertAllObjectKeysToCamelCase = lazy(
	() =>
		import(
			'./questions/convert all object keys to camel case/ConvertAllObjectKeysToCamelCase'
		)
)
const SplitArrayIntoNChunks = lazy(
	() =>
		import(
			'./questions/split an array into groups of a certain length/SplitArrayIntoNChunks'
		)
)
const InvokeCallbackAtmostNTimes = lazy(
	() =>
		import(
			'./questions/invoke callback atmost N times/InvokeCallbackAtmostNTimes'
		)
)
const ImplementArrayPrototypeSort = lazy(
	() =>
		import(
			'./questions/implement array prototype sort/ImplementArrayPrototypeSort'
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
			},
			{
				path: '/count-number-in-array',
				element: <CountNumberInArray />
			},
			{
				path: '/convert-string-input-into-object',
				element: <ConvertStringInputIntoObject />
			},
			{
				path: '/feature-flag-functionality',
				element: <FeatureFlagFunctionality />
			},
			{
				path: '/most-frequent-word-in-a-paragraph',
				element: <MostFrequentWordInParagraph />
			},
			{
				path: '/implement-pipe-utility',
				element: <ImplementPipeUtility />
			},
			{
				path: '/check-deep-equality-between-objects',
				element: <DeepEqualityBetweenObjects />
			},
			{
				path: '/implement-promisemerge',
				element: <ImplementPromiseMerge />
			},
			{
				path: '/convert-all-object-keys-to-camel-case',
				element: <ConvertAllObjectKeysToCamelCase />
			},
			{
				path: '/split-an-array-into-groups-of-a-certain-length',
				element: <SplitArrayIntoNChunks />
			},
			{
				path: '/invoke-callback-atmost-N-times',
				element: <InvokeCallbackAtmostNTimes />
			},
			{
				path: '/implement-array-prototype-sort',
				element: <ImplementArrayPrototypeSort />
			}
		]
	}
])

export default AppRouters
