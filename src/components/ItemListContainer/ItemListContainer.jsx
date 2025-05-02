import { Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Text } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({products}) => {
	//JSON.stringify(products,null,2)
	return (
		products.length !== 0 ? (
			<Flex
				fontSize={14}
				flexWrap={"wrap"}
				flexDirection={"column"}
			>
				{products.map((product) => {
					return (
						<ProductCard key={product.id} product={product}/>
						//<Flex key={product.id} justifyContent={"center"}>
						//	<Text>Título: {product.title}</Text>
						//	<Text>Descripción: {product.description}</Text>
						//	<Text>Precio: {product.price}</Text>
						//</Flex>
					);
				})}
			</Flex>
		) :
		(
			<Alert status="info">
				<AlertIcon />
				<AlertTitle>No hay productos en la lista</AlertTitle>
				<AlertDescription>No existen productos en esta categoría.</AlertDescription>
			</Alert>
		)
	)
};