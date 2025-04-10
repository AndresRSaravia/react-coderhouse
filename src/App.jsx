import React from 'react'
//import { useState } from 'react'
//import './App.css'
import {
	NavBar,
	ItemListContainer,
	CartWidget
} from './components'
import { ChakraProvider } from '@chakra-ui/react'
// text='sis'
function App() {
	//const [count, setCount] = useState(0)
	return (
		<>
		<ChakraProvider>
		<NavBar/>
		<ItemListContainer greeting='¡Bienvenido a Comercio Justiniano!' />
		</ChakraProvider>
		</>
	);
}

export default App
