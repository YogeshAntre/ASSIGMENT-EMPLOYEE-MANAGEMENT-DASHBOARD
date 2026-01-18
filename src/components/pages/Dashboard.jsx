import { useEffect, useState } from "react";


import { getEmployees, saveEmployees } from "../utils/storage";
import SummaryCards from "../SummaryCards";
import EmployeeForm from "../EmployeeForm";
import EmployeeTable from "../EmployeeTable";
import Filters from "../Filters";
import Login from "./Login";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useAuth();
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);
  const [filters, setFilters] = useState({ name: "", gender: "", status: "" });

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  useEffect(() => {
    saveEmployees(employees);
  }, [employees]);
    console.log('dashbord',employees)

  const filtered = employees.filter((e) =>
    (!filters.name || e.name.toLowerCase().includes(filters.name.toLowerCase())) &&
    (!filters.gender || e.gender === filters.gender) &&
    (!filters.status || e.active.toString() === filters.status)
  );

  return (
    <div className="container">
    <header className="d-flex align-items-center mb-3 position-relative">

  <h1 className="position-absolute start-50 translate-middle-x mb-0">
    Employee Dashboard 
  </h1>


  <div className="ms-auto">
    <button className="btn btn-danger" onClick={logout}>
      <i className="bi bi-box-arrow-right me-1"></i> Logout
    </button>
  </div>
</header>



      <SummaryCards employees={employees} />

      <EmployeeForm
        editing={editing}
        onSave={(emp) => {
          setEmployees((prev) =>
            editing
              ? prev.map((e) => (e.id === emp.id ? emp : e))
              : [...prev, emp]
          );
          setEditing(null);
        }}
      />
    <hr></hr>
      <Filters onChange={setFilters} />

      <EmployeeTable
        employees={filtered}
        onEdit={setEditing}
        onDelete={(id) =>
          confirm("Delete employee?") &&
          setEmployees((prev) => prev.filter((e) => e.id !== id))
        }
      />
  
    </div>
  );
}

export default Dashboard;
