import { Box, SimpleGrid, Alert, AlertIcon, AlertTitle, AlertDescription, Flex, Text } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard";

export const ItemListContainer = ({products}) => {

	    <Box width={"100%"} overflowX={"hidden"} p={4}>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4} width={"100%"}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </SimpleGrid>
    </Box>

	return (
		products.length !== 0 ? (
		<Box width={"100%"} overflowX={"hidden"} p={4}>
			<SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={4} width={"100%"}>
				{products.map((product) => {
					return (<ProductCard key={product.id} product={product}/>);
				})}
			</SimpleGrid>
		</Box>
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