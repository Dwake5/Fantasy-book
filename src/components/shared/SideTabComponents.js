import { Box, Text } from "@chakra-ui/layout";

export const SideTabContainer = ({ children }) => (
  <Box
    textAlign="center"
    borderRadius="5px"
    bgColor="rgb(225, 210, 141)"
    borderColor="black"
    borderWidth={1}
    p={2}
    mb={2}
  >
    {children}
  </Box>
);

export const SideTabHeader = (props) => (
  <Text fontSize="2xl" fontWeight='500' textAlign="center" pb={2} {...props} />
);

export const SideTabSubHeader = (props) => (
  <Text fontSize="xl" fontWeight='500' textAlign="center" pb={2} {...props} />
);
