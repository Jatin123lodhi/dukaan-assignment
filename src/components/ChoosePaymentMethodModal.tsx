import CrossIcon from "../assets/CrossIcon";
import MasterCardIcon from "../assets/payments/MasterCardIcon";
import VisaIcon from "../assets/payments/VisaIcon";
import Switch from "../ui/Switch";

interface IModalprops {
  isOpen: boolean;
  onClose: () => void;
}

const ChoosePaymentMethodModal = (props: IModalprops) => {
  const { isOpen=true, onClose } = props;
  
  const overlayClass = isOpen
    ? "fixed inset-0 bg-[#1A181E] opacity-50"
    : "hidden";
  const modalClass = isOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[564px]    rounded-[8px] py-6 border"
    : "hidden";

  return (
    <div className="font-inter">
      <div className={overlayClass}></div>
      <div className={modalClass}>
        <div className="px-6">

        {/* heading */}
        <div className="flex flex-col gap-1 mb-6">
          <div className="flex justify-between items-center">
            <div className="text-[18px] font-medium leading-[26px]">
              Choose payment methods
            </div>
            <div className="cursor-pointer" onClick={onClose}>
              <CrossIcon />
            </div>
          </div>
        </div>

        {/* list of options  */}
        <div className="flex flex-col gap-4  max-h-[500px]">
          <PaymentOptionTile icon={<VisaIcon />} label="Visa" />
          <PaymentOptionTile icon={<MasterCardIcon />} label="Mastercard" />
          <PaymentOptionTile icon={<VisaIcon />} label="Visa" />
          <PaymentOptionTile icon={<VisaIcon />} label="Visa" />
          <PaymentOptionTile icon={<MasterCardIcon />} label="Mastercard" />
          <PaymentOptionTile icon={<VisaIcon />} label="Visa" />
        </div>
        </div>

        {/* bottom section  */}
        <div className=" flex flex-col gap-4 py-4 border-t border-blackShades-black90 items-center  justify-center w-full mt-[32px]">
          <button className="font-medium leading-6 text-white bg-blue-primary py-2 px-6 rounded-[4px]">
            Finish Setup
          </button>
          <button className="leading-6 font-medium underline text-blackShades-black30">
            Edit Cashfree details
          </button>
        </div>
      </div>
    </div>
  );
};

interface IPaymentOptionTile {
  label: string;
  icon: React.ReactNode;
}
const PaymentOptionTile = (props: IPaymentOptionTile) => {
  const { icon, label } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div>{icon}</div>
        <div>{label}</div>
      </div>
      <div>
        <Switch />
      </div>
    </div>
  );
};

export default ChoosePaymentMethodModal;
