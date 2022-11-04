import React from "react";
import {
  Table,
  Thead,
  TableContainer,
  Tbody,
  Tr,
  Td,
  Th,
  Box,
} from "@chakra-ui/react";

const FIRST_WIDTH = '120px'
const TableTdHeading = (props) => <Td pl={2} pr={0} w={FIRST_WIDTH} {...props} />;
const TableTh = (props) => <Th px={0} fontSize="md" width="auto" {...props} />;
const TableTd = (props) => <Td px={0} width="auto" {...props} />;

const TestLuckTable = (props) => (
  <Box
    borderStyle="solid"
    borderWidth={1}
    borderColor="gray.400"
    borderRadius={4}
    {...props}
  >
    <TableContainer>
      <Table variant="bordered" sx={{tableLayout: 'fixed'}}>
        <thead>
          <Tr borderBottom="1px">
            <TableTh width={FIRST_WIDTH} />
            <TableTh>0</TableTh>
            <TableTh>1</TableTh>
            <TableTh>2</TableTh>
            <TableTh>3</TableTh>
            <TableTh>4</TableTh>
            <TableTh>5</TableTh>
            <TableTh>6</TableTh>
            <TableTh>7</TableTh>
            <TableTh>8</TableTh>
            <TableTh>9</TableTh>
            <TableTh>10</TableTh>
            <TableTh>11</TableTh>
            <TableTh>12+</TableTh>
          </Tr>
        </thead>
        <tbody>
          <Tr>
            <TableTdHeading>Normal</TableTdHeading>
            <TableTd>0%</TableTd>
            <TableTd>0%</TableTd>
            <TableTd>2.7%</TableTd>
            <TableTd>8.3%</TableTd>
            <TableTd>16.7%</TableTd>
            <TableTd>27.8%</TableTd>
            <TableTd>41.7%</TableTd>
            <TableTd>58.3%</TableTd>
            <TableTd>72.2%</TableTd>
            <TableTd>83.3%</TableTd>
            <TableTd>91.7%</TableTd>
            <TableTd>97.2%</TableTd>
            <TableTd>100%</TableTd>
          </Tr>
          <Tr>
            <TableTdHeading>Luck Amulet</TableTdHeading>
            <TableTd>0%</TableTd>
            <TableTd>2.7%</TableTd>
            <TableTd>8.3%</TableTd>
            <TableTd>16.7%</TableTd>
            <TableTd>27.8%</TableTd>
            <TableTd>41.7%</TableTd>
            <TableTd>58.3%</TableTd>
            <TableTd>72.2%</TableTd>
            <TableTd>83.3%</TableTd>
            <TableTd>91.7%</TableTd>
            <TableTd>97.2%</TableTd>
            <TableTd>100%</TableTd>
            <TableTd>100%</TableTd>
          </Tr>
        </tbody>
      </Table>
    </TableContainer>
  </Box>
);

export default TestLuckTable;
