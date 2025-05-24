/* app/about/page.tsx */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Global Impact",
    description:
      "HTML CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API",
    img: "gisupport home.png",
    link: "https://gisupport.org",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "KAKKA DAIRY BAR",
    description:
      "HTML CSS JAVASCRIPT REACT JS PHP with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
    img: "KAKA.png",
    link: "https://kakkadairybar.000webhostapp.com/",
  },
  {
    id: 3,
    color: "from-red-300 to-blue-300",
    title: "Outsourcingcx",
    description:
      "HTML CSS JAVASCRIPT NEXT JS  with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
    img: "outsourcingcx.png",
    link: "https://outsourcingcx.vercel.app/",
  },
  {
    id: 4,
    color: "from-red-300 to-blue-300",
    title: "Global Impact outsourcing",
    description:
      "HTML CSS JAVASCRIPT NEXT JS  with FACEBOOK API AND GOOGLE API CHADCN and DAISY UI",
    img: "Global Impact Sourcing.png",
    link: "https://globalimpactsourcing.com/",
  },
];

const designs = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  img: `/designs/${i + 1}.jpg`,
  alt: `Design ${i + 1}`,
}));

const videoEdits = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  alt: `Edit ${i + 1}`,
}));

const SectionTitle = ({ title }: { title: string }) => (
  <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
    {title}
  </h2>
);

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Projects Section */}
      <section className="py-12 px-4">
        <SectionTitle title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(({ id, title, description, img, link }) => (
            <div
              key={id}
              className="bg-gradient-to-r from-red-300 to-blue-300 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img src={img} alt={title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-700 mt-2 text-sm">{description}</p>
                <div className="mt-4 flex justify-between">
                  <Link
                    href={`/productDetails/`}
                    className="px-4 py-2 text-sm rounded bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-gray-900"
                  >
                    Details
                  </Link>
                  <Link
                    href={link}
                    target="_blank"
                    className="px-4 py-2 text-sm rounded bg-gray-900 text-white hover:bg-white hover:text-gray-900 border border-gray-900"
                  >
                    Live Site
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Carousel */}
      <section className="py-12 bg-white">
        <SectionTitle title="Designs" />
        <div className="max-w-4xl mx-auto">
          <Carousel
            showArrows
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={3000}
            className="rounded-xl shadow-lg"
          >
            {designs.map(({ id, img, alt }) => (
              <div key={id}>
                <img src={img} alt={alt} className="h-96 w-full object-cover" />
                <p className="legend">{alt}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Video Edits Carousel */}
      <section className="py-12 bg-gray-100">
        <SectionTitle title="Video Edits" />
        <div className="max-w-4xl mx-auto">
          <Carousel
            showArrows
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={4000}
            className="rounded-xl shadow-lg"
          >
            {videoEdits.map(({ id, link, alt }) => (
              <div
                key={id}
                className="h-96 w-full flex justify-center items-center"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fOZDIh1bh6g?si=LrBqJoCq-mo_yMJp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
