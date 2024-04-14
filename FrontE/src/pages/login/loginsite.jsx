const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-85">
        <h1 className="text-3x1 font-semibold text-center text-gray-300">
          Đăng
          <span className="text-blue-500"> Nhập</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Tên đăng nhập</span>
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
              placeholder="*********"
              className="w-full input input-bordered h-10"
            />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Không"} có tài khoản?
          </a>

          <button className="btn btn-block btn-sm mt-2">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
