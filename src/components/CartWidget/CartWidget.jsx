import { TbShoppingCart } from "react-icons/tb";
import { Flex } from "@chakra-ui/react";
import { useProductsStore } from "../../store";
import { useNavigate } from "react-router-dom";

export const CartWidget = () => {
	const totalItems = useProductsStore(state => state.getTotalItems())
	const navigate = useNavigate();
	return (
		<Flex
			alignItems={'center'}
			fontSize={20}
			marginRight={5}
			justifyContent={'space-between'}
			width={'50px'}
			onClick={() => navigate('/cart')}>
			<TbShoppingCart />
			<div>{totalItems}</div>
		</Flex>
	)
}