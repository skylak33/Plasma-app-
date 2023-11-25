// src/components/BankEmployeeInterface.js
import React, { useState } from 'react';
import { Card, Body1, Headline3 } from '@sberdevices/plasma-ui';
import ApplicationsTable from './ApplicationsTable';
import Chat from './Chat';
import '../css/App.css'; // Этот файл все равно нужен, так как Plasma не предоставляет стилей для всего

const BankEmployeeInterface = () => {
  const [applications, setApplications] = useState([
    { id: 1, firstName: 'Иван', lastName: 'Иванов', status: 'На рассмотрении' },
    { id: 2, firstName: 'Мария', lastName: 'Петрова', status: 'Одобрено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 1, firstName: 'Иван', lastName: 'Иванов', status: 'На рассмотрении' },
    { id: 2, firstName: 'Мария', lastName: 'Петрова', status: 'Одобрено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },{ id: 1, firstName: 'Иван', lastName: 'Иванов', status: 'На рассмотрении' },
    { id: 2, firstName: 'Мария', lastName: 'Петрова', status: 'Одобрено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
    { id: 3, firstName: 'Алексей', lastName: 'Смирнов', status: 'Отклонено' },
  ]);

  const [selectedApplication, setSelectedApplication] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  const selectApplication = (application) => {
    setSelectedApplication(application);
  };

  const sendMessage = (text) => {
    setChatMessages([...chatMessages, { text, from: 'bank' }]);
  };

  return (
    <div className="bank-employee-interface">
      <Card style={{ width: '50%' }}>
        <Headline3>Таблица анкет</Headline3>
        <ApplicationsTable applications={applications} selectApplication={selectApplication} />
      </Card>
      <Card style={{ width: '50%' }}>
        <Headline3>Чат</Headline3>
        <Chat selectedApplication={selectedApplication} sendMessage={sendMessage} messages={chatMessages} />
      </Card>
    </div>
  );
};

export default BankEmployeeInterface;
