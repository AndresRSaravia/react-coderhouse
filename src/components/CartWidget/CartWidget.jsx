import { TbShoppingCart } from "react-icons/tb";
import { Flex } from "@chakra-ui/react";

export const CartWidget = ({number='0'}) => {
	return (
		<Flex alignItems={'center'} fontSize={20} marginRight={5} justifyContent={'space-between'} width={'50px'}>
			<TbShoppingCart />
			<div>-1</div>
		</Flex>
	)
}