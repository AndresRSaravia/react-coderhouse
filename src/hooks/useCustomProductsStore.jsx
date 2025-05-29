import { useProductsStore } from "../store";

export const useCustomProductsStore = () => {
	const cartState = useProductsStore((state) => state.cart);
	const addItem = useProductsStore((state) => state.addProductToCart);
	const remItem = useProductsStore((state) => state.remProductFromCart);
	const delItem = useProductsStore((state) => state.delProductFromCart);
	const totalPrice = useProductsStore((state) => state.getTotalPrice());
	return {
		cartState, addItem, remItem, delItem, totalPrice
	}
}