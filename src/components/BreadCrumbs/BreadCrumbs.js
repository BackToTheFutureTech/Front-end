import React from 'react'
import { NavLink } from "react-router-dom";
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
        { path: '/createOpportunity', breadcrumb: 'Create an opportunity' },
        { path: '/editOpportunity', breadcrumb: 'Edit an opportunity'},

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
                        <li key={match.url} className="breadcrumb-item active"><NavLink to={match.url}>{breadcrumb}</NavLink></li>
                    ))}</ol>
            </nav>
        </div>
        </>
    );
}

export default BreadCrumbs;