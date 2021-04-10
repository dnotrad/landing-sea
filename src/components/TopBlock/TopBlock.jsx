import React from "react";
import s from "./TopBlock.module.css";

const SocialLink = (props) => {
  return (
    <div className={s.social_link}>
      <img src={props.img} alt="link" />
    </div>
  );
};

const TopBlock = (props) => {
  return (
    <section className={s.block}>
      <div className={s.bg}>
        <div className={s.gradient1}></div>
        <div className={s.gradient2}></div>
        <img src={props.bg} alt="" />
      </div>
      <div className="container">
        <div className={s.content}>
          <div className={s.content_inner}>
            <div className={s.title}>{props.title}</div>
            <div className={s.subtitle} style={{maxWidth: props.width}}>
              {props.subtitle.map((text) => (
                <p>{text}</p>
              ))}
            </div>
            <div className={s.socials}>
              {props.links.map((img) => (
                <SocialLink img={img} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBlock;
