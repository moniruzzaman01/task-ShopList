import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useShopData from "../hooks/useShopData";
import Modal from "./Modal";

const ShopList = () => {
  const [shoplist, setShoplist] = useShopData();
  const [filteredShoplist, setFilteredShoplist] = useState([]);
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [ODate, setODate] = useState("");
  const [CDate, setCDate] = useState("");
  const [modal, setModal] = useState(false);
  const [editData, setEditData] = useState({});

  // filters
  useEffect(() => {
    if (area || category || ODate || CDate) {
      const filteredShops = shoplist.filter(
        (shop) =>
          shop.area.includes(area) &&
          shop.category.includes(category) &&
          shop.openingDate.includes(ODate) &&
          shop.closingDate.includes(CDate)
      );
      setFilteredShoplist(filteredShops);
    } else {
      setFilteredShoplist(shoplist);
    }
  }, [area, category, ODate, CDate, shoplist]);

  // add data using form
  const handleForm = (event) => {
    event.preventDefault();

    const id = shoplist.length + 1 + "";
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
    const newShopList = [...shoplist, newShop];
    setShoplist(newShopList);
    toast.success("New Shop Added.");
  };

  // delete data using btn click
  const handleDelete = (id) => {
    const restShops = shoplist.filter((shop) => shop.id !== id);
    const newList = [...restShops];
    setShoplist(newList);
  };

  // edit data
  const handleModal = (data) => {
    setEditData(data);
    setModal(true);
  };
  const handleEdit = (data) => {
    const a = [...shoplist];
    a.forEach((x) => {
      if (x.id === data.id) {
        console.log("s", x);
        x.name = data.name;
        x.area = data.area;
        x.category = data.category;
        x.openingDate = data.openingDate;
        x.closingDate = data.closingDate;
      }
    });
  };

  return (
    <div className=" p-5">
      {/* modal */}
      {modal && (
        <Modal
          handleEdit={handleEdit}
          setModal={setModal}
          editData={editData}
        />
      )}
      {/* Shop list table */}
      <div className=" mb-5">
        <h2 className=" text-2xl text-white font-bold my-5">Shop List</h2>
        {/* Filters */}
        <div className=" grid grid-cols-4 gap-5 mb-5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Area</span>
            </label>
            <select
              onChange={(event) => setArea(event.target.value)}
              className="select select-bordered"
              required
            >
              <option value="">Choose one</option>
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
              onChange={(event) => setCategory(event.target.value)}
              className="select select-bordered"
              required
            >
              <option value="">Choose one</option>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option value="Baker">Baker</option>
              <option value="Chemist">Chemist</option>
              <option value="Stationary">Stationary</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Opening Date</span>
            </label>
            <input
              onChange={(event) => setODate(event.target.value)}
              type="date"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Opening Date</span>
            </label>
            <input
              onChange={(event) => setCDate(event.target.value)}
              type="text"
              className="input input-bordered w-full max-w-lg"
              required
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Shop Name</th>
                <th>Shop Area</th>
                <th>Category</th>
                <th>Opening</th>
                <th>Closing</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredShoplist?.map((shop, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{shop.name}</td>
                  <td>{shop.area}</td>
                  <td>{shop.category}</td>
                  <td>{shop.openingDate}</td>
                  <td>{shop.closingDate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(shop.id)}
                      className=" btn btn-error btn-xs mr-1"
                    >
                      Delete
                    </button>

                    <label
                      htmlFor="editModal"
                      onClick={() => handleModal(shop)}
                      className=" btn btn-success btn-xs"
                    >
                      Edit
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      {/* Add shop form */}
      <div>
        <h2 className=" text-2xl text-white font-bold my-5">Add a shop</h2>
        <div className=" w-1/2 mx-auto">
          <form action="" onSubmit={handleForm}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Shop Name</span>
              </label>
              <input
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

export default ShopList;
