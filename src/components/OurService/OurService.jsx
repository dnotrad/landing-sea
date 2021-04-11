import React from "react";
import s from "./OurService.module.css";
import title from "../AboutCompany/AboutCompany.module.css";
import { Achiev } from "../AboutCompany/AboutCompany";



const OurService = (props) => {
  return (
    <div className={s.service}>
      <div className={s.bg}>
        <div className={s.gradient1}></div>
        <div className={s.gradient2}></div>
        <img src={props.bg} alt="bg" />
      </div>
      <div className="container">
        <div className={s.block}>
          <div className={`${title.title} ${title.white}`} id={props.id}>
            {props.title}
          </div>
          {props.subtitle && <div className={s.subtitle}>{props.subtitle}</div>}
          <div className={s.achievs}>
            {props.achievs.map((el) => (
              <Achiev
                img={el.img}
                text={el.text}
                isWhite={true}
                rotate={el.rotate}
                fw={400}
                width={100}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
