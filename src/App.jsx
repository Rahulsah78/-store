import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'animate.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home"
import About from "./Components/About"
import Blog from "./Components/Blog"
import Contact from "./Components/Contact"
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Profile from "./Components/Profile";
import Setting from "./Components/Setting";
import OurProductDetails from "./Components/OurProductDetails";
import NotFound from "./Components/NotFound";
import Cart from "./Components/Cart";
import CheckOutPage from "./Components/CheckOutPage";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/cart/item" element={<Cart />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/setting" element={<Setting />}/>
      <Route path="/ourproducts/:productId" element={<OurProductDetails />} />
      <Route path="/check_out_page" element={<CheckOutPage />}/>
      <Route path="/*" element={<NotFound />}/>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App
