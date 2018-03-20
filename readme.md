<a href="http://www.escflights.com/">
  <img src="images/paper-airplane-clipart-2.png" alt="" title="Aimeos" align="right" height="60" />
</a>

ESC FLIGHTS
======================

This reposity contains the source code for www.escflights.com 
ESC Flights is a fully functional prototype of <a src="https://www.behance.net/gallery/45904083/Google-Flights-Concept">this</a> popular concept from Behance
The site includes live flight search, Google login, a responsive user interface, and Google Maps integration

## Table of Contents

- [Technologies](#technologies)
  - [React](#react)
  - [Redux](#redux)
  - [Node/Express](#node/express)
  - [Google Oauth with Passport](#oauth)
- [Links](#links)

## Technologies 

Quick overview with code examples of the tech that makes ESC Flights tick. 

### React 

One of the key features of React is that it lets you build your UI as a collection of reuseable components. Also everything is in Javascript so its easy to create conditional logic to control what components are shown based on the state of your app. 

Below is an example of how I handled the conditional logic for loading the flight list. 

![Screen Shot](/images/React_condRender.png?raw=true)

The FlightListSuccess Component is passing down the authorization state of the currently active user so we can display a greeting to the user based on the name pulled from their google account.

![Screen Shot](/images/auth_greeting.png?raw=true)

Here's the component FlightListSuccess that the FlightList parent component (from the first screenshot) will display if the user's search critea returns a success result from the FarePortal API. Notice this component in turn calls other smaller components. 

![Screen Shot](/images/flightlistsuccess.png?raw=true)

### Redux 

In the previous example, we conditionally rendered components based on the state of the application. ESC Flights uses the Redux library to maintain predictable state. Redux creates a 'store' which is a Javascript object that lives outside our application and holds application state at all times. 







