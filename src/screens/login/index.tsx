import React, { useState } from "react";

interface IUser {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  //   const [username, setUsername] = React.useState<IUser>({ email: "" });

  const [user, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData({ ...user, [name]: value });
  };
  return (
    <div className="container">
      <div className="w-50">
        <form className="card p-4">
          <h1>Login Form</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>{JSON.stringify(user)}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
