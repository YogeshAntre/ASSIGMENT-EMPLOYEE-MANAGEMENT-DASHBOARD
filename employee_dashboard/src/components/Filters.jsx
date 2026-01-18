 function Filters({ onChange }) {
    return (
      <div className="filters">
        <h5>Filters</h5>
        <input placeholder="Search name" onChange={(e) =>
          onChange((f) => ({ ...f, name: e.target.value }))} />
        <select onChange={(e) =>
          onChange((f) => ({ ...f, gender: e.target.value }))}>
          <option value="">Gender</option>
          <option>Male</option><option>Female</option>
        </select>
        <select onChange={(e) =>
          onChange((f) => ({ ...f, status: e.target.value }))}>
          <option value="">Status</option>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
      </div>
    );
  }

  export default Filters;
  