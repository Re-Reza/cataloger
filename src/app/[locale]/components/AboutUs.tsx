"use client";
import { useRef, useEffect, useState, FC } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { motion } from "motion/react";
import Image from "next/image";
import {
  circleAnimate,
  factoryVarient,
  logoVarient,
  HorizontalSlideAppear,
  topicVarient,
  borderMotion,
  bottomTotop,
  opacityAppear,
} from "../utils/varients";
// import { InView, useInView } from "react-intersection-observer";
import About2 from "./About2";

const AboutUs: FC<{ activeSlide: number; prevSlides: number }> = ({
  prevSlides,
  activeSlide,
}) => {
  /* <button
            onClick={() => navigateSlide(1)}
            className="homeNavigate absolute top-[3%] left-[2%] text-[2em]"
          >
            <FaList />
          </button> */

  return (
    <>
      <SwiperSlide key={0} className="p-[3em]">
        {activeSlide + prevSlides == 1 ? (
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
                variants={HorizontalSlideAppear("-50vw", 1.9, 0)}
                viewport={{ once: false }}
                initial="hidden"
                whileInView="visible"
                className="p-[0.76em] bg-white text-justify border-solid border-[darkBlue] border-[2px] relative left-[17%]"
              >
                <h2 className="text-[1.5em] text-[darkBlue] font-[600] mb-4">
                  خوش آمدید
                </h2>
                <p className="font-[500] text-[1.06em] leading-[1.8]">
                  به جهان مدرن تجهیز صنعت برین خوش آمدید.
                  <br />
                  جایی که نوآوری، کیفیت و دقت در طراحی و تولید تجهیزات آموزشی و
                  اداری معنا می یابد ما در برین با تکیه بر تجربه، تخصص و نگاه
                  آینده نگر تلاش کرده ایم تا فضاهای آموزشی و کاری را به محیط
                  هایی کارآمد، زیبا و الهام بخش تبدیل کنیم. این کاتالوگ، دریچه
                  ای است به بخشی از مسیر ما، مسیری که با اعتماد شما، هر روز روشن
                  تر می شود.
                </p>
              </motion.div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </SwiperSlide>

      <SwiperSlide key={1} className="p-[3em]">
        {activeSlide + prevSlides == 2 ? (
          <motion.div
            className="introContainer"
            variants={borderMotion}
            initial="hidden"
            whileInView="visible"
          >
            <motion.h2
              variants={topicVarient}
              initial="hidden"
              whileInView="visible"
              className="intro"
            >
              معرفی مدرن تجهیز صنعت برین
            </motion.h2>

            <div className="p-[2em] pt-[4em] flex flex-col items-center h-full">
              <div className="w-[60%] h-full">
                <motion.p
                  variants={logoVarient}
                  initial="hidden"
                  whileInView="visible"
                  className="text-justify text-center font-[700] text-[1.1em] leading-[1.8]"
                >
                  شرکت تولیدی مدرن تجهیز صنعت برین با افتخار به عنوان یکی از
                  پیشروان صنعت نوسازی و تجهیز مدارس، به ارائه خدماتی گسترده در
                  زمینه طراحی، تولید و نصب انواع میز و نیمکت مدارس میپردازد. ای
                  شرکت با بهره گیری از تکنولوژی های مدرن و مواد اولیه با کیفیت،
                  محصولاتی را تولید می کند که عـــلاوه بر دوام و استحکام، به
                  راحتی و ایمنی دانش آمــوزان نیز توجه ویژه ای دارد. تیم حرفــه
                  ای ما با تخصص در زمینه نوســـازی مدارس، به روززسانی تجهیزات و
                  ارائه راهکارهای خلاقانه، محیطی مناسب و الهام بخش برای دانش
                  آموزان ایجاد می کند.
                </motion.p>
                <motion.div className="mt-4">
                  <Image
                    className="h-full"
                    src="/images/factory.jpg"
                    width={50}
                    height={50}
                    alt="facory"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ) : (
          <></>
        )}
      </SwiperSlide>

      <SwiperSlide key={2} className="p-[2em]">
        {activeSlide + prevSlides == 3 ? (
          <>
            <div className="grid grid-cols-2 gap-[22px] flex justify-center gap-5">
              <div className="text-[darkBlue]">
                <div className="border-solid p-[0.6em] pt-[1.2em] pb-[3em] border-[darkBlue] border-l-[2.5px] border-t-[2.5px] border-b-[2.5px] border-r-0">
                  <motion.div
                    variants={opacityAppear(0.3, 2.9)}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <h2 className="text-[1.7em] mb-5 font-[800]">
                      چرا ما را انتخاب کنید؟
                    </h2>
                  </motion.div>
                  <motion.div
                    variants={opacityAppear(0.65, 2.9)}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <p className="text-justify text-center font-[700] text-[1.1em] leading-[1.8] text-[blueDark]">
                      انتخاب شرکت مدرن تجــهیز صنعت برین انتخاب حرفه ای هاست. ما
                      با ارائه محصولات باکیفیت و بهره گیری از تکـــنولوژی های
                      روز، نیاز های شمارا به بهترین شکل ممکن پاسخ می دهیم. تیم
                      متخصص ما با تجریه و تعــهد بالا، خدمات مشاوره رایگان و
                      پشتیبانی 24 ساعته را ارائه می دهد تا مطمئن شوید که پروژه
                      شما به طور کامل و به موقع اجرا می شود. باما شما از یک
                      همکاری پایدار و محصولات ماندگار بهره مند خواهید شد که به
                      ارتقای محیط آموزشی شما کمک می کند.
                    </p>
                  </motion.div>
                </div>

                <div className="p-[0.6em] pt-[8em] pb-[8em] text-[darkBlue] border-r-[2.5px] border-b-0 border-l-0 border-t-0 border-solid border-r-[blueDark]">
                  <motion.p
                    variants={opacityAppear(0.98, 2.9)}
                    initial="hidden"
                    whileInView="visible"
                    className="text-[1.6em] font-[800] text-justify text-center leading-[1.8]"
                  >
                    قیمت مناسب و اجــــــرای به موقع کیفیت برتر و محصولات
                    ماندگــــار خدمــات پس از فروش و پشتیبانی مداوم
                  </motion.p>
                </div>
              </div>
              <div>
                <motion.div
                  variants={HorizontalSlideAppear("-20vw", 1.9, 0)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Image
                    className="w-full mb-[25px]"
                    src="/images/imageIntroTop.jpg"
                    width={350}
                    height={350}
                    alt="imageIntroTop"
                  />
                </motion.div>
                <motion.div
                  variants={HorizontalSlideAppear("-20vw", 1.9, 0.26)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Image
                    className="w-full"
                    src="/images/imageIntroBottom.jpg"
                    width={350}
                    height={350}
                    alt="imageIntroBottom"
                  />
                </motion.div>
              </div>
            </div>
            <div className="w-full word-space-c font-[600] tracking-[4px] text-[darkBlue] text-[1.1em] border-solid border-r-0 border-b-[0] text-left border-l-[2.5px] border-t-[2.5px] border-t-[blueDark] border-l-[blueDark] p-[2em]">
              <motion.div
                variants={opacityAppear(1.3, 2.9)}
                initial="hidden"
                whileInView="visible"
              >
                MANUFACTURING COMPANY MTSB
              </motion.div>
            </div>
          </>
        ) : (
          <></>
        )}
      </SwiperSlide>
      <SwiperSlide key={3} className="p-[2em]">
        {activeSlide + prevSlides == 4 ? (
          <div className="h-full flex flex-col justify-center">
            <div className="mb-[1.5em] pr-[2.1em]">
              <motion.p
                variants={opacityAppear(0.5, 3)}
                initial="hidden"
                whileInView="visible"
                className="text-[darkBlue] font-[700] text-[1.8em]"
              >
                فناوری جوشکاری رباتیک، ســرعت، دقــت و کـــفیت در خدمت تولــید
              </motion.p>
            </div>
            <div className="border-solid border-[darkBlue] p-[1.5em] text-justify text-[darkBlue] text-[1.3em] leading-[1.8] font-[600] border-l-[2.5px] border-t-[2.5px] border-b-[2.5px] border-r-0">
              <motion.p
                variants={HorizontalSlideAppear("50vw", 1.9, 0.2)}
                initial="hidden"
                whileInView="visible"
              >
                در کارخانه مدرنت تجهیز صنعت برین، بهره گیری از ربات های پـیشرفته
                جوشکار، گامی بلند در راستای افزایش بهره وری، یکنواختی کیفیت و
                کاهش زمان تولید برداشته ایم. این فناوری نوین، امکان اجرای
                اتصالات دقیق، مستحکم و یکدست را در ساهت محصولات فراهم می کند و
                باعث ارتقای سطـح کیفی تجهیزات آموزش و اداری تولیدی ما شده است.
                با تکیه بر این سیستم هوشمــند، سفارش های شما با دقت بالا و در
                سریع ترین زمان ممکن تولـید و تحـویل می گـردد.
              </motion.p>
            </div>
            <div className="grid grid-cols-3 grid-rows-[400px] gap-5 border-solid border-[darkBlue] p-[1.5em] border-l-0 border-t-0 border-b-[2.5px] border-r-[2.5px]">
              <motion.div
                className="robot1Box"
                variants={HorizontalSlideAppear("-50vw", 1.9, 0)}
                initial="hidden"
                whileInView="visible"
              ></motion.div>
              <motion.div
                className="robot2Box"
                variants={HorizontalSlideAppear("-30vw", 1.9, 0.4)}
                initial="hidden"
                whileInView="visible"
              ></motion.div>
              <motion.div
                className="robot3Box"
                variants={HorizontalSlideAppear("-20vw", 1.9, 0.8)}
                initial="hidden"
                whileInView="visible"
              ></motion.div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </SwiperSlide>
    </>
  );
};

AboutUs.displayName = "SwiperSlide";

export default AboutUs;
