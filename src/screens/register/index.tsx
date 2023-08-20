import React, { useEffect, useState } from "react";
import Button from "../../component/button";

interface IUser {
  fullname: string;
  email: string;
  password: string;
  department: number;
}
interface IDepartment {
  label: string;
  value: number;
}
const Registartion: React.FC = () => {
  //   const [username, setUsername] = React.useState<IUser>({ email: "" });
  const [departmentList, setDepartmentList] = useState<IDepartment[]>([]);
  const [user, setUserData] = useState<IUser>({
    fullname: "",
    email: "",
    password: "",
    department: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserData({ ...user, [name]: value });
  };
  const handleSelect = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...user, [name]: value });
  };
  useEffect(() => {
    const dept: IDepartment[] = [
      {
        label: "Department1",
        value: 1,
      },
      {
        label: "Departmen2",
        value: 2,
      },
    ];
    setDepartmentList(dept);
  }, []);
  return (
    <div className="container">
      <div className="w-50">
        <form className="card p-4">
          <h1>Registartion</h1>
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="fullname"
              name="fullname"
              className="form-control"
              id="fullname"
              aria-describedby="fullnameHelp"
              value={user.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <select
              className="form-select"
              name="department"
              onChange={handleSelect}
            >
              <option selected disabled>
                Choose one
              </option>
              {departmentList &&
                departmentList.map((option) => {
                  return <option value={option.value}>{option.label}</option>;
                })}
            </select>
          </div>
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

export default Registartion;
