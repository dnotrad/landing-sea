import React from "react";

// components
import TopBlock from "./../TopBlock/TopBlock";
import { Achiev } from "./../AboutCompany/AboutCompany";

// styles
import title from "../AboutCompany/AboutCompany.module.css";
import s from "./Shipowners.module.css";

// icons
import whats from "./../../assets/icons/whats.svg";
import mail from "./../../assets/icons/mail.svg";
import call from "./../../assets/icons/call-white.svg";

import tickets from "../../assets/icons/shipowners/tickets.svg";
import seaman from "../../assets/icons/shipowners/seaman.svg";
import visa from "../../assets/icons/shipowners/visa.svg";
import doc from "../../assets/icons/shipowners/doc.svg";
import sobes from "../../assets/icons/shipowners/sobes.svg";
import med from "../../assets/icons/shipowners/med.svg";
import achiev from "../../assets/icons/shipowners/achiev.svg";
import settings from "../../assets/icons/shipowners/settings.svg";
import peoples from "../../assets/icons/shipowners/peoples.svg";
import ship from "../../assets/icons/shipowners/ship.svg";
import more from "../../assets/icons/shipowners/more.svg";

// img
import bg from "../../assets/img/bg-shipowners.png";
import bg2 from "../../assets/img/bg-shipowners2.png";

// langs
import { useTranslation } from "react-i18next";

const Shipowners = () => {
  const { t, i18n } = useTranslation();
  const achievs = [
    { text: t("shipowners.tickets"), img: tickets },
    { text: t("shipowners.uniform"), img: seaman },
    { text: t("shipowners.boarding"), img: visa },
    { text: t("shipowners.owners"), img: doc },
    { text: t("shipowners.interwiev"), img: sobes },
    { text: t("shipowners.assistance"), img: med },
    { text: t("shipowners.controle"), img: achiev },
    { text: t("shipowners.travel"), img: settings },
    { text: t("shipowners.manpower"), img: peoples },
    { text: t("shipowners.provision"), img: ship },
    { text: t("shipowners.other"), img: more },
  ];
  return (
    <div className={s.page} id="shipowners">
      <TopBlock
        bg={bg}
        width="820px"
        title={t("shipowners.title")}
        subtitle={[t("shipowners.subtitle"), t("shipowners.more")]}
        subtitle_mob={[t("shipowners.subtitle_mob"), t("shipowners.more")]}
        links={[
          {
            img: call,
            href: "tel:+7(978)140-93-44",
          },
          {
            img: whats,
            href: "mailto:icgsev@gmail.com",
          },
          {
            img: mail,
            href: "https://e.mail.ru/compose/?to=icgsev@gmail.com",
          },
        ]}
      />

      <div className={s.inner}>
        <div className={s.bg}>
          <div className={s.gradient1}></div>
          <div className={s.gradient2}></div>
          <img src={bg2} alt="bg2" />
        </div>
        <div className="container">
          <div className={s.service}>
            <div className={title.title} id="service_sudo">
              {t("shipowners.service")}
            </div>
            <div className={s.achievs}>
              {achievs.map((el) => (
                <Achiev width="100" img={el.img} text={el.text} />
              ))}
            </div>
            <div className={title.title} id="bussines">
              {t("shipowners.cooperation.title")}
            </div>
            <div className={s.text}>
              <p>{t("shipowners.cooperation.p1")}</p>
              <p>
                {t("shipowners.cooperation.p2.first")}{" "}
                <span> {t("shipowners.cooperation.p2.we_works")}</span>{" "}
                {t("shipowners.cooperation.p2.we_works_2")}
                <span> {t("shipowners.cooperation.p2.we_works_3")}</span>
                {t("shipowners.cooperation.p2.our_spec")}
                <span>{t("shipowners.cooperation.p2.our_spec_2")} </span>{" "}
                {t("shipowners.cooperation.p2.our_spec_3")}
              </p>
              <p>
                {t("shipowners.cooperation.p3.1")}
                <span>{t("shipowners.cooperation.p3.2")}</span>
              </p>
              <p>
                {t("shipowners.cooperation.p4.1")}
                <span>{t("shipowners.cooperation.p4.2")}</span>{" "}
                {t("shipowners.cooperation.p4.3")}
                <span>{t("shipowners.cooperation.p4.4")}</span>{" "}
                {t("shipowners.cooperation.p4.5")}
              </p>
              <p>
                {t("shipowners.cooperation.p5.1")}{" "}
                <span>{t("shipowners.cooperation.p5.2")}</span>
                {t("shipowners.cooperation.p5.3")}
                <span>{t("shipowners.cooperation.p5.4")}</span>
                {t("shipowners.cooperation.p5.5")}
              </p>
              <p>
              {t("shipowners.cooperation.p6.1")}{" "}
                <span>{t("shipowners.cooperation.p6.2")} </span>{t("shipowners.cooperation.p6.3")}{" "}
                <span>{t("shipowners.cooperation.p6.4")}</span>, {t("shipowners.cooperation.p6.5")}
                <span>{t("shipowners.cooperation.p6.6")}</span> {t("shipowners.cooperation.p6.7")}
              </p>
              <p>
              {t("shipowners.cooperation.p7.1")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipowners;
