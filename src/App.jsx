import { useState } from "react";
import "./App.css";
import "./style.css";
import SalesTrendsGraph from "./analyse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCartShopping,
  faIndianRupeeSign,
  faWarehouse,
  faCubesStacked,
  faArrowsRotate,
  faArrowDown,
  faArrowTurnDown,
  faArrowDown19,
  faArrowDownShortWide,
} from "@fortawesome/free-solid-svg-icons";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { faUpDown } from "@fortawesome/free-solid-svg-icons/faUpDown";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const tabs = [
  {
    name: "Dashboard",
    icon: "", // 1. YAHA KARNA HAI, DEKH LENA SAB ME KAR DENA
  },
  {
    name: "Inventory",
    icon: "",
  },
  {
    name: "Orders",
    icon: "",
  },
  {
    name: "Analyse Trends",
    icon: "",
  },
];

const items = [
  {
    name: "Choccy Milk",
    batch: 1002,
    quantity: 100,
    buying: 10000,
    selling: 20000,
    relevance: 3,
    most: "Aug",
    sales: [
      { month: "Mar", sales: 300 },
      { month: "Apr", sales: 600 },
      { month: "May", sales: 800 },
      { month: "Jun", sales: 400 },
      { month: "Jul", sales: 200 },
      { month: "Aug", sales: 1100 },
    ],
  },
  {
    name: "Rizz Energy Drink",
    batch: 1002,
    quantity: 100,
    buying: 10000,
    selling: 20000,
    relevance: 1,
    most: "July",
    sales: [
      { month: "Mar", sales: 400 },
      { month: "Apr", sales: 700 },
      { month: "May", sales: 600 },
      { month: "Jun", sales: 900 },
      { month: "Jul", sales: 1200 },
      { month: "Aug", sales: 200 },
    ],
  },
  {
    name: "Fanum Tax free Aata",
    batch: 1002,
    quantity: 100,
    buying: 10000,
    selling: 20000,
    relevance: 1,
    most: "June",
    sales: [
      { month: "Mar", sales: 400 },
      { month: "Apr", sales: 700 },
      { month: "May", sales: 600 },
      { month: "Jun", sales: 900 },
      { month: "Jul", sales: 600 },
      { month: "Aug", sales: 500 },
    ],
  },
  {
    name: "Ohio Authentic Gyaat",
    batch: 1002,
    quantity: 100,
    buying: 10000,
    selling: 20000,
    relevance: 2,
    most: "Aug",
    sales: [
      { month: "Mar", sales: 400 },
      { month: "Apr", sales: 700 },
      { month: "May", sales: 600 },
      { month: "Jun", sales: 900 },
      { month: "Jul", sales: 1200 },
      { month: "Aug", sales: 1100 },
    ],
  },
  {
    name: "Grimace Shake",
    batch: 1002,
    quantity: 100,
    buying: 10000,
    selling: 20000,
    relevance: 0,
    most: "April",
    sales: [
      { month: "Mar", sales: 400 },
      { month: "Apr", sales: 700 },
      { month: "May", sales: 600 },
      { month: "Jun", sales: 900 },
      { month: "Jul", sales: 200 },
      { month: "Aug", sales: 100 },
    ],
  },
];

function App() {
  const [selected, setselected] = useState(tabs.at(0).name);
  const [shelfs, setShelfs] = useState(26);
  const data = [
    { month: "Mar", sales: 400 },
    { month: "Apr", sales: 700 },
    { month: "May", sales: 600 },
    { month: "Jun", sales: 900 },
    { month: "Jul", sales: 1200 },
    { month: "Aug", sales: 1100 },
  ];
  const [item, setItem] = useState(items.at(0));
  const changeTab = (e) => {
    setselected(e);
  };
  const addShelf = () => {
    if (shelfs < 100) {
      setShelfs(shelfs + 1);
    }
  };
  const removeShelf = () => {
    if (shelfs > 0) setShelfs(shelfs - 1);
  };

  return (
    <div className="flex flex-col justify-start w-full h-screen ">
      {/* TOP NAVIGATION BAR */}
      <div
        id="navbar"
        className="flex justify-between  px-5 py-4  align-middle items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          width="36"
          viewBox="0 0 576 512"
        >
          <path
            fill="#2a6593"
            d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z"
          />
        </svg>
        <div>
          <input
            placeholder="Search"
            className="text-sm py-1 px-2 font-light rounded-lg w-48 bg-bg-sec border-violet-100"
          />
        </div>
        <ul className="list-none flex flex-row justify-center">
          <li className="mx-2 text-prim font-semibold hover:text-sec cursor-pointer">
            Profile
          </li>
          <li className="mx-2 text-prim font-semibold hover:text-sec cursor-pointer">
            Support
          </li>
        </ul>
      </div>

      {/* SIDE NAVIGATION BAR AND CONTENT */}
      <div className="flex justify-start w-full items-start h-full">
        {/* SIDE NAVIGATION BAR */}
        <ul className="list-none py-5 h-full bg-prim w-fit px-5 pr-0">
          {tabs.map((item, index) => (
            <li
              key={index}
              className={`${
                selected == item.name
                  ? " text-prim bg-white rounded-l-full"
                  : " bg-prim text-bg-sec"
              } w-56 my-2 py-2 px-4 cursor-pointer font-semibold text-xl`}
              onClick={() => changeTab(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* MAIN PAGE CONTENT!!!!!! */}

        <div className=" bg-bg-sec flex flex-col justify-start items-center align-top w-full px-10 py-5">
          <p className="text-prim self-start text-3xl  font-bold mb-5">
            {selected}
          </p>
          {/* DASHBOARD PAGE !!!!!! */}
          {selected == "Dashboard" && (
            <>
              <div className="flex flex-row justify-between my-2 items-center w-full">
                {/* FIRST SECTION */}
                <div className=" bg-white flex flex-col mx-3 h-44 w-1/3 rounded-md shadow px-7 pt-5 pb-3 font-semibold">
                  <div className="flex justify-between align-middle items-center mb-5">
                    <div className="flex flex-row align-middle items-center justify-between mr-6 mt-2 mb-2">
                      {/* SHELF BUTTONS AND DISPLAY */}
                      <div
                        className=" select-none w-8 rounded-full h-8 bg-prim flex justify-center font-bold items-center mx-1"
                        onClick={addShelf}
                      >
                        <p className="text-white text-2xl cursor-pointer">+</p>
                      </div>
                      <p className="text-3xl px-3 max-w-15 w-15 font-bold text-yellow-700 mx-1">
                        {shelfs}
                      </p>
                      <div
                        className=" select-none w-8 rounded-full h-8 bg-prim flex justify-center font-bold items-center mx-1"
                        onClick={removeShelf}
                      >
                        <p className="text-white text-2xl cursor-pointer">-</p>
                      </div>
                    </div>

                    <div className=" rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faWarehouse}
                        size="2xl"
                        style={{ color: "#FFD43B" }}
                      />
                    </div>
                  </div>
                  <p className=" text-left text-xl text-gray-700">
                    Shelfs available for Storage
                  </p>
                </div>

                <div className=" bg-white flex w-1/3 flex-col mx-3 h-44 rounded-lg  shadow px-7 pt-5 pb-3 font-semibold">
                  <div className="flex justify-between align-middle items-center mb-5">
                    <p className=" text-3xl max-w-15 w-15 font-extrabold text-blue-500 mx-1">
                      42
                    </p>
                    <div className=" rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faCubesStacked}
                        size="2xl"
                        style={{ color: "#74C0FC" }}
                      />
                    </div>
                  </div>
                  <p className=" text-left text-lg text-gray-700/80">
                    Number of Items available in Stock
                  </p>
                </div>

                <div
                  className=" bg-white cursor-pointer flex flex-col w-1/3 mx-3 h-44 rounded-lg  shadow px-7 pt-5 pb-3 font-semibold"
                  onClick={() => changeTab("Orders")}
                >
                  <div className="flex justify-between align-middle items-center mb-5">
                    <p className=" text-3xl max-w-15 w-15 font-extrabold text-green-500 mx-1">
                      15
                    </p>
                    <div className=" rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        size="2xl"
                        style={{ color: "#22b90e" }}
                      />
                    </div>
                  </div>
                  <p className=" text-left text-lg text-gray-700/80">
                    Restocking Advised for Items
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-between my-2 items-center w-full">
                {/* SECOND SECTION */}

                <div className=" bg-white w-1/3 flex flex-col mx-3 h-44 rounded-lg  shadow px-7 pt-5 pb-3 font-semibold">
                  <div className="flex justify-between align-middle items-center mb-5">
                    <p className=" text-3xl max-w-15 w-15 font-extrabold text-red-500 mx-1">
                      Rs. {100000}
                    </p>
                    <div className=" rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size="2xl"
                        style={{ color: "#f51919" }}
                      />
                    </div>
                  </div>
                  <p className=" text-left text-lg text-gray-700/80">
                    Total Purchase Value
                  </p>
                </div>

                <div className=" bg-white flex w-1/3 flex-col mx-3 h-44 rounded-lg  shadow px-7 pt-5 pb-3 font-semibold">
                  <div className="flex justify-between align-middle items-center mb-5">
                    <p className=" text-3xl max-w-15 w-15 font-extrabold text-blue-500 mx-1">
                      Rs. {80000}
                    </p>
                    <div className=" rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        size="2xl"
                        style={{ color: "#3374e6" }}
                      />
                    </div>
                  </div>
                  <p className=" text-left text-lg text-gray-700/80">
                    Total Sale Value
                  </p>
                </div>
                <div className=" bg-white flex w-1/3 flex-col mx-3 h-44 rounded-lg  shadow px-7 pt-5 pb-3 font-semibold">
                  <div className="flex justify-between align-middle items-center mb-5">
                    <p className=" text-3xl max-w-15 w-15 font-extrabold text-green-500 mx-1">
                      Rs. {60000}
                    </p>
                    <div className=" rounded-full bg-white">
                      <FontAwesomeIcon
                        icon={faChartSimple}
                        size="2xl"
                        style={{ color: "#74C0FC" }}
                      />
                    </div>
                  </div>
                  <p className=" text-left text-lg text-gray-700/80">
                    Total Sales Made
                  </p>
                </div>
              </div>
              <p className="text-prim self-start text-xl  font-bold mb-2 my-5">
                Low Stock Items
              </p>
              <div className=" flex flex-col justify-start w-full py-2">
                <div className="flex flex-row bg-bg w-full rounded-t-lg py-1 border-[1px] border-t-0">
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Item Name
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Batch Number
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Total Quantity
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Relevence
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Buying Price
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Selling Price
                  </p>
                </div>

                {/* LOW STOCK ITEMS LIST ON DAHSBOARD PAGE */}
                {items.map((item, index) => {
                  if (index % 2 == 0)
                    return (
                      <div className="flex flex-row bg-white w-full py-1 border-[1px] border-t-0">
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.name}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.batch}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.quantity}
                        </p>
                        {item.relevance == 0 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-red-500">
                            Low
                          </p>
                        )}
                        {item.relevance == 1 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                            Moderate
                          </p>
                        )}
                        {item.relevance == 2 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-green-500">
                            High
                          </p>
                        )}
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.buying}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.selling}
                        </p>
                      </div>
                    );
                  else {
                    return (
                      <div className="flex flex-row bg-gray-100 w-full py-1 border-[1px] border-t-0">
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.name}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.batch}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.quantity}
                        </p>
                        {item.relevance == 0 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-red-500">
                            Low
                          </p>
                        )}
                        {item.relevance == 1 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                            Moderate
                          </p>
                        )}
                        {item.relevance == 2 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-green-500">
                            High
                          </p>
                        )}
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.buying}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.selling}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </>
          )}

          {selected == "Inventory" && (
            <>
              <div className=" flex flex-col justify-start w-full py-2">
                <div className="flex flex-row bg-bg w-full rounded-t-lg py-1 border-[1px] border-t-0">
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Item Name
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Batch Number
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Total Quantity
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Relevence
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Buying Price
                  </p>
                  <p className="w-1/5 font-bold text-prim justify-center text-center text-base">
                    Selling Price
                  </p>
                </div>

                {/* LOW STOCK ITEMS LIST ON DAHSBOARD PAGE */}
                {items.map((item, index) => {
                  if (index % 2 == 0)
                    return (
                      <div className="flex flex-row bg-white w-full py-1 border-[1px] border-t-0">
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.name}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.batch}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.quantity}
                        </p>
                        {item.relevance == 0 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-red-500">
                            Low
                          </p>
                        )}
                        {item.relevance == 1 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                            Moderate
                          </p>
                        )}
                        {item.relevance == 2 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-green-500">
                            High
                          </p>
                        )}
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.buying}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.selling}
                        </p>
                      </div>
                    );
                  else {
                    return (
                      <div className="flex flex-row bg-gray-100 w-full py-1 border-[1px] border-t-0">
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.name}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.batch}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          {item.quantity}
                        </p>
                        {item.relevance == 0 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-red-500">
                            Low
                          </p>
                        )}
                        {item.relevance == 1 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                            Moderate
                          </p>
                        )}
                        {item.relevance == 2 && (
                          <p className="w-1/5  justify-center  text-center text-md font-light text-green-500">
                            High
                          </p>
                        )}
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.buying}
                        </p>
                        <p className="w-1/5  justify-center  text-center text-md font-light text-gray-600">
                          Rs. {item.selling}
                        </p>
                      </div>
                    );
                  }
                })}
              </div>
            </>
          )}

          {selected == "Orders" && (
            <>
              <div className="flex flex-col justify-start w-full h-screen">
                <div className="flex justify-end items-center">
                  {/* <h1 className="text-2xl font-semibold">Orders</h1> */}
                  <div className="space-x-2">
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                      Export to Excel
                    </button>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-md">
                      Import Orders
                    </button>
                    <button className="bg-purple-700 text-white px-4 py-2 rounded-md">
                      + New Orders
                    </button>
                  </div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Search order ID"
                    className="border p-2 rounded-md w-1/4"
                  />
                  <div className="space-x-2">
                    <button className="bg-gray-200 px-4 py-2 rounded-md">
                      Sales
                    </button>
                    <button className="bg-gray-200 px-4 py-2 rounded-md">
                      Status
                    </button>
                    <button className="bg-gray-200 px-4 py-2 rounded-md">
                      Filter
                    </button>
                  </div>
                </div>
                <table className="min-w-full mt-5 border">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="text-left p-4">Order ID</th>
                      <th className="text-left p-4">Date</th>
                      <th className="text-left p-4">Customer</th>
                      <th className="text-left p-4">Sales Channel</th>
                      <th className="text-left p-4">Destination</th>
                      <th className="text-left p-4">Items</th>
                      <th className="text-left p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4">#7676</td>
                      <td className="p-4">06/30/2022</td>
                      <td className="p-4">Ramesh Chaudhary</td>
                      <td className="p-4">Store name</td>
                      <td className="p-4">Lalitpur</td>
                      <td className="p-4">3</td>
                      <td className="p-4">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">#7676</td>
                      <td className="p-4">06/30/2022</td>
                      <td className="p-4">Ramesh Chaudhary</td>
                      <td className="p-4">Store name</td>
                      <td className="p-4">Lalitpur</td>
                      <td className="p-4">3</td>
                      <td className="p-4">
                        <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded-md">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">#7676</td>
                      <td className="p-4">06/30/2022</td>
                      <td className="p-4">Ramesh Chaudhary</td>
                      <td className="p-4">Store name</td>
                      <td className="p-4">Lalitpur</td>
                      <td className="p-4">3</td>
                      <td className="p-4">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4">#7676</td>
                      <td className="p-4">06/30/2022</td>
                      <td className="p-4">Ramesh Chaudhary</td>
                      <td className="p-4">Store name</td>
                      <td className="p-4">Lalitpur</td>
                      <td className="p-4">3</td>
                      <td className="p-4">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                          Completed
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">#7676</td>
                      <td className="p-4">06/30/2022</td>
                      <td className="p-4">Ramesh Chaudhary</td>
                      <td className="p-4">Store name</td>
                      <td className="p-4">Lalitpur</td>
                      <td className="p-4">3</td>
                      <td className="p-4">
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded-md">
                          Completed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {selected == "Analyse Trends" && (
            <>
              <div className="flex flex-col justify-start w-full">
                <Listbox value={item} onChange={setItem}>
                  <ListboxButton
                    className={
                      " w-52 flex justify-between text-gray-500 bg-white border-[1px]  px-2 py-2 border-gray-200 rounded-md"
                    }
                  >
                    {item.name}
                    <span className="rotate-90">{">"}</span>
                  </ListboxButton>
                  <Listbox.Options
                    anchor="bottom"
                    className={
                      " w-52 rounded-md px-2 bg-white items-start p-2 flex flex-col justify-start"
                    }
                  >
                    {items.map((item, index) => (
                      <Listbox.Option
                        id={index}
                        value={item}
                        className="w-full hover:bg-blue-100 text-left items-center cursor-pointer"
                      >
                        {item.name}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
                <div className="flex flex-row justify-center px-5 py-5 bg-white shadow rounded-lg my-3 mx-1">
                  <div className=" flex w-1/2 flex-col items-start justify-start self-start pr-7 py-3 my-2 mx-1">
                    <div className="flex flex-row justify-between my-1 items-end w-96">
                      <p className="text-2xl font-bold text-gray-700">
                        {item.name}
                      </p>
                      <p>x{item.quantity} units</p>
                    </div>
                    <div className="flex flex-row justify-between my-1 items-end w-96">
                      <p className="text-lg font-semibold text-gray-500">
                        Quantity
                      </p>
                      <p>{item.quantity}</p>
                    </div>
                    <div className="flex flex-row justify-between my-1 items-end w-96">
                      <p className="text-lg font-semibold text-red-500">
                        Buying Cost/ unit
                      </p>
                      <p>Rs.{item.buying}</p>
                    </div>
                    <div className="flex flex-row justify-between items-end my-1 w-96">
                      <p className="text-lg font-semibold text-blue-500">
                        Selling Cost/ unit
                      </p>
                      <p>Rs.{item.selling}</p>
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2 px-5 py-5 justify-start bg-white border-l">
                    <div className="flex flex-row justify-between items-end my-1 w-96">
                      <p className="text-lg font-semibold text-prim">
                        Current Relevency
                      </p>
                      <p>
                        {item.relevance == 0 && "Very Low"}
                        {item.relevance == 1 && "Moderate"}
                        {item.relevance == 2 && "Very High"}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-end my-1 w-96">
                      <p className="text-lg font-semibold text-violet-600">
                        Most Relevent in
                      </p>
                      <p>{item?.most}</p>
                    </div>
                    <div className="flex flex-row justify-between items-end my-1 w-96">
                      <p className="text-lg font-semibold text-green-500">
                        Sales made this month
                      </p>
                      <p>{item.sales.at(item.sales.length - 1).sales}</p>
                    </div>
                    <div className="flex flex-row justify-between items-end my-1 w-96">
                      <p className="text-lg font-semibold text-yellow-500">
                        Difference from last month
                      </p>
                      {item.sales.at(item.sales.length - 1).sales -
                        item.sales.at(item.sales.length - 2).sales >
                        0 && (
                        <p className="text-green-500">
                          Rs. {item.sales.at(item.sales.length - 1).sales -
                            item.sales.at(item.sales.length - 2).sales}
                            ↑
                        </p>
                      )}
                      {item.sales.at(item.sales.length - 1).sales -
                        item.sales.at(item.sales.length - 2).sales <=
                        0 && (
                        <p className="text-red-500">
                          Rs. {item.sales.at(item.sales.length - 1).sales -
                            item.sales.at(item.sales.length - 2).sales}
                            ↓
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={item.sales}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="sales"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
