//lib's
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
// components in alphabetic order
import Banner from "./components/Banner/Banner"
import Charities from "./components/Charities/Charities"
import CharityCard from "./components/CharityCard/CharityCard"
import CharityDetails from "./components/CharityDetails/CharityDetails"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomeContent from "./components/HomeContent/HomeContent"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import Login from "./components/Login/Login"
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails"
import RelatedOpportunities from "./components/RelatedOpportunities/RelatedOpportunities"
import Search from "./components/Search/Search"
import VolunteerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity"

import { opportunities, taskImg, charities } from "./Assets/moreData"; //data

function App() {
  const [serverResponse, setServerResponse] = useState(opportunities)
  const [allCharities, setAllCharities] = useState(charities)
  const [filteredOpportunities, setFillteredOpportunities] = useState([]);

  return (
    <Router>
      <Header>
        <Search serverResponse={serverResponse} setFillteredOpportunities={setFillteredOpportunities} />
      </Header>
      <main>
        <Switch>
          <Route path="/becomeAVolunteer/:id" children={<OpportunityDetails
            allTaskImg={taskImg}
            serverResponse={serverResponse} />} />
          <Route path="/contacts">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/becomeAVolunteer">
            <ChooseAnOpportunity serverResponse={serverResponse} setFillteredOpportunities={setFillteredOpportunities}>
              {filteredOpportunities.length > 0 ? filteredOpportunities.map((item, index) => {
                return <VolunteerOpportunity {...item} taskImg={taskImg[item.taskType]} key={index} />
              }) : serverResponse.map((item, index) => {
                return <VolunteerOpportunity {...item} taskImg={taskImg[item.taskType]} key={index} />
              })}
            </ChooseAnOpportunity>
          </Route>
          <Route path="/charities/:charityName" children={<CharityDetails
            charities={allCharities} />} />
          <Route path="/charities">
            <Charities>
              {allCharities.map(charity => <CharityCard {...charity} key={charity.name} />)}
            </Charities>
          </Route>
          <Route path={["/home", "/"]}>
            <Banner />
            <HomeContent />
            <RelatedOpportunities />
            <HomeFooter />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;