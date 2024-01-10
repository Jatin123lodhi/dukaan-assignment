import AnalyticsIcon from "../assets/navbar/AnalyticsIcon";
import ApperanceIcon from "../assets/navbar/ApperanceIcon";
import AudienceIcon from "../assets/navbar/AudienceIcon";
import DeliveryIcon from "../assets/navbar/DeliveryIcon";
import DiscountsIcon from "../assets/navbar/DiscountsIcon";
import DownIcon from "../assets/navbar/DownIcon";
import HomeIcon from "../assets/navbar/HomeIcon";
import MarketingIcon from "../assets/navbar/MarketingIcon";
import OrderIcon from "../assets/navbar/OrderIcon";
import PaymentsIcon from "../assets/navbar/PaymentsIcon";
import PluginsIcon from "../assets/navbar/PluginsIcon";
import ProductsIcon from "../assets/navbar/ProductsIcon";
import ToolsIcon from "../assets/navbar/ToolsIcon";
import WalletIcon from "../assets/navbar/WalletIcon";

const NavBtnsList = [
  { icon: <HomeIcon />, label: "Home" },
  { icon: <OrderIcon />, label: "Orders" },
  { icon: <ProductsIcon />, label: "Products" },
  { icon: <DeliveryIcon />, label: "Delivery" },
  { icon: <MarketingIcon />, label: "Marketing" },
  { icon: <AnalyticsIcon />, label: "Analytics" },
  { icon: <PaymentsIcon />, label: "Payments" },
  { icon: <ToolsIcon />, label: "Tools" },
  { icon: <DiscountsIcon />, label: "Discounts" },
  { icon: <AudienceIcon />, label: "Audience" },
  { icon: <ApperanceIcon />, label: "Appearance" },
  { icon: <PluginsIcon />, label: "Plugins" },
];

const Navbar = () => {
  return (
    <div className="flex flex-col p-4 px-[10px]  items-center justify-between text-white font-inter bg-blue-secondary ">
      <div className="flex flex-col items-center ">
        {/* company icon and  store name*/}
        <div className="flex gap-[12px] items-center mb-[24px] w-[192px]">
          <div className="h-[40px] w-[40px] rounded-[4px] bg-gray-50">
            <img
              alt="company_icon"
              src="./company_icon.png"
              className="w-[39px] h-[39px] rounded-[4px]  bg-no-repeat"
            />
          </div>
          {/* store name  */}
          <div className="flex flex-1 flex-col gap-1">
            <div className="text-[15px] font-medium leading-[22px]">
              Nishyam
            </div>
            <div className="underline leading-4 text-[13px] font-normal cursor-pointer">
              Visit Store
            </div>
          </div>

          <div className="cursor-pointer">
            <DownIcon />
          </div>
        </div>

        {/* page nav btns*/}
        <div className="flex flex-col gap-1 w-[208px]">
          {/* <NavBtns icon={<HomeIcon />} label="Home" /> */}
          {NavBtnsList.map(({ icon, label }) => (
            <NavBtns key={label} icon={icon} label={label} />
          ))}
        </div>
      </div>
      <div>
        {/* credits */}
        <div className="flex gap-3 items-center px-[12px] py-[6px] bg-[#353C53] rounded-[4px] w-[192px]  ">
          <div className="bg-white p-[6px] rounded-[4px] bg-opacity-10">
            <WalletIcon />
          </div>
          <div className="flex flex-col gap-2">
            <div className="leading-4 text-[13px]">Available credits</div>
            <div className="leading-6 font-medium">222.10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface INavBtnsProps {
  icon: React.ReactNode;
  label: string;
}
const NavBtns = (props: INavBtnsProps) => {
  const { icon, label } = props;
  return (
    <div
      className={`flex py-2 px-4 gap-3 items-center cursor-pointer hover:bg-white hover:bg-opacity-10  rounded-[4px] ${
        label === "Payments" ? "bg-white bg-opacity-10 " : ""
      }`}
    >
      <div>{icon}</div>
      <div className="text-[14px] font-medium leading-5">{label}</div>
    </div>
  );
};

export default Navbar;
