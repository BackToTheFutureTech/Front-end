import Footer from "./components/Footer/Footer"
import './App.css';
import Header from "./components/Header/Header"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity";

function App() {
  return (
    <div>
      <Header />
      <main>
        <ChooseAnOpportunity/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
