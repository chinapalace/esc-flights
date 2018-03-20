<a href="http://www.escflights.com/">
  <img src="images/paper-airplane-clipart-2.png" alt="" title="Aimeos" align="right" height="60" />
</a>

ESC FLIGHTS
======================

This reposity contains the source code for www.escflights.com 

ESC Flights is a fully functional prototype of 
[this]("https://www.behance.net/gallery/45904083/Google-Flights-Concept") popular concept from Behance.
The site includes live flight search, Google login, a responsive user interface, and Google Maps integration.

![Screen Shot](/images/escflights.png?raw=true)

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

In the case of our FlightList component, we need to know the state of the search request made to the Fareportal API so we can render the proper component. 

First we define the shape of our App's state as a JavaScript object. Our state contains the status of the search request to the Fareportal API as well as an empty array that will hold the data response from the API.

![Screen Shot](/images/state.png?raw=true)

When a user submits their search criteria, the Search component calls the loadFlights() action creator. 

![Screen Shot](/images/LoadFlights_creator.png?raw=true)

First the action creator dispatches an action of type "ACTION_PENDING" before sending the request to the Fareportal API.

![Screen Shot](/images/action_pending.png?raw=true)

The action is funneled into the loadFlights reducer, which contains a switch statement to determine what type of action it is. Reducers in Redux specifies how the application's state changes in response to actions sent to the store. In this case, "ACTION_PENDING", we use the Javascript spread (...) operator to create a new state object 
with an updated requestPending property set to true. __It is imperative in redux to never mutate the state object and instead return a new copy of the object with updated properties__. 

![Screen Shot](/images/Action_pending_reducer.png?raw=true)

The point of maintaining our state object in Redux is to easily allow our components to have access to this state. Redux makes it simple to map our state to props which can easily be passed through components.  

![Screen Shot](/images/redux_connect.png?raw=true)

Now our flights list component can choose to display a loading icon, a flight list, or alert the user of an unsuccessful search (see below) based on our app's state.

![Screen Shot](/images/no_flights.png?raw=true)

