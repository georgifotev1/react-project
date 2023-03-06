import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();
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
        <h2>Log In</h2>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="form-element">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              {...register("email", { required: "Email is required!" })}
            />
          </div>
          <div className="form-element">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              {...register("password", { required: "Password is required!" })}
            />
          </div>
          <button className="form-element btn">Submit</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};
