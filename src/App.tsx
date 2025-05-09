import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import ProductsDetails from "./pages/ProductsDetails"
import GoodsProducts from "./pages/GoodsProducts"

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/category/:categoryName" element={<GoodsProducts/>}/>
          <Route path="/product/:id" element={<ProductsDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App