import React from "react";
import { toast } from "react-toastify";

const Modal = ({ editData, setModal, handleEdit }) => {
  // console.log(editData);

  const handleForm = (event) => {
    event.preventDefault();

    const id = editData.id + "";
    const name = event.target.name.value;
    const area = event.target.area.value;
    const category = event.target.category.value;
    const openingDate = event.target.open.value;
    const closingDate = event.target.close.value;

    if (new Date(openingDate) > new Date(closingDate)) {
      return toast.error("Closing date cannot be earlier than opening date!!!");
    }

    const newShop = {
      id,
      name,
      area,
      category,
      openingDate,
      closingDate,
    };
    // console.log("newShop", newShop);
    handleEdit(newShop);

    toast.success("Shop List Edited.");
    setModal(false);
  };

  return (
    <div>
      <input type="checkbox" id="editModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="editModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2>Edit Id: {editData.id}</h2>
          <form action="" onSubmit={handleForm}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Name</span>
              </label>
              <input
                defaultValue={editData.name}
                type="text"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            {/* area and category */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Area</span>
              </label>
              <select name="area" className="select select-bordered" required>
                <option disabled value={editData.area}>
                  {editData.area}
                </option>
                <option value="Thane">Thane</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered"
                required
              >
                <option disabled value={editData.category}>
                  {editData.category}
                </option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary">Stationary</option>
              </select>
            </div>
            {/* date */}
            <div className=" flex gap-5 w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Opening Date</span>
                </label>
                <input
                  type="date"
                  name="open"
                  defaultValue={editData.openingDate}
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Closing Date</span>
                </label>
                <input
                  type="date"
                  name="close"
                  defaultValue={editData.closingDate}
                  className="input input-bordered w-full max-w-lg"
                  required
                />
              </div>
            </div>
            <button className=" btn btn-accent mt-5 px-10">add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
