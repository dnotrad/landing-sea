import React from "react";
import s from "./AboutCompany.module.css";
import bg from "../../assets/img/about-bg.jpg";

// icons
import hat from "../../assets/icons/achievs/shapka.svg";
import man from "../../assets/icons/achievs/man.svg";
import book from "../../assets/icons/achievs/book-mouse.svg";
import translate from "../../assets/icons/achievs/translate.svg";
import visa from "../../assets/icons/achievs/visa.svg";

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
const achievs = [
  { text: "Контроль и проверка профессиональных навыков и знаний", img: hat },
  {
    text:
      "Контроль и проверка наличия и легитимности необходимых документов, руководствуясь требованиями STCW 78/95",
    img: man,
  },
  { text: "Проведение специализированных курсов и классов", img: book },
  { text: "Проверка знаний Английского языка", img: translate },
  { text: "Визовое сопровождение ", img: visa },
];
const AboutCompany = () => {
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
            <span>О компании</span>
          </div>
          <div className={s.subtitle}>
            <p>
              «ICG.Ltd» являемся сертифицированной и лицензированой крюинговой
              компанией. Больше 20 лет работы в сфере подбора и комплектации
              экипажей, наша компания предоставляет оптимальные решения и
              качественные услуги по подбору морских специалистов на суда
              различного типа.
            </p>
            <p>
              {" "}
              Мы гордимся тем, что в нашей компании работают
              высококвалифицированные специалисты, способные произвести широкий
              спектр услуг, касающихся нашего вида деятельности:
            </p>
          </div>
          <div className={s.achievs}>
            {achievs.map((el) => (
              <Achiev img={el.img} text={el.text} />
            ))}
          </div>
          <div className={s.subtitle}>
            <p>
              Для достижения лучших результатов работы компании «ICG Ltd.», наши
              сотрудники регулярно проходят различные стажировки, тематические
              курсы, по окончанию которых получают соответствующие сертификаты.
            </p>
            <p>
              Осознавая тот фактор, что от профессиональных навыков и знаний
              моряков, зависит безопасность судна, груза и экипажа на борту
              судна, мы уделяем особое внимание тестированию моряков, на знание
              всех норм и правил техники безопасности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
