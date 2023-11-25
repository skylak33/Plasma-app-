import React from 'react';

import Header from './component/Header';
import ToDoTable from './component/ToDoTable';
import Home from './component/Home';
import ChatWindow from './component/ChatWindow';


export default function App() {
    return (
        <div>
          <Header/>  
          <ToDoTable/>
          <ChatWindow/>
        </div>
    );
}