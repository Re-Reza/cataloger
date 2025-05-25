"use client";

import { useState, useRef, useEffect } from "react";
// import Image from "next/image";
import AboutUs from "./[locale]/components/AboutUs";
import CatalogueList from "./[locale]/components/CatalogueList";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaList } from "react-icons/fa6";
import { Swiper as SwiperType } from "swiper";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import SubList from "./[locale]/components/SubList";
import ProductItem from "./[locale]/components/ProductItem";
import "swiper/css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

type dataStructure = {
  id: number;
  title: string;
  subList: {
    title: string;
    imageAddress: string;
  }[];
  slideIndex?: number;
}[];

export default function Home() {
  const data: dataStructure = [
    {
      id: 1,
      title: "میز مدیریتی",
      subList: [
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
        {
          title: "میز",
          imageAddress: "",
        },
      ],
    },
    {
      id: 2,
      title: "میز کنفرانس",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 3,
      title: "میز منشی",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 4,
      title: "میز کارمندی",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 5,
      title: "مبلمان",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 6,
      title: "اداری",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 7,
      title: "کتابخانه",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 8,
      title: "صندلی کنفرانسی",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 9,
      title: "صندلی کارمندی",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 10,
      title: "میز گروهی",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 11,
      title: "مبلمان اداری",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
    {
      id: 12,
      title: "لوازم خانگی",
      subList: [
        {
          title: "",
          imageAddress: "",
        },
      ],
    },
  ];

  const swiperRef = useRef<SwiperType | null>(null);

  const [state, setState] = useState({
    sliderPage: 1,
  });

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setState({
        ...state,
        sliderPage:
          state.sliderPage == swiperRef.current.slides.length
            ? swiperRef.current.slides.length
            : (state.sliderPage += 1),
      });
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setState({
        ...state,
        sliderPage: state.sliderPage == 1 ? 1 : (state.sliderPage -= 1),
      });
    }
  };

  function navigateSlide(slideNumber: number) {
    swiperRef.current?.slideTo(slideNumber);
  }

  const chunckNumber = 10;
  const transferdData: dataStructure = [];
  let slideIndex = 0;

  data.forEach((item) => {
    for (let i = 0; i < item.subList.length; i += chunckNumber) {
      const chunckedSubList = item.subList.slice(i, i + chunckNumber);
      transferdData.push({
        id: item.id,
        title: item.title,
        subList: chunckedSubList,
        slideIndex: slideIndex + 2,
      });
      slideIndex++;
    }
  });

  const catalogueListData: {
    id: number;
    title: string;
    slideIndex?: number;
  }[] = [];
  transferdData.forEach((dataItem, index) => {
    const foundItem = catalogueListData.find((item) => item.id == dataItem.id);
    if (!foundItem) {
      catalogueListData.push({
        id: dataItem.id,
        title: dataItem.title,
        slideIndex: dataItem.slideIndex,
      });
    }
  });

  return (
    // <div className="2xl:p-[5em] xl:p-[3em] p-[1em] bg-[#eee] min-h-screen w-full items-center flex justify-center">
    <div className="px-[5em] bg-[#eee] min-h-screen w-full items-center flex justify-center">
      {state.sliderPage > 1 ? (
        <button
          className="max-lg:hidden absolute text-[1.6em] text-white rounded-tl-[15px] rounded-bl-[15px] p-[0.4em] right-[0] bg-[#00000038]"
          onClick={handlePrev}
        >
          <GrFormNext />
        </button>
      ) : (
        <></>
      )}
      <Swiper
        modules={[Mousewheel]}
        mousewheel={true}
        onSlideChange={(swiper) => {
          swiperRef.current = swiper;
          setState({
            sliderPage: swiper.activeIndex + 1,
          });
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setState({
            sliderPage: swiper.activeIndex + 1,
          });
        }}
        slidesPerView={1}
        className="mainContainer h-[90vh] w-[70%] bg-white"
      >
        <AboutUs activeSlide={state.sliderPage} prevSlides={0} />
        {/* <SwiperSlide>
          <CatalogueList
            slidTo={navigateSlide}
            list={transferdData.map((item) => ({
              title: item.title,
              slideIndex: item.slideIndex,
            }))}
          />
        </SwiperSlide> */}
        {/* {transferdData.map((item, index) => (
          <SwiperSlide key={index}>
            <button
              onClick={() => navigateSlide(1)}
              className="homeNavigate absolute top-[3%] left-[2%] text-[2em]"
            >
              <FaList />
            </button>
            <div className="p-[2.9em]">
              <h2>{item.title}</h2>
              <div className="productContainer">
                {item.subList.map((subItem, key) => (
                  <ProductItem key={key} product={subItem} />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}  */}
      </Swiper>
      <div className="absolute bottom-0 rounded-tl-[10px] rounded-tr-[10px] z-4 text-white bg-[#00000038] p-[.5em] font-semibold">
        {swiperRef?.current?.slides.length || 1} / {state.sliderPage}
      </div>
      {state.sliderPage < (swiperRef?.current?.slides.length || 0) ? (
        <button
          className="max-lg:hidden absolute bg-[#00000038] text-[1.6em] text-white rounded-tr-[15px] rounded-br-[15px] p-[0.4em] left-[0]"
          onClick={handleNext}
        >
          <GrFormPrevious />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

// const elements: React.ReactNode[] = [];
// if (index + 1 != 1 && (index + 1) % 8 == 0) {
//   console.log("returned ");
//   console.log(elements);
//   return (
//     <SwiperSlide key={`${item.id} ${index}`}>
//       {elements.map((item) => item)}
//     </SwiperSlide>
//   );
// } else {
//   elements.push(<div>item1</div>);
// }
