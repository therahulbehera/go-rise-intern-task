import Link from "next/link";
import React from "react";

const Navigation = () => {
  const style = "border border-black p-1";
  const links = [
    {
      url: "/",
      text: "Home",
    },
    {
      url: "/products",
      text: "Products",
    },
    {
      url: "/",
      text: "Log In",
    },
  ];
  return (
    <nav className="bg-green-500 h-12 flex items-center justify-between text-black p-8">
      {links.map((link) => (
        <Link href={link.url} key={link.text} className={style}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
