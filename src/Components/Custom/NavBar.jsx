import React, { useState } from "react";
import { navBar } from "../../data/title";
import { name } from "../../data/about";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import "../../style/navBar.css";
import $ from 'jquery';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const onClickHandler = (element) => {
    setActiveNav(element.name);
    if (element.linkTo === "#home") {
      $('html, body')
        .animate({
          scrollTop: $('#home')
            .offset().top
        }, 500
        );
    } else {
      window.location.href = element.linkTo;
    }
  };

  return (
    <>
      <nav className="items-center justify-between flex-wrap p-6 py-6 z-10 fixed top-0 w-full bg-black shadow-lg">
        <div className="md:w-10/12 w-11/12 mx-auto flex flex-shrink-0 flex-wrap justify-between items-center">
          <div>
            <a
              href="#home"
              onClick={() => {
                setActiveNav("");
                $('html, body').animate({ scrollTop: $('#home').offset().top }, 500);
              }}
            >
              <div className="text-[#005e23] font-semibold text-lg">
                <span className="name-title">{"< "}</span> {name}
                <span className="name-title">{" />"}</span>
              </div>
            </a>
          </div>
          <div className="block md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
            >
              <img
                src={menu}
                className={`h-7 w-7 object-contain ${isOpen ? "hidden" : "block"}`}
                alt="Menu icon"
              />
              <img
                src={close}
                className={`h-4 w-4 object-contain ${isOpen ? "block" : "hidden"}`}
                alt="Close icon"
              />
            </button>
          </div>
          <div
            className={`w-full block md:flex md:items-center md:w-auto ${isOpen ? "block" : "hidden"}`}
          >
            <div className="text-sm md:flex md:flex-grow gap-5">
              {navBar.map((element) => {
                return (
                  <div key={element.name}>
                    <a
                      href={element.linkTo}
                      className={`${activeNav === element.name
                        ? "text-[#003300] font-bold"
                        : "text-white font-semibold"
                        } hover:text-[#034b03] block mt-4 md:inline-block md:mt-0`}
                      onClick={(e) => {
                        e.preventDefault();
                        onClickHandler(element);
                      }}
                    >
                      {element.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
