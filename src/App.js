import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Magic from "./components/magic/Magic";
import Stats from "./components/leftHandTabs/Stats";
import Items from "./components/leftHandTabs/Items";
import StoryMain from "./components/StoryMain";
import Title from "./components/Title";
import Libra from "./components/leftHandTabs/Libra";
import { useSelector } from "react-redux";
import { getSkill, getStat } from "./redux/stats/selectors";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import Tutorial from "./components/tutorial/Tutorial";
import Death from "./components/Death";
import Ailments from "./components/leftHandTabs/Ailments";
import Combat from "./components/combat/Combat";
import { getInCombat } from "./redux/combat/selectors";
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
          <Col className="p-0" xs={2}>
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
          <Col className="p-0 storyMain" xs={8}>
            {getComponent()}
          </Col>
          <Col className="p-0" xs={2}>
            <Magic />
            <Tutorial />
            <Libra />
            <Ailments />
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
