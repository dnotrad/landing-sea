import React from "react";
import s from "./AboutCompany.module.css";
import bg from "../../assets/img/about-bg.jpg";

// icons
import hat from "../../assets/icons/achievs/shapka.svg";
import man from "../../assets/icons/achievs/man.svg";
import book from "../../assets/icons/achievs/book-mouse.svg";
import translate from "../../assets/icons/achievs/translate.svg";
import visa from "../../assets/icons/achievs/visa.svg";
// translate
import { useTranslation } from "react-i18next";

export const Achiev = (props) => {
  return (
    <div className={s.achiev}>
      <div
        className={s.achiev_img}
        style={{ transform: props.rotate && "rotate(21deg)" }}
      >
        <img src={props.img} alt="achiev" />
      </div>
      <div
        style={{
          color: props.isWhite ? "white" : "",
          fontWeight: props.fw ? props.fw : 600,
          maxWidth: props.width ? `${props.width}%` : "50%",
        }}
        className={s.achiev_text}
      >
        {props.text}
      </div>
    </div>
  );
};

const AboutCompany = () => {
  const { t, i18n } = useTranslation();
  const achievs = [
    { text: t("about.achievs.1"), img: hat },
    { text: t("about.achievs.2"), img: man },
    { text: t("about.achievs.3"), img: book },
    { text: t("about.achievs.4"), img: translate },
    { text: t("about.achievs.5"), img: visa },
  ];
  return (
    <section id="about" className={s.about}>
      <div className={s.bg}>
        <div className={s.gradient1}></div>
        <div className={s.gradient2}></div>
        <img src={bg} alt="bg" />
      </div>
      <div class="container">
        <div className={s.about_inner}>
          <div className={s.title}>
            <span>{t("about.title")}</span>
          </div>
          <div className={s.subtitle}>
            <p>{t("about.subtitle")}</p>
            <p>{t("about.subtitle2")}</p>
          </div>
          <div className={s.achievs}>
            {achievs.map((el) => (
              <Achiev img={el.img} text={el.text} />
            ))}
          </div>
          <div className={s.subtitle}>
            <p>{t("about.subtitle3")}</p>
            <p>{t("about.subtitle4")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
