import React, { useState } from "react";
import useApi from "../../components/Hooks/useApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = useApi();

  const onLoginBtnClick = () => {
    //alert(`${email} ve ${password}`)

    const postData = {
      email,
      password,
    };
    console.log(">> POSTDATA", postData);

    api
      .post("auth/login", postData)
      .then((response) => {
        console.log(">>RES", response);
        console.log(">>TOKEN", response.data.data.token);

        if (response.data === "success") {
          localStorage.setItem("token", response.data.data.token);
          window.location.href = "/#";
          setTimeout(() => {
            window.location.reload();
          }, 111);
        } else {
          alert("Hatalı eposta veya şifre girildi.");
        }
      })
      .catch((err) => {
        console.log(">>ERR", err);
        alert(err.response.data.errorMessage);
      });
  };

  return (
    <main>
      <div className="row row-cols-1 row-cols-md-4 mb-3 text-center">
        <div className="col-12">
          <label
            htmlFor="email"
            className="form-label"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="E-Mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="col-12">
          <label
            htmlFor="password"
            className="form-label"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            E-mail
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="col-12">
          <div className="d-grid gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={onLoginBtnClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
