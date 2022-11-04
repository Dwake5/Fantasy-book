import React from "react";
// import { Modal } from "react-bootstrap";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import "../../assets/css/Tutorial.css";
import { BlueButton } from "../shared";
import { SideTabContainer, SideTabHeader } from "../shared/SideTabComponents";
import { TutorialModalContent } from "./tutorial/TutorialModalContent";

export const Tutorial = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <SideTabContainer>
      <SideTabHeader>Tutorial</SideTabHeader>
      <BlueButton onClick={onOpen}>View</BlueButton>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay/>
        <ModalContent minW='min(1000px,80%)'>
          <ModalHeader>Tutorial</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TutorialModalContent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </SideTabContainer>
  );
};
