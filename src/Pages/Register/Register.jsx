import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);
    if (password.length < 6) {
      toast.error("Password is less than 6 characters");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password don't have a capital letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Registered");
        // updateUser(name);
        // navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

  return (
    <div>
      <div className="bg-[#F0F2F5]">
        <div className="bg-[#00040F] h-[81px]"></div>
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
                type="email"
                name="email"
                placeholder="Email Address"
                required
              />
              <input
                className="w-full p-2 mb-2 outline-none text-slate-900 text-base border-b border-stone-300 focus:border-stone-700"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button className="w-full mt-6 mb-10 bg-gradient-to-r bg-[#4f77ff] rounded-lg p-3 text-white uppercase font-medium duration-300">
                Sign in with email
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
