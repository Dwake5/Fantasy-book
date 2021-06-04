import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import tutorialData from "../assets/tutorialData";

const TutorialModal = () => {
  const [faqActiveKey, setFaqActiveKey] = useState(0);

  const handleFaqClick = (i) => setFaqActiveKey(faqActiveKey === i ? 0 : i)

  return (
    <Accordion activeKey={faqActiveKey} className="mb-5 box-shadow">
      {tutorialData.map((tutorial, i) => (
        <Card key={i}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey={i + 1}
            onClick={() => handleFaqClick(i + 1)}
          >
            <h2>{tutorial.header}</h2>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i + 1}>
            <Card.Body dangerouslySetInnerHTML={{ __html: tutorial.info }} />
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default TutorialModal;
