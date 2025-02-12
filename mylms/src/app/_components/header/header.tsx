import Image from "next/image";
import TopNavigation from "./top-navigation";

const Header = () => {
  return (
    <header className="border-b dark:border-base-content dark:bg-green-500 dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <span className="ml-auto">User Auth</span>
        <TopNavigation />

        <Image
          src="/images/logo.png"
          width={100}
          height={36}
          alt="logo"
        ></Image>
      </div>
    </header>
  );
};

export default Header;
