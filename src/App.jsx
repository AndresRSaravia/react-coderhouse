import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
// text='sis'
function App() {
	//const [count, setCount] = useState(0)
	return (
		<>
		<ChakraProvider>
			<RouterProvider router={router}/>
			{/**/}
		</ChakraProvider>
		</>
	);
}

export default App
