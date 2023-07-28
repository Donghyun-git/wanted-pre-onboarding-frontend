import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" />
        <Route path="*" />
      </Route>
    </Routes>
  );
}

export default Router;
