import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React, { useState } from "react";
import { Header } from "./Header.js";
import { Login } from "./Login.js";
import { Register } from "./Register.js";
import { Roster } from "./Roster.js";
import { AddShiftForm } from "./components/AddShiftForm.js";

import Auth from './utils/auth';
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      <ApolloProvider client={client}>
      <Header />
      {Auth.loggedIn() ? (
        <Roster onFormSwitch={toggleForm} />
      ): (
        currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      )}
      </ApolloProvider>
    </div>
  );
}

export default App;