import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import { useLang } from "../../lib/hooks/useLang";

interface DoubleButtonsProps {
  setClick: (direction: "left" | "right") => void;
}
const DoubleButtons = ({ setClick }: DoubleButtonsProps) => {
  const { isEn } = useLang();

  return (
    <div className="flex gap-5">
      <button
        onClick={() => setClick("left")}
        className={`rounded-full bg-gray-300 hover:bg-gray-400 p-2`}
      >
        <WestIcon className={`${!isEn && "rotate-180"}`} />
      </button>
      <button
        onClick={() => setClick("right")}
        className={`rounded-full bg-gray-300 hover:bg-gray-400 p-2`}
      >
        <EastIcon className={`${!isEn && "rotate-180"}`} />
      </button>
    </div>
  );
};

export default DoubleButtons;
