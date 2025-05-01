import React from "react";

const Video = () => {
  return (
    <section className="py-4 bg-white">
      <div
        className="container mx-auto px-2 md:px-4"
        style={{
          backgroundImage: "url('/src/assets/videos/b3.jpg')", // Set the image path for the background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%', // Ensure it covers the full height of the section
          padding: '2rem', // Add padding to keep content from touching edges
        }}
      >
        <h2
          className="text-3xl font-bold text-center mb-2"
          style={{
            color: "#800000",
            textShadow: "2px 2px 4px rgba(255, 255, 255, 0.7)", // Adding white text shadow
          }}
        >
          MET Bhujbal Knowledge City Campus Tour
        </h2>
        <div className="relative overflow-hidden">
          <video
            className="
              w-[160vw] max-w-none mx-auto
              relative left-1/2 -translate-x-1/2
              mb-[-20px]
              h-[45vh]
              sm:h-[50vh]
              md:h-[55vh]
              lg:h-[60vh]
              xl:h-[65vh]
              2xl:h-[70vh]
            "
            src="/src/assets/videos/metvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              boxShadow: "0px 4px 12px rgba(128, 0, 0, 0.7)", // Adding the shadow with #800000 color
            }}
          ></video>
        </div>
      </div>
    </section>
  );
};

export default Video;
