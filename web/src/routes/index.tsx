import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import TeachersList from '../pages/TeacherList';
const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeachersList} exact />
      
    </BrowserRouter>
  )
}

export default Routes;