import React from "react";
import { Table } from "react-bootstrap";

const TestLuckTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th />
          <th>0</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>5</th>
          <th>6</th>
          <th>7</th>
          <th>8</th>
          <th>9</th>
          <th>10</th>
          <th>11</th>
          <th>12+</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Normal</td>
          <td>0%</td>
          <td>0%</td>
          <td>2.7%</td>
          <td>8.3%</td>
          <td>16.7%</td>
          <td>27.8%</td>
          <td>41.7%</td>
          <td>58.3%</td>
          <td>72.2%</td>
          <td>83.3%</td>
          <td>91.7%</td>
          <td>97.2%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>Luck Amulet</td>
          <td>0%</td>
          <td>2.7%</td>
          <td>8.3%</td>
          <td>16.7%</td>
          <td>27.8%</td>
          <td>41.7%</td>
          <td>58.3%</td>
          <td>72.2%</td>
          <td>83.3%</td>
          <td>91.7%</td>
          <td>97.2%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TestLuckTable;
