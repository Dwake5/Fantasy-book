import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import {
  getPlague,
  getSpiritCurse,
  getAliannaCurse,
} from "../../redux/stats/selectors";

const Ailments = () => {
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);
  const _haveAliannaCurse = useSelector(getAliannaCurse);

  const [haveAilment, setHaveAilment] = useState(false);

  useEffect(() => {
    if (_havePlague || _haveSpiritCurse || _haveAliannaCurse) {
      setHaveAilment(true);
    } else {
      setHaveAilment(false);
    }
  }, [_havePlague, _haveSpiritCurse, _haveAliannaCurse]);

  if (!haveAilment) return null;
  return <Container className="border text-center">
    <p className="h3">Ailments</p>
    {_havePlague && <p className="mb-1 hoverItem">The Plague <span className="hoverText"><p>-3 Stamina per day</p> This will be applied each morning.</span></p>}
    {_haveSpiritCurse && <p className="mb-1 hoverItem">Spirit's Curse <span className="hoverText"><p>1 extra Stamina loss</p> Whenever you take damage an extra point will be occured, (doesn't affect magic cost or viewing the spellbook).</span></p>}
    {_haveAliannaCurse && <p className="hoverItem">Curse of Alianna <span className="hoverText"><p>-2 Skill</p> This affects skill rolls and combat, can not be recovered until the curse is lifted.</span></p>}
  </Container>;
};

export default Ailments;
