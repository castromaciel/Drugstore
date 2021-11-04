import Footer from "./components/Footer/Footer"
import Ban from "./components/Ban/Ban"
import Navbar from "./components/Nav/Navbar"
import ListCards from "./components/ListCards/ListCards"

function App() {
  return (
    <div className="App"> 
      <Ban/>
      <Navbar/>
      <ListCards />
      <Footer />
    </div>
  );
}

export default App;
