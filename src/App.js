import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import SearchForm from './components/SearchForm.js';

export default function App() {
  return <main>
  
    <Header />
    <SearchForm />
    <TabNav />
    
    <AppRouter />
    
    
  </main>
}