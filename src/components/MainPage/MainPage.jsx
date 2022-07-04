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

// swiper
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// langs
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination]);

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

const MainPage = () => {
  const { t, i18n } = useTranslation();
  const contacts = [
    {
      title: t("contacts.adress"),
      text: [t("contacts.crimea"), t("contacts.street")],
      img: geo,
    },
    {
      title: t("contacts.hours"),
      text: [t("contacts.hours_time")],
      img: watch,
    },
    {
      title: t("contacts.tel"),
      text: [" +7(978)140-93-44", "+7(978)557-87-77"],
      img: call,
    },
    {
      title: t("contacts.email"),
      text: [" icgsev@gmail.com"],
      img: mailBlue,
    },
  ];
  const achievs = [
    { text: t("our_services.visa_processing"), img: visa },
    { text: t("our_services.tickets"), img: plain, rotate: true },
    { text: t("our_services.flights"), img: hands },
    { text: t("our_services.interests"), img: doc },
    { text: t("our_services.manpower"), img: peoples },
    { text: t("our_services.provision"), img: ship },
    { text: t("our_services.other"), img: more },
  ];
  React.useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <main className={s.main} id="top">
      <section className={s.inner}>
        <TopBlock
          bg={bg1}
          width="579px"
          title={t("first_page.title")}
          subtitle={[t("first_page.subtitle")]}
          subtitle_mob={[t("first_page.subtitle")]}
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
              href: "https://e.mail.ru/compose/?to=icgsev@gmail.com",
            },
          ]}
        />
        <AboutCompany />
        <section className={s.certificates}>
          <div className="container">
            <div className={title.title}>{t("certificates")}</div>
            <div className={s.certificates_inner}>
              <div className={s.certificate}>
                <a href={doc1} target="_blank">
                  <img src={doc1} alt="doc1" />
                </a>
              </div>
              <div className={s.certificate}>
                <a href={doc2} target="_blank">
                  <img src={doc2} alt="doc1" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={`${s.certificates} ${s.swiper}`}>
          <div class="swiper-pagination"></div>
          <div className="container">
            <div className={title.title}>{t("certificates")}</div>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div className={s.certificate}>
                    <a href={doc1} target="_blank">
                      <img src={doc1} alt="doc1" />
                    </a>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div className={s.certificate}>
                    <a href={doc2} target="_blank">
                      <img src={doc2} alt="doc1" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          </div>
        </section>
        <OurService
          bg={bg_servise}
          title={t("our_services.title")}
          achievs={achievs}
          id="service"
        />
        <section id="contacts" className={s.contacts}>
          <div className="container">
            <div className={title.title}>
              {" "}
              <span>{t("contacts.title")}</span>
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
