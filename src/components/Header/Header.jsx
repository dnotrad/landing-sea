import React from "react";
import s from "./Header.module.css";
import logo from "../../assets/icons/logo.svg";
import rus from "../../assets/icons/russia.svg";
import eng from "../../assets/icons/england.svg";
import arrow from "../../assets/icons/arrow-header.svg";
import { NavLink, Link } from "react-router-dom";

const Languages = () => {
  const [isRussian, setIsRussian] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={s.languages} onClick={() => setIsOpen(!isOpen)}>
      <div className={`${s.language}`}>
        {isRussian ? (
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
          setIsRussian(!isRussian);
          // setIsOpen(false);
        }}
      >
        <div className={`${s.language} ${s.small}`}>
          {isRussian ? (
            <img src={eng} alt="england" />
          ) : (
            <img src={rus} alt="russia" />
          )}
        </div>
      </div>
    </div>
  );
};
const Header = (props) => {
  function scrollInto(e) {
    const blockID = e.getAttribute("data-scroll");
    setTimeout(() => {
      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  const [isSailorMore, setIsSailorMore] = React.useState(false);
  const [isBussinesMore, setIsBussinesMore] = React.useState(false);
  return (
    <header className={`${s.header} ${props.footer && s.footer}`}>
      <div class="container">
        <div className={s.header__inner}>
          <div className={s.logo}>
            <div className={s.logo_img}>
              <img src={logo} alt="logo" />
            </div>
            <div className={s.logo_title}>ICG.Ltd</div>
            <div className={s.logo_subtitle}>
              <p>International</p>
              <p>Crewing Group</p>
            </div>
          </div>
          <nav className={s.nav}>
            <div className={s.nav_inner}>
              <NavLink
                to="/"
                data-scroll="top"
                onClick={(e) => scrollInto(e.target)}
                className={s.link}
              >
                Главная
              </NavLink>
              <NavLink
                to="/"
                data-scroll="about"
                className={s.link}
                onClick={(e) => scrollInto(e.target)}
              >
                О компании
              </NavLink>
              <NavLink
                to="/"
                data-scroll="service"
                className={s.link}
                onClick={(e) => scrollInto(e.target)}
              >
                Наши услуги
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
                <NavLink to="/seaman" className={`${s.link} ${isSailorMore && s.active}`}>
                  Морякам
                </NavLink>
                <div className={`${s.links_extra} ${isSailorMore && s.active}`}>
                  <NavLink to="/shipowners" className={s.link}>
                    Вакансии
                  </NavLink>
                  <NavLink to="/shipowners" className={s.link}>
                    Анкета
                  </NavLink>
                  <NavLink to="/shipowners" className={s.link}>
                    Услуги компании
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
                  Судовладельцам
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
                    Услуги компании
                  </NavLink>
                  <NavLink
                    to="/shipowners"
                    data-scroll="bussines"
                    className={s.link}
                    onClick={(e) => scrollInto(e.target)}
                  >
                    Сотрудничество
                  </NavLink>
                </div>
              </div>
              <NavLink
                to="/"
                data-scroll="contacts"
                className={s.link}
                onClick={(e) => scrollInto(e.target)}
              >
                Контакты
              </NavLink>
              {!props.footer && <Languages />}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
