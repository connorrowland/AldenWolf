import React from 'react';

import WorkTogetherForm from './WorkTogetherForm.jsx';
import NavBar from './NavBar.jsx';
import LibraryBody from './LibraryBody.jsx';

$(document).ready(function(){
  if(document.getElementById('work-together--form')){
    React.render(<WorkTogetherForm/>, document.getElementById('work-together--form'));
  }
  if(document.getElementById('header-navbar')){
    React.render(<NavBar/>, document.getElementById('header-navbar'));
  }
  if(document.getElementById('component-library--main')){
    React.render(<LibraryBody/>, document.getElementById('component-library--main'));
  }
})