import React from "react";
import { Greeting, ItemListContainer, Loader } from '../components'
import { useProducts } from "../hooks";

export const Home = () => {
	const {products,loading} = useProducts();
	//<Greeting message='¡Bienvenido a Comercio Justiniano!' />
	return (
		<>
		<Greeting message='¡Bienvenido a Comercio Justiniano!' />
		{
			loading ? (<Loader/>) : (<ItemListContainer products={products}/>)
		}
		</>
	)
}
