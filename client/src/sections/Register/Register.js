import { useForm } from "react-hook-form";
import "./register.css";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    const errors = Object.values(error).map((er) => er.message);
    errors.map((err) => toast.error(err));
  };
  return (
    <section className="section auth-section">
      <div className="auth-section-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-element">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              {...register("email", { required: "Email is required!" })}
            />
          </div>
          <div className="form-element">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              {...register("username", { required: "Username is required!" })}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              {...register("password", { required: "Password is required!" })}
            />
          </div>
          <div className="form-element">
            <label htmlFor="repass">Repeat Password:</label>
            <input
              type="password"
              {...register("repass", {
                required: "Repeat password is required!",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Passwords don`t match!";
                  }
                },
              })}
            />
          </div>
          <button className="form-element btn">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};
