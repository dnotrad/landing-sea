import React from "react";

// components
import TopBlock from "./../TopBlock/TopBlock";
import { Achiev } from "./../AboutCompany/AboutCompany";

// styles
import title from "../AboutCompany/AboutCompany.module.css";
import s from "./Seaman.module.css";

// icons
import whats from "./../../assets/icons/whats.svg";
import mail from "./../../assets/icons/mail.svg";
import call from "./../../assets/icons/call-white.svg";
import rupor from "../../assets/icons/seaman/rupor.svg";
import med from "../../assets/icons/seaman/med.svg";
import rope from "../../assets/icons/seaman/rope.svg";
import spoon from "../../assets/icons/seaman/spoon.svg";
import stanok from "../../assets/icons/seaman/stanok.svg";
import temp from "../../assets/icons/seaman/temp.svg";
import arrow from "../../assets/icons/arrow-header.svg";

import doc2 from "../../assets/icons/service/doc2.svg";
import job from "../../assets/icons/service/job.svg";
import passport from "../../assets/icons/service/passport.svg";
import seaDoc from "../../assets/icons/service/sea-doc.svg";
import visaWhite from "../../assets/icons/service/visa-white.svg";

import cert from "../../assets/icons/seaman/second/cert.svg";
import flag from "../../assets/icons/seaman/second/flag.svg";
import hand from "../../assets/icons/seaman/second/hand.svg";
import passportSec from "../../assets/icons/seaman/second/passport.svg";
import ship from "../../assets/icons/seaman/second/ship.svg";
import photo from "../../assets/icons/seaman/second/photo.svg";

// img
import bg from "../../assets/img/bg-seaman.png";
import bg2 from "../../assets/img/bg-seaman2.png";
import bg3 from "../../assets/img/bg-seaman3.png";
import OurService from "../OurService/OurService";

// docs

import anketa1 from "../../assets/docs/anketa_ryadovoi.doc";
import anketa2 from "../../assets/docs/anketa_officer.doc";

const achievs = [
  { text: "Рефмеханик, помощник рефмеханика и рефмашинист", img: temp },
  { text: "Ваерный лебедчик", img: rope },
  { text: "Судовой врач", img: med },
  { text: "Шефповар", img: spoon },
  { text: "Токарь", img: stanok },
];
const achievsService = [
  {
    text:
      "Украинских документов (загранпаспорта, ID-карта, свидетельство о рождении и тд.)",
    img: doc2,
  },

  {
    text: "Морских документов (РФ и Украины)",
    img: seaDoc,
  },
  {
    text:
      "Продление, новый паспорт моряка Украины и справки об отсутствии судимости",
    img: passport,
  },
  {
    text: "Консультация по трудоустройству в море, представление на УЛМ и МК",
    img: job,
  },
  {
    text: "Визовое сопровождение моряков",
    img: visaWhite,
  },
];
const achievsSecond = [
  { text: "Фотографии 3 x 4", img: photo },
  { text: "Паспорт моряка, загранпаспорт", img: passportSec },
  { text: "Сертификаты согласно ПДНВ 78/95", img: cert },
  { text: "Копии сертификатов, отзывов, и т.д.", img: hand },
  { text: "Справки о плавании (если есть)", img: ship },
  { text: "Документы флага (если есть)", img: flag },
];
const Seaman = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={s.page} id="seaman">
      <TopBlock
        bg={bg}
        width="820px"
        title="Работа в море"
        subtitle={[
          `«Международная Крюинговая Группа» ищет специалистов, которые готовы поддерживать ее высокий уровень работы на борту. Мы предлагаем хорошие условия работы и возможности для роста. ICG.Ltd приглашает к сотрудничеству морских специалистов различной специализации и квалификации.`,
          "По всем вопросам вы можете позвонить нам по телефону или написать в мессенджер:",
        ]}
        subtitle_mob={[
          `«Международная Крюинговая Группа» ищет специалистов, которые готовы поддерживать ее высокий уровень работы на борту. Мы предлагаем хорошие условия работы и возможности для роста.`,
          "По всем вопросам вы можете позвонить нам по телефону или написать в мессенджер:",
        ]}
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
            href: "mailto:icgsev@gmail.com",
          },
        ]}
      />
      <div className={s.inner}>
        <div className={s.top}>
          <div className={s.bg}>
            <div className={s.gradient1}></div>
            <div className={s.gradient2}></div>
            <img src={bg3} alt="bg2" />
          </div>
          <div className="container">
            <div className={title.title} id="vakansii">
              Вакансии
            </div>
            <div className={s.rupor}>
              <div className={s.rupor_img}>
                <img src={rupor} alt="rupor" />
              </div>
              <div className={s.rupor_text}>Срочно требуется</div>
            </div>
            <div className={s.vakansia}>
              <p>
                <span>Опытный рефмеханик</span> на судно БАТМ. Посадка в Лас
                Пальмасе по готовности кандидата.
              </p>
              <p>
                <span>Оклад 5000 </span>$
              </p>
            </div>
            <button
              className={s.button_more}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div>Больше вакансий</div>
              <div className={`${s.button_img} ${isOpen && s.active}`}>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
            <div className={`${s.more_info} ${isOpen && s.active}`}>
              <p className={s.more_info_title}>
                Так же на судно типа БАТМ <span>требуются опытные :</span>
              </p>
              <div className={s.achievs}>
                {achievs.map((el) => (
                  <Achiev img={el.img} text={el.text} />
                ))}
              </div>
              <div className={s.date}>Дата размещения: 21.01.21</div>
              <div className={s.more_info_bottom}>
                <span> На постоянной основе требуются: </span>
                рефмеханики; электромеханики; механики - старшие механики,
                вторые, третьи; механики наладчики; технологи; тралмастера;
                матросы траловой и в цех; буфетчицы, официантки, прачки
              </div>
            </div>
            <div className={title.title} id="anketa">
              Анкета
            </div>
            <div className={s.anketa_subtitle}>
              <p>
                <span> Для постановки на учет необходимо </span> заполнить
                анкету.
              </p>
              <p>
                Анкета для рядового состава -
                <span className={s.download}>
                  <a href={anketa1} download> скачать</a>
                </span>
              </p>
              <p>
                Анкета для старшего состава -
                <span className={s.download}>
                  <a href={anketa2} download> скачать</a>
                </span>
              </p>
              <p>
                {" "}
                <span> Список необходимых документов:</span>
              </p>
            </div>
            <div className={s.achievs}>
              {achievsSecond.map((el) => (
                <Achiev img={el.img} text={el.text} />
              ))}
            </div>
            <div className={s.english}>
              *Опыт работы, хорошее знание английского языка ускорят ваше
              трудоустройство.
            </div>
          </div>
        </div>
        <OurService
          id="service_seaman"
          bg={bg2}
          title="Услуги компании"
          subtitle="Консультация по оформлению:"
          achievs={achievsService}
        />
      </div>
    </div>
  );
};

export default Seaman;
