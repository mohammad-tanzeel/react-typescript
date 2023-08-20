import React, { useState } from "react";
import Button from "../../component/button";
import { useForm } from "react-hook-form";

interface IUserLogin {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();
  //   const [username, setUsername] = React.useState<IUser>({ email: "" });

  //   const [user, setUserData] = useState<IUserLogin>({
  //     email: "",
  //     password: "",
  //   });
  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //     const { name, value } = e.target;
  //     setUserData({ ...user, [name]: value });
  //   };
  //   //   const handleClick = () => {
  //     console.log("user", user);
  //   };

  //   const handleClick = (): void => {
  //     console.log("Button was clicked!");
  //   };
  const onSubmit = (data: IUserLogin) => {
    console.log(data);
    // setJson(JSON.stringify(data));
  };
  return (
    <div className="container mt-3">
      <div className="w-50">
        <form onSubmit={handleSubmit(onSubmit)} className="card p-4">
          <h1>Login Form</h1>
          <div className="form-group mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email"
            />
            {errors.email && (
              <div className="error text-danger">{errors.email.message}</div>
            )}
          </div>
          <div className="form-group mb-3">
            <input
              className="form-control"
              id="exampleInputPassword1"
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
            />
            {errors.password && (
              <div className="error">{errors.password.message}</div>
            )}
          </div>
          <Button
            // handleClick=''
            label="Submit"
            classStyle="btn btn-primary"
          />

          {/* <p>{JSON.stringify(user)}</p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
