import DownloadIcon from "../assets/DownloadIcon";
import InfoIconGray from "../assets/InfoIconGray";
import LeftArrowIcon from "../assets/LeftArrowIcon";
import RightArrowIcon from "../assets/RightArrowIcon";
import SortIcon from "../assets/SortIcon";
import SearchIcon from "../assets/header/SearchIcon";
import TriangleIcon from "../assets/TriangleIcon";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PaymentProvider from "../components/PaymentProvider";

const Dashboard = () => {
  return (
    <div className="flex font-inter bg-slate-50">
      
        <Navbar />
      
      <div className="w-full">
        <Header />
        <PaymentProvider/>
        {/* Dashboard after payment provider is setup */}
        <div className="p-[32px]">
          <div className="flex justify-between items-center mb-6">
            <div className="font-medium leading-[28px] text-[20px] text-blackShades-back12">
              Overview
            </div>
            <div>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  block w-full p-2.5 pr-4">
                <option selected>Last Month</option>
              </select>
            </div>
          </div>

          {/* 2 cards  */}
          <div className="flex justify-between items-center mb-[32px] gap-5">
            <div
              className="flex-1 flex flex-col gap-4 bg-white p-5 rounded-lg"
              style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
            >
              <div className="leading-6 text-blackShades-black30">
                Online orders
              </div>
              <div className="text-[32px] font-medium leading-[38px]">231</div>
            </div>
            <div
              className="flex-1 flex flex-col gap-4 bg-white p-5 rounded-lg"
              style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
            >
              <div className="leading-6 text-blackShades-black30">
                Amount received
              </div>
              <div className="text-[32px] font-medium leading-[38px]">
                ₹23,92,312.19
              </div>
            </div>
          </div>

          {/* transaction info  */}
          <div className="">
            <div className="mb-5 text-[20px] font-medium leading-[28px] text-blackShades-back12">
              Transactions | This Month
            </div>
            {/* table box */}
            <div
              className="bg-white p-3 pb-6 rounded-[8px]"
              style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
            >
              <div className="flex justify-between items-center">
                {/* input box */}
                <div className="flex gap-2 items-center border border-blackShades-black85 rounded-[6px] pl-4">
                  <div>
                    <SearchIcon />
                  </div>
                  <div className="w-full">
                    <input
                      placeholder="Search by order ID..."
                      className="pr-4 text-blackShades-black60 py-[10px]  rounded-[6px] outline-none w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="cursor-pointer flex items-center rounded gap-[6px] px-3 py-[6px] border border-blackShades-black85">
                    <div className="leading-6">Sort</div>
                    <div>
                      <SortIcon />
                    </div>
                  </div>
                  <div className="cursor-pointer rounded border border-blackShades-black85 p-2">
                    <DownloadIcon />
                  </div>
                </div>
              </div>

              {/* table */}
              <div className="mt-3 mb-6">
                <table className=" w-full">
                  <thead className=" rounded-[4px]">
                    <tr className="flex gap-[40px] bg-blackShades-black95 items-center px-3 py-[10px]  rounded-[4px]">
                      <th className="font-medium flex-1 flex justify-start text-blackShades-black30 text-[14px]">
                        Order ID
                      </th>
                      <th className="font-medium flex-1 flex gap-1 items-center justify-start text-blackShades-black30 text-[14px]">
                        <div> Order Date</div>
                        <div>
                          <TriangleIcon />
                        </div>
                      </th>
                      <th className="font-medium flex-1 flex justify-end text-blackShades-black30 text-[14px]">
                        Order Amount
                      </th>
                      <th className="font-medium flex-1 flex gap-1 justify-end items-center text-blackShades-black30 text-[14px]">
                        <div> Transaction fees</div>
                        <div>
                          <InfoIconGray />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {new Array(18).fill("").map((idx: number) => {
                      return (
                        <tr
                          key={idx}
                          className="flex gap-[40px] items-center border-b border-blackShades-black90 mx-3 py-[10px]"
                        >
                          <td className="flex-1 text-blue-primary cursor-pointer">
                            #281209
                          </td>
                          <td className="flex-1">7 July, 2023</td>
                          <td className="flex-1 flex justify-end">₹1,278.23</td>
                          <td className="flex-1 flex justify-end">₹22</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* pagination  */}
              <div className="flex justify-center items-center gap-6">
                <div className="border border-blackShades-black85 py-[6px] pl-[6px] pr-4 rounded-[4px] flex justify-center items-center gap-[6px] cursor-pointer">
                  <div>
                    <LeftArrowIcon />
                  </div>
                  <div className="leading-5  font-medium text-[14px] text-blackShades-black30">
                    Previous
                  </div>
                </div>
                <div className="flex text-blackShades-black30 items-center gap-2 text-[14px] leading-5">
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    1
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    ...
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary bg-blue-primary text-white px-2 py-[6px]">
                    10
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    11
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    12
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    13
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    14
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    15
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    16
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    17
                  </button>
                  <button className="hover:text-white rounded hover:bg-blue-primary w-[28px] px-2 py-[6px]">
                    18
                  </button>
                </div>

                <div className="border border-blackShades-black85 py-[6px] pl-4 pr-[6px] rounded-[4px] flex justify-center items-center gap-[6px] cursor-pointer">
                  <div className="leading-5  font-medium text-[14px] text-blackShades-black30">
                    Next
                  </div>
                  <div>
                    <RightArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
