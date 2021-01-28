//lib's
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
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
import OpportunityDetails from "./components/OpportunityDetails/OpportunityDetails"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute"
import Search from "./components/Search/Search"
import VolunteerOpportunity from "./components/VolunteerOpportunity/VolunteerOpportunity"
// ToDo replace with calls to backend
import { taskImg, charities, waysToHelp } from "./Assets/moreData"; //data

function App() {
  const [allCharities, setAllCharities] = useState(charities)
  const [allOpportunities, setAllOpportunities] = useState([])
  useEffect(() => {
    axios.get('https://r892sqdso9.execute-api.eu-west-2.amazonaws.com/opportunities')
      .then(response => setAllOpportunities(response.data))
      .catch(err => console.log(err))
  }, [])

  // does this need to use state? will this be updated?
  const [helpingWays] = useState(waysToHelp)

  const [filteredOpportunities, setFillteredOpportunities] = useState([]);

  const [isCreated, setIsCreated] = useState(false)

  // ToDo select latest opportunities without relying on results order , eg with created date?
  const latestOpportunities = allOpportunities.filter((item, ix) => ix > (allOpportunities.length - 4))


  // ******* For Charity Admin ********* //
  const { user } = useAuth0();
  const charityName = user ? user.name : ""
  // ToDo replace hardcoded charityId with userId from Auth0 or read from backend ??
  const charityId = user ? "e9ded807-5c9d-11eb-83f0-06358a409ac0" : ""

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
  }

  const deleteOpportunity = id => {
    const updatedOpportunities = allOpportunities.filter(opportunity => opportunity.id !== id)
    setAllOpportunities(updatedOpportunities)
  }

  const createOpportunity = (opportunity) => {

    const newOpportunity = {
      name: opportunity.name,
      taskType: opportunity.taskType,
      numVolunteers: opportunity.numVolunteers,
      date: opportunity.date,
      postcode: opportunity.postcode,
      location: opportunity.location,
      address1: opportunity.address1,
      address2: opportunity.address2,
      description: opportunity.description
    }

    axios
        .post(`https://r892sqdso9.execute-api.eu-west-2.amazonaws.com/opportunities/${charityId}`, newOpportunity)
        .then(() => axios.get('https://r892sqdso9.execute-api.eu-west-2.amazonaws.com/opportunities'))
        .then(response => setAllOpportunities(response.data))
        .then(() => console.log("Success"))
        .then(() => alert("Opportunity Created"))
        .catch((err) => console.log("Fail :" +err))
        
  }

  // ******************************* //

  return (
    <Router>
      <Header>
        <Search serverResponse={allOpportunities} setFillteredOpportunities={setFillteredOpportunities} />
      </Header>
      <main>
        <BreadCrumbs serverResponse={allOpportunities} />
        <Switch>
          <ProtectedRoute path="/adminportal/createOpportunity"
            component={() => <CreateAnOpportBody createOpportunity={createOpportunity} />}
          />
          <ProtectedRoute exact path="/adminportal/editOpportunity/:id"
            component={() => <EditAnOpportBody editOpportunity={editOpportunity}
              allOpportunities={allOpportunities} />}
          />
          <ProtectedRoute exact path="/adminportal"
            component={() => <AdminPortalBody allOpportunities={allOpportunities}
              deleteOpportunity={deleteOpportunity} charityName={charityName} />}
          />

          <Route path="/howToHelp">
            <HowToHelp>
              {helpingWays.map((item, index) => {
                return <HowToHelpBodyCard key={index} {...item} taskImg={taskImg} />
              })}
            </HowToHelp>
          </Route>
          <Route path="/becomeAVolunteer/:id"
            children={<OpportunityDetails allTaskImg={taskImg} serverResponse={allOpportunities} />} />
          <Route path="/contacts">
            <Contact />
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
          <Route path="/charities/:charityName"
            children={<CharityDetails charities={allCharities} />} />
          <Route path="/charities">
            <Charities>
              {allCharities.map(charity => <CharityCard {...charity} key={charity.name} />)}
            </Charities>
          </Route>
          <Route path={["/home", "/"]}>
            <Banner />
            <HomeContent>
              {latestOpportunities.map((item) =>
                <VolunteerOpportunity {...item}
                  taskImg={taskImg[item.taskType]}
                  key={item.id} />)}
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