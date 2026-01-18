// import { useEffect, useState } from "react";

// export default function EmployeeForm({ editing, onSave }) {
//   const [form, setForm] = useState({
//     id: Date.now(),
//     name: "",
//     gender: "",
//     dob: "",
//     state: "",
//     active: true,
//     image: ""
//   });
  
//   useEffect(() => {
//     if (editing) setForm(editing);
//   }, [editing]);

//   const handleImage = (e) => {
//     const reader = new FileReader();
//     reader.onload = () => setForm({ ...form, image: reader.result });
//     reader.readAsDataURL(e.target.files[0]);
//   };

//   const submit = () => {
//     if (!form.name || !form.gender) return alert("Validation failed");
//     onSave({ ...form, id: editing?.id || Date.now() });
//     setForm({ name: "", gender: "", dob: "", state: "", active: true, image: "" });
//     console.log('data is ',form)
//   };

//   return (
   
//     <div className="row g-3 align-items-center ">
//       <h3>{editing ? "Edit" : "Add"} Employee Form</h3>

//       <div  className="col-auto">
//       <input placeholder="Name" value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })} />
//       </div>
//       {/* <input placeholder="Name" value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })} /> */}
//         <div  className="col-auto">
//       <select onChange={(e) => setForm({ ...form, gender: e.target.value })}>
//         <option value="">Gender</option>
//         <option>Male</option><option>Female</option>
//       </select>
//       </div>

//       <div  className="col-auto">
//       <input type="date" onChange={(e) => setForm({ ...form, dob: e.target.value })} />
//         </div>

//         <div  className="col-auto">
//       <select value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })}>
//   <option value="">Select State</option>
//   <option value="Maharashtra">Maharashtra</option>
//   <option value="Gujarat">Gujarat</option>
//     <option value="Rajasthan">Rajasthan</option>
//     </select>
// </div>


//       <input type="file" onChange={handleImage} />
//       {form.image && <img src={form.image} width="50" />}


//       <label style={{ display: "flex", gap: "8px", alignItems: "center" }}>
  
//   <input
//     type="checkbox"
//     checked={form.active}
//     onChange={(e) => setForm({ ...form, active: e.target.checked })}
//   />
//   {form.active ? "Active" : "Inactive"}
// </label>

// <div  className="col-auto">
//       <button className='btn btn-info' onClick={submit}>Save <i className="bi bi-save"></i>  </button>
//       </div>
      
//     </div>
//   );
// }
import { useEffect, useState } from "react";

function EmployeeForm({ editing, onSave, onCancel }) {
  const initialState = {
    id: null,
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  };

  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editing) {
      setForm(editing);
    } else {
      setForm(initialState);
    }
  }, [editing]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const submit = () => {
    if (!form.name || !form.gender || !form.dob || !form.state) {
      setError("All fields are required");
      return;
    }

    onSave({
      ...form,
      id: editing ? form.id : Date.now()
    });

    setForm(initialState);
    setError("");
  };

  return (
    <div className="card p-4 mb-4 shadow-sm">
      <h4 className="mb-3">
        {editing ? "Edit Employee" : "Add Employee"}
      </h4>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row g-3">
        {/* Name */}
        <div className="col-md-4">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter full name"
          />
        </div>

        {/* Gender */}
        <div className="col-md-4">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        {/* DOB */}
        <div className="col-md-4">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
          />
        </div>

        {/* State */}
        <div className="col-md-4">
          <label className="form-label">State</label>
          <select
            className="form-select"
            value={form.state}
            onChange={(e) => setForm({ ...form, state: e.target.value })}
          >
            <option value="">Select state</option>
            <option>Maharashtra</option>
            <option>Gujarat</option>
            <option>Rajasthan</option>
          </select>
        </div>

        {/* Image */}
        <div className="col-md-4">
          <label className="form-label">Profile Image</label>
          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImage}
          />
        </div>

        {/* Preview */}
        <div className="col-md-4 d-flex align-items-center">
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="rounded"
              width="70"
              height="70"
            />
          )}
        </div>

        {/* Active */}
        <div className="col-md-12">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={form.active}
              onChange={(e) =>
                setForm({ ...form, active: e.target.checked })
              }
            />
            <label className="form-check-label">
              {form.active ? "Active" : "Inactive"}
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="col-md-12 d-flex gap-2">
          <button className="btn btn-success" onClick={submit}>
            {editing ? "Update" : "Save"}
          </button>

          {editing && (
            <button
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default EmployeeForm;
