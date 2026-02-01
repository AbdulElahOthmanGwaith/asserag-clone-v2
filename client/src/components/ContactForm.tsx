import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">تواصل معنا</h2>
        <div className="gradient-underline"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">معلومات الاتصال</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">العنوان</h4>
                  <p className="text-gray-600">
                    صنعاء - شارع الستين - أمام البرلمان الجديد
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">الهاتف</h4>
                  <p className="text-gray-600">00967 777603050</p>
                  <p className="text-gray-600">00967 777409273</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary text-white p-3 rounded-lg flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">البريد الإلكتروني</h4>
                  <p className="text-gray-600">contact@asserag.com</p>
                  <p className="text-gray-600">wadishoaa@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="أدخل اسمك"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="أدخل بريدك الإلكتروني"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="أدخل رقم هاتفك"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الرسالة
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                  placeholder="أدخل رسالتك"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all"
              >
                إرسال الرسالة
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
