import { useState, FormEvent } from 'react';
import { Briefcase, Send, Users, HeartPulse, Stethoscope, FileText } from 'lucide-react';

export function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: 'Nurse',
    experience: '0-2 years',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const hospitalPhone = "919827973991"; 
    const message = `*New Job Application* 🏥

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}

*Position Applying For:* ${formData.position}
*Experience:* ${formData.experience}

*Additional Message/Cover Letter:*
${formData.message}

Please review my application. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${hospitalPhone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-36 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Careers</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
            Join Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Healthcare Family</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            At A Square Hospital, we believe that great care starts with great people. We are always looking for passionate, dedicated professionals to join our team and help us make a positive impact in the community.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-[#0077B6]" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Medical Professionals</h3>
            <p className="text-sm text-gray-600">Doctors, surgeons, and specialists dedicated to clinical excellence.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6 text-[#00B894]" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Nursing Staff</h3>
            <p className="text-sm text-gray-600">Compassionate nurses who provide round-the-clock care for our patients.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Support & Admin</h3>
            <p className="text-sm text-gray-600">The backbone of our operations, ensuring smooth patient experiences.</p>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left side: Context area */}
            <div className="relative p-10 lg:p-16 bg-gradient-to-br from-[#0077B6] to-[#00B894] text-white flex flex-col justify-center overflow-hidden min-h-[400px]">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B894] opacity-20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3"></div>
              
              <div className="relative z-20">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Apply Now</h2>
                <p className="text-white/90 leading-relaxed mb-10 text-lg">
                  Ready to take the next step in your career? Fill out the application form and our HR team will review it on a rolling basis.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-1">
                      <h4 className="font-semibold text-xl tracking-wide">Growth Opportunities</h4>
                      <p className="text-sm text-white/80 mt-1 leading-relaxed">Continuous learning and career advancement in a supportive environment.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="mt-1">
                      <h4 className="font-semibold text-xl tracking-wide">Easy Application</h4>
                      <p className="text-sm text-white/80 mt-1 leading-relaxed">Submit directly via WhatsApp for a faster response and seamless process.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="p-10 lg:p-16">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-semibold text-gray-700">Position *</label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={formData.position}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all outline-none bg-white"
                    >
                      <option value="Doctor/Specialist">Doctor / Specialist</option>
                      <option value="Nurse">Nurse</option>
                      <option value="Pharmacist">Pharmacist</option>
                      <option value="Lab Technician">Lab Technician</option>
                      <option value="Receptionist/Admin">Receptionist / Admin</option>
                      <option value="Support Staff">Support Staff</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="experience" className="text-sm font-semibold text-gray-700">Experience *</label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all outline-none bg-white"
                    >
                      <option value="Fresher (0 years)">Fresher (0 years)</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-10 years">5-10 years</option>
                      <option value="10+ years">10+ years</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700">Cover Letter / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0077B6] focus:ring-2 focus:ring-[#0077B6]/20 transition-all outline-none resize-none"
                    placeholder="Tell us a bit about yourself and why you want to join us..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#0077B6] to-[#00B894] hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Submit via WhatsApp
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting, you will be redirected to WhatsApp to send your application to our HR team.
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
