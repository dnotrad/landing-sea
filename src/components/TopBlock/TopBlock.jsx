import React from "react";
import s from "./TopBlock.module.css";

const SocialLink = (props) => {
  return (
    <a href={props.href} target="_blank" className={s.social_link}>
      <img src={props.img} alt="link" />
    </a>
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

            <div className={`${s.subtitle} ${s.mob}`} style={{maxWidth: props.width}}>
              {props.subtitle_mob.map((text) => (
                <p>{text}</p>
              ))}
            </div>

            <div className={s.socials}>
              {props.links.map((el) => (
                <SocialLink img={el.img} href={el.href} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBlock;
