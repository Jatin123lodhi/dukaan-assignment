import MenuIcon from "../assets/header/MenuIcon";
import NotificationIcon from "../assets/header/NotificationIcon";
import QuestionIcon from "../assets/header/QuestionIcon";
import SearchIcon from "../assets/header/SearchIcon";

const Header = () => {
  return (
    <div className="border-b border-[#D9D9D9] flex flex-1 gap-4 px-[32px] py-[12px] h-max font-inter">
      <div className="flex-1 flex items-center gap-4">
        <div>Payments</div>
        <div className="flex gap-[6px] items-center">
          <div>
            <QuestionIcon />
          </div>
          <div>How it works</div>
        </div>
      </div>
      <div className="flex-1">
        {/* input box */}
        <div className="flex gap-2 items-center bg-[#f2f2f2] rounded-[6px] pl-4">
          <div>
            <SearchIcon />
          </div>
          <div className="w-full">
            <input
              placeholder="Search features, tutorial, etc."
              className="pr-4 py-[9px] bg-[#F2F2F2] rounded-[6px] outline-none w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center gap-[12px]">
        <NotificationIcon />
        <MenuIcon />
      </div>
    </div>
  );
};

export default Header;
