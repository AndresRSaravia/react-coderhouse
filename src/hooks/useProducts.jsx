import { useEffect, useState } from "react";
import { getProductById, getProducts, getProductsByCategory } from "../services";

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getProducts()
		.then((res) => {
			setProducts(res.data.products);
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))
	},[]);
	return {products,loading};
}

export const useProductsByCategory = (categoryId) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getProductsByCategory(categoryId)
		.then((res) => {
			setProducts(res.data.products);
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))
	},[categoryId]);
	return {products,loading};
}

export const useProductById = (itemId) => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getProductById(itemId)
		.then((res) => {
			setProduct(res.data);
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))
	},[itemId]);
	return {product,loading};
}
