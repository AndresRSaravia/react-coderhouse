import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services";
import { useProductsStore } from "../store";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@chakra-ui/react";
import Swal from "sweetalert2";

export const Checkout = () => {
	const [form, setForm] = React.useState({
		name: "",
		phone: "",
		email: "",
	});
	const cartState = useProductsStore((state) => state.cart);
	const total = useProductsStore((state) => state.getTotalPrice());
	const checkoutCart = useProductsStore((state) => state.checkoutCart);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			buyer: form,
			items: cartState.map((item) => ({
				id: item.id,
				title: item.title,
				price: item.price,
				quantity: item.quantity,
			})),
			total,
		};
		if (total>0) {
			const collectionName = collection(db, "purchases");
			addDoc(collectionName, data)
			checkoutCart()
			.then(({ id }) => {
				Swal.fire({
				title: "¡Compra efectuada!",
				text: `Tu código de compra es: ${id}`,
				icon: "success",
				draggable: true,
				confirmButtonText: "Ir al inicio",
				}).then((result) => {
				if (result.isConfirmed) {
					navigate("/");
				}
				});
			})
			.catch((error) => console.error(error));
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
		<Input
			type="text"
			placeholder="Nombre completo"
			onChange={(e) => {
			setForm({
				...form,
				name: e.target.value,
			});
			}}
		/>
		<Input
			type="text"
			placeholder="Telefono"
			onChange={(e) => {
			setForm({
				...form,
				phone: e.target.value,
			});
			}}
		/>
		<Input
			type="email"
			placeholder="Email"
			onChange={(e) => {
			setForm({
				...form,
				email: e.target.value,
			});
			}}
		/>
		<Button type="submit">Comprar</Button>
		</form>
	);

};