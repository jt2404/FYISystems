import { LoginIn, RegisterIn } from "../../services/AuthServices";
import { AuthDetails, setErr } from "./AuthProfile";

export const loginAction = (data, navigate) => (dispatch) => {
  LoginIn(data)
    .then((res) => {
      localStorage.setItem("Token", res?.data.token);
      localStorage.setItem("role", res?.data?.user?.role);

      const role = res?.data?.user?.role;

      if (role === "Admin") {
        navigate("/dashboard");
      } else if (role === "FinancialAdviser") {
        navigate("/FinancialAdviserDashboard/FinancialAdviser/Appointments");
      }

      dispatch(AuthDetails(res));
    })
    .catch((error) => {
      dispatch(
        setErr({
          message: "Invalid email or password",
          error,
        })
      );
    });
};


export const registerAction = (data ,navigate) => (dispatch) => {
    RegisterIn(data)
      .then((res) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("error", error);
      });
};
