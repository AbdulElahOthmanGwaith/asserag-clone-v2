import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Shield, Flame, Building2, Users } from 'lucide-react';

const showcaseImages = [
  {
    id: 1,
    src: '/images/fire-systems-products.jpg',
    title: 'منتجات أنظمة إنذار الحريق',
    description: 'مجموعة شاملة من لوحات التحكم، الكواشف، وأجهزة الإنذار من ASENWARE',
    category: 'منتجات'
  },
  {
    id: 2,
    src: '/images/fire-alarm-panel.jpg',
    title: 'لوحة إنذار الحريق الذكية',
    description: 'لوحة تحكم AW-FP200 القابلة للعنونة مع شاشة لمس 7 إنش',
    category: 'لوحات التحكم'
  },
  {
    id: 3,
    src: '/images/exhibition-display.jpg',
    title: 'معرض المنتجات',
    description: 'مشاركتنا في المعارض الدولية لأنظمة السلامة والحماية من الحريق',
    category: 'معارض'
  },
  {
    id: 4,
    src: '/images/business-card.jpg',
    title: 'تواصل معنا',
    description: 'شركة السراج للتجهيزات الصناعية - الوكيل المعتمد لـ ASENWARE',
    category: 'معلومات'
  },
];

const features = [
  {
    icon: Shield,
    title: 'شهادات عالمية',
    description: 'معتمد من TÜV Rheinland'
  },
  {
    icon: Flame,
    title: 'حماية متكاملة',
    description: 'أنظمة إنذار وإطفاء'
  },
  {
    icon: Building2,
    title: 'حلول للمنشآت',
    description: 'مصانع ومباني تجارية'
  },
  {
    icon: Users,
    title: 'دعم فني',
    description: 'فريق متخصص 24/7'
  },
];

const AsenwareShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="asenware" className="py-20 bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-600/20 px-6 py-2 rounded-full mb-6">
            <img src="/images/logo.png" alt="ASENWARE" className="h-8 w-auto" />
            <span className="text-red-400 font-bold text-lg">ASENWARE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-cairo">
            أنظمة السلامة من الحريق
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-cairo">
            الوكيل الحصري لأنظمة ASENWARE المتكاملة لإنذار وإطفاء الحريق في اليمن
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all">
              <feature.icon className="w-10 h-10 text-red-500 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-1 font-cairo">{feature.title}</h4>
              <p className="text-gray-400 text-sm font-cairo">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Showcase */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-[16/9] relative">
            <img
              src={showcaseImages[currentIndex].src}
              alt={showcaseImages[currentIndex].title}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                {showcaseImages[currentIndex].category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-cairo">
                {showcaseImages[currentIndex].title}
              </h3>
              <p className="text-gray-300 font-cairo max-w-xl">
                {showcaseImages[currentIndex].description}
              </p>
            </div>

            {/* Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {showcaseImages.map((image, idx) => (
            <button
              key={image.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative aspect-video rounded-lg overflow-hidden transition-all ${
                idx === currentIndex
                  ? 'ring-4 ring-red-500 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 font-cairo"
          >
            <Flame className="w-5 h-5" />
            احصل على عرض سعر
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={showcaseImages[lightboxIndex].src}
            alt={showcaseImages[lightboxIndex].title}
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default AsenwareShowcase;
