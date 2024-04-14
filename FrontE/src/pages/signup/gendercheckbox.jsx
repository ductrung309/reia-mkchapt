const gendercheck = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text">Nam</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 border-solid"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={"label gap-2 cursor-pointer"}>
          <span className="label-text">Nữ</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 border-solid"
          />
        </label>
      </div>
    </div>
  );
};

export default gendercheck;
