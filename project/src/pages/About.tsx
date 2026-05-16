import { Helmet } from 'react-helmet-async';
import hospital from '../assets/hospital.jpeg';
import doctor from '../assets/doctor_babita.png';

import frontView from '../assets/imageGallery/frontView.png';
import reception from '../assets/imageGallery/receptioncounter.png';
import mainEntry from '../assets/imageGallery/mainEntry.png';
import room from '../assets/imageGallery/room.png';
import newMOT from '../assets/imageGallery/ot.png';
import newVIPRoom from '../assets/imageGallery/newVIPRoom.png';
import nicuu from '../assets/imageGallery/nicuuu.jpg';
import sideView from '../assets/imageGallery/sideView.png';
import area from '../assets/imageGallery/nursearea.png';
import healthcamp from '../assets/imageGallery/healthCamp.jpg';
import nurseDR from '../assets/imageGallery/nurseDR.png';
import oldage from '../assets/imageGallery/oldage.jpg';
import patientGreetings from '../assets/imageGallery/patientGreetings.jpg';
import twinbaby from '../assets/imageGallery/twinbaby.jpg';
import nightView from '../assets/imageGallery/night_hosp.jpg';
import fire from '../assets/imageGallery/fire.png';
import medical from '../assets/imageGallery/medical.png';
import womens from '../assets/imageGallery/womensday.png';

const galleryImages = [
  { src: frontView, alt: 'A Square Hospital Jharsuguda — front view of the building' },
  { src: reception, alt: 'A Square Hospital reception counter — patient welcome area' },
  { src: mainEntry, alt: 'Main entry of A Square Hospital Jharsuguda' },
  { src: room, alt: 'Patient room at A Square Hospital — comfortable and clean inpatient ward' },
  { src: newMOT, alt: 'Modern operation theatre at A Square Hospital Jharsuguda' },
  { src: newVIPRoom, alt: 'New VIP room at A Square Hospital — premium patient accommodation' },
  { src: nicuu, alt: 'Advanced NICU unit at A Square Hospital — specialized newborn intensive care' },
  { src: sideView, alt: 'Side view of A Square Hospital Jharsuguda' },
  { src: area, alt: 'Nursing area at A Square Hospital — dedicated care team station' },
  { src: healthcamp, alt: 'Free health camp organized by A Square Hospital Jharsuguda' },
  { src: nurseDR, alt: 'Doctor and nurse team at A Square Hospital providing patient care' },
  { src: oldage, alt: 'Senior citizen care at A Square Hospital Jharsuguda' },
  { src: patientGreetings, alt: 'Patient discharge celebration at A Square Hospital Jharsuguda' },
  { src: twinbaby, alt: 'Twin babies delivered safely at A Square Hospital Jharsuguda' },
  { src: nightView, alt: 'A Square Hospital Jharsuguda at night — 24/7 emergency services' },
  { src: fire, alt: 'Fire safety and emergency preparedness at A Square Hospital' },
  { src: medical, alt: 'Medical team at A Square Hospital Jharsuguda' },
  { src: womens, alt: "Women's Day celebration at A Square Hospital Jharsuguda" },
];

export function About() {
  return (
    <>
      <Helmet>
        <title>About A Square Hospital Jharsuguda | Trusted Multispeciality Hospital in Odisha</title>
        <meta name="description" content="Learn about A Square Hospital Jharsuguda — founded by Dr. Babita Ramani, MD (O&G), FICOG, IVF Fellow. Compassionate multispeciality care for families in Jharsuguda & Odisha since 2025." />
        <meta name="keywords" content="about A Square Hospital Jharsuguda, Dr Babita Ramani gynaecologist Jharsuguda, best gynaecologist Jharsuguda, hospital history Jharsuguda, multispeciality hospital Odisha" />
        <link rel="canonical" href="https://asquarehospital.com/about" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Dr. Babita Ramani",
            "jobTitle": "Founder & Director, Obstetrician & Gynaecologist",
            "worksFor": {
              "@type": "MedicalOrganization",
              "name": "A Square Hospital",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jharsuguda",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              }
            },
            "description": "Dr. Babita Ramani is a highly experienced Obstetrician, Gynaecologist, Laparoscopic Surgeon and IVF Specialist with 15+ years of experience. She holds an MD in O&G, FICOG, and an IVF Fellowship from KIEL, Germany.",
            "alumniOf": "VIMSAR Burla",
            "medicalSpecialty": ["Gynaecology", "Obstetrics", "Fertility Care", "Laparoscopic Surgery", "Ultrasonology"]
          }
        `}</script>
      </Helmet>
      <div className="pt-28 sm:pt-36 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero */}
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center mb-12 sm:mb-24">
            <div className="w-full md:w-1/2">
              <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 mb-4 text-gray-800">
                <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">A Square</span> Hospital Jharsuguda
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-4" />
              <p className="text-sm text-gray-600 leading-relaxed">
                Welcome to A Square Hospital, a trusted destination for affordable, compassionate and quality healthcare in Jharsuguda, Odisha. We are committed to providing patient-centered medical care in a warm, safe and homely environment where every patient is treated with dignity, empathy and personal attention.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                At A Square Hospital, Jharsuguda, we understand that healthcare is not only about treatment but also about comfort, trust and emotional support. Our experienced doctors, caring nursing staff, and dedicated healthcare professionals work together to ensure timely treatment, personalized care and complete support throughout every patient's healing journey.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                Equipped with modern medical technology and advanced infrastructure, we provide safe, reliable and efficient healthcare services for patients of all age groups across Jharsuguda and the surrounding regions of Odisha. Our specialties include Gynaecology &amp; Obstetrics, Maternity Care, General Medicine, General Surgery, Orthopaedics, Paediatrics, Advanced NICU, Fertility Care &amp; IVF, Diagnostics, Emergency Care and Preventive Health Services.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-4">
                With a strong commitment to ethical medical practices, affordability, clinical excellence and compassionate care, A Square Hospital has earned the trust and confidence of families across Jharsuguda and nearby regions by delivering healthcare that combines advanced treatment with a human touch.
              </p>
            </div>
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
              <img
                src={hospital}
                alt="A Square Hospital Jharsuguda — best multispeciality hospital building"
                className="w-full h-110 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Director section */}
          <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start mb-12 sm:mb-24">
            <div className="w-full md:w-[340px] flex-shrink-0">
              <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                <img
                  src={doctor}
                  alt="Dr. Babita Ramani — Gynaecologist, IVF Specialist and Founder of A Square Hospital Jharsuguda"
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Meet Our Founder &amp; Director</span>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-3 mb-4 text-gray-800">
                Dr. <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Babita Ramani</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong>Dr. Babita Ramani</strong> is the visionary Founder &amp; Director of A Square Hospital, Jharsuguda, and a highly respected name in women's healthcare in Odisha. With more than 15 years of dedicated medical experience, she has earned the trust, respect and confidence of countless families through her compassionate care, clinical excellence and unwavering commitment to patient well-being.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  She holds an MD in Obstetrics &amp; Gynaecology (O&amp;G), FICOG, and has completed an IVF Fellowship from KIEL, Germany — one of Europe's leading institutions for reproductive medicine. She also served as Ex-Senior Resident at VIMSAR, Burla, where she gained extensive expertise in advanced obstetric, gynaecological and emergency patient care.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Dr. Babita Ramani is a highly skilled Obstetrician &amp; Gynaecologist, Laparoscopic Surgeon, Ultrasonologist and Fertility Specialist in Jharsuguda, known for her ethical medical practice, evidence-based treatment and patient-centered approach. She is deeply committed to women's health, safe motherhood, fertility care and preventive healthcare, ensuring every patient receives personalized attention with empathy, dignity and emotional support.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Her gentle approach, professional dedication and ability to connect with patients on a personal level have made her one of the most trusted gynaecologists and healthcare professionals in Jharsuguda and the broader Odisha region. She strongly believes that healthcare should not only heal illnesses but also provide comfort, confidence and hope to patients and their families.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-24">
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#0077B6] rounded-xl flex items-center justify-center text-white text-xl font-bold">M</div>
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              <div className="w-10 h-1 bg-[#0077B6] rounded" />
              <p className="text-gray-600 leading-relaxed">
                To provide compassionate, accessible and high-quality healthcare with empathy, advanced technology and expert medical care, ensuring every patient in Jharsuguda and Odisha is treated with dignity, trust and personalized attention while building a healthier community.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 sm:p-10 flex flex-col gap-4">
              <div className="w-12 h-12 bg-[#00B894] rounded-xl flex items-center justify-center text-white text-xl font-bold">V</div>
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              <div className="w-10 h-1 bg-[#00B894] rounded" />
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted multispeciality healthcare provider in Jharsuguda and across Odisha, recognized for clinical excellence, innovation and compassionate patient care, while ensuring accessible, dignified and best healthcare for every individual in our community.
              </p>
            </div>
          </div>

          {/* Our Journey */}
          <div className="mb-20">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
                Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Journey</span>
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-8 mx-auto" />
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 mb-12 flex flex-col gap-4">
              <p className="text-gray-600 leading-relaxed">A Square Hospital was established in March 2025 with a vision to provide trusted, affordable and advanced healthcare services to the people of Jharsuguda and nearby communities in Odisha. From the very beginning, our focus has been to deliver compassionate, patient-centered care supported by experienced doctors, a dedicated medical team and advanced medical technology.</p>
              <p className="text-gray-600 leading-relaxed">Driven by a commitment to clinical excellence and ethical healthcare practices, A Square Hospital, Jharsuguda, has continuously worked to make quality medical services more accessible, reliable and community-focused. Equipped with modern infrastructure and advanced diagnostic and treatment facilities, the hospital strives to provide safe, effective and timely healthcare for every patient.</p>
              <p className="text-gray-600 leading-relaxed">Our team of skilled doctors, nurses and healthcare professionals works with dedication, empathy and professionalism to ensure that every patient receives personalized attention, comfort and the highest standard of care. Through trusted treatment, compassionate service and positive patient outcomes, A Square Hospital has steadily earned the confidence and trust of families across Jharsuguda and the region.</p>
              <p className="text-gray-600 leading-relaxed">Today, A Square Hospital is growing as a trusted center of healthcare excellence in Jharsuguda, committed to improving lives and building a healthier future for the community through advanced medical care, humanity and unwavering dedication to patient well-being.</p>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
                <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Advanced Care</span> at A Square Hospital
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-8 mx-auto" />
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 mb-12 flex flex-col gap-4">
              <p className="text-gray-600 leading-relaxed">At A Square Hospital, Jharsuguda, we are committed to delivering advanced, affordable and compassionate healthcare with the highest standards of professionalism and patient care. Supported by experienced doctors, a dedicated nursing team, modern infrastructure and advanced medical technology, we provide trusted healthcare solutions for individuals and families under one roof.</p>
              <p className="text-gray-600 leading-relaxed">Our focus is on accurate diagnosis, effective treatment, patient safety and personalized medical attention to ensure every patient receives timely, reliable and comprehensive care. We combine clinical expertise with modern medical advancements to deliver better treatment outcomes while maintaining warmth, empathy and dignity in every patient interaction.</p>
              <p className="text-gray-600 leading-relaxed">Since our establishment, we have remained dedicated to serving the community of Jharsuguda through ethical healthcare practices, compassionate service and a patient-first approach, earning the trust and confidence of families across the region.</p>
            </div>
          </div>

          {/* Photo Strip */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4">
            Hospital Image <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-2">A Square Hospital Jharsuguda — Facilities, Wards &amp; Patient Care</p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-10 mx-auto" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
                <div className="relative w-full h-64 bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-fill transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0077B6]/10 transition-colors duration-500 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
