import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";

{
  /* ADD ICON NAME AS COMPONENT FOR EACH ELEMENT */
}
const tabs = [
  {
    name: "Dashboard",
    icon: "", // 1. YAHA KARNA HAI, DEKH LENA SAB ME KAR DENA
  },
  {
    name: "Inventory",
  },
  {
    name: "Orders",
  },
  {
    name: "Analyse Trends",
  },
];

const items = [
  {
    name: "Item",
    batch: 1002,
    quantity: 100,

    buying: 10000,
    selling: 20000,
    relevance: 0,
  },
  {
    name: "Item",
    batch: 1002,
    quantity: 100,

    buying: 10000,
    selling: 20000,
    relevance: 1,
  },
  {
    name: "Item",
    batch: 1002,
    quantity: 100,

    buying: 10000,
    selling: 20000,
    relevance: 0,
  },
  {
    name: "Item",
    batch: 1002,
    quantity: 100,

    buying: 10000,
    selling: 20000,
    relevance: 2,
  },
  {
    name: "Item",
    batch: 1002,
    quantity: 100,

    buying: 10000,
    selling: 20000,
    relevance: 0,
  },
];

function App() {
  const [selected, setselected] = useState(tabs.at(0).name);
  const [shelfs, setShelfs] = useState(26);
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
        <img src="./" alt="LOGO" height={30} width={30} />
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

                    <div className=" rounded-full bg-white">ICON</div>
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
                    <div className=" rounded-full bg-white">ICON</div>
                  </div>
                  <p className=" text-left text-lg text-gray-700/80">
                    Number of Items available in Stock
                  </p>
                </div>

                <div className=" bg-white flex flex-col w-1/3 mx-3 h-44 rounded-lg  shadow px-7 pt-5 pb-3 font-semibold">
                  <div className="flex justify-between align-middle items-center mb-5">
                    <p className=" text-3xl max-w-15 w-15 font-extrabold text-green-500 mx-1">
                      15
                    </p>
                    <div className=" rounded-full bg-white">ICON</div>
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
                    <div className=" rounded-full bg-white">ICON</div>
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
                    <div className=" rounded-full bg-white">ICON</div>
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
                    <div className=" rounded-full bg-white">ICON</div>
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
          
          {selected == "Inventory" && 
          <>
            
          </>
          }

          {selected == "Orders" && <>Orders</>}
          {selected == "Analyse Trends" && <>Analyse Trends</>}
        </div>
      </div>
    </div>
  );
}

export default App;
