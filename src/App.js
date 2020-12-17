import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import VolunteeerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity"
import './App.css';
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <VolunteeerOpportunity />
        <VolunteeerOpportunity />
      </main>
      <Footer />
    </div>
  );
}

export default App;
