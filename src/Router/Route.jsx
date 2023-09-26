/* eslint-disable no-undef */

import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import Donation from '../Pages/Donation/Donation';
import Statistics from '../Pages/Statistics/Statistics';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Card from '../Pages/Card/Card';

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('/public/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: ()=>fetch('/donation.json')
            },
            {
                path: "/cards/:id",
                element: <Card></Card>,
                loader: ()=> fetch('/donation.json')
            }
        ]

    }
])

export default myCreatedRoute;