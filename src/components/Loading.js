import Image from "next/image";

import loadingStyles from "../styles/Loading.module.css";

export default function Loading({ opacity }) {
  return (
    <div className={loadingStyles.wrapper} style={{ opacity }}>
      <Image src="/img/lina-diamantes.jpg" layout="fill" objectFit="cover" />
      <div className={loadingStyles.element1} />
      <div className={loadingStyles.element2} />
      <div className={loadingStyles.element3} />
      <div className={loadingStyles.element4} />
      <Image
        className={loadingStyles.logo}
        src="/img/logo/l-color.png"
        width="600"
        height="600"
      />
    </div>
  );
}
