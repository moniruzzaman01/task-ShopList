import React, { useEffect, useState } from "react";

const ShopList = () => {
  const [shoplist, setShoplist] = useState([]);

  useEffect(() => {
    fetch("shoplist.json")
      .then((res) => res.json())
      .then((data) => setShoplist(data));
  }, []);

  console.log(shoplist);

  const handleForm = (event) => {
    event.preventDefault();

    const id = shoplist.length + 1 + "";
    const name = event.target.name.value;
    const area = event.target.area.value;
    const category = event.target.category.value;
    const openingDate = event.target.open.value;
    const closindDate = event.target.close.value;
    const newShop = {
      id,
      name,
      area,
      category,
      openingDate,
      closindDate,
    };
    const newShopList = [...shoplist, newShop];
    setShoplist(newShopList);
  };

  const handleDelete = (id) => {
    console.log("get", id);
    const restShops = shoplist.filter((shop) => shop.id !== id);
    const newList = [...restShops];
    setShoplist(newList);
  };

  return (
    <div className=" p-5">
      <div className=" mb-5">
        <h2 className=" text-2xl text-white font-bold my-5">Shop List</h2>
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
              {shoplist.map((shop, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{shop.name}</td>
                  <td>{shop.area}</td>
                  <td>{shop.category}</td>
                  <td>{shop.openingDate}</td>
                  <td>{shop.closindDate}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(shop.id)}
                      className=" btn btn-error btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <hr />
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
