import { useState } from "react";
import { useProductsStore } from "../../store";
import { Button, Flex, Text } from "@chakra-ui/react";

export const Counter = ({product}) => {
	const cart = useProductsStore((state) => state.cart);
	const addProductToCart = useProductsStore((state) => state.addProductToCart);
	const remProductFromCart = useProductsStore((state) => state.remProductFromCart);
	const existingProduct = cart.filter(item => item.id === product.id)[0]
	//console.log(existingProduct)
	const [count, setCount] = useState(existingProduct ? existingProduct.quantity : 0);

	const handleAdd = () => {
		addProductToCart(product);
		setCount(count + 1);
		console.log(cart)
	};

	const handleRemove = () => {
		if (count>0) {
			remProductFromCart(product.id);
			setCount(count - 1);
		}
		console.log(cart)
	};

	return (
		<Flex alignItems={"center"} justifyContent={"center"}>
			<Button onClick={handleRemove}>-1</Button>
			<Text fontSize={30} margin={"0 10px 0 10px"}>
				{count}
			</Text>
			<Button onClick={handleAdd}>+1</Button>
		</Flex>
	);
};