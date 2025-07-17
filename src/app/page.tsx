 
import Navbar from "./Componentes/Navbar/Navbar";
import Main from "./Componentes/Main/Main"
import Cards from "./Componentes/Cards/Cards"
import Categories from "./Componentes/Categories/Categories"
import Footer from "./Componentes/Footer/Footer"
import TopCategories from "./Componentes/TopCategories/TopCategories";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Cards/>
      <TopCategories/>
      
      <Categories />
      <Footer/>

    </>
  );
}
