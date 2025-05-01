
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import "./ResearchCard.css";

interface ResearchCardProps {
  title: string;
  date: string;
  source: string;
  content: string;
  images?: string[];
}

const ResearchCard: React.FC<ResearchCardProps> = ({ title, date, source, content, images = [] }) => {
  return (
    <Card className="research-card mb-6 hover:shadow-lg transition-shadow duration-300">
      {images.length > 0 && (
        <div className="card-image-container">
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={images.length > 1}
            modules={[Autoplay]}
            className="research-image-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-2 text-[#550000]">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{source}</span>
        </div>
        <p className="text-gray-700">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ResearchCard;
