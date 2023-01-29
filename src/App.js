
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import AddArticle from './pages/AddArticle/AddArticle';
import Blog from './pages/Blog/index'






function App() {
  return (
    <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/home" exact component={Home} />
        <Route path="/addArticle" exact component={AddArticle}/>
        <Route path='/blog/:id' component={Blog} />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/articles/:id" exact component={EditArticle} /> 
        <Route path="edit" exact component={Edit}/>
        <Route path="/modify" exact component={DisplayAllPosts}/> */}
      </Switch>
  );
}

export default App;
