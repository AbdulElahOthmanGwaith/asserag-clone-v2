export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'لماذا اختيارنا؟',
      description: 'لأننا وكلاء من أفضل الشركات المصرية المتحدة في المجالات الطبية والصيدلانية',
      image: '/images/team-collaboration.jpg',
    },
    {
      id: 2,
      title: 'رؤية Asserag',
      description: 'شركة Asserag تسعى للريادة في مجال التهوية والتحكم الكهربائي محليًا وإقليميًا',
      image: '/images/industrial-design.jpg',
    },
    {
      id: 3,
      title: 'عن Asserag',
      description: 'شركة خاصة تأسست عام 2006 في مجال التصنيع والتجميع الكهربائي',
      image: '/images/hero-medical-factory.jpg',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="text-secondary font-semibold hover:text-opacity-80 transition-colors"
                >
                  اقرأ المزيد →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
