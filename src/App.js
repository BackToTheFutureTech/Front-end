import React, { useState } from "react";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import './App.css'
import Banner from "./components/Banner/Banner"
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails";
import VolunteerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity";
import Search from "./components/Search/Search";
import Data from "./Assets/databasemoc.json"

function App() {
  const [serverResponse, setServerResponse] = useState(Data)
  const [filteredOpportunities, setFillteredOpportunities] = useState([]);

  return (
    <div>
      <Header>
        <Search serverResponse={serverResponse} setFillteredOpportunities={setFillteredOpportunities} />
      </Header>
      <main>
        <Banner />
        <ChooseAnOpportunity>
          {filteredOpportunities.length > 0 ? filteredOpportunities.map((item) => {
            return <VolunteerOpportunity {...item} />
          }): serverResponse.map((item) => {
            return <VolunteerOpportunity {...item} />
          })}
        </ChooseAnOpportunity>
        <OpportunityDetails />
        <HomeFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;