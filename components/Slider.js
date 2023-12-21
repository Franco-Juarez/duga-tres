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

export default function Slider({ postData }) {
  return (
    <div className={styles.swiperWrapper}>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={2}
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