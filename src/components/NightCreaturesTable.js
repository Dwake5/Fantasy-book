import { Table } from "react-bootstrap";

const NightCreaturesTable = () => {
  return (
    <Table striped bordered hover size="sm" className="text-center">
      <thead>
        <tr>
          <th>Roll</th>
          <th>Creature</th>
          <th>Skill</th>
          <th>Stamina</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Giant Bat</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Giant Bat</td>
          <td>5</td>
          <td>5</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Wolfhound</td>
          <td>7</td>
          <td>8</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Werewolf</td>
          <td>8</td>
          <td>9</td>
        </tr>
        <tr>
          <td>5+</td>
          <td colSpan="3">No encounter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NightCreaturesTable;
