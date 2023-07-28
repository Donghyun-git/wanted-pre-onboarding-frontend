import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout';

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/signin" />
        <Route path="/signup" />
        <Route path="/todo" />
        <Route path="*" />
      </Route>
    </Routes>
  );
}

export default Router;
