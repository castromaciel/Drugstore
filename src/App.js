import Footer from "./components/Footer/Footer"
import Ban from "./components/Ban/Ban"
import Navbar from "./components/Nav/Navbar"
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App"> 
      <Ban/>
      <Navbar/>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
