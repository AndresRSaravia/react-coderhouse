import { createBrowserRouter } from "react-router-dom";
import { Home, Category, Item } from "../pages";
import { MainLayout } from "../layout/MainLayout";

const routes = [
	{
		path: '/',
		element: <MainLayout/>,
		children: [
			{
				path: '/',
				element: <Home/>
			},
			{
				path: '/category/:categoryId',
				element: <Category/>
			},
			{
				path: '/item/:itemId',
				element: <Item/>
			}
		]
	},

];

export const router = createBrowserRouter(routes);