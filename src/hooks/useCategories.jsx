import { useEffect, useState } from "react";
import { db, getCategories } from "../services";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

export const useCategories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		/*getCategories()
		.then((res) => {
			setCategories(res.data)
		})
		.catch((error) => {console.error(error)})
		.finally(() => setLoading(false))*/
	const collectionName = collection(db, "categories");
	getDocs(collectionName)
		.then((snapshot) => {
			const data = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			}));
			setCategories(data);
		})
		.catch((error) => console.log(error))
		.finally(() => {setLoading(false)})
	},[]);
	return {categories,loading}
}