import React, { useState, useEffect, useContext } from "react";
import Context from "../../Context";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Rsvps = props => {
  const context = useContext(Context);
  const [invited, setInvited] = useState([]);
  const fetchInvited = async id => {
    const invited = await context.getInvited(id);
    setInvited(invited.data);
  };
  useEffect(() => {
    const id = context.userState.id;
    fetchInvited(id);
  }, []);

  return (
    <Container>
      <h2>אורחים שאישרו הגעה</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <MyTableHead className="bold">
            <TableRow>
              <TableCell align="center">שם</TableCell>
              <TableCell align="center">טלפון</TableCell>
              <TableCell align="center">כמות אנשים</TableCell>
              <TableCell align="center">סטאטוס</TableCell>
            </TableRow>
          </MyTableHead>
          <TableBody>
            {invited.map((i, index) => (
              <TableRow key={index}>
                <TableCell align="center">{i.name}</TableCell>
                <TableCell align="center">{i.phone}</TableCell>
                <TableCell align="center">{i.amount}</TableCell>
                <TableCell align="center">{i.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
const Container = styled.div`
  padding: 2em;
  h2 {
    text-align: center;
    font-size: 1.5em;
    padding: 1em;
  }
`;
const MyTableHead = styled(TableHead)`
  background-color: #eeeeee;
`;
export default Rsvps;
