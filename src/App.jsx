import './App.css'
import { createHashRouter, RouterProvider } from "react-router-dom"
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Signup from './Components/Signup.jsx/Signup'
import AuthContext from './Context/AuthContext'
import { Toaster } from 'react-hot-toast'
import Login from './Components/Login/Login'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import Contact from './Components/Contact/Contact'
import NotFound from './Components/NotFound/NotFound'
import MyAccount from './Components/MyAccount/ManageMyAccount'
import ManageMyAccount from './Components/MyAccount/ManageMyAccount'
import MyProfile from './Components/MyAccount/MyProfile'
import { QueryClient, QueryClientProvider } from "react-query"
import Categories from './Components/Categories/Categories'
import Prouducts from './Components/Products/Prouducts'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import { Offline } from "react-detect-offline";
import { Provider } from "react-redux"
import { store } from './Redux/ReduxStore'
import Cart from './Components/Cart/Cart'
import Wishlist from './Components/Wishlist/Wishlist'
import CheckOut from './Components/CheckOut/CheckOut'
const queryClient = new QueryClient()

export const router = createHashRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <About /> },
      { path: "About", element: <About /> },
      { path: "Home", element: <ProtectedRoute> < Home /> </ProtectedRoute> },
      { path: "Signup", element: <Signup /> },
      { path: "Login", element: <Login /> },
      { path: "Contact", element: <Contact /> },
      { path: "Categories/:name", element: <ProtectedRoute> <Categories /> </ProtectedRoute> },
      { path: "Products", element: <ProtectedRoute>  <Prouducts />  </ProtectedRoute> },
      { path: "Cart", element: <ProtectedRoute>  <Cart />  </ProtectedRoute> },
      { path: "Wishlist", element: <ProtectedRoute>  <Wishlist />  </ProtectedRoute> },
      { path: "CheckOut", element: <ProtectedRoute>  <CheckOut />  </ProtectedRoute> },
      { path: "ProductDetails/:id/:cate", element: <ProtectedRoute> <ProductDetails /></ProtectedRoute> }
      ,
      {
        path: "MyAccount", element: <ProtectedRoute>  <ManageMyAccount /> </ProtectedRoute>, children: [
          { index: true, element: <MyProfile /> },
          { path: "Profile", element: <ProtectedRoute>  <MyProfile /> </ProtectedRoute> }
        ]
      },

      { path: "*", element: <NotFound /> },


    ]
  },
])


function App() {


  return (
    <>

      <AuthContext>
        <Provider store={store}>

          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />

          </QueryClientProvider>
        </Provider>

      </AuthContext>
      <Toaster />
      <Offline>
        <div className="fixed top-0 left-0 w-full bg-red-500 text-white py-3 px-5 text-center z-50 flex items-center justify-center gap-2">
          <i className="fa-solid fa-wifi text-lg"></i>
          <p><strong>No Internet Connection</strong>. You're offline.</p>
        </div>
        <div className='bg-black fixed bottom-0 w-full left-0 top-11 z-50 '>

        </div>
      </Offline>


    </>
  )
}

export default App
