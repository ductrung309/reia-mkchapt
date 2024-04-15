import { Link } from "react-router-dom";
import GenderCheck from "./gendercheckbox.jsx";
import { useState } from "react";
import useSignup from "../../hook/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Vào với
          <span className="text-blue-500"> Tròn</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Họ và tên</span>
            </label>
            <input
              value={inputs.fullname}
              onChange={(e) =>
                setInputs({ ...inputs, fullname: e.target.value })
              }
              type="text"
              placeholder="Vd: Lại Đức Trung"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Tên tài khoản</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="Nhập tên tài khoản"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Mật khẩu</span>
            </label>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              type="password"
              placeholder="********"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Nhập lại mật khẩu</span>
            </label>
            <input
              value={inputs.confirmpassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmpassword: e.target.value })
              }
              type="password"
              placeholder="********"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheck
            onCheckBoxChange={handleCheckBox}
            selectGender={inputs.gender}
          />

          <Link
            to="/login"
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Đã có tài khoản?
          </Link>

          <div>
            <button disabled={loading} className="btn btn-block btn-sm mt-2">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Đăng kí"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
