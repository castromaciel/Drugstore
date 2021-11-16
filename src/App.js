import Footer from "./components/Footer/Footer"
import Ban from "./components/Ban/Ban"
import Navbar from "./components/Nav/Navbar"
import Ad from "./components/Ad/Ad"
// import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App"> 
      <Ban/>
      <Navbar/>
      {/* <Products />*/}
      <Ad/>
      <Footer />
    </div>
  );
}

export default App;
