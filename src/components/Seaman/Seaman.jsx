import React from "react";
import * as axios from "axios";
// components
import TopBlock from "../TopBlock/TopBlock";
import { Achiev } from "../AboutCompany/AboutCompany";

// styles
import title from "../AboutCompany/AboutCompany.module.css";
import s from "./Seaman.module.css";

// icons
import upload from "../../assets/icons/upload.svg";
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

// langs
import { useTranslation } from "react-i18next";

const achievsService = [
  {
    text: "Украинских документов (загранпаспорта, ID-карта, свидетельство о рождении и тд.)",
    img: doc2,
  },

  {
    text: "Морских документов (РФ и Украины)",
    img: seaDoc,
  },
  {
    text: "Продление, новый паспорт моряка Украины и справки об отсутствии судимости",
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
  let date = new Date().toLocaleString("ru", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const [isOpen, setIsOpen] = React.useState(false);

  const [fio, setFio] = React.useState("");
  const [isFioErr, setIsFioErr] = React.useState(false);
  const [isFioGood, setIsFioGood] = React.useState(false);

  const [positon, setPosition] = React.useState("");
  const [isPositionErr, setIsPositionErr] = React.useState(false);
  const [isPositionGood, setIsPositionGood] = React.useState(false);

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [isPhoneNumberErr, setIsPhoneNumberErr] = React.useState(false);
  const [isPhoneNumberGood, setIsPhoneNumberGood] = React.useState(false);

  const [email, setEmail] = React.useState("");
  const [isEmailErr, setIsEmailErr] = React.useState(false);
  const [isEmailGood, setIsEmailGood] = React.useState(false);

  const [userFile, setUserFile] = React.useState(null);

  const { t, i18n } = useTranslation();

  // const form = React.useRef(null);
  let form = document.querySelector("#form");
  let formDate = new FormData();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!fio.trim()) setIsFioErr(true);
    if (!phoneNumber.trim()) setIsPhoneNumberErr(true);
    if (!email.trim()) setIsEmailErr(true);
    if (!userFile) alert("Загрузите файл");

    if (fio && email && phoneNumber && userFile) {
      formDate.set("user_name", fio);
      formDate.set("user_phone", phoneNumber);
      formDate.set("user_email", email);
      formDate.set("user_file", userFile, `${fio}_blank`);

      axios({
        method: "post",
        url: "telegram.php",
        data: formDate,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }
  };

  const [drag, setDrag] = React.useState(false);
  const [fileName, setFileName] = React.useState("");

  const [dragSuccess, setDragSuccess] = React.useState(false);
  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }
  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }
  function dropHandler(e) {
    e.preventDefault();
    let file = e.dataTransfer.files[0];
    setUserFile(file);
    if (file) {
      setDrag(false);
      setDragSuccess(true);
      setFileName(file.name);
    }
  }

  const achievs = [
    { text: t("seamans.requird.1"), img: temp },
    { text: t("seamans.requird.2"), img: rope },
    { text: t("seamans.requird.3"), img: med },
    { text: t("seamans.requird.4"), img: spoon },
    { text: t("seamans.requird.5"), img: stanok },
  ];

  return (
    <div className={s.page} id="seaman">
      <TopBlock
        bg={bg}
        width="820px"
        title={t("seamans.title")}
        subtitle={[t("seamans.subtitle"), t("seamans.questions")]}
        subtitle_mob={[t("seamans.subtitle_mob"), t("seamans.questions")]}
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
        <div className={s.top}>
          <div className={s.bg}>
            <div className={s.gradient1}></div>
            <div className={s.gradient2}></div>
            <img src={bg3} alt="bg2" />
          </div>
          <div className="container">
            <div className={title.title} id="vakansii">
              {t("seamans.vacancies")}
            </div>
            <div className={s.rupor}>
              <div className={s.rupor_img}>
                <img src={rupor} alt="rupor" />
              </div>
              <div className={s.rupor_text}>
                {t("seamans.urgently_required")}
              </div>
            </div>
            <div className={s.vakansia}>
              <p>{t("seamans.vakansia")}</p>
              <p>
                <span>{t("seamans.vakansia_cash")} 5000 </span>$
              </p>
            </div>
            <button
              className={s.button_more}
              onClick={() => setIsOpen(!isOpen)}
            >
              <div>{t("seamans.button")}</div>
              <div className={`${s.button_img} ${isOpen && s.active}`}>
                <img src={arrow} alt="arrow" />
              </div>
            </button>
            <div className={`${s.more_info} ${isOpen && s.active}`}>
              <p className={s.more_info_title}>{t("seamans.also")}</p>
              <div className={s.achievs}>
                {achievs.map((el) => (
                  <Achiev img={el.img} text={el.text} />
                ))}
              </div>
              <div className={s.date}>
                {t("seamans.date")}: {date || "10.04.2021"}
              </div>
              <div className={s.more_info_bottom}>{t("seamans.permanent")}</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className={title.title} id="anketa">
            Анкета
          </div>
          <div className={s.anketa_subtitle}>
            <p>
              <span> Для постановки на учет необходимо </span> заполнить анкету.
            </p>
            <p>
              Анкета для рядового состава -
              <span className={s.download}>
                <a href={anketa1} download>
                  {" "}
                  скачать
                </a>
              </span>
            </p>
            <p>
              Анкета для старшего состава -
              <span className={s.download}>
                <a href={anketa2} download>
                  {" "}
                  скачать
                </a>
              </span>
            </p>
            <p className={s.last}>
              *Заполните анкету и форму ниже, загрузите анкету и отправьте нам.{" "}
              <p className={s.rule}>{t("seamans.rule")}</p>
            </p>
            <form
              ref={form}
              action="telegram.php"
              method="POST"
              enctype="multipart/form-data"
              // onSubmit={(e) => handleSubmit(e)}
              id="form"
            >
              <input
                required
                type="text"
                name="user_name"
                placeholder="*ФИО"
                className={`${s.form_input} ${isFioErr && s.err} ${
                  isFioGood && s.good
                }`}
                onBlur={(e) => setIsFioGood(e.target.value.trim())}
                value={fio}
                onChange={(e) => {
                  if (e.target.value) setIsFioErr(false);
                  setFio(e.target.value);
                }}
              />
              <input
                required
                type="text"
                name="user_position"
                placeholder="*Должность"
                className={`${s.form_input} ${isPositionErr && s.err} ${
                  isPositionGood && s.good
                }`}
                onBlur={(e) => setIsPositionGood(e.target.value.trim())}
                value={positon}
                onChange={(e) => {
                  if (e.target.value) setIsPositionErr(false);
                  setPosition(e.target.value);
                }}
              />
              <input
                required
                type="tel"
                name="user_phone"
                placeholder="*Номер телефона"
                className={`${s.form_input} ${isPhoneNumberErr && s.err} ${
                  isPhoneNumberGood && s.good
                }`}
                onBlur={(e) => setIsPhoneNumberGood(e.target.value.trim())}
                value={phoneNumber}
                onChange={(e) => {
                  if (e.target.value) setIsPhoneNumberErr(false);
                  setPhoneNumber(e.target.value);
                }}
              />
              <input
                required
                type="email"
                name="user_email"
                placeholder="*E-mail"
                className={`${s.form_input} ${isEmailErr && s.err} ${
                  isEmailGood && s.good
                }`}
                value={email}
                onChange={(e) => {
                  if (e.target.value) setIsEmailErr(false);
                  setEmail(e.target.value);
                }}
                onBlur={(e) => setIsEmailGood(e.target.value.trim())}
              />
              <div
                className={`${s.drag_n_drop} ${drag && s.drag} ${
                  dragSuccess && s.success
                }`}
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                onDrop={(e) => dropHandler(e)}
              >
                <div className={s.drag_n_drop__img}>
                  <img src={upload} alt="upload" />
                </div>
                {fileName ? (
                  <div className={s.drag_n_drop__title}>{fileName}</div>
                ) : drag ? (
                  <div className={s.drag_n_drop__title}>
                    Отпустите файл, чтобы загрузить
                  </div>
                ) : (
                  <div className={s.drag_n_drop__title}>
                    Перенесите сюда файл
                  </div>
                )}
              </div>
              <div className={s.buttons}>
                <label for="file">Загрузить файл</label>
                <input
                  required
                  type="file"
                  id="file"
                  className={s.fileInput}
                  name="user_file"
                  onChange={(e) => {
                    let fileData = new FormData(
                      document.querySelector("#form")
                    ).get("user_file");

                    if (fileData) {
                      setUserFile(fileData);
                      setDrag(false);
                      setDragSuccess(true);
                      setFileName(fileData.name);
                    }
                  }}
                />
                <button type="submit">Отправить</button>
              </div>
            </form>
            <p>
              {" "}
              <span> Список необходимых документов:</span>
            </p>
            <div className={s.achievs}>
              {achievsSecond.map((el) => (
                <Achiev img={el.img} text={el.text} />
              ))}
            </div>
            <div className={s.english}>{t("seamans.exp")}</div>
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
