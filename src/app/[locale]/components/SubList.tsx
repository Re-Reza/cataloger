import { FC } from "react";
import { SwiperSlide } from "swiper/react";

const SubList: FC<{
  subItem: {
    id: number;
    title: string;
    subList: {
      title: string;
      imageAddress: string;
    }[];
  };
}> = ({ subItem }) => {
  return (
    <>
      {subItem.subList.map((item, index) => (
        <SwiperSlide key={`${subItem.id} ${index}`}>item 1</SwiperSlide>
      ))}
    </>
  );
};
// {subItem.subList.map((item, index) => (

// ))}

export default SubList;
