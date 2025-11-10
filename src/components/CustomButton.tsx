import * as React from "react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
    >
      {label}
    </button>
  );
};

export default CustomButton;
