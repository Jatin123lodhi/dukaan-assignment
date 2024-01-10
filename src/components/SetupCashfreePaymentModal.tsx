 
import InfoIcon from "../assets/InfoIcon";
import CrossIcon from "../assets/CrossIcon";

interface IModalprops{
    isOpen: boolean,
    onClose: ()=>void;
    
}

const SetupCashFreePaymentModal = (props:IModalprops) => {
  const {isOpen,onClose} = props;
  

  const overlayClass = isOpen
    ? "fixed inset-0 bg-[#1A181E] opacity-50"
    : "hidden";
  const modalClass = isOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[564px] min-h-[442px] rounded-[8px] p-6 border"
    : "hidden";

  return (
    <div className="font-inter">
      <div className={overlayClass}></div>
      <div className={modalClass}>
        {/* heading */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <div className="text-[18px] font-medium leading-[26px]">
              Set up Cashfree Payments
            </div>
            <div className="cursor-pointer" onClick={onClose}>
              <CrossIcon />
            </div>
          </div>
          <div className="text-[14px] leading-5 text-[#4D4D4D]">
            Please enter your Cashfree API keys. You can find your API keys on
            <div className="text-blue-primary underline font-medium">
              Cashfree API Key Dashboard
            </div>
          </div>
        </div>

        {/* message  */}
        <div className="mt-4 mb-6 rounded-[4px] py-2 px-4 flex justify-center items-center  bg-gradient-to-r from-[rgba(20,110,180,0.10)] to-[rgba(20,110,180,0.10)]   text[14px] leading-4 text text-blackShades-black30">
          <span className="mr-2">
            <InfoIcon />{" "}
          </span>
          Don’t have an Cashfree account?
          <span className="font-medium underline ml-1 cursor-pointer">
            Create now
          </span>
        </div>

        {/* input fields  */}
        <div className="flex flex-col gap-6">
          <TextField label="API ID" placeholder="Enter merchant id" />
          <TextField label="Secret Key" placeholder="Enter public key" />
        </div>

        <div className="flex justify-center w-full mt-[32px]">
          <button onClick={()=>{onClose}} className="font-medium leading-6 text-white bg-blue-primary py-2 px-6 rounded-[4px]">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

interface ITextFieldProps {
  label: string;
  placeholder: string;
}
const TextField = (props: ITextFieldProps) => {
  const { label, placeholder } = props;
  return (
    <div className="flex flex-col gap-2">
      <label className=" ">
        {label} <span className="text-red-secondary">*</span>
      </label>
      <input
        className="h-[48px] w-[516px] px-4 py-[12px] outline-none rounded-[4px] border border-blackShades-black80"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SetupCashFreePaymentModal;
