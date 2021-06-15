import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Magic from "./components/magic/Magic";
import Stats from "./components/leftHandTabs/Stats";
import Items from "./components/leftHandTabs/Items";
import StoryMain from "./components/StoryMain";
import Title from "./components/Title";
// import Combat from "./components/Combat";
import Libra from "./components/leftHandTabs/Libra";
import { useSelector } from "react-redux";
import { getSkill, getStat } from "./redux/stats/selectors";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Tutorial from "./components/tutorial/Tutorial";
import Ailments from "./components/leftHandTabs/Ailments";

const App = () => {
  const skill = useSelector(getSkill)
  const maxSkill = useSelector((state) => getStat(state, "maxSkill"));
  const stamina = useSelector((state) => getStat(state, "stamina"));
  const maxStamina = useSelector((state) => getStat(state, "maxStamina"));
  const luck = useSelector((state) => getStat(state, "luck"));
  const maxLuck = useSelector((state) => getStat(state, "maxLuck"));

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
            <Libra />
            <Ailments />
          </Col>
          <Col className="p-0 storyMain" xs={8}>
            {/* <Combat />  */}
            <StoryMain />
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
