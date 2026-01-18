 const SummaryCards=({ employees })=> {
    const active = employees.filter((e) => e.active).length;
    return (
      <div className="summary">
        <div>Total Employees: {employees.length}</div>
        <div>Active: {active}</div>
        <div>Inactive: {employees.length - active}</div>
      </div>
    );
  }
  export default SummaryCards;
  