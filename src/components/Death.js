import React from "react";
import { Container } from "react-bootstrap";

// Handle death
const Death = () => {
  return (
    <Container>
      <div className="text-center mt-5">
        <h3 className="mb-4">You have died!</h3>
        <button>Restart</button>
      </div>
    </Container>
  );
};

export default Death;
