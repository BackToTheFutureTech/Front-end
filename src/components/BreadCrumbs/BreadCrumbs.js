import React from 'react'
import {
    BrowserRouter as Router,
    NavLink,
} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';


function BreadCrumbs({ serverResponse }) {

    const pathNamesById = {}
    serverResponse.forEach(element => {
        pathNamesById[element.id] = `${element.charity} - ${element.taskType}`
    });
    const DynamicPathBreadcrumb = ({ match }) => (
        <span>{pathNamesById[match.params.id]}</span>
    );

    const routes = [
        { path: '/becomeAVolunteer/:id', breadcrumb: DynamicPathBreadcrumb },
        { path: '/howToHelp', breadcrumb: 'How To Help' },
        { path: '/becomeAVolunteer', breadcrumb: 'Become A Volunteer' },
        { path: '/home', breadcrumb: ' ' },
    ];
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <>  <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {breadcrumbs.map(({
                        match,
                        breadcrumb
                    }) => (

                        <li key={match.url} className="breadcrumb-item"><NavLink to={match.url}>{breadcrumb}</NavLink></li>

                    ))}</ol>
            </nav>
        </div>
        </>
    );
}

export default BreadCrumbs;