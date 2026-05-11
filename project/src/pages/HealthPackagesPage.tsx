import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Maternity Package – Normal Delivery',
    category: 'Maternity',
    price: 'Contact Us',
    description: 'Complete maternity care package for normal delivery with postnatal support.',
    features: [
      'Antenatal care & consultations',
      'Normal delivery charges',
      'Labour room facilities',
      'Postnatal care (mother & baby)',
      'Newborn care & paediatrician visit',
      'Nursing care during stay',
      'Meals for patient',
    ],
    popular: false,
  },
  {
    name: 'Maternity Package – LSCS (C-Section)',
    category: 'Maternity',
    price: 'Contact Us',
    description: 'Comprehensive package for caesarean section with complete pre and post-operative care.',
    features: [
      'Pre-operative investigations',
      'Operation theatre charges',
      'Anaesthesia charges',
      'Surgeon & assistant charges',
      'Post-operative care',
      'Nursing care during stay',
      'Meals for patient',
      'Newborn paediatrician visit',
    ],
    popular: false,
  },
  {
    name: 'Gynaecology Surgery Package',
    category: 'Gynaecology',
    price: 'Contact Us',
    description: 'Laparoscopic and open gynaecological procedures with complete surgical support.',
    features: [
      'Pre-operative blood investigations',
      'Operation theatre charges',
      'Laparoscopy / open surgery',
      'Anaesthesia charges',
      'Surgeon & assistant fees',
      'Post-operative nursing care',
      'Medicines during stay',
    ],
    popular: false,
  },
  {
    name: 'Basic Health Checkup',
    category: 'Preventive',
    price: '₹1,999',
    description: 'Essential health screening for general wellness and early detection.',
    features: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Lipid Profile',
      'Liver Function Test',
      'Kidney Function Test',
      'Thyroid Profile (TSH)',
      'Urine Routine Examination',
      'ECG',
    ],
    popular: false,
  },
  {
    name: 'Comprehensive Health Package',
    category: 'Preventive',
    price: '₹4,999',
    description: 'Complete health assessment with specialist consultation for thorough screening.',
    features: [
      'All Basic Package Tests',
      'Vitamin D & Vitamin B12',
      'HbA1c (Glycated Haemoglobin)',
      'Chest X-Ray',
      'USG Abdomen',
      'Echo Cardiography',
      'Stress Test (TMT)',
      'Doctor Consultation',
      'Dietitian Consultation',
    ],
    popular: true,
  },
  {
    name: 'Senior Citizen Package',
    category: 'Preventive',
    price: '₹6,999',
    description: 'Specialized health screening for elderly care with focused geriatric tests.',
    features: [
      'All Comprehensive Tests',
      'Bone Density Test (DEXA)',
      'Prostate Specific Antigen (PSA)',
      'Mammography (Women)',
      'Pulmonary Function Test',
      '2D Echo',
      'Ophthalmology Check',
      'Cardiology Consultation',
      'Free Home Collection',
    ],
    popular: false,
  },
  {
    name: "Women's Wellness Package",
    category: "Women's Health",
    price: '₹2,999',
    description: "Comprehensive screening designed for women's unique healthcare needs.",
    features: [
      'Complete Blood Count',
      'Thyroid Profile (T3, T4, TSH)',
      'Blood Sugar & Lipid Profile',
      'Pap Smear',
      'USG Pelvis',
      'Bone Density (Calcium & Vitamin D)',
      'Gynaecologist Consultation',
    ],
    popular: false,
  },
  {
    name: 'Fertility Evaluation Package',
    category: "Women's Health",
    price: 'Contact Us',
    description: 'Initial fertility assessment for couples planning conception.',
    features: [
      'Hormonal Profile (FSH, LH, AMH)',
      'Thyroid Profile',
      'USG Pelvis (Follicular Study)',
      'Semen Analysis (Partner)',
      'Gynaecologist / Fertility Specialist Consultation',
      'Infertility Counselling',
    ],
    popular: false,
  },
  {
    name: 'Paediatric Health Checkup',
    category: 'Paediatrics',
    price: '₹1,499',
    description: 'Routine health assessment for children and adolescents.',
    features: [
      'Complete Blood Count',
      'Blood Sugar',
      'Urine Routine',
      'Growth & Development Assessment',
      'Vision & Hearing Screening',
      'Vaccination Review',
      'Paediatrician Consultation',
    ],
    popular: false,
  },
  {
    name: 'NICU Care Package',
    category: 'Paediatrics',
    price: 'Contact Us',
    description: 'Specialized intensive care for premature and critically ill newborns.',
    features: [
      'NICU bed charges',
      'Monitoring & ventilator support (if required)',
      'Investigations as needed',
      'Neonatologist consultations',
      'Nursing care (24x7)',
      'Phototherapy if required',
      'Daily paediatrician review',
    ],
    popular: false,
  },
  {
    name: 'General Surgery Package',
    category: 'Surgery',
    price: 'Contact Us',
    description: 'Minor and major general surgical procedures with full operative support.',
    features: [
      'Pre-operative investigations',
      'Operation theatre charges',
      'Surgeon & assistant fees',
      'Anaesthesia charges',
      'Post-operative care',
      'Medicines during stay',
      'Nursing care',
    ],
    popular: false,
  },
  {
    name: 'Orthopaedic Package',
    category: 'Surgery',
    price: 'Contact Us',
    description: 'Bone, joint and trauma surgeries with physiotherapy support.',
    features: [
      'Pre-operative investigations & X-rays',
      'Operation theatre charges',
      'Implants (if required, priced separately)',
      'Orthopaedic surgeon fees',
      'Anaesthesia charges',
      'Post-operative physiotherapy',
      'Nursing care during stay',
    ],
    popular: false,
  },
];

const categories = ['All', ...Array.from(new Set(packages.map(p => p.category)))];

const categoryColors: Record<string, string> = {
  'Maternity': 'bg-pink-100 text-pink-700',
  'Gynaecology': 'bg-rose-100 text-rose-700',
  'Preventive': 'bg-blue-100 text-blue-700',
  "Women's Health": 'bg-purple-100 text-purple-800',
  'Paediatrics': 'bg-green-100 text-green-700',
  'Surgery': 'bg-orange-100 text-orange-700',
};

import { useState } from 'react';

export function HealthPackagesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? packages
    : packages.filter(p => p.category === activeCategory);

  return (
    <div className="pt-36 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="text-center mb-12">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Health Packages</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
            Affordable{' '}
            <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              Health Checkup
            </span>{' '}
            Packages
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare packages tailored for every stage of life — from preventive screenings to specialized surgical care.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                pkg.popular
                  ? 'border-[#0077B6] ring-2 ring-[#0077B6] ring-offset-2'
                  : 'border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Category badge */}
                <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[pkg.category] || 'bg-gray-100 text-gray-600'}`}>
                  {pkg.category}
                </span>

                <h3 className="text-xl font-bold text-gray-800 mb-1">{pkg.name}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{pkg.description}</p>

                {/* Price */}
                <div className="mb-5">
                  {pkg.price === 'Contact Us' ? (
                    <span className="text-lg font-semibold text-[#0077B6]">Contact for Pricing</span>
                  ) : (
                    <span className="text-4xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/#appointment"
                  className={`block w-full text-center py-2.5 rounded-lg font-semibold text-sm transition ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {pkg.price === 'Contact Us' ? 'Enquire Now' : 'Book Now'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 bg-blue-50 rounded-2xl p-8 text-center">
          <p className="text-gray-700 font-medium mb-1">For custom packages or corporate health programs</p>
          <p className="text-sm text-gray-500">Contact our team at A Square Hospital, Jharsuguda for personalized healthcare solutions.</p>
        </div>

      </div>
    </div>
  );
}
