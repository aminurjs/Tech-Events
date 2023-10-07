import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    login(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged in");
        // updateUser(name);
        // navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("password doesn't match");
      });
  };
  return (
    <div className="bg-[#F0F2F5]">
      <div className="bg-[#00040F] h-[81px]"></div>
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
            <input
              className="w-full p-2 mb-6 outline-none text-slate-900 text-base border-b border-stone-300 focus:border-stone-700"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            {/* <p className="text-right mb-6">
              <a
                href="#"
                className=" text-stone-500 hover:text-[#4f77ff] text-base mb-2"
              >
                Forgot password?
              </a>
            </p> */}
            <button className="w-full mb-10 bg-gradient-to-r bg-[#4f77ff] rounded-lg p-3 text-white uppercase font-medium duration-300">
              Login
            </button>
          </form>
          <p className="text-center -mb-3.5">
            <span className="bg-white z-10 inline-block px-2">Or</span>
          </p>
          <div className="w-full h-[1px] bg-stone-500"></div>
          <div className="text-center mt-8">
            <button className="block w-full p-2 border-2 border-stone-500 font-medium rounded-lg mb-5">
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
