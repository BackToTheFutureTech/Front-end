import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import './App.css'
import Banner from "./components/Banner/Banner"
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <ChooseAnOpportunity/>
        <OpportunityDetails/>
        <HomeFooter/>
      </main>
      <Footer />
    </div>
  );
}

export default App;