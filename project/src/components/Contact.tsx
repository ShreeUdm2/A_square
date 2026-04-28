import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Visit <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Our Hospital</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help. Reach out to us for appointments, emergencies, or general inquiries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Near Mamaji Sweet & Namkeen,<br />
                    2121 AB Road, Rau,<br />
                    Indore, Madhya Pradesh 453331
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Numbers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Emergency: <a href="tel:+917312345678" className="text-[#0077B6] font-semibold hover:underline">+91 731-2345-678</a><br />
                    Appointments: <a href="tel:+917312345679" className="text-[#0077B6] font-semibold hover:underline">+91 731-2345-679</a><br />
                    General Inquiry: <a href="tel:+917312345680" className="text-[#0077B6] font-semibold hover:underline">+91 731-2345-680</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    General: <a href="mailto:info@asquarehospital.in" className="text-[#0077B6] font-semibold hover:underline">info@asquarehospital.in</a><br />
                    Appointments: <a href="mailto:appointments@asquarehospital.in" className="text-[#0077B6] font-semibold hover:underline">appointments@asquarehospital.in</a><br />
                    Support: <a href="mailto:support@asquarehospital.in" className="text-[#0077B6] font-semibold hover:underline">support@asquarehospital.in</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0077B6] to-[#00B894] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Working Hours</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>OPD:</strong> Mon-Sat: 9:00 AM - 5:00 PM<br />
                    <strong>Emergency:</strong> 24/7 Available<br />
                    <strong>Lab:</strong> Mon-Sun: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full min-h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.234567890!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ASquare Hospital Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
