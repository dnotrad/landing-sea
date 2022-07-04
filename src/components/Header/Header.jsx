import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/icons/logo.svg";
import rus from "../../assets/icons/russia.svg";
import eng from "../../assets/icons/england.svg";
import arrow from "../../assets/icons/arrow-header.svg";
import { NavLink, Link } from "react-router-dom";

import { useState, useEffect } from "react";

// translate
import { useTranslation } from "react-i18next";

function useLocalStorage(key, defaultValue) {
  // 1 
  let [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || defaultValue
  );
  // 2
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  // 3
  return [value, setValue];
}

const Languages = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const [isRussian, setIsRussian] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={s.languages} onClick={() => setIsOpen(!isOpen)}>
      <div className={`${s.language}`}>
        {props.isRussian ? (
          <img src={rus} alt="russia" />
        ) : (
          <img src={eng} alt="england" />
        )}
      </div>
      <div className={`${s.arrow} ${isOpen && s.active}`}>
        <img src={arrow} alt="arrow" />
      </div>
      <div
        className={`${s.extra} ${isOpen && s.active}`}
        onClick={() => {
          props.setIsRussian(!props.isRussian);
        }}
      >
        <div className={`${s.language} ${s.small}`}>
          {props.isRussian ? (
            <img src={eng} alt="england" onClick={() => changeLanguage("en")} />
          ) : (
            <img src={rus} alt="russia" onClick={() => changeLanguage("ru")} />
          )}
        </div>
      </div>
    </div>
  );
};
const Header = (props) => {
  const [isRussian, setIsRussian] = React.useState(true);

  let [counter, setCounter] = useLocalStorage("count", 0);

  function scrollInto(e) {
    const blockID = e.getAttribute("data-scroll");
    setTimeout(() => {
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }
  useEffect(() => {
    console.log(counter);
  }, [counter]);
  const [isSailorMore, setIsSailorMore] = React.useState(false);
  const [isBussinesMore, setIsBussinesMore] = React.useState(false);

  const [isBurger, setIsBurger] = React.useState(false);
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    let body = document.querySelector("body");
    if (isBurger) body.classList.add("fix");
    // else if(!props.isLoader && !isBurger) alert(props.isLoader)
    else if (!props.isLoader && !isBurger) body.classList.remove("fix");
  }, [isBurger]);
  return (
    <header className={`${s.header} ${props.footer && s.footer}`}>
      {/* <div className={s.designer}>design: @pavlovaa</div> */}
      {!props.footer && (
        <div className={`${s.burger_menu} ${isBurger && s.active}`}>
          <nav className={s.nav_mob}>
            <div className={s.nav_mob_inner}>
              <NavLink
                to="/"
                data-scroll="top"
                onClick={(e) => {
                  setIsBurger(false);
                  scrollInto(e.target);
                }}
                className={s.link}
              >
                {t("header.main")}
              </NavLink>
              <NavLink
                to="/"
                data-scroll="about"
                className={s.link}
                onClick={(e) => {
                  setIsBurger(false);
                  scrollInto(e.target);
                }}
              >
                {t("header.about")}
              </NavLink>
              <NavLink
                to="/"
                data-scroll="service"
                className={s.link}
                onClick={(e) => {
                  setIsBurger(false);
                  scrollInto(e.target);
                }}
              >
                {t("header.our_services")}
              </NavLink>

              <NavLink
                to="/seaman"
                data-scroll="seaman"
                onClick={(e) => {
                  setIsBurger(false);
                  scrollInto(e.target);
                }}
                className={`${s.link} ${isSailorMore && s.active}`}
              >
                {t("header.seafarers")}
              </NavLink>
              <NavLink
                to="/shipowners"
                className={`${s.link} ${isBussinesMore && s.active}`}
                data-scroll="shipowners"
                onClick={(e) => {
                  setIsBurger(false);
                  scrollInto(e.target);
                }}
              >
                {t("header.shipowners")}
              </NavLink>
              <NavLink
                to="/"
                data-scroll="contacts"
                className={s.link}
                onClick={(e) => {
                  setIsBurger(false);
                  scrollInto(e.target);
                }}
              >
                {t("header.contact")}
              </NavLink>
            </div>
          </nav>
        </div>
      )}
      <div class="container">
        <div className={s.header__inner} onClick={() => setCounter(counter++)}>
          <div className={s.logo}>
            <div className={s.logo_img}>
              <img src={logo} alt="logo" />
            </div>
            <div className={s.right}>
              <div className={s.logo_title}>ICG.Ltd</div>
              <div className={s.logo_subtitle}>
                <p>International</p>
                <p>Crewing Group</p>
              </div>
            </div>
          </div>
          <nav className={s.nav}>
            {!props.footer && (
              <div className={s.lang_mob}>
                <Languages isRussian={isRussian} setIsRussian={setIsRussian} />
              </div>
            )}
            {!props.footer && (
              <div
                className={`${s.burger} ${isBurger && s.active}`}
                onClick={() => setIsBurger(!isBurger)}
              >
                <div className={s.burger_line}></div>
              </div>
            )}
            <div className={s.nav_inner}>
              <NavLink
                to="/"
                data-scroll="top"
                onClick={(e) => scrollInto(e.target)}
                className={s.link}
              >
                {t("header.main")}
              </NavLink>
              <NavLink
                to="/"
                data-scroll="about"
                className={s.link}
                onClick={(e) => scrollInto(e.target)}
              >
                {t("header.about")}
              </NavLink>
              <NavLink
                to="/"
                data-scroll="service"
                className={s.link}
                onClick={(e) => scrollInto(e.target)}
              >
                {t("header.our_services")}
              </NavLink>
              <div
                className={`${s.seamans}`}
                onMouseOver={() => setIsSailorMore(true)}
                onMouseLeave={() =>
                  setTimeout(
                    () => {
                      setIsSailorMore(false);
                    },
                    props.footer ? 1000 : 100
                  )
                }
              >
                <NavLink
                  to="/seaman"
                  data-scroll="seaman"
                  onClick={(e) => scrollInto(e.target)}
                  className={`${s.link} ${isSailorMore && s.active}`}
                >
                  {t("header.seafarers")}
                </NavLink>
                <div className={`${s.links_extra} ${isSailorMore && s.active}`}>
                  <NavLink
                    to="/seaman"
                    data-scroll="vakansii"
                    onClick={(e) => scrollInto(e.target)}
                    className={s.link}
                  >
                    {t("header.vacancies")}
                  </NavLink>
                  <NavLink
                    to="/seaman"
                    data-scroll="anketa"
                    onClick={(e) => scrollInto(e.target)}
                    className={s.link}
                  >
                    {t("header.form")}
                  </NavLink>
                  <NavLink
                    className={s.link}
                    to="/seaman"
                    data-scroll="service_seaman"
                    onClick={(e) => scrollInto(e.target)}
                  >
                    {t("header.Company_services")}
                  </NavLink>
                </div>
              </div>
              <div
                className={`${s.seamans}`}
                onMouseOver={() => setIsBussinesMore(true)}
                onMouseLeave={() =>
                  setTimeout(
                    () => {
                      setIsBussinesMore(false);
                    },
                    props.footer ? 1000 : 100
                  )
                }
              >
                <NavLink
                  to="/shipowners"
                  className={`${s.link} ${isBussinesMore && s.active}`}
                  data-scroll="shipowners"
                  onClick={(e) => scrollInto(e.target)}
                >
                  {t("header.shipowners")}
                </NavLink>
                <div
                  className={`${s.links_extra} ${isBussinesMore && s.active}`}
                >
                  <NavLink
                    to="/shipowners"
                    data-scroll="service_sudo"
                    className={s.link}
                    onClick={(e) => scrollInto(e.target)}
                  >
                    {t("header.Company_services")}
                  </NavLink>
                  <NavLink
                    to="/shipowners"
                    data-scroll="bussines"
                    className={s.link}
                    onClick={(e) => scrollInto(e.target)}
                  >
                    {t("header.Cooperation")}
                  </NavLink>
                </div>
              </div>
              <NavLink
                to="/"
                data-scroll="contacts"
                className={s.link}
                onClick={(e) => scrollInto(e.target)}
              >
                {t("header.contact")}
              </NavLink>
              {!props.footer && (
                <Languages isRussian={isRussian} setIsRussian={setIsRussian} />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
