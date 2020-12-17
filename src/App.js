import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity";
import './App.css';
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <ChooseAnOpportunity/>
      </main>
      <Footer />
    </div>
  );
}

export default App;