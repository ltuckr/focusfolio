import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Cart from './pages/cart';
import Contact from './pages/Contact/contact';
import Gallery from './pages/Gallery/gallery';
import Portfolio from './pages/Portfolio/portfolio';
import Home from './pages/Home/home';
import Signup from './pages/SignUp/signup';
import Login from './pages/Login/login';
import NavBar from './components/NavBar/navbar';
import Footer from './components/Footer/footer';

// Create an ApolloClient instance
const client = new ApolloClient({
  uri: '/graphql', 
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </>
    </ApolloProvider>
  );
}
