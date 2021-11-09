import Footer from "./components/Footer/Footer"
import Ban from "./components/Ban/Ban"
import Navbar from "./components/Nav/Navbar"
import ListCards from "./components/ListCards/ListCards"
import CategoriesButton from "./components/CategoriesButton/CategoriesButton";

function App() {
  return (
    <div className="App"> 
      <Ban/>
      <Navbar/>
      <CategoriesButton />
      <ListCards />
      <Footer />
    </div>
  );
}

export default App;
