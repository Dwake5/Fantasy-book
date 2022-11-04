import React, { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import Items from "./components/sideTabs/Items";
import Libra from "./components/sideTabs/Libra";
import Magic from "./components/sideTabs/magic/Magic";
import Stats from "./components/sideTabs/Stats";
import StoryMain from "./components/StoryMain";
import { Title } from "./components/Title";
import { getSkill, getStat } from "./redux/stats/selectors";

import Combat from "./components/combat/Combat";
import Death from "./components/Death";
import Ailments from "./components/sideTabs/Ailments";
import { Tutorial } from "./components/sideTabs/Tutorial";
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

  const getComponent = useMemo(() => {
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
  }, [
    _inCombat,
    _luck,
    _maxLuck,
    _maxStamina,
    _pageNumber,
    _playerDead,
    _skill,
    _stamina,
  ]);

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
            {getComponent}
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

const myStyle = {
  backgroundImage:
    "url('https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg')",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  fontSize: '14px'
};

const AppWrapper = () => (
  <Provider store={store}>
    <div style={myStyle}>
      <App />
    </div>
  </Provider>
);

export default AppWrapper;
