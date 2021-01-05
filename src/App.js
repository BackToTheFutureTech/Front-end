//lib's
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
// components
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import ChooseAnOpportunity from "./components/ChooseAnOpportunity/ChooseAnOpportunity"
import HomeFooter from "./components/HomeFooter/HomeFooter"
import './App.css'
import Banner from "./components/Banner/Banner"
import RelatedOpportunities from "./components/RelatedOpportunities/RelatedOpportunities"
import Search from "./components/Search/Search";
import Contact from "./components/Contact/Contact"
import { Data } from "./Assets/moreData"; //data
import Login from "./components/Login/Login";


function App() {
  const [serverResponse, setServerResponse] = useState(Data)
  const [filteredOpportunities, setFillteredOpportunities] = useState([]);

  return (
    <Router>
      <Header>
        <Search serverResponse={serverResponse} setFillteredOpportunities={setFillteredOpportunities} />
      </Header>
      <main>
        <Switch>
          <Route path="/contacts">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/becomeAVolunteer">
            <ChooseAnOpportunity/>
          </Route>
          <Route path="/home">
            <Banner />
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