import React, {useState} from "react";
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import './App.css'
import Banner from "./components/Banner/Banner"
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails";
import VolunteerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity";
import Data from "./Assets/databasemoc.json"

function App() {
 const [serverResponse,setServerResponse] = useState(Data)
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <ChooseAnOpportunity>
          {serverResponse.map((item) => {
            return <VolunteerOpportunity {...item}/>
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