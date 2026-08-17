import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const success = login(data.email, data.password);

    if (success) {
      navigate("/");
    } else {
      alert("Email və ya şifrə yanlışdır!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-pink-500">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email daxil edin",
          })}
          className="mb-2 w-full rounded-lg border p-3"
        />

        {errors.email && (
          <p className="mb-3 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Şifrə daxil edin",
            minLength: {
              value: 6,
              message: "Şifrə ən azı 6 simvol olmalıdır",
            },
          })}
          className="mb-2 w-full rounded-lg border p-3"
        />

        {errors.password && (
          <p className="mb-3 text-sm text-red-500">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full rounded-lg bg-pink-500 py-3 font-semibold text-white hover:bg-pink-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;