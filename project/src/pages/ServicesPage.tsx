import { Helmet } from 'react-helmet-async';
import { HealthPackages } from '../components/HealthPackages';
import nicu from '../assets/imageGallery/nicuuu.jpg';
import gyno from '../assets/service/gyno.png';
import maternity from '../assets/service/maternity.png';
import surgery from '../assets/service/surgery.png';
import ortho from '../assets/service/ortho.png';
import ifv from '../assets/service/ivf.png';
import paediatric from '../assets/service/paediatric.png';
import diagnostics from '../assets/service/diagnosis.png';

const services = [
  {
    name: 'Gynaecology & Obstetrics Services',
    image: gyno,
    alt: 'Gynaecology and obstetrics services at A Square Hospital Jharsuguda',
    content: "Comprehensive women's healthcare including pregnancy consultations, normal and painless delivery, caesarean section, high-risk pregnancy management, and infertility treatment in Jharsuguda. Our experienced gynaecologists provide compassionate support at every stage of a woman's health journey.",
  },
  {
    name: 'Maternity Care Packages in Jharsuguda',
    image: maternity,
    alt: 'Affordable maternity care packages at A Square Hospital Jharsuguda',
    content: 'Affordable all-inclusive maternity care packages covering antenatal check-ups, safe delivery, and postnatal support in Jharsuguda. Designed to ensure comfort and safety for both mother and baby, our packages offer quality care without financial stress.',
  },
  {
    name: 'General Medicine',
    image: 'data:image/jpeg;base64,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',
    alt: 'General medicine and physician consultation at A Square Hospital Jharsuguda',
    content: 'Expert diagnosis and treatment for fever, diabetes, blood pressure, infections, seasonal illnesses, and chronic conditions in Jharsuguda. Our physicians deliver evidence-based, personalized care for both acute and long-term health needs.',
  },
  {
    name: 'General Surgery in Jharsuguda',
    image: surgery,
    alt: 'General surgery and laparoscopic procedures at A Square Hospital Jharsuguda',
    content: 'Minor and major surgical procedures performed in modern, fully equipped operation theatres with strict safety protocols at our hospital in Jharsuguda. Our surgical team handles elective and emergency cases with precision and thorough post-operative care.',
  },
  {
    name: 'Orthopaedic Care',
    image: ortho,
    alt: 'Orthopaedic treatment for fractures, joint pain and arthritis at A Square Hospital Jharsuguda',
    content: 'Specialized treatment for bone fractures, joint pain, arthritis, trauma, and spine-related conditions in Jharsuguda. Using modern implants and minimally invasive techniques, our orthopaedic team restores mobility and improves quality of life.',
  },
  {
    name: 'Paediatric Care in Jharsuguda',
    image: paediatric,
    alt: 'Paediatric care and child healthcare at A Square Hospital Jharsuguda',
    content: 'Complete healthcare for newborns, infants, children, and adolescents including vaccinations, growth monitoring, and treatment for common childhood illnesses in Jharsuguda. Our paediatric team provides gentle, family-centered care for every young patient.',
  },
  {
    name: 'Advanced NICU Services',
    image: nicu,
    alt: 'Advanced NICU — neonatal intensive care unit at A Square Hospital Jharsuguda',
    content: 'State-of-the-art neonatal intensive care unit for premature and critically ill newborns in Jharsuguda, equipped with advanced monitoring and life-support systems. Our neonatology team ensures round-the-clock specialized attention for the most vulnerable patients.',
  },
  {
    name: 'Fertility & IVF Consultation in Jharsuguda',
    image: ifv,
    alt: 'IVF and fertility treatment consultation at A Square Hospital Jharsuguda',
    content: 'Expert fertility consultations and advanced reproductive treatment options for couples facing infertility challenges in Jharsuguda and Odisha. Our specialists provide compassionate, evidence-based guidance to help families achieve their dream of parenthood.',
  },
  {
    name: 'Diagnostics & Imaging',
    image: diagnostics,
    alt: 'Diagnostic services — ultrasound, pathology and lab tests at A Square Hospital Jharsuguda',
    content: 'Comprehensive diagnostic services including ultrasound imaging, pathology testing, and routine health investigations in Jharsuguda. Accurate and timely results support our doctors in making precise diagnoses and effective treatment decisions.',
  },
  {
    name: '24/7 Emergency & Critical Care',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: '24/7 emergency and critical care services at A Square Hospital Jharsuguda',
    content: "Round-the-clock emergency medical support for urgent and life-threatening conditions with rapid response teams and critical care specialists in Jharsuguda. Our emergency unit is always ready to provide immediate, life-saving intervention whenever it's needed most.",
  },
];

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Hospital Services in Jharsuguda | Gynaecology, NICU, Surgery & More — A Square Hospital</title>
        <meta name="description" content="A Square Hospital Jharsuguda offers gynaecology, maternity care, NICU, IVF, general surgery, orthopaedics, paediatrics, diagnostics & 24/7 emergency services. Expert doctors, affordable care." />
        <meta name="keywords" content="hospital services Jharsuguda, gynaecology Jharsuguda, NICU Jharsuguda, IVF Jharsuguda, orthopaedic hospital Jharsuguda, maternity care Jharsuguda, emergency hospital Jharsuguda, paediatrics Jharsuguda" />
        <link rel="canonical" href="https://asquarehospital.com/services" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Medical Services at A Square Hospital Jharsuguda",
            "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": "Gynaecology & Obstetrics"},
              {"@type": "ListItem", "position": 2, "name": "Maternity Care"},
              {"@type": "ListItem", "position": 3, "name": "General Medicine"},
              {"@type": "ListItem", "position": 4, "name": "General Surgery"},
              {"@type": "ListItem", "position": 5, "name": "Orthopaedic Care"},
              {"@type": "ListItem", "position": 6, "name": "Paediatric Care"},
              {"@type": "ListItem", "position": 7, "name": "Advanced NICU"},
              {"@type": "ListItem", "position": 8, "name": "Fertility & IVF"},
              {"@type": "ListItem", "position": 9, "name": "Diagnostics & Imaging"},
              {"@type": "ListItem", "position": 10, "name": "24/7 Emergency Care"}
            ]
          }
        `}</script>
      </Helmet>
      <div className="pt-28 sm:pt-36 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              Hospital <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Services</span> in Jharsuguda
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              At A Square Hospital, Jharsuguda, we provide a complete range of healthcare services combining expert doctors, advanced technology, and compassionate care for every patient.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-5 sm:p-8 md:p-10 mb-10 sm:mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed mb-4">
              At A Square Hospital, Jharsuguda, we provide a complete range of healthcare services designed to meet the medical needs of every family in Jharsuguda, Sambalpur, Sundargarh and the surrounding areas of Odisha. Our hospital combines expert doctors, advanced technology, and compassionate care to ensure the best treatment experience for all patients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to offering reliable, affordable, and high-quality healthcare services with a patient-first approach. From routine check-ups to specialized treatments, our team is dedicated to keeping you and your loved ones healthy.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {services.map((service, index) => (
              <div
                key={service.name}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-10 items-center`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-48 sm:h-[370px] object-fit hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block bg-green-50 text-[#00B894] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Service
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">{service.name}</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
                  <p className="text-gray-600 leading-relaxed text-base">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <HealthPackages />
        </div>
      </div>
    </>
  );
}
