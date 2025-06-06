import React from "react";
import { ItemDetailContainer, Loader } from "../components";
import { useProductById } from "../hooks";
import { useParams } from "react-router-dom";

export const Item = () => {
	const {itemId} = useParams()
	const {product,loading} = useProductById(itemId);
	return (
		loading ? <Loader/> : <ItemDetailContainer product={product}/>
	)
}