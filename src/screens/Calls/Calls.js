import React, { useState } from 'react';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { Panel } from './components/Panel';

const CallerApp = () => {
  const [search, setSearch] = useState('');

  const newCall = () => {};

  const updateSearch = (text) => {
    setSearch(text);
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />

      <Search value={search} onChange={updateSearch} />

      <Panel onNewCall={newCall} />
    </div>
  );
};

export default CallerApp;
