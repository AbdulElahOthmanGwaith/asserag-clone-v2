import { Briefcase, Users, Trophy } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: Briefcase,
      number: '7',
      label: 'مشاريع مكتملة',
    },
    {
      id: 2,
      icon: Users,
      number: '12',
      label: 'عامل موظف',
    },
    {
      id: 3,
      icon: Trophy,
      number: '12',
      label: 'جوائز فازت بها',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          الريادة في بناء المصانع الطبية
        </h2>
        <div className="h-1 w-32 bg-secondary mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center">
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-secondary" />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg text-gray-100">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
