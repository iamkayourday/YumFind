import { Button } from "@nextui-org/react";
import { UserIcon } from '../Utils/UserIcon';
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Remove the username or user data from localStorage
    localStorage.removeItem("username"); 
    localStorage.removeItem("dark-mode"); 

    // Redirect to login page
    navigate("/");
  };

  return (
    <div className="flex gap-4 items-center justify-center min-h-screen">
      <Button 
        color="danger" 
        variant="bordered" 
        startContent={<UserIcon />} 
        className="border-[#ff4d4f] text-[#ff4d4f] dark:border-white dark:text-white hover:bg-[#ff4d4f] hover:text-white dark:hover:bg-white dark:hover:text-[#ff4d4f] transition-all duration-300 ease-in-out"
        onClick={handleLogOut} // Add the click handler
      >
        Log Out
      </Button>
    </div>
  );
};

export default LogOut;
