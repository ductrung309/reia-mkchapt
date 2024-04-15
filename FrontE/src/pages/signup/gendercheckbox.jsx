const gendercheck = ({ onCheckBoxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "Nam" ? "selected" : ""
          }`}
        >
          <span className="label-text">Nam</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 border-solid"
            checked={selectGender === "Nam"}
            onChange={() => {
              onCheckBoxChange("Nam");
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "Nu" ? "selected" : ""
          }`}
        >
          <span className="label-text">Nữ</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900 "
            checked={selectGender === "Nu"}
            onChange={() => {
              onCheckBoxChange("Nu");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default gendercheck;
