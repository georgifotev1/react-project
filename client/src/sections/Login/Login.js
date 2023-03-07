import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { handleAuth } from "../../hooks/fetch-data-hooks";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../utils/userData";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await handleAuth(data, "login");
      const userData = {
        email: response.data.email,
        accessToken: response.data.accessToken,
        userId: response.data._id,
      };
      setUserData(userData);
      navigate("/");
    } catch (err) {
      toast.error(err.response.data.message);
      return;
    }
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
    </section>
  );
};
