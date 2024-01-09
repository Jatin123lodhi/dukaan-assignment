// src/components/Modal.js
 
interface IModalProps{
    isOpen: boolean;
    onClose: ()=>void;
    children: React.ReactNode
} 

const Modal = (props: IModalProps) => {
    const { isOpen, onClose,children  } = props;
  const overlayClass = isOpen ? 'fixed inset-0 bg-black opacity-50' : 'hidden';
  const modalClass = isOpen
    ? 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4'
    : 'hidden';

  return (
    <div className="bg-pink-400">
      <div
        className={overlayClass}
        onClick={onClose}
      ></div>
      <div className={modalClass}>
        {children}
        <button onClick={onClose} className="mt-4 p-2 bg-gray-300 hover:bg-gray-400">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
