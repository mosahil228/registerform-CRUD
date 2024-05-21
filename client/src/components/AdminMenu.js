import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="admin-dashboard">
        <div className="leftMenu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/seller/create-category"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Create Category
          </NavLink>
          <NavLink
            to="/dashboard/seller/create-product"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Create Product
          </NavLink>
          <NavLink
            to="/dashboard/seller/products"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/seller/orders"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/seller/users"
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;