function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Danh sách nhân viên</h2>
      <ul>
        {employees.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </div>
  );
}
export default EmployeeList;