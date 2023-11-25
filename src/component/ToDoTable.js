// ToDoTable.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { text, background, gradient } from '@salutejs/plasma-tokens';
const Table = styled.table`
  width: 50%;
  float: left;
  margin-left: 75px; 
  margin-top: 20px;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
`;

const TableHead = styled.thead`
    background-color: #3498db;
  color: #fff;
`;

const TableBody = styled.tbody`
    background-color: #f2f2f2;
`;



const TableRow = styled.tr`
  &:nth-child(add) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: left;
`;

const ToDoTable = () => {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Купить продукты' },
    { id: 2, task: 'Почистить дом' },
    { id: 3, task: 'Завершить проект' },
  ]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Задача</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>{task.id}</TableCell>
            <TableCell>{task.task}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ToDoTable;
