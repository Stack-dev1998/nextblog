import React, { Component } from "react";
import Router from "next/router";
import axios from "axios";
import { Cookies } from "react-cookie";

const cookie = new Cookies();
export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      axios("http://localhost:5000/users/authenticate", {
        method: "post",
        headers: {
          "x-access-token": cookie.get("token"),
        },
        withCredentials: true,
      })
        .then((res) => {
          if (res.status === 200) {
            this.setState({ isLoading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          this.setState({ loading: false });
          Router.push("/admin/login");
        });
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <h2 style={{ textAlign: "center", marginTop: "40px" }}>
              Redirecting...
            </h2>
          ) : (
            <AuthComponent {...this.props} />
          )}
        </div>
      );
    }
  };
}
