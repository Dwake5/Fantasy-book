import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Magic from "./components/Magic";
import Stats from "./components/Stats";
import Items from "./components/Items";
import Story from "./components/Story";
import Title from "./components/Title";
import { useSelector } from "react-redux";
import {
  getSkill,
  getMaxSkill,
  getStamina,
  getMaxStamina,
  getLuck,
  getMaxLuck,
} from "./redux/stats/selectors";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Tutorial from "./components/Tutorial";

const App = () => {
  const skill = useSelector(getSkill);
  const maxSkill = useSelector(getMaxSkill);
  const stamina = useSelector(getStamina);
  const maxStamina = useSelector(getMaxStamina);
  const luck = useSelector(getLuck);
  const maxLuck = useSelector(getMaxLuck);

  return (
      <div className="main">
        <Title />

        <Container>
          <Row>
            <Col className="p-0" xs={2}>
              <Stats
                skill={skill}
                maxSkill={maxSkill}
                stamina={stamina}
                maxStamina={maxStamina}
                luck={luck}
                maxLuck={maxLuck}
              />
              <Items />
            </Col>
            <Col className="p-0" xs={8}>
              <Story />
            </Col>
            <Col className="p-0" xs={2}>
              <Magic />
              <Tutorial />
            </Col>
          </Row>
        </Container>
      </div>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
