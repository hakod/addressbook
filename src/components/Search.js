import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { filterSearch } from "../redux/actions";

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 1200px;
  position: fixed;
  background: #afeeee;
  margin: 0;
  padding: 0;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  search = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };
  componentDidUpdate() {
    this.props.filterSearch(this.state.name);
  }
  render() {
    return (
      <Bar>
        <input
          value={this.state.name}
          type="text"
          onChange={e => this.search(e)}
        />
      </Bar>
    );
  }
}

export default connect(
  null,
  { filterSearch }
)(Search);
