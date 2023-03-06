import { useForm } from "react-hook-form";
import { handleAuth } from "../../hooks/fetch-data-hooks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./register.css";

export const Register = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    handleAuth(data, "register");
    navigate("/");
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
    </section>
  );
};
