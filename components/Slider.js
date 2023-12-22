// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//Import Styles
import styles from "../components/slider.module.css";
import Image from "next/image";
import Arrow from "./svg/arrow";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Slider({ postData }) {

  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      // Cambia el valor de slidesPerView según el ancho de la pantalla
      setSlidesPerView(window.innerWidth > 767 ? 2 : 1);
    };

    // Llama a handleResize cuando la ventana se redimensiona
    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={true}
        pagination={{ clickable: true, type: "bullets" }}
        style={{
          "--swiper-pagination-color": "#2D7676",
          "--swiper-navigation-color": "#020408",
        }}
      >
        {postData.map(({ id, date, title, image, author }) => (
          <SwiperSlide className={styles.swip} key={id}>
            <Image
              className={styles.articleImg}
              width={400}
              height={400}
              src={image}
            />
            <Link href="/" className={styles.authorBox}>
              <Image height={40} width={40} src={image} />
              <p>{author}</p>
            </Link>
            <div className={styles.description}>
              <div>
                <h2>{title}</h2>
                <Link href={`/posts/${id}`}>
                  <Arrow />
                </Link>
              </div>
              <p>{date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
