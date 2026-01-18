import { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBCard
} from "mdb-react-ui-kit";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      login();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBCard className="text-black p-4" style={{ borderRadius: "25px" }}>
        <p className="text-center h1 fw-bold mb-5">Login</p>

        <MDBRow>
          <MDBCol md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Login"
            />
          </MDBCol>

          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <MDBInput
                className="mb-4"
                label="Username"
                size="lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <MDBInput
                className="mb-4"
                label="Password"
                type="password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox label="Remember me" />
              </div>

              {error && <p className="text-danger">{error}</p>}

              <MDBBtn type="submit" className="mb-4 w-100" size="lg">
                Sign in
              </MDBBtn>

              <p className="text-center">
                Demo Login → <b>admin / admin123</b>
              </p>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
