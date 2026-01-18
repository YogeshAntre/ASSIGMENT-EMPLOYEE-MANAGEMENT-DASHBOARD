// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";

// export default function Login() {
//   const { login } = useAuth();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

   
//     if (username === "admin" && password === "admin123") {
//       login(); // redirect happens automatically
//     } else {
//       setError("Invalid credentials");
//     }
//   };

//   return (
//     <div className="center">
//       <form className="card login-card" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <input
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         {error && <p className="error">{error}</p>}

//         <button type="submit">Login</button>

//         <small>Demo: admin / admin123</small>
//       </form>
//     </div>
//   );
// }

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

    // ✅ Mock credentials
    if (username === "admin" && password === "admin123") {
      login(); // Dashboard will render automatically
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBCard className="text-black p-4" style={{ borderRadius: "25px" }}>
        <p className="text-center h1 fw-bold mb-5">Login</p>

        <MDBRow>
          {/* Left Image */}
          <MDBCol md="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Login"
            />
          </MDBCol>

          {/* Right Form */}
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