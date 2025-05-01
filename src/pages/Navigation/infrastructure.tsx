import AOS from 'aos';
import 'aos/dist/aos.css';

import React, { useState, useEffect } from 'react';
import {
  Home, Bus, Utensils, Users, Dumbbell, Music, Building2,
  X, BookOpen, Hotel, Trophy, ChevronLeft, ChevronRight
} from 'lucide-react';
import Layout from "@/components/layout/Layout";

interface Facility {
  id: number;
  title: string;
  description: string;
  images: string[];
  icon: React.ReactNode;
  details: string;
}

function ImageCarousel({
  images,
  interval = 5000,
  fullView = false
}: {
  images: string[],
  interval?: number,
  fullView?: boolean
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);

  useEffect(() => {
    let timer: number;
    if (isAutoPlaying) {
      timer = window.setInterval(() => {
        setCurrentIndex((current) => (current + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative group ${fullView ? 'max-h-[70vh] flex justify-center items-center bg-black' : ''}`}>
      <img
        src={images[currentIndex]}
        alt="Facility"
        className={`w-full ${fullView ? 'max-h-[80vh] md:max-h-[90vh] object-contain rounded-md' : 'h-48 object-cover'}`}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const facilities: Facility[] = [
  {
    id: 1,
    title: 'Hostel',
    description: 'Modern hostel facilities with comfortable beds and study areas for students.',
    images: ['/src/assets/infrastructure/hostel.jpeg'],
    icon: <Home className="w-6 h-6 text-[#800000]" />,
    details: 'Our hostels provide a comfortable living environment...'
  },
  {
    id: 2,
    title: 'Bus Service',
    description: 'Reliable transportation service with multiple routes covering the city.',
    images: ['/src/assets/Infrastructure/bus.jpg', '/src/assets/Infrastructure/bus2.jpg'],
    icon: <Bus className="w-6 h-6 text-[#800000]" />,
    details: 'Our fleet of modern buses operates on multiple routes...'
  },
  {
    id: 3,
    title: 'Canteen',
    description: 'Fresh, healthy meals prepared by expert staff in a hygienic environment.',
    images: [
      '/src/assets/infrastructure/canteen.png',
      '/src/assets/infrastructure/canteen1.jpg',
      '/src/assets/infrastructure/canteen3.jpg'
    ],
    icon: <Utensils className="w-6 h-6 text-[#800000]" />,
    details: 'Our canteen serves nutritious and delicious meals...'
  },
  {
    id: 4,
    title: 'Amphitheater',
    description: 'Spacious outdoor venue for cultural events and gatherings.',
    images: ['/src/assets/infrastructure/amphi.jpg', '/src/assets/infrastructure/amphi1.jpeg'],
    icon: <Users className="w-6 h-6 text-[#800000]" />,
    details: 'The amphitheater can accommodate up to 500 people...'
  },
  {
    id: 5,
    title: 'Play Ground',
    description: 'Well-maintained sports facilities for physical activities and recreation.',
    images: ['/src/assets/infrastructure/play1.jpg','/src/assets/infrastructure/play.jpg'],
    icon: <Trophy className="w-6 h-6 text-[#800000]" />,
    details: 'Our sports facilities include basketball courts...'
  },
  {
    id: 6,
    title: 'Music Room',
    description: 'Modern Life Style enables better music education center.',
    images: [
      '/src/assets/infrastructure/music.jpg',
      '/src/assets/infrastructure/music1.jpg',
    ],
    icon: <Music className="w-6 h-6 text-[#800000]" />,
    details: 'The music room is equipped with various instruments...'
  },
  {
    id: 7,
    title: 'Hi-Tech Gymkhana',
    description: 'State-of-the-art fitness center with modern equipment and trainers.',
    images: ['/src/assets/infrastructure/gym.jpg', '/src/assets/infrastructure/gym1.jpg'],
    icon: <Dumbbell className="w-6 h-6 text-[#800000]" />,
    details: 'Our hi-tech gymkhana features the latest fitness equipment...'
  },
  {
    id: 8,
    title: 'Guest Room',
    description: 'Comfortable accommodation for visiting faculty and parents.',
    images: ['/src/assets/infrastructure/guest.jpg'],
    icon: <Hotel className="w-6 h-6 text-[#800000]" />,
    details: 'Well-furnished guest rooms with modern amenities...'
  },
  {
    id: 9,
    title: 'Library',
    description: 'Extensive collection of books, journals, and digital resources.',
    images: [
      '/src/assets/infrastructure/library.avif',
      '/src/assets/infrastructure/library1.avif',
      '/src/assets/infrastructure/library2.webp',
    ],
    icon: <BookOpen className="w-6 h-6 text-[#800000]" />,
    details: 'Our library houses a vast collection of academic books...'
  }
];

function Infrastructure() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex items-center gap-2 mb-8" data-aos="fade-right">
            <Building2 className="w-6 h-6 text-[#800000]" />
            <h2 className="text-3xl font-bold text-[#800000]">Our Facilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => {
              const animation =
                index % 3 === 0 ? 'fade-left' :
                index % 3 === 1 ? 'fade-up' :
                'fade-right';

              return (
                <div
                  key={facility.id}
                  data-aos={animation}
                  className="bg-white rounded-lg shadow-[0_4px_20px_#80000040] overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => setSelectedFacility(facility)}
                >
                  <ImageCarousel images={facility.images} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      {facility.icon}
                      <h3 className="text-xl font-semibold text-gray-800">{facility.title}</h3>
                    </div>
                    <p className="text-gray-600">{facility.description}</p>
                    <button className="mt-4 text-[#800000] font-medium hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {selectedFacility && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-[0_8px_40px_rgba(0,0,0,0.3)] max-w-md w-full">
              <div className="relative">
                <div className="w-full max-h-[70vh] flex justify-center items-center p-2 bg-black">
                  <ImageCarousel images={selectedFacility.images} interval={6000} fullView />
                </div>

                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
                >
                  <X className="w-6 h-6 text-[#800000]" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {selectedFacility.icon}
                  <h3 className="text-2xl font-bold text-[#800000]">{selectedFacility.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{selectedFacility.description}</p>
                <p className="text-gray-700">{selectedFacility.details}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Infrastructure;
