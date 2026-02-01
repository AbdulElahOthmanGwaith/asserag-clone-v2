export default function ClientsSection() {
  const clients = [
    { id: 1, name: 'Client 1', logo: '🏢' },
    { id: 2, name: 'Client 2', logo: '🏭' },
    { id: 3, name: 'Client 3', logo: '🔬' },
    { id: 4, name: 'Client 4', logo: '⚙️' },
    { id: 5, name: 'Client 5', logo: '🏗️' },
    { id: 6, name: 'Client 6', logo: '💼' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">عملاؤنا</h2>
        <div className="gradient-underline"></div>

        <div className="border-4 border-dashed border-secondary rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl">{client.logo}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
