import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { fetchAllCategories } from "../../Features/Category/CategorySlice";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import RightCartIcon from "../Cart/RightCartIcon";
function TopNavbar() {
 const { categories } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div>

<RightCartIcon />
    <Menu as="div" className="relative flex justify-center">
       <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
          <div className="flex justify-between lg:flex-1">
          
        <div>
        <NavLink to={"/"} className="nav-link inline-flex w-full justify-center gap-x-1.5 border-none px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50 cursor-pointer">
              Home
            </NavLink>
        
      </div>
            <div>
              
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 border-none px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50">
          Categories
          <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="capitalize absolute top-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
      <MenuItem>
          
            <div >
              {categories &&
                categories.map((c, index) => {
                  return (
                    <Link
                      to={`/category/${c}`}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      key={index}
                    >
                       {c}
                    </Link>
                  );
                })}
            </div>
            
          </MenuItem>
          </div>
          </MenuItems>
          </div>
        </div>
 


      
    </Menu>
    </div>
  );
}

export default TopNavbar;


