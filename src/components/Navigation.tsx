"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTokenStore } from "../store/auth";

function Navigation() {
  const menu = useRef<HTMLDivElement>(null);
  const { isAllow, username } = useTokenStore();
  const [active, setActive] = useState<boolean>();

  useEffect(() => {
    setActive(useTokenStore.getState().isAllow);
  }, [isAllow]);

  const openMenuBar = () => {
    if (!!!menu.current) return;
    if (menu.current.classList.contains("hidden")) {
      menu.current.classList.remove("hidden");
    } else {
      menu.current.classList.add("hidden");
    }
  };

  return (
    <header className="fixed z-40 w-full bg-zinc-950 text-white shadow-md shadow-red-600/50">
      <div className="flex justify-between items-center px-3 h-14 md:h-20 max-w-7xl mx-auto">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold">Dime Legends</h1>
        </div>
        <button className="md:hidden" onClick={openMenuBar}>
          <RxHamburgerMenu className="text-white text-2xl" />
        </button>
        <nav
          ref={menu}
          className="absolute md:relative md:flex top-14 left-0 md:inset-auto
        w-full md:w-auto bg-zinc-950 py-7 md:py-1 md:px-3 md:gap-7 hidden select-none"
        >
          <ul className="flex flex-col md:flex-row items-center text-xl gap-5">
            <li>
              <Link href="/" className="md:hidden">
                Mi Cuenta
              </Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/torneos">Torneos</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
          {active ? (
            <Link
              href={`/user/${username.replace(' ', ".")}`}
              className="bg-yellow-400 text-black w-11 h-11 rounded-full flex items-center justify-center"
            >
              <span className="text-xl font-semibold">
                {username?.charAt(0).toUpperCase()}
              </span>
            </Link>
          ) : (
            <div className="w-full flex items-center justify-evenly text-xl gap-3 text-red-600">
              <Link href="/login">Iniciar Sesion</Link>
              <Link
                href="/register"
                className="border-2 border-red-600 py-1 px-3 rounded-lg text-white"
              >
                Registrarse
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
