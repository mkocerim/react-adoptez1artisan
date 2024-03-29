import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Can } from "../../ability/can";
import useApi from "../Hooks/useApi";

const Header = (props) => {
  console.log(">> Header props:", props);
  const api = useApi();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     api
  //       .get("user/AppData")
  //       .then((response) => {
  //         console.log(">>APP DATA RESP", response);
  //         setUser(response.data.data.user);
  //       })
  //       .catch((err) => {
  //         console.log(">>ERR", err);
  //       });
  //   }
  // }, []);
  const onLogoutBtnClick = () => {
    api
      .get("auth/logout")
      .then((response) => {
        console.log(">>LOGOUT RESP", response);
      })
      .catch((err) => {
        console.log("ERR", err);
      })
      .finally(() => {
        localStorage.removeItem("token");
        window.location.href = "/#";
        setTimeout(() => {
          window.location.reload();
        }, 111);
      });
  };

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Api Tutorial</span>
        </a>
        Token:{props.authState.token}
        {props.appDataState.appData ? (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <strong className="me-2 py-2">
              {props.appDataState.appData.user.fullname}
            </strong>

            <Can I="manage" a="all">
              <a className="btn btn-primary me-2 py-2" href="#/admin/dashboard">
                Admin
              </a>
            </Can>

            <button
              className="btn btn-primary me-2 py-2"
              onClick={onLogoutBtnClick}
            >
              LogOut
            </button>
          </nav>
        ) : (
          <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a className="btn btn-primary me-3 py-2" href="#/login">
              Login
            </a>
            <a className="btn btn-primary  py-2" href="#/register">
              Register
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  console.log(">> HEADER MAP STATE", state);
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(Header);
