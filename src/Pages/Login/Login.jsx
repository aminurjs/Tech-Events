import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged in");
        // updateUser(name);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Invalid Password");
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged in");
        // navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };
  return (
    <div className="bg-[#F0F2F5]">
      <div className="bg-[#00040F] h-[85px]"></div>
      <div className="max-w-xl mx-auto py-10">
        <div className="px-10 py-16 bg-white rounded-lg">
          <h1 className="text-2xl text-[#2d385e] font-semibold text-center mb-2">
            Login to your account
          </h1>
          <p className="text-center text-sm text-[#44525f] mb-10">
            {"Don't"} have an account?{" "}
            <Link className="text-[#4f77ff]" to={"/register"}>
              Register!
            </Link>
          </p>
          <form onSubmit={handleLogin}>
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
            {/* <p className="text-right mb-6">
              <a
                href="#"
                className=" text-stone-500 hover:text-[#4f77ff] text-base mb-2"
              >
                Forgot password?
              </a>
            </p> */}
            <button className="w-full mt-6 mb-10 bg-gradient-to-r bg-[#4f77ff] rounded-lg p-3 text-white uppercase font-medium duration-300">
              Login
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
              <AiOutlineGoogle className="inline text-2xl mr-2"></AiOutlineGoogle>
              Continue with Google
            </button>
          </div>
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
  );
};

export default Login;
