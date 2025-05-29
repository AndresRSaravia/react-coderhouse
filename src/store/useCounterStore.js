import { create } from 'zustand';
import { getProducts } from '../services';

const initialState = {
	cartState: 0
}

export const useCounterStore = create((set) => ({
	...initialState,
	//products: [],
	addProduct: () => set((state) => ({cartState: state.cartState+1})),
	remProduct: () => set((state) => ({cartState: state.cartState-1})),
/*
	getProducts: () =>
		set((state) => {
			getProducts().then((res) => {
				return {products: res.data.products}
			})
		}) */
}))