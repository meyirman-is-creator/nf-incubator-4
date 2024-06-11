// src/components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png"; // Путь до вашего изображения логотипа

const Header = () => {
  return (
    <header className="bg-teal-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              className="w-[100px] object-cover h-[100px] rounded-full mr-3"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/create-product">
            <button className="bg-white text-teal-800 px-4 py-2 rounded-md hover:bg-gray-200">
              Подать объявление
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
