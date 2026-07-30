import { useState } from "react";
function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const handleSubmit = () => {
    addEmployee(name);
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập tên nhân viên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
export default EmployeeForm;