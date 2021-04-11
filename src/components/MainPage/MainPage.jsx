import React from "react";
// components
import TopBlock from "../TopBlock/TopBlock";
import AboutCompany from "../AboutCompany/AboutCompany";

// styles
import s from "./MainPage.module.css";
import title from "../AboutCompany/AboutCompany.module.css";

// imgs
import bg1 from "../../assets/img/bg1.png";
import map from "../../assets/img/map.png";
import bg_servise from "../../assets/img/bg-service.png";

// icons
import inst from "./../../assets/icons/inst.svg";
import vk from "./../../assets/icons/vk.svg";
import whats from "./../../assets/icons/whats.svg";
import mail from "./../../assets/icons/mail.svg";
import geo from "../../assets/icons/contact/geo.svg";
import call from "../../assets/icons/contact/call.svg";
import mailBlue from "../../assets/icons/contact/mail.svg";
import watch from "../../assets/icons/contact/watch.svg";

// icons for servise
import visa from "../../assets/icons/service/visa.svg";
import plain from "../../assets/icons/service/plain.svg";
import hands from "../../assets/icons/service/hands.svg";
import doc from "../../assets/icons/service/doc.svg";
import peoples from "../../assets/icons/service/peoples.svg";
import ship from "../../assets/icons/service/ship.svg";
import more from "../../assets/icons/service/more.svg";

// docs
import doc1 from "../../assets/docs/cert1.jpg";
import doc2 from "../../assets/docs/cert2.jpg";
import OurService from "../OurService/OurService";

const ContactItem = (props) => {
  return (
    <div className={s.contact_item}>
      <div className={s.contact_left}>
        <div className={s.contact_img}>
          <img src={props.img} alt={props.img} />
        </div>
      </div>
      <div className={s.contact_right}>
        <div className={s.contact_text}>
          <span>{props.title}</span>
          <div className={s.contact_texts}>
            {props.text.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const contacts = [
  {
    title: "Адрес:",
    text: [" Крым, 299014, Севастополь", "Ул. Бориса Михайлова, 7-б"],
    img: geo,
  },
  {
    title: "Часы работы:",
    text: [" Пн-Пт 10:00-18:00 "],
    img: watch,
  },
  {
    title: "Телефон:",
    text: [" +7(978)140-93-44", "+7(978)557-87-77"],
    img: call,
  },
  {
    title: "Эл. Почта:",
    text: [" icgsev@gmail.com"],
    img: mailBlue,
  },
];
const achievs = [
  { text: "Оформление виз", img: visa },
  { text: "Бронирование билетов", img: plain, rotate: true },
  { text: "Организация чартерных рейсов", img: hands },
  { text: "Представление интересов компании Судовладельца", img: doc },
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
const MainPage = () => {
  return (
    <main className={s.main} id="top">
      <section className={s.inner}>
        <TopBlock
          bg={bg1}
          width="579px"
          title="Международная Крюинговая Группа"
          subtitle={[
            "Занимает одну из ведущих позиций в сфере подбора и трудоустройства моряков, работая на рынке с 2000г., выполняя заказы на разные типы судов.",
          ]}
          subtitle_mob={[
            "Занимает одну из ведущих позиций в сфере подбора и трудоустройства моряков, работая на рынке с 2000г., выполняя заказы на разные типы судов.",
          ]}
          links={[
            {
              img: inst,
              href: "https://instagram.com/icg.ltd?igshid=1dadgaw2pt13f",
            },
            {
              img: vk,
              href: "https://vk.com/icgltd",
            },
            {
              img: whats,
              href: "mailto:icgsev@gmail.com",
            },
            {
              img: mail,
              href: "mailto:icgsev@gmail.com",
            },
          ]}
        />
        <AboutCompany />
        <section className={s.certificates}>
          <div className="container">
            <div className={title.title}>Сертификаты</div>
            <div className={s.certificates_inner}>
              <a href={doc1} target="_blank" className={s.certificate}>
                <img src={doc1} alt="doc1" />
              </a>
              <a href={doc2} target="_blank" className={s.certificate}>
                <img src={doc2} alt="doc1" />
              </a>
            </div>
          </div>
        </section>
        <OurService
          bg={bg_servise}
          title="Наши услуги"
          achievs={achievs}
          id="service"
        />
        <section id="contacts" className={s.contacts}>
          <div className="container">
            <div className={title.title}>
              {" "}
              <span>Контакты</span>
            </div>
            <div className={s.contacts_inner}>
              <div className={s.contacts_inner__left}>
                {contacts.map((el) => (
                  <ContactItem title={el.title} text={el.text} img={el.img} />
                ))}
              </div>
              <a
                href="https://yandex.ru/maps/959/sevastopol/house/ulitsa_borisa_mikhaylova_7b/Z0oYcgNiSEMAQFpufXl5cH9jYA==/?ll=33.442167%2C44.581304&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=16.72"
                target="_blank"
                className={s.contacts_inner__right}
              >
                <img src={map} alt="" />
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MainPage;
