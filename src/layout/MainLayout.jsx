import { Box } from "@chakra-ui/react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

export const MainLayout = ({children}) => {
	return (
		<>
			<NavBar/>
			<Box w={'100vw'}><Outlet/></Box>
		</>
	);
};