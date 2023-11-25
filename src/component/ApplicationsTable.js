// src/components/ApplicationsTable.js
import React from 'react';
import '../css/style.css'
const ApplicationsTable = ({ applications, selectApplication }) => {
  return (
    <div className="applications-table">
      <h2>Таблица анкет</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id} onClick={() => selectApplication(application)}>
              <td>{application.firstName}</td>
              <td>{application.lastName}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationsTable;
