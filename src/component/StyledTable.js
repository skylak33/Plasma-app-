// components/StyledTable.js
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  max-height: 300px;
  margin-top: 20px;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* Цвет фона для всей таблицы */
  overflow-y: auto;
`;

const StyledTableHead = styled.thead`
  background-color: #3498db;
  color: #fff;
`;

const StyledTableBody = styled.tbody`
  background-color: #fff; /* Цвет фона для тела таблицы */
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

const StyledTableCell = styled.td`
  padding: 12px;
  text-align: left;
`;

export { StyledTable, StyledTableHead, StyledTableBody, StyledTableRow, StyledTableCell };
