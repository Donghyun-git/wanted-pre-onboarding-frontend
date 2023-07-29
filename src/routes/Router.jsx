import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Todo from '../pages/Todo';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
