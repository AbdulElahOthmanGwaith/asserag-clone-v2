import { Shield, Users, Leaf, Award } from 'lucide-react';

export default function PrinciplesSection() {
  const principles = [
    {
      id: 1,
      icon: Shield,
      title: 'الأمان',
      description: 'الأمان هو الأهم في قيمنا الأساسية. إنها أولويتنا الأولى',
    },
    {
      id: 2,
      icon: Users,
      title: 'المجتمع',
      description: 'الشراكة مع عملائنا لحل مشاكلهم والاعتراضات',
    },
    {
      id: 3,
      icon: Leaf,
      title: 'الاستدامة',
      description: 'التزام Asserag بالمصانع الطبية والاستدامة طويلة الأجل',
    },
    {
      id: 4,
      icon: Award,
      title: 'النزاهة',
      description: 'عملنا بالتزام بدون مساومة والنزاهة والصدق',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          مبادئنا
        </h2>
        <div className="h-1 w-24 bg-secondary mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div key={principle.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-secondary p-4 rounded-full">
                    <Icon size={40} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-100 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
