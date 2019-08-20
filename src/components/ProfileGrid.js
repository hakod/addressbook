import React from "react";
import Profile from "./Profile";
import Loading from "./Loading";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { connect } from "react-redux";
import { setUsers } from "../redux/actions";
import Search from "./Search";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  width: 1200px;
  background: #f5f5f5;
  margin-top: 40px;
`;

const initialState = {
  items: [],
  prefetch: [],
  limitMet: false,
  loading: false,
  rerender: false
};

class ProfileGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.body.offsetHeight &&
        !this.props.users.filter
      ) {
        this.setState({ loading: true });
        this.getData();
      }
    }, 100);
  }
  componentDidMount() {
    this.setState({ rerender: true });
    this.getData();
  }
  componentDidUpdate() {
    fetch("https://randomuser.me/api/?results=50")
      .then(function(response) {
        return response.json();
      })
      .then(myjson => {
        this.setState({
          prefetch: myjson.results,
          items: this.props.users.filter
            ? this.props.users.nat
              ? this.props.users.allUsers
                  .filter(x =>
                    (x.name.first + " " + x.name.last).match(
                      this.props.users.filter.toLowerCase()
                    )
                  )
                  .filter(x => !this.props.users.nat.includes(x.nat))
              : this.props.users.allUsers.filter(x =>
                  (x.name.first + " " + x.name.last).match(
                    this.props.users.filter.toLowerCase()
                  )
                )
            : this.props.users.nat
            ? this.props.users.allUsers.filter(
                x => !this.props.users.nat.includes(x.nat)
              )
            : this.props.users.allUsers
        });
      });
  }
  getData = () => {
    if (!this.state.limit) {
      fetch("https://randomuser.me/api/?results=50")
        .then(function(response) {
          return response.json();
        })
        .then(myjson => {
          if (this.props.users.allUsers.length === 0) {
            this.props.setUsers(myjson.results);
            this.setState({ data: myjson.results });
          } else {
            if (
              this.state.loading === true &&
              this.props.users.allUsers.length <= 950
            ) {
              this.setState({
                loading: false
              });
              this.props.setUsers(this.state.prefetch);
            }
            if (this.state.data.length > 950) {
              this.setState({ limitMet: true });
            }
          }
        });
    }
  };

  render() {
    return (
      <Container>
        <Search />
        {this.state.items.length
          ? this.state.items.map((user, index) => {
              return <Profile key={index} user={user} />;
            })
          : "No users found"}
        {this.state.loading && !this.state.limitMet ? <Loading /> : null}
        {this.state.limitMet ? <p>End of users catalog</p> : null}
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
  { setUsers }
)(ProfileGrid);
