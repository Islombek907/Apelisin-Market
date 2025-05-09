import AllDepartments from "../components/AllDepartments/AllDepartments"
import BestSelling from "../components/BestSelling/BestSelling"
import BrowseCategory from "../components/BrowseCategory/BrowseCategory"
import FlashSales from "../components/FlashSales/FlashSales"
import Footer from "../components/Footer/Footer"
import NewArrival from "../components/NewArrival/NewArrival"
import OurProducts from "../components/OurProducts/OurProducts"

const Home = () => {
  return (
    <>
      <AllDepartments/>
      <FlashSales/>
      <BrowseCategory/>
      <BestSelling/>
      <OurProducts/>
      <NewArrival/>
      <Footer/>
    </>
  )
}

export default Home