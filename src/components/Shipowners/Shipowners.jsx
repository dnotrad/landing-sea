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

const achievs = [
  { text: "Бронирование/покупка билетов", img: tickets },
  { text: "Предоставление спец.одежды морякам", img: seaman },
  { text: "Посадка/высадка, включая визовую поддержку", img: visa },
  { text: "Представление интересов компании Судовладельца", img: doc },
  {
    text:
      "Собеседование перед приемом на работу, контроль и проверка профессиональных навыков и знаний",
    img: sobes,
  },
  {
    text: "Содействие при прохождении медицинского освидетельствования",
    img: med,
  },
  {
    text:
      "Контроль и проверка наличия и легитимности необходимых документов, руководствуясь требованиями STCW 78/95",
    img: achiev,
  },
  {
    text:
      "Отправка специализированных мобильных бригад по ремонту и техническому контролю",
    img: settings,
  },
  {
    text:
      "Предоставление персонала для работы на верфях и береговых строительных проектах",
    img: peoples,
  },
  {
    text:
      "Предоставление квалифицированного плавсостава, как в единичном порядке, так и на основе комплектования полных экипажей, для всех типов судов",
    img: ship,
  },
  { text: "И другие сопутствующие услуги", img: more },
];
const Shipowners = () => {
  return (
    <div className={s.page} id="shipowners">
      <TopBlock
        bg={bg}
        width="820px"
        title="Судовладельцам"
        subtitle={[
          "«Международная Крюинговая Группа» предлагает ряд услуг по комплектации высококачественного экипажа на разные типы судов. Мы следуем международным и национальным требованиям. Все наши кандидаты тщательно подбираются квалифицированным и опытным персоналом нашей компании.",
          "По всем вопросам вы можите позвонить нам по телефону или написать в мессенджер:",
        ]}
        links={[call, whats, mail]}
      />

      <div className={s.inner}>
        <div className={s.bg}>
          <div className={s.gradient1}></div>
          <div className={s.gradient2}></div>
          <img src={bg2} alt="bg2" />
        </div>
        <div className="container">
          <div className={s.service}>
            <div className={title.title} id="service_sudo">Услуги компании</div>
            <div className={s.achievs}>
              {achievs.map((el) => (
                <Achiev width="100" img={el.img} text={el.text} />
              ))}
            </div>
            <div className={title.title} id="bussines">Сотрудничество</div>
            <div className={s.text}>
              Мы стараемся предложить нашим клиентам{" "}
              <span>лучший сервис! </span>
              «Международная Крюинговая Группа» имеет достойную базу
              <span>квалифицированных специалистов.</span> Каждый член экипажа
              сертифицирован и лицензирован. Наша компания нацелена на
              <span>долгосрочные партнерские отношения</span>с клиентами. Мы
              преданы судовладельцам и <span> даем гарантию качества.</span>
            </div>
            <div className={s.text}>
              Предложение о сотрудничестве можно скачать <a href="#"><span className={s.download}>здесь</span></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipowners;
