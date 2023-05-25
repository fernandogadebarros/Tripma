import { IoIosClose } from "react-icons/io";

type ToastProps = {
  options: {
    content: string;
    actions: {
      buttons: {
        enable: true;
        single: false;
        textOne: string;
        textTwo: string;
      };
    };
  };
};

export const Toast = ({ options }: ToastProps) => {
  const {
    content,
    actions: { buttons },
  } = options;
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-12 p-4 max-w-lg rounded border border-primary-200 bg-primary-100">
      <div className="relative text-primary-200 w-80">
        <button className="absolute right-0 top-0">
          <IoIosClose size={24} />
        </button>
        <p className="w-56 font-semibold text-lg">{content}</p>
        {buttons?.enable && (
          <div className="flex items-center justify-center mt-4">
            <button className="flex-1 bg-primary-200 text-white rounded p-2">
              {buttons?.textOne}
            </button>
            {!buttons?.single && (
              <button className="flex-1">{buttons?.textTwo}</button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
