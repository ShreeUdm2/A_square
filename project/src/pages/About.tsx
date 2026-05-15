import hospital from '../assets/hospital.jpeg'
import doctor from '../assets/doctor_babita.png'


//imageGallery
import frontView from '../assets/imageGallery/frontView.png'
import reception from '../assets/imageGallery/receptioncounter.png'
import mainEntry from '../assets/imageGallery/mainEntry.png'
import room from '../assets/imageGallery/room.png'
import newMOT from '../assets/imageGallery/ot.png'
import newVIPRoom from '../assets/imageGallery/newVIPRoom.png'
import nicuu from '../assets/imageGallery/nicuuu.jpg'
import sideView from '../assets/imageGallery/sideView.png'
import area from '../assets/imageGallery/nursearea.png'
import healthcamp from '../assets/imageGallery/healthCamp.jpg'
import nurseDR from '../assets/imageGallery/nurseDR.png'
import oldage from '../assets/imageGallery/oldage.jpg'
import patientGreetings from '../assets/imageGallery/patientGreetings.jpg'
import twinbaby from '../assets/imageGallery/twinbaby.jpg'
import nightView from '../assets/imageGallery/night_hosp.jpg'
import fire from '../assets/imageGallery/fire.png'
import medical from "../assets/imageGallery/medical.png"
import womens from '../assets/imageGallery/womensday.png'


const galleryImages = [
  frontView, reception, mainEntry, room, newMOT, newVIPRoom, nicuu, sideView, area, healthcamp, nurseDR, oldage, patientGreetings, twinbaby, nightView, fire, medical, womens
];


export function About() {
  return (
    <div className="pt-28 sm:pt-36 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center mb-12 sm:mb-24">
          <div className="w-full md:w-1/2">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 mb-4 text-gray-800">
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">A Square</span> Hospital
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-4" />
            <p className="text-sm text-gray-600 leading-relaxed ">
              Welcome to A Square Hospital, a trusted destination for affordable, compassionate and
              quality healthcare. We are committed to providing patient-centered medical care in a
              warm, safe and homely environment where every patient is treated with dignity,
              empathy and personal attention.
              At A Square Hospital, we understand that healthcare is not only about treatment but
              also about comfort, trust and emotional support. Our experienced doctors, caring
              nursing staff, and dedicated healthcare professionals work together to ensure timely
              treatment, personalized care and complete support throughout every patient’s healing
              journey.
              Equipped with modern medical technology and advanced infrastructure, we provide
              safe, reliable and efficient healthcare services for patients of all age groups. Our
              specialties include Gynecology &amp; Obstetrics, Maternity Care, General Medicine,
              General Surgery, Orthopedics, Paediatrics, Advanced NICU, Fertility Care, Diagnostics,
              Emergency Care and Preventive Health Services.
              With a strong commitment to ethical medical practices, affordability, clinical excellence
              and compassionate care, A Square Hospital has earned the trust and confidence of
              families across Jharsuguda and nearby regions by delivering healthcare that combines
              advanced treatment with a human touch.

            </p>
          </div>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
            <img
              src={hospital}
              alt="A Square Hospital"
              className="w-full h-110 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* director section */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-start mb-12 sm:mb-24">
          <div className="w-full md:w-[340px] flex-shrink-0">
            <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-100">
              <img
                src={doctor}
                alt="Dr. Babita Ramani"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Meet Our Founder & Director</span>
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mt-3 mb-4 text-gray-800">
              Dr. <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Babita Ramani</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Dr. Babita Ramani</strong> is the visionary Founder &amp; Director of A Square Hospital and a highly
                respected name in women’s healthcare. With more than 15 years of dedicated medical
                experience, she has earned the trust, respect and confidence of countless families
                through her compassionate care, clinical excellence and unwavering commitment to
                patient well-being.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                She holds an MD in Obstetrics &amp; Gynecology (O&amp;G), FICOG and has completed an IVF
                Fellowship from KIEL, Germany. She also served as Ex-Senior Resident at VIMSAR,
                Burla, where she gained extensive expertise in advanced obstetric, gynecological and
                emergency patient care.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Dr. Babita Ramani is a highly skilled Obstetrician &amp; Gynecologist, Laparoscopic
                Surgeon, Ultrasonologist and Fertility Specialist, known for her ethical medical practice,
                evidence-based treatment and patient-centered approach. She is deeply committed to
                women’s health, safe motherhood, fertility care and preventive healthcare, ensuring
                every patient receives personalized attention with empathy, dignity and emotional
                support.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Her gentle approach, professional dedication and ability to connect with patients on a
                personal level have made her one of the most trusted healthcare professionals in the
                region. She strongly believes that healthcare should not only heal illnesses but also
                provide comfort, confidence and hope to patients and their families.
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
              To provide compassionate, accessible and high-quality healthcare with empathy,
              advanced technology and expert medical care, ensuring every patient is treated with
              dignity, trust and personalized attention while building a healthier community.
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 sm:p-10 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#00B894] rounded-xl flex items-center justify-center text-white text-xl font-bold">V</div>
            <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            <div className="w-10 h-1 bg-[#00B894] rounded" />
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted healthcare provider in the region, recognized for clinical
              excellence, innovation and compassionate patient care, while ensuring accessible,
              dignified and best healthcare for every individual in our community.
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
            <p className="text-gray-600 leading-relaxed">A Square Hospital was established in March 2025 with a vision to provide trusted,
              affordable and advanced healthcare services to the people of Jharsuguda and nearby
              communities. From the very beginning, our focus has been to deliver compassionate,
              patient-centered care supported by experienced doctors, a dedicated medical team and
              advanced medical technology.</p>
            <p className="text-gray-600 leading-relaxed">Driven by a commitment to clinical excellence and ethical healthcare practices, A
              Square Hospital has continuously worked to make quality medical services more
              accessible, reliable and community-focused. Equipped with modern infrastructure and
              advanced diagnostic and treatment facilities the hospital strives to provide safe,
              effective and timely healthcare for every patient.</p>
            <p className="text-gray-600 leading-relaxed">Our team of skilled doctors, nurses and healthcare professionals works with dedication,
              empathy and professionalism to ensure that every patient receives personalized
              attention, comfort and the highest standard of care. Through trusted treatment,
              compassionate service and positive patient outcomes, A Square Hospital has steadily
              earned the confidence and trust of families across the region.</p>
            <p className="text-gray-600 leading-relaxed">Today, A Square Hospital is growing as a trusted center of healthcare excellence,
              committed to improving lives and building a healthier future for the community through
              advanced medical care, humanity and unwavering dedication to patient well-being.</p>
          </div>

        </div>



        <div className="mb-20">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800">
              <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Advanced Care</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-8 mx-auto" />
          <div className="bg-blue-50 rounded-2xl p-6 sm:p-10 mb-12 flex flex-col gap-4">
            <p className="text-gray-600 leading-relaxed">At A Square Hospital, we are committed to delivering advanced, affordable and
              compassionate healthcare with the highest standards of professionalism and patient
              care. Supported by experienced doctors, a dedicated nursing team, modern
              infrastructure and advanced medical technology, we provide trusted healthcare
              solutions for individuals and families under one roof.</p>
            <p className="text-gray-600 leading-relaxed">Our focus is on accurate diagnosis, effective treatment, patient safety and personalized
              medical attention to ensure every patient receives timely, reliable and comprehensive
              care. We combine clinical expertise with modern medical advancements to deliver
              better treatment outcomes while maintaining warmth, empathy and dignity in every
              patient interaction.</p>
            <p className="text-gray-600 leading-relaxed">Since our establishment, we have remained dedicated to serving the community
              through ethical healthcare practices, compassionate service and a patient-first
              approach, earning the trust and confidence of families across the region.</p>

          </div>

        </div>

        {/* Photo Strip */}
        <h1 className='text-center text-3xl sm:text-4xl font-bold mb-4'>Image <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Gallery</span></h1>
        <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-10 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
              <div className="relative w-full h-64 bg-gray-100">
                <img
                  src={img}
                  alt={`Hospital facility ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-fill transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-[#0077B6]/10 transition-colors duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
