import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className=" flex justify-between px-5 pt-6">
      <div className=" flex gap-2">
        <span>Order</span>
        <Image src="/logo.jpeg" alt="Order logo" height={5} width={60} />
      </div>
      <Button
        size="icon"
        variant="outline"
        className=" border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
