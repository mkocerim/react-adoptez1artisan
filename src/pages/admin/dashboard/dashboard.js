import { connect } from "react-redux";
import { Can } from "../../../ability/can";

const Dashboard = (props) => {
  return (
    <main>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <strong>Admin Dashboard Sayfası</strong>
      </div>
      <br />

      <Can I="read" a="user_management">
        <br />
        Yes you can read a user
      </Can>
      <Can I="update" a="user_management">
        Yes you can update a user
      </Can>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(">>DASHBOARD STATE", state);

  return {
    authState: state.authState,

    // ...state,
  };
};

export default connect(mapStateToProps)(Dashboard);
