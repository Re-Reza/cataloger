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

import icon1 from "@/../public/icons/آیکون ارزش برند-01.png";
import icon2 from "@/../public/icons/آیکون ارزش برند-02.png";
import icon3 from "@/../public/icons/آیکون ارزش برند-03.png";
import icon4 from "@/../public/icons/آیکون ارزش برند-04.png";
import icon5 from "@/../public/icons/آیکون ارزش برند-05.png";
import icon6 from "@/../public/icons/آیکون ارزش برند-06.png";
import icon7 from "@/../public/icons/آیکون ارزش برند-07.png";
import robot1 from "@/../public/images/robot4.png";
import robot2 from "@/../public/images/robot5.png";

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

  const valuesItems = [
    {
      title: "نوآوری مستمر",
      text: "ما هــمواره در جستجوی تازه ترین فناوری ها و راهکارهای هوشمندانه هستیم تا مرزهای موفقیت و پیشترفت را جابجا کنیم.",
      image: icon7,
    },
    {
      title: "انسان محوری",
      text: "در همه ی تصمیم ها و طراحی های ما، آسایش، رشد و شکوفایی انسان ها اولویت اصلی است.",
      image: icon3,
    },
    {
      title: "تعهد به کیفیت",
      text: "ما به ارائه محصولاتی متعهدیم که استانداردهای جهانی را رعایت کرده و فراتر از انتظار مشتریان می باشد.",
      image: icon4,
    },
    {
      title: "مسئولیت اجتماعی",
      text: "ما به عنوان یک سازمان پیشرو، به تاثیر مثبت در جامعه و محیط زیست اعتقاد داریم و همواره در راستای ایجاد تغییرات پایدار در جامعه گام بر می داریم.",
      image: icon1,
    },
    {
      title: "یادگیری و رشد مداوم",
      text: "ما فرهـنگ یادگـیری همیشگی را در سازمان ترویج می دهیم تا همیشه آماده ی مواجه با آینده باشیم",
      image: icon2,
    },
    {
      title: "صداقت و شفافیت",
      text: "ما به اصول صداقت، شفافیت و احترام در تمام ارتباطات داخلی و خارجی خو پایبندیم ",
      image: icon5,
    },
    {
      title: "همکاری هوشمندانه",
      text: "ما به قدرت کار تیمی هوشمند، مشارکت اثر بخش و هم افزایی تخصص ها باور داریم.",
      image: icon6,
    },
  ];

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
              <img
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
                <img
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
                <motion.div
                  className="mt-6 factoryBg"
                  variants={bottomTotop("100%", 0, 1.5)}
                  initial="hidden"
                  whileInView="visible"
                ></motion.div>
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
                  <img
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
                  <img
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
                در کارخانه مدرن تجهیز صنعت برین، بهره گیری از ربات های پـیشرفته
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

      <SwiperSlide key={4} className="py-[2em]">
        {activeSlide + prevSlides == 5 ? (
          <div>
            <div className="flex justify-end pr-[2.8em]">
              <div className="text-start w-full border-[darkBlue] p-[1.8em] border-solid border-l-0 border-t-[2px] border-b-[2px] border-r-[2px]">
                <motion.h2
                  variants={HorizontalSlideAppear("-40vw", 2, 0)}
                  initial="hidden"
                  whileInView="visible"
                  className="font-[700] text-[1.4em] text-[darkBlue]"
                >
                  ارزش های مدرن تجهیز صنعت برین
                </motion.h2>
              </div>
            </div>
            <div className="p-[2.8em] grid grid-cols-2 gap-[2em]">
              {valuesItems.map((item, index) => (
                <motion.div
                  variants={opacityAppear(index * 0.4, 3)}
                  initial="hidden"
                  whileInView="visible"
                  key={index}
                  className="text-[darkBlue]"
                >
                  <div className="mb-4 flex items-center">
                    <Image
                      className="w-[70px]"
                      src={item.image}
                      loading="eager"
                      alt={item.title}
                    />
                    <div className="font-[700] text-[1.05em]">{item.title}</div>
                  </div>
                  <p className="font-[500] leading-[1.8]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
      </SwiperSlide>

      <SwiperSlide key={5} className="p-[2em] bg-[darkBlue]">
        {activeSlide + prevSlides == 6 ? (
          <div className="grid h-full grid-cols-[2fr,8fr]">
            <motion.div
              variants={opacityAppear(1, 2)}
              initial="hidden"
              whileInView="visible"
            >
              <Image
                src={robot1}
                className="w-[450px] absolute bottom-[-12%] right-[-4%]"
                // width={150}
                // height={150}
                alt="robot1"
              />
            </motion.div>
            <div className="slidebgImg p-[2.8em] py-[3.4em] h-full">
              <div className="flex justify-end">
                <div className="custom-shadow-2 text-start w-full border-[darkBlue] p-[1.8em] border-solid border-l-0 border-t-[2px] border-b-[2px] border-r-[2px]">
                  <motion.h2
                    variants={HorizontalSlideAppear("-40vw", 2, 0)}
                    initial="hidden"
                    whileInView="visible"
                    className="font-[700] text-[1.4em] text-[darkBlue]"
                  >
                    فناوری جوشکاری رباتیک، سرعت، دقت و کیفیت در خدمت تولید
                  </motion.h2>
                </div>
              </div>
              <div className="h-[90%] custom-shadow-1 border-0 h-[87%] relative border-solid border-[darkBlue] border-l-[2px] border-b-[2px] p-[1.6em] pt-[7em]">
                <p className=" text-[darkBlue] leading-[2] font-[600] text-[1.2em] text-justify">
                  در کارخانه مدرن تجـهیز صنعت برین، بهره گیری از رباتهای پیشرفته
                  جوشکار، گامی بلند در راستای افزایش بهره وری، یکنواختی کیفیت و
                  کاهش زمان تولید برداشته ایم. این فناوری نوین، امکان اجرای
                  اتصالات دقیق، مستحکم و یکدست را در ساخت محصولات فراهم می کند و
                  باعث ارتقای سطح کیفی تجهیزات آموزشی و اداری تولیدی ما شده است.
                  با تکـیه بر این سیستم هوشــمند، سفارش های شما با دقت بالا و در
                  سریع ترین زمان ممکن تولید و تحویل می گردد.
                </p>
                <div className="absolute bottom-[-2%] bg-[#dad4d4] px-[1em] right-0 word-space-c font-[500] tracking-[4px] text-[darkBlue] text-[1.08em]">
                  MANUFACTURING COMPANY MTSB
                </div>
                <motion.div
                  variants={bottomTotop("100%", 0.5, 3, 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  className="absolute right-[8%]  font-[800] tracking-[4px] text-[darkBlue] text-[16em]"
                >
                  MTSB
                </motion.div>
                <motion.div
                  className="flex justify-end"
                  variants={opacityAppear(2, 2)}
                  initial="hidden"
                  whileInView="visible"
                >
                  <Image
                    src={robot2}
                    className="w-[290px] absolute left-[-7%] bottom-[-28%]"
                    // width={150}
                    // height={150}
                    alt="robot2"
                  />
                </motion.div>
              </div>
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
