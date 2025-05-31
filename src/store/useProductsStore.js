import { create } from 'zustand';

const initialState = {
	cart: [],
}
export const useProductsStore = create((set) => ({
	...initialState,
	addProductToCart: (product) =>
		set((state) => {
			const existingProduct = state.cart.find(item => item.id === product.id)
			if (existingProduct) {
				return {
					cart: state.cart.map(item =>
						item.id === product.id
							? {...item, quantity: item.quantity+1}
							: item)
				}
			}
			return {
				cart: [...state.cart, {...product, quantity: 1}]
			}
		}),
	remProductFromCart: (productId) =>
		set((state) => {
			const existingProduct = state.cart.filter(item => item.id === productId)
			if (existingProduct[0].quantity === 1) {
				return {
					cart: state.cart.filter(item => item.id !== productId)
				}
			}
			return {
				cart: state.cart.map((item) =>
					item.id === productId
						? {...item, quantity: item.quantity-1}
						: item)
			}
	}),
	delProductFromCart: (productId) =>
		set((state) => {
			return {
				cart: state.cart.filter(item => item.id !== productId)
			}
	}),
	getTotalItems: () => {
		const state = useProductsStore.getState()
		return state.cart.reduce((total,item) => total+item.quantity,0)
	},
	getTotalPrice: () => {
		const state = useProductsStore.getState()
		return state.cart.reduce((total,item) => total+item.quantity*item.price,0)
	},
	checkoutCart: () =>
		set((state) => {
			return {cart: []}
	}),
}))