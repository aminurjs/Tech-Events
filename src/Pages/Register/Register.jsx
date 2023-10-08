import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, googleLogin, updateUser } = useContext(AuthContext);
  const [passError, setPassError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const image = form.get("image");
    setPassError("");

    if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/.test(password)) {
      setPassError(
        "Password must be 6 characters including one uppercase letter, and one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registered");
        updateUser(name, image);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged in");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="bg-[#F0F2F5]">
        <div className="bg-[#00040F] h-[85px]"></div>
        <div className="max-w-xl mx-auto py-10">
          <div className="px-10 py-16 bg-white rounded-lg">
            <h1 className="text-2xl text-[#2d385e] font-semibold text-center mb-2">
              Register for free!
            </h1>
            <p className="text-center text-sm text-[#44525f] mb-10">
              Already have an account?{"  "}
              <Link className="text-[#4f77ff]" to={"/login"}>
                Go Login!
              </Link>
            </p>
            <form onSubmit={handleRegister}>
              <input
                className="w-full p-2 mb-5 outline-none text-slate-900 text-base border-b border-stone-300 focus:border-stone-700"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                className="w-full p-2 mb-5 outline-none text-slate-900 text-base border-b border-stone-300 focus:border-stone-700"
                type="text"
                name="image"
                placeholder="Image URL (Optional)"
              />
              <input
                className="w-full p-2 mb-5 outline-none text-slate-900 text-base border-b border-stone-300 focus:border-stone-700"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <div className="relative">
                <input
                  className="w-full p-2 mb-2 outline-none text-slate-900 text-base border-b-2 border-stone-300 focus:border-stone-700"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="text-lg absolute top-2 right-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
              {passError && <p className="text-sm text-red-500">{passError}</p>}
              <button className="w-full mt-6 mb-10 bg-gradient-to-r bg-[#4f77ff] rounded-lg p-3 text-white uppercase font-medium duration-300">
                Sign in with email
              </button>
            </form>
            <p className="text-center -mb-3.5">
              <span className="bg-white z-10 inline-block px-2">Or</span>
            </p>
            <div className="w-full h-[1px] bg-stone-500"></div>
            <div className="text-center mt-8">
              <button
                onClick={handleGoogleLogin}
                className="block w-full p-2 border-2 border-stone-500 font-medium rounded-lg mb-5"
              >
                <FcGoogle className="inline text-2xl mr-2"></FcGoogle>
                Continue with Google
              </button>
            </div>
          </div>
          <div>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    background: "green",
                    color: "white",
                  },
                },
                error: {
                  style: {
                    background: "red",
                    color: "white",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
