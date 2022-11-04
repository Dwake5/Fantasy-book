import { Button } from "@chakra-ui/react";

const ButtonBase = (props) => <Button mb={2} {...props} />;

export const GreenButton = (props) => (
  <ButtonBase
    bg="green.300"
    _hover={{ bg: "green.500", color: "white" }}
    {...props}
  />
);

export const BlueButton = (props) => (
  <ButtonBase
    bg="blue.300"
    _hover={{ bg: "blue.500", color: "white" }}
    {...props}
  />
);

export const RedButton = (props) => (
  <ButtonBase
    bg="red.300"
    _hover={{ bg: "red.500", color: "white" }}
    {...props}
  />
);
