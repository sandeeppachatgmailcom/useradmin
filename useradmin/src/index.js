import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LoginForm from './pages/Login';
import AdminDashBoard from './pages/Admin';
import Profile from './pages/Profile';
import SignUpForm from './pages/SignUpForm';
import AboutUS from './pages/AboutUs';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Login from './components/LoginWindow';
import axiosConfig from './utils/axiosConfig';
const appRouter = createBrowserRouter([
  {
  path:'/',
  element:<LoginForm/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:'/',
      element:<Login/>
    }
    ,{
    path:'/adminHome',
    element:<AdminDashBoard/>
  },
  {
    path:'/userHome',
    element:<Profile/>
  },
  {
    path:'/signup',
    element:<SignUpForm/>
  },
{
  path:'/aboutus',
  element:<AboutUS/>
},
{
  path:'/Contactus',
  element: <Contact/> 
} ]
  },
   ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
