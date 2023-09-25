import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout/MainLayout';
import Home from './components/Home/Home';
import Donation from './components/Donation/DonationList';
import Statistics from './components/Statistics/Statistics';
import DonationDetails from './components/Donation/DonationDetails';
import DonationList from './components/Donation/DonationList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/data.json')
      },
      {
        path:'/donation',
        element:<Donation></Donation>,

      },
      {
        path:'/donation/:name',
        element: <DonationDetails></DonationDetails>,
        loader: ()=> fetch('/data.json'),
        
      },
      {
        path:'/donation-list',
        element: <DonationList></DonationList>,
        
        
      },

      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
