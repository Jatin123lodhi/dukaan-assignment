import { useState } from "react";
import CashFreeIcon from "../assets/payments/CashFreeIcon";
import CodIcon from "../assets/payments/CodIcon";
import PaytmIcon from "../assets/payments/PaytmIcon";
import PhonePayIcon from "../assets/payments/PhonePayIcon";
import RazorPayIcon from "../assets/payments/RazorPayIcon";
import SetupCashFreePaymentModal from "./SetupCashfreePaymentModal";


const PaymentProvider = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getModal = (label:string)=>{
    switch(label){
      case "Cashfree Payments":
        return <SetupCashFreePaymentModal isOpen={isOpen} onClose={()=>setIsOpen(false)}  />
       
      default: 
        return null;
    }
  }
  return (
    <div className="border  flex flex-col items-center font-inter gap-6 bg-slate-50 bg-color: var(--Black-98, #FAFAFA)">
      {/* first section  */}
      <div
        className="w-[760px] h-[502px] p-6 bg-white rounded-[8px] mt-[32px]"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        {/* heading */}
        <div className="mb-6">
          <div className="font-medium leading-6">Payment Providers</div>
          <div className="text-[14px] leading-5 text-[#808080]">
            Set up payment providers to accept payments from your customers.
          </div>
        </div>

        {/* payment options */}
        <div className="flex flex-col gap-4">
          <PaymentOptionTile icon={<RazorPayIcon />} label="Razorpay" />
          <PaymentOptionTile
            icon={<CashFreeIcon />}
            label="Cashfree Payments"
            openModal={()=>setIsOpen(true)}
          />
          <PaymentOptionTile
            icon={<PhonePayIcon />}
            label="PhonePe Payment Gateway"
          />
          <PaymentOptionTile
            icon={<PaytmIcon />}
            label="Paytm Payment Gateway"
          />
          <PaymentOptionTile
            icon={<CodIcon />}
            label="Cash on delivery"
            description="Receive payments in cash upon delivery."
            buttonType="toggle"
          />
        </div>
      </div>
      {/* second section  */}
      <div
        className="w-[760px] h-[114px] p-6 bg-white rounded-[8px] mt-[32px]"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        <div className="flex justify-between items-start">
          {/* heading */}
          <div className="mb-6">
            <div className="font-medium leading-6">Manual payment methods</div>
            <div className="text-[14px] leading-5 text-[#808080]">
              Payments that are made outside online store. Allows you to accept
              cash, check or other custom forms of payment.
            </div>
          </div>
          {/* switch  */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      <div className="flex justify-end w-[760px] mb-[112px]">
        <button className="bg-blue-primary rounded-[4px] py-2 px-6 text-white">Finish</button>
      </div>
      {getModal("Cashfree Payments")}
      
    </div>
  );
};

interface IPaymentOptionTileProps {
  icon: React.ReactNode;
  label: string;
  description?: string;
  buttonType?: string;
  openModal?: (label:string)=>void;
}

const PaymentOptionTile = (props: IPaymentOptionTileProps) => {
  const { icon, label, description, buttonType,openModal } = props;
  return (
    <div className="flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <div className={label=="Paytm Payment Gateway" ? "flex justify-center items-center w-16 h-16 rounded-[4px] border border-blackShades-black90":""}>{icon}</div>
        <div className="flex flex-col ">
          <div className="font-medium leading-6 text-[16px]">{label}</div>
          <div className="text-[14px] leading-5 text-[#4D4D4D]">
            {description}
          </div>
        </div>
      </div>
      <div className="">
        {buttonType === "toggle" ? (
          <>
            {/* switch btn  */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </>
        ) : (
          <>
            <button onClick={()=>openModal && openModal(label)} className="py-2 px-4 text-[14px] border border-blue-primary text-blue-primary rounded-[4px] font-medium leading-5">
              Set up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentProvider;
