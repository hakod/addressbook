import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const User = styled.div`
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 150px;
  margin-top: 40px;
`;
const Text = styled.p`
  margin: 0;
  padding: 15px;
  width: 80%;
  text-align: left;
  background: #fff5ee;
  color: black;
  height: 15px;
  text-overflow: ellipsis;
  font-size: 13px;
`;

const Text2 = styled.p`
  margin: 0;
  padding: 15px;
  width: 100%;
  text-align: left;
  background: #fff5ee;
  color: black;
  height: 15px;
  text-overflow: ellipsis;
`;

const Image = styled.img`
  border-radius: 50%;
`;

const Button = styled.button`
  all: unset;
  height: 30px;
  width: 90px;
  color: white;
  background: #7fff00;
  border: 1px solid white;
  border-radius: 5%;
  cursor: pointer;
  text-align: center;
`;

const ImageContain = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  background: #db7093;
  padding: 15px;
`;
const ImageContain2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #db7093;
  padding: 15px;
`;

const Mod = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  open = () => {
    this.setState({ show: true });
  };
  close = () => {
    this.setState({ show: false });
  };

  render() {
    let user = this.props.user;
    const modal = this.state.show ? (
      <Modal>
        <Mod className="modal">
          <div>
            <ImageContain2>
              <Image src={user.picture.medium} />
              <Button onClick={() => this.close()}>Close</Button>
            </ImageContain2>
            <Text2>
              {user.name.first} {user.name.last}
            </Text2>
            <Text2>
              {user.location.street} {user.location.city} {user.location.state}{" "}
              {user.location.postcode}
            </Text2>
            <Text2>{user.phone}</Text2>
            <Text2>{user.cell}</Text2>
          </div>
        </Mod>
      </Modal>
    ) : null;
    return (
      <User>
        <ImageContain>
          <Image src={user.picture.thumbnail} />
          <Button onClick={() => this.open()}>More info</Button>
        </ImageContain>
        <Text>
          {user.name.first} {user.name.last} {user.nat}
        </Text>
        <Text>{user.login.username}</Text>
        <Text>{user.email}</Text>
        {modal}
      </User>
    );
  }
}

export default Profile;
