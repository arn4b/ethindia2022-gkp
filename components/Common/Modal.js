import { useEffect } from "react";

const Modal = ({
  isModalOpen,
  toggleModal,
  children,
  disableBackdropClick = false,
}) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  if (isModalOpen) {
    return (
      <div
        onClick={() => {
          if (!disableBackdropClick) {
            toggleModal(false);
          }
        }}
        className="w-screen h-screen fixed bg-slate-100 dark:bg-white dark:text-white bg-opacity-50 dark:bg-opacity-50 ease-in-out fixed inset-0 z-2 flex items-center justify-center"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-1/2 py-20 px-10 rounded-2xl"
        >
          {children}
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
