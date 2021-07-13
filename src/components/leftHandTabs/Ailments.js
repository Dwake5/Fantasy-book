import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../../assets/css/Stats.css";
import {
  getAliannaCurse, getPlague,
  getSpiritCurse
} from "../../redux/stats/selectors";

const Ailments = () => {
  const _havePlague = useSelector(getPlague);
  const _haveSpiritCurse = useSelector(getSpiritCurse);
  const _haveAliannaCurse = useSelector(getAliannaCurse);

  const haveAilment = _havePlague || _haveSpiritCurse || _haveAliannaCurse;

  if (!haveAilment) return null;
  return (
    <Container className="border text-center">
      <p className="h3">Ailments</p>
      {_havePlague && (
        <div className="mb-1 hoverItem">
          The Plague
          <span className="hoverText">
            <p>-3 Stamina per day</p> <p>This will be applied each morning.</p>
          </span>
        </div>
      )}
      {_haveSpiritCurse && (
        <div className="mb-1 hoverItem">
          Spirit's Curse
          <span className="hoverText">
            <p>1 extra Stamina loss</p>
            <p>
              Whenever you take damage an extra point will be incurred. (doesn't
              affect magic casting or viewing the spellbook)
            </p>
          </span>
        </div>
      )}
      {_haveAliannaCurse && (
        <div className="hoverItem">
          Curse of Alianna
          <span className="hoverText">
            <p>-2 Skill</p>
            <p>
              This affects skill rolls and combat, can not be recovered until
              the curse is lifted.
            </p>
          </span>
        </div>
      )}
    </Container>
  );
};

export default Ailments;
