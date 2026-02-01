import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Information Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-secondary">
              معلومات
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  المشاريع
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  المبادئ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-3 border-b border-secondary">
              مكتب Asserag
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-gray-100">
                  صنعاء - شارع الستين - أمام البرلمان الجديد
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:contact@asserag.com" className="hover:text-secondary transition-colors">
                  contact@asserag.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-secondary flex-shrink-0" />
                <a href="mailto:wadishoaa@yahoo.com" className="hover:text-secondary transition-colors">
                  wadishoaa@yahoo.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <a href="tel:+967777603050" className="hover:text-secondary transition-colors">
                  00967 777603050
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-secondary flex-shrink-0" />
                <a href="tel:+967777409273" className="hover:text-secondary transition-colors">
                  00967 777409273
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
          <p>
            تم التصميم والتطوير بواسطة{' '}
            <a href="#" className="text-secondary hover:underline">
              Asserag Team
            </a>
          </p>
          <p className="mt-2 text-sm">© 2024 Asserag Company. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
