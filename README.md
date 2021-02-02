# MadDay Application - Frontend

This is the front end of a Todo Application, built throughout the [Tech Returners](https://techreturners.com) Your Journey Into Tech course. It integrates with a backend, available [here](https://github.com/BackToTheFutureTech/Back-end).

The hosted version of the application is available here: [Here](https://madday.herokuapp.com/home).

## Technologies Used

This project uses the following technologies:

- ReactJS
- JavaScript (ES2015+)
- CSS3
- Bootstrap CSS Framework
- Webpack
- Axios
- ESLint
- React Router
- AWS S3 Bucket

## Prerequisites

- AWS account to deploy API to LAMBDA, create S3 Bucket and RDS (You can use [Terraform](https://www.terraform.io/) to build those from our Infrastructure repo [here](https://github.com/BackToTheFutureTech/Infrastructure)).
- [Auth0](https://auth0.com/) Account to Authorise Users.
- Local `.env` file similar to [.env.example](https://github.com/BackToTheFutureTech/Front-end/blob/readme/.env.example).

## Overview

It has been designed and built with mobile-first responsive principles in mind.
Below are screenshots to show just that.

### Laptop Screen

![Laptop](https://github.com/BackToTheFutureTech/Front-end/blob/readme/Readme_Assets/volunteer_wide.PNG?raw=true)

### Mobile Screen

<p align="center">
  <img src="https://github.com/BackToTheFutureTech/Front-end/blob/readme/Readme_Assets/volunteer_mobile.PNG?raw=true">
</p>

<!-- ![Mobile ><](https://github.com/BackToTheFutureTech/Front-end/blob/readme/Readme_Assets/volunteer_mobile.PNG?raw=true) -->

## Running the application locally

Assuming that you have all requirements for the backend in place from the backend repo. Use the following steps to get it up and running.

### First

[Node.js](https://nodejs.org/en/) must be installed if not already.

### Second

Clone the repo locally and install dependencies using:

    npm install

### Third

You need to setup your environment variables in `.env` file in the root folder of the repo. An example is shared in the repo. Your file should contain the following variables.

```

REACT_APP_BUCKETNAME=[AWS S3 BucketName to host uploaded images]
REACT_APP_REGION=[AWS Bucket Region]
REACT_APP_ACCESSKEYID=[Access Key ID for your AWS root (it's best to generate a new one)]
REACT_APP_SECRETACCESSKEY=[AWS Secret to your access key ]
REACT_APP_APIURL=[Your Lambda function URL/endpoint]
REACT_APP_AUTH0DOMAIN=[Your Auth0 domain URL]
REACT_APP_AUTH0CLIENTID=[Your Auth0 Client ID]

```

### Finally

To start the application:

    npm start

The application will then be accessible at:

[http://localhost:3000](http://localhost:3000)
