import GenderCheck from "./gendercheckbox.jsx";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Vào với
          <span className="text-blue-500"> Tròn</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Họ và tên</span>
            </label>
            <input
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
              type="text"
              placeholder="********"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheck />

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Đã có tài khoản?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Đăng kí</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
