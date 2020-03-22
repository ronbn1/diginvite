import React, { useState, useEffect, useContext } from "react";
import Context from "../Context";
import AdminNavBar from "../components/NavBar/AdminNavBar";
import Generator from "../components/Generators/Generator";
import styled from "styled-components";

const InviteManagement = ({ match }) => {
  const [data, setData] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const [loading, setLoading] = useState(true);
  const context = useContext(Context);

  const handleSubmit = data => {
    setData(data);
    context.updateUserData(data);
  };

  const fetchUser = async () => {
    const user = await context.getUserData(match.params.id);
    setData(user.data);
    if (match.params.id === context.userState.id) {
      setIsOwner(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, [context.userState]);

  return (
    <Container>
      {!loading && (
        <Generator
          invitation={match.params.id}
          data={data}
          isOwner={isOwner}
          onSubmit={handleSubmit}
        />
      )}
    </Container>
  );
};
const Container = styled.div``;
export default InviteManagement;
