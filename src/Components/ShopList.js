import React, { useEffect, useState } from "react";

const ShopList = () => {
  const [shoplist, setShoplist] = useState([]);

  useEffect(() => {
    fetch("shoplist.json")
      .then((res) => res.json())
      .then((data) => setShoplist(data));
  }, []);

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
              </tr>
            </thead>
            <tbody>
              {shoplist.map((shop, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{shop.name}</td>
                  <td>{shop.area}</td>
                  <td>{shop.category}</td>
                  <td>{shop.opening}</td>
                  <td>{shop.closing}</td>
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
          <form action="">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Shop Name</span>
              </label>
              <input type="text" class="input input-bordered w-full" required />
            </div>
            {/* area and category */}
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Area</span>
              </label>
              <select name="area" class="select select-bordered" required>
                <option disabled selected>
                  Pick one
                </option>
                <option>Thane</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Nashik</option>
                <option>Nagpur</option>
              </select>
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Category</span>
              </label>
              <select class="select select-bordered" required>
                <option disabled selected>
                  Pick one
                </option>
                <option>Grocery</option>
                <option>Butcher</option>
                <option>Baker</option>
                <option>Chemist</option>
                <option>Stationary</option>
              </select>
            </div>
            {/* date */}
            <div className=" flex gap-5 w-full">
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Opening Date</span>
                </label>
                <input
                  type="date"
                  class="input input-bordered w-full max-w-lg"
                  required
                />
              </div>
              <div class="form-control w-full">
                <label class="label">
                  <span class="label-text">Closing Date</span>
                </label>
                <input
                  type="date"
                  class="input input-bordered w-full max-w-lg"
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
