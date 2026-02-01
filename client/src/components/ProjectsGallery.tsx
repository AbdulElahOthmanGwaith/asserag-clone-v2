import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'مصنع الهلال',
      description: 'مصنع حديث متخصص في الإنتاج الطبي',
      images: [
        '/images/hero-medical-factory.jpg',
        '/images/team-collaboration.jpg',
        '/images/industrial-design.jpg',
      ],
    },
    {
      id: 2,
      title: 'المجلس الأعلى للعقاقير',
      description: 'مرفق متقدم لفحص وتطوير الأدوية',
      images: [
        '/images/industrial-design.jpg',
        '/images/hero-medical-factory.jpg',
        '/images/team-collaboration.jpg',
      ],
    },
    {
      id: 3,
      title: 'مشاريع أخرى',
      description: 'مجموعة متنوعة من المشاريع الطبية',
      images: [
        '/images/team-collaboration.jpg',
        '/images/industrial-design.jpg',
        '/images/hero-medical-factory.jpg',
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentSlide];

  return (
    <section id="projects" className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          {project.title}
        </h2>
        <div className="h-1 w-24 bg-secondary mx-auto mb-12"></div>

        {/* Main Image Slider */}
        <div className="relative mb-8">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-secondary hover:shadow-lg p-2 rounded-full transition-all z-10"
            >
              <ChevronLeft size={32} className="text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-secondary hover:shadow-lg p-2 rounded-full transition-all z-10"
            >
              <ChevronRight size={32} className="text-white" />
            </button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {project.images.map((image, idx) => (
            <div
              key={idx}
              className="h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-secondary transition-all"
            >
              <img
                src={image}
                alt={`${project.title} - ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="text-center">
          <p className="text-gray-200 text-lg mb-6">{project.description}</p>
          <button className="bg-white text-primary px-8 py-3 rounded font-bold hover:bg-gray-100 transition-all">
            اقرأ المزيد
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all ${
                idx === currentSlide
                  ? 'bg-secondary w-8'
                  : 'bg-gray-400 w-3 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
