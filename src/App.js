import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './css/App.css';
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