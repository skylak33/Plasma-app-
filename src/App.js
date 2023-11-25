import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './component/Header';
import ToDoTable from './component/ToDoTable';


export default function App() {
    return (
        <div>
          <Header/>  
          <ToDoTable/>
        </div>
    );
}