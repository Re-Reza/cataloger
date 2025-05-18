"use client";
import { useRef, useEffect, useState, FC } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  circleAnimate,
  factoryVarient,
  logoVarient,
  textVarient,
  topicVarient,
} from "../utils/varients";
import About2 from "./About2";

const AboutUs: FC<{ slides: number; prevSlides: number }> = ({
  prevSlides,
  slides,
}) => {
  {
    /* <button
            onClick={() => navigateSlide(1)}
            className="homeNavigate absolute top-[3%] left-[2%] text-[2em]"
          >
            <FaList />
          </button> */
  }
  const divRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.01 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <>
      <SwiperSlide key={1} className="p-[3em]">
        <div className="flex gap-[4em] h-full">
          <motion.div
            className="w-[60%]"
            variants={factoryVarient}
            initial="hidden"
            whileInView="visible"
          >
            <Image
              className="h-full w-full"
              src="/images/factory.jpg"
              width={350}
              height={350}
              alt="facory"
            />
          </motion.div>
          <div className="flex flex-col justify-between pb-[9%]">
            <motion.div
              variants={logoVarient}
              initial="hidden"
              whileInView="visible"
              className="flex items-center gap-4"
            >
              <Image
                src="/images/logo.png"
                width={110}
                height={110}
                alt="logo"
              />
              <h1 className="text-[darkBlue] font-[700] text-[1.7em]">
                شرکت تولیدی
                <br />
                مدرن تجهیز صنعت برین
              </h1>
            </motion.div>

            <motion.div
              variants={textVarient}
              initial="hidden"
              whileInView="visible"
              className="p-[0.5em] bg-white rounded-lg text-justify"
            >
              <h2 className="text-[1.5em] text-[darkBlue] font-[600] mb-4">
                خوش آمدید
              </h2>
              <p className="font-[500] text-[1.06em] leading-[1.8]">
                به جهان مدرن تجهیز صنعت برین خوش آمدید.
                <br />
                جایی که نوآوری، کیفیت و دقت در طراحی و تولید تجهیزات آموزشی و
                اداری معنا می یابد ما در برین با تکیه بر تجربه، تخصص و نگاه
                آینده نگر تلاش کرده ایم تا فضاهای آموزشی و کاری را به محیط هایی
                کارآمد، زیبا و الهام بخش تبدیل کنیم. این کاتالوگ، دریچه ای است
                به بخشی از مسیر ما، مسیری که با اعتماد شما& هر روز روشن تر می
                شود.
              </p>
            </motion.div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide key={1} className="p-[3em]">
        <div
          // {`introContainer ${isVisible ? "animate" : ""}`}
          className="introContainer"
          // ref={divRef}
        >
          <motion.h2
            variants={topicVarient}
            initial="hidden"
            whileInView="visible"
            className="intro"
          >
            معرفی مدرن تجهیز صنعت برین
          </motion.h2>

          <div>
            <motion.p className="text-center  font-[700]">
              شرکت تولیدی مدرن تجهیز صنعت برین با افتخار به عنوان یکی از پیشروان
              صنعت نوسازی و تجهیز مدارس، به ارائه خدماتی گسترده در زمینه طراحی،
              تولید و نصب انواع میز و نیمکت مدارس میپردازد. ای شرکت با بهره گیری
              از تکنولوژی های مدرن و مواد اولیه با کیفیت، محصولاتی را تولید می
              کند که عـــلاوه بر دوام و استحکام، به راحتی و ایمنی دانش آمــوزان
              نیز توجه ویژه ای دارد. تیم حرفــه ای ما با تخصص در زمینه نوســـازی
              مدارس، به روززسانی تجهیزات و ارائه راهکارهای خلاقانه، محیطی مناسب
              و الهام بخش برای دانش آموزان ایجاد می کند.
            </motion.p>
            <motion.div>
              <Image>
                
              </Image>
            </motion.div>
          </div>
        </div>
        {/* <About2 /> */}
      </SwiperSlide>
    </>
  );
};

AboutUs.displayName = "SwiperSlide";

export default AboutUs;
