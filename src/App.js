//lib's
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
// components in alphabetic order
import AdminPortalBody from "./components/AdminPortalBody/AdminPortalBody";
import Banner from "./components/Banner/Banner"
import BreadCrumbs from "./components/BreadCrumbs/BreadCrumbs"
import Charities from "./components/Charities/Charities"
import CharityCard from "./components/CharityCard/CharityCard"
import CharityDetails from "./components/CharityDetails/CharityDetails"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity"
import Contact from "./components/Contact/Contact"
import CreateAnOpportBody from "./components/CreateAnOpportBody/CreateAnOpportBody"
import EditAnOpportBody from "./components/EditAnOpportBody/EditAnOpportBody"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HomeContent from "./components/HomeContent/HomeContent"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import HowToHelp from "./components/HowToHelp/HowToHelp";
import HowToHelpBodyCard from './components/HowToHelpBodyCard/HowToHelpBodyCard'
import Login from "./components/Login/Login"
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails"
import Search from "./components/Search/Search"
import VolunteerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity"

import { opportunities, taskImg, charities, waysToHelp } from "./Assets/moreData"; //data


function App() {
  //const [serverResponse, setServerResponse] = useState(opportunities)
  const [allCharities, setAllCharities] = useState(charities)
  // setAllOpportunities is called when charities update their list
  // the backend db should also be updated
  const [allOpportunities, setAllOpportunities] = useState(opportunities)
  const [helpingWays, setHelpingWays] = useState(waysToHelp)

  const [filteredOpportunities, setFillteredOpportunities] = useState([]);
  const latestOpportunities = allOpportunities.filter((item, ix) => ix > (allOpportunities.length - 4))
  // for testing...charityName and authorisation should be set on log in
  const charityName = "NSPCC"

  const editOpportunity = (opportunity) => {
    const editedOpportunity = {
      id: opportunity.id,
      name: opportunity.name,
      charity: opportunity.charity,
      taskType: opportunity.taskType,
      numVolunteers: opportunity.numVolunteers,
      date: opportunity.date,
      postcode: opportunity.postcode,
      location: opportunity.location,
      address1: opportunity.address1,
      address2: opportunity.address2,
      description: opportunity.description
    }
    const updatedOpportunities = allOpportunities.map(item => {
      if (item.id === editedOpportunity.id) return editedOpportunity
      return item
    })
    setAllOpportunities(updatedOpportunities)
    //console.log(updatedOpportunities)
  }

  const deleteOpportunity = id => {
    const updatedOpportunities = allOpportunities.filter(opportunity => opportunity.id !== id)
    setAllOpportunities(updatedOpportunities)
  }

  const createOpportunity = (opportunity) => {
    // ToDo - need a unique id here
    let id = allOpportunities.length + 1
    const newOpportunity = {
      id: id,
      name: opportunity.name,
      charity: opportunity.charity,
      taskType: opportunity.taskType,
      numVolunteers: opportunity.numVolunteers,
      date: opportunity.date,
      postcode: opportunity.postcode,
      location: opportunity.location,
      address1: opportunity.address1,
      address12: opportunity.address2,
      description: opportunity.description
    }
    const updatedOpportunities = [ ...allOpportunities, newOpportunity ]
    //console.log(updatedOpportunities)
    setAllOpportunities(updatedOpportunities)
  }

  return (
    <Router>
      <Header>
        <Search serverResponse={allOpportunities} setFillteredOpportunities={setFillteredOpportunities} />
      </Header>
      <main>
        <BreadCrumbs serverResponse={allOpportunities} />
        <Switch>
          <Route path="/createOpportunity" >
            <CreateAnOpportBody 
              createOpportunity={createOpportunity}
              charityName={charityName}/>
          </Route>
          <Route path="/editOpportunity/:id" >
            <EditAnOpportBody 
              editOpportunity={editOpportunity}
              allOpportunities={allOpportunities}/>
          </Route>
          <Route path="/adminportal">
            <AdminPortalBody 
              charityName={charityName}
              allOpportunities={allOpportunities}
              deleteOpportunity={deleteOpportunity} />
          </Route>
          <Route path="/howToHelp">
            <HowToHelp>
              {helpingWays.map((item, index) => {
                return <HowToHelpBodyCard key={index} {...item} taskImg={taskImg} />
              })}
            </HowToHelp>
          </Route>
          <Route path="/becomeAVolunteer/:id" children={<OpportunityDetails
            allTaskImg={taskImg}
            serverResponse={allOpportunities} />} />
          <Route path="/contacts">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/becomeAVolunteer">
            <ChooseAnOpportunity serverResponse={allOpportunities} setFillteredOpportunities={setFillteredOpportunities}>
              {filteredOpportunities.length > 0 ? filteredOpportunities.map((item) => {
                return <VolunteerOpportunity {...item} taskImg={taskImg[item.taskType]} key={item.id} />
              }) : allOpportunities.map((item) => {
                return <VolunteerOpportunity {...item} taskImg={taskImg[item.taskType]} key={item.id} />
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
            <HomeContent>
              {latestOpportunities.map((item) =>
                <VolunteerOpportunity {...item} taskImg={taskImg[item.taskType]} key={item.id} />)}
            </HomeContent>
            <HomeFooter />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;