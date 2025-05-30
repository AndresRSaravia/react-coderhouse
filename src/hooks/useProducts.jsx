import { useEffect, useState } from "react";
import { db, getProductById, getProducts, getProductsByCategory } from "../services";
import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		/*getProducts()
		.then((res) => {
			setProducts(res.data.products);
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))*/
	const collectionName = collection(db, "products");
	getDocs(collectionName)
		.then((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			setProducts(data);
		})
		.catch((error) => console.log(error))
		.finally(() => {setLoading(false)})
	},[]);
	return {products,loading};
}

export const useProductsByCategory = (categoryId) => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const q = query(collection(db, "products"), where("category", "==", categoryId));
		getDocs(q)
		.then((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
			}));
			setProducts(data);
		})
		.then((res) => {
			setProducts(res.data.products);
		})
		.catch((error) => {
			console.error(error);
		})
		.finally(() => setLoading(false));
		/*getProductsByCategory(categoryId)
		.then((res) => {
			setProducts(res.data.products);
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))*/
	},[categoryId]);
	return {products,loading};
}

export const useProductById = (itemId) => {
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		//getProductById(itemId)
		const productQuery = doc(db, "products", itemId)
		getDoc(productQuery)
		.then((snapshot) => {
			//setProduct(res.data);
			setProduct({
				id: snapshot.id,
				...snapshot.data()
			});
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))
	},[itemId]);
	return {product,loading};
}
