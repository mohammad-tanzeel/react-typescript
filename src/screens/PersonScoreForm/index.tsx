import { useForm } from "react-hook-form";
// import "./App.css";

type Profile = {
  firstname: string;
  lastname: string;
  age: number;
};

function PersonScoreForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data) => {
    // console.log("hi");
    alert(JSON.stringify(data));
  });

  return (
    <main>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            {...register("firstname", {
              required: "First Name is required",
              minLength: { value: 5, message: "Min Length" },
              maxLength: { value: 12, message: "Max Length" },
            })}
            id="firstname"
            name="firstname"
            type="text"
          />
          {errors.firstname && (
            <div className="error">{errors.firstname.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastname">Last Name</label>
          <input
            {...register("lastname", {
              required: "Last Name is required",
            })}
            id="lastname"
            name="lastname"
            type="text"
          />
          {errors.lastname && (
            <div className="error">{errors.lastname.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            {...register("age", {
              required: "Age is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a number",
              },
            })}
            id="age"
            name="age"
            type="text"
          />
          {errors.age && <div className="error">{errors.age.message}</div>}
        </div>
        <button type="submit">Save</button>
      </form>
    </main>
  );
}

export default PersonScoreForm;
