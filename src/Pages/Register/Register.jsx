import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import swal from "sweetalert";

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
        " Password should have at least  6 characters including one uppercase letter, and one special character!"
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser(name, image);
        swal("Good job!", "Successfully Registered!", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setPassError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    setPassError("");
    googleLogin()
      .then((result) => {
        console.log(result.user);
        swal("Good job!", "Successfully Logged in!", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setPassError(err.message);
      });
  };

  return (
    <div>
      <div className="bg-[#F0F2F5]">
        <div className="bg-[#00040F] h-[85px]"></div>
        <div className="max-w-xl mx-auto py-10">
          <div className="px-10 py-16 bg-white rounded-lg border border-t-gray-200">
            <h1 className="text-2xl text-[#2d385e] font-semibold text-center mb-2">
              Register for free!
            </h1>
            <p className="text-center text-sm text-[#44525f] mb-3">
              Already have an account?{"  "}
              <Link className="text-[#4f77ff]" to={"/login"}>
                Go Login!
              </Link>
            </p>

            {passError && (
              <p className="text-sm text-red-500 text-center">{passError}</p>
            )}
            <form className="mt-8" onSubmit={handleRegister}>
              <input
                className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-4"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-4"
                type="text"
                name="image"
                placeholder="Image URL (Optional)"
              />
              <input
                className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-4"
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <div className="relative">
                <input
                  className="px-5 py-2 outline-none border border-gray-200 rounded-md w-full mb-2"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <span
                  className="text-lg absolute top-3 right-4 text-stone-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default Register;
