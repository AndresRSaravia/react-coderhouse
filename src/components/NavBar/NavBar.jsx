//import './NavBar.css'
/*export const NavBar = ({text = 'hola'}) => {
	return <div className="container">{text}</div>
};
*/

'use client'

import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, ChevronDownIcon} from '@chakra-ui/icons'
import { CartWidget } from '../CartWidget'

// Mock data
const MOCK_CAT = [
	{
		id: 0,
		label: "Categoría 0"
	},
	{
		id: 1,
		label: "Categoría 1"
	},
	{
		id: 2,
		label: "Categoría 2"
	}
]

export const NavBar = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<>
		<Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
			<Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
			<Box>Comercio Justiniano</Box>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					Categorías
				</MenuButton>
				<MenuList>
					{
						MOCK_CAT.map((category) => {
							return <MenuItem key={category.id}>{category.label}</MenuItem>
						})
					}
				</MenuList>
			</Menu>
				
			<Flex alignItems={'center'}>
				<CartWidget/>
				<Stack direction={'row'} spacing={7}>
				<Button onClick={toggleColorMode}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>
				<Menu>
					<MenuButton
					as={Button}
					rounded={'full'}
					variant={'link'}
					cursor={'pointer'}
					minW={0}>
					<Avatar
						size={'sm'}
						src={'https://avatars.dicebear.com/api/male/username.svg'}
					/>
					</MenuButton>
					<MenuList alignItems={'center'}>
					<br />
					<Center>
						<Avatar
						size={'2xl'}
						src={'https://avatars.dicebear.com/api/male/username.svg'}
						/>
					</Center>
					<br />
					<Center>
						<p>Username</p>
					</Center>
					<br />
					<MenuDivider />
					<MenuItem>Your Servers</MenuItem>
					<MenuItem>Account Settings</MenuItem>
					<MenuItem>Logout</MenuItem>
					</MenuList>
				</Menu>
				</Stack>
			</Flex>
			</Flex>
		</Box>
		</>
	)
}