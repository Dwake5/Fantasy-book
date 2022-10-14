import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, Provider } from "react-redux";
import "./App.css";
import Items from "./components/leftHandTabs/Items";
import Libra from "./components/leftHandTabs/Libra";
import Stats from "./components/leftHandTabs/Stats";
import Magic from "./components/magic/Magic";
import StoryMain from "./components/StoryMain";
import Title from "./components/Title";
import { getSkill, getStat } from "./redux/stats/selectors";

import Combat from "./components/combat/Combat";
import Death from "./components/Death";
import Ailments from "./components/leftHandTabs/Ailments";
import Tutorial from "./components/tutorial/Tutorial";
import { getInCombat } from "./redux/combat/selectors";
import { store } from "./redux/store";
import { getPage, getPlayerDead } from "./redux/story/selectors";

const App = () => {
  const _skill = useSelector(getSkill);
  const _maxSkill = useSelector((state) => getStat(state, "maxSkill"));
  const _stamina = useSelector((state) => getStat(state, "stamina"));
  const _maxStamina = useSelector((state) => getStat(state, "maxStamina"));
  const _luck = useSelector((state) => getStat(state, "luck"));
  const _maxLuck = useSelector((state) => getStat(state, "maxLuck"));
  const _inCombat = useSelector(getInCombat);
  const _pageNumber = useSelector(getPage);
  const _playerDead = useSelector(getPlayerDead);

  const getComponent = () => {
    console.log('this is a test')
    if (_playerDead) return <Death />;
    if (!_inCombat) return <StoryMain pageNumber={parseInt(_pageNumber)} />;
    if (_inCombat) {
      return (
        <Combat
          pageNumber={parseInt(_pageNumber)}
          skill={_skill}
          stamina={_stamina}
          maxStamina={_maxStamina}
          luck={_luck}
          maxLuck={_maxLuck}
        />
      );
    }
  };

  return (
    <div className="main">
      <Title />

      <Container>
        <Row>
          <Col className="px-1" xs={2}>
            <Stats
              skill={_skill}
              maxSkill={_maxSkill}
              stamina={_stamina}
              maxStamina={_maxStamina}
              luck={_luck}
              maxLuck={_maxLuck}
            />
            <Items />
          </Col>
          <Col className="storyMain p-4" xs={8}>
            {getComponent()}
          </Col>
          <Col className="px-1" xs={2}>
            <Tutorial />
            <Magic />
            <Libra />
            <Ailments />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
