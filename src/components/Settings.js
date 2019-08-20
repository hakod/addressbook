import React from "react";
import { connect } from "react-redux";
import { filterNat } from "../redux/actions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  margin-top: 50px;
`;

const Check = styled.div`
  margin: 40px;
  transform: scale(1.5);
`;

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CH: true,
      ES: true,
      FR: true,
      GB: true
    };
  }
  check = e => {
    const name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
    this.props.filterNat(name);
  };
  render() {
    return (
      <Container>
        <Check>
          <input
            onChange={this.check}
            checked={
              this.props.users.nat ? !this.props.users.nat.includes("CH") : true
            }
            type="checkbox"
            id="CH"
            name="CH"
          />
          <label for="CH">CH</label>
        </Check>
        <Check>
          <input
            onChange={this.check}
            checked={
              this.props.users.nat ? !this.props.users.nat.includes("ES") : true
            }
            type="checkbox"
            id="ES"
            name="ES"
          />
          <label for="ES">ES</label>
        </Check>
        <Check>
          <input
            onChange={this.check}
            checked={
              this.props.users.nat ? !this.props.users.nat.includes("FR") : true
            }
            type="checkbox"
            id="FR"
            name="FR"
          />
          <label for="FR">FR</label>
        </Check>
        <Check>
          <input
            onChange={this.check}
            checked={
              this.props.users.nat ? !this.props.users.nat.includes("GB") : true
            }
            type="checkbox"
            id="GB"
            name="GB"
          />
          <label for="GB">GB</label>
        </Check>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const users = state;
  return users;
}

export default connect(
  mapStateToProps,
  { filterNat }
)(Settings);
