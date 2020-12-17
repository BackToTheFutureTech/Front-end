import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import VolunteeerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity"

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <VolunteeerOpportunity/>
        <VolunteeerOpportunity/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
