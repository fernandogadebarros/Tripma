import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import Container from "../../Layout/Container";

type WarningProps = {
  message: string;
  status?: string;
};

export const Warning = ({ message, status = "success" }: WarningProps) => {
  const [hidden, setHidden] = useState(false);
  const [statusState, setStatusState] = useState({
    background: "",
    text: "",
  });

  const handleStatus = () => {
    switch (status) {
      case "warning":
        return setStatusState({
          background: "bg-warnings-200",
          text: "text-primary-300",
        });

      case "danger":
        return setStatusState({
          background: "bg-warnings-100",
          text: "text-white",
        });

      default:
        return setStatusState({
          background: "bg-primary-200",
          text: "text-white",
        });
    }
  };

  useEffect(() => {
    handleStatus();
  }, []);

  if (!hidden) {
    return (
      <div className={`flex items-center h-16 ${statusState.background}`}>
        <Container className="relative text-center">
          <p className={`${statusState.text}`}>{message}</p>
          <button
            onClick={() => setHidden(true)}
            className="absolute top-1/2 -translate-y-1/2 right-0"
          >
            <IoIosClose size={24} className={`${statusState.text}`} />
          </button>
        </Container>
      </div>
    );
  }

  return null;
};

export default Warning;
