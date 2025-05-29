import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";
import { Counter } from "../Counter/Counter";

'use client'

import {
	Box,
	chakra,
	Container,
	Stack,
	Text,
	Image,
	Flex,
	VStack,
	Heading,
	SimpleGrid,
	StackDivider,
	useColorModeValue,
	List,
	ListItem,
} from '@chakra-ui/react'

export const ItemDetailContainer = ({product}) => {
	return (
		<Container maxW={'7xl'}>
		<SimpleGrid
			columns={{ base: 1, lg: 2 }}
			spacing={{ base: 8, md: 10 }}
			py={{ base: 18, md: 24 }}>
			<Flex>
			<Image
				rounded={'md'}
				alt={'product image'}
				src={product.images[0]}
				fit={'cover'}
				align={'center'}
				w={'100%'}
				h={{ base: '100%', sm: '400px', lg: '500px' }}
			/>
			</Flex>
			<Stack spacing={{ base: 6, md: 10 }}>
			<Box as={'header'}>
				<Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
				{product.title}
				</Heading>
				<Text
				color={useColorModeValue('gray.900', 'gray.400')}
				fontWeight={300}
				fontSize={'2xl'}>
				${product.price} USD
				</Text>
			</Box>
			<Stack
				spacing={{ base: 4, sm: 6 }}
				direction={'column'}
				divider={
				<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
				}>
				<VStack spacing={{ base: 4, sm: 6 }}>
				<Text fontSize={'lg'}>
					{product.description}
				</Text>
				</VStack>
				<Box>
				<Text
					fontSize={{ base: '16px', lg: '18px' }}
					color={useColorModeValue('yellow.500', 'yellow.300')}
					fontWeight={'500'}
					textTransform={'uppercase'}
					mb={'4'}>
					Detalles del producto
				</Text>
				<List spacing={2}>
					<ListItem>
					<Text as={'span'} fontWeight={'bold'}>
						Espesor:
					</Text>{' '}
					{product.dimensions.depth}
					</ListItem>
					<ListItem>
					<Text as={'span'} fontWeight={'bold'}>
						Alto:
					</Text>{' '}
					{product.dimensions.height}
					</ListItem>
					<ListItem>
					<Text as={'span'} fontWeight={'bold'}>
						Ancho:
					</Text>{' '}
					{product.dimensions.width}
					</ListItem>
				</List>
				</Box>
			</Stack>
			<Counter product={product}/>
			</Stack>
		</SimpleGrid>
		</Container>
	)
















	return (
		!item ? (
			<Box width="100vw" display={"flex"} maxW={"100vw"}>
				return <div key={item.id}>{item.id}</div>
			</Box>
		) :
		(
			<Alert status="info">
				<AlertIcon />
				<AlertTitle>Producto no encontrado</AlertTitle>
				<AlertDescription>El producto no está disponible o es inexistente.</AlertDescription>
			</Alert>
		)
	)
};
