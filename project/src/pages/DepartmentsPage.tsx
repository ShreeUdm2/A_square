import { Helmet } from 'react-helmet-async';

const departments = [
  {
    name: 'Obstetrics & Gynaecology',
    image: 'https://static.businessworld.in/what-is-ivf_20240726194110_ogImage_41.jpg',
    alt: 'Obstetrics and gynaecology department at A Square Hospital Jharsuguda',
    content: "Our Obstetrics & Gynaecology department in Jharsuguda is led by experienced specialists dedicated to women's health at every stage of life. We provide comprehensive maternity care from pre-natal consultations through safe delivery and post-natal recovery. Our unit is equipped with a fully functional labour room, NICU support, and advanced fetal monitoring systems. We manage high-risk pregnancies with utmost care and clinical precision. Gynaecological concerns including PCOS, endometriosis, and menstrual disorders are handled with sensitivity and modern treatment protocols. We are committed to ensuring safe motherhood and healthy outcomes for both mother and child.",
  },
  {
    name: 'General Medicine Department',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'General medicine department at A Square Hospital Jharsuguda',
    content: 'The Department of General Medicine at A Square Hospital, Jharsuguda provides expert diagnosis and management of a broad spectrum of adult illnesses. Our physicians are experienced in treating conditions related to the heart, lungs, liver, kidneys, and endocrine system. We offer both outpatient and inpatient services supported by advanced diagnostic imaging and laboratory investigations. Chronic disease management, including diabetes, hypertension, and thyroid disorders, is handled with personalized care plans. Our team works collaboratively across specialities to ensure holistic patient outcomes.',
  },
  {
    name: 'Surgery Department',
    image: 'https://dinbandhuhospital.com/assets/img/department-inner/general-surgery-department/general-surgery-department-01.jpg',
    alt: 'Surgery department and operation theatre at A Square Hospital Jharsuguda',
    content: "A Square Hospital's Surgery department in Jharsuguda is equipped with modern modular operation theatres designed to support a wide range of surgical procedures. Our general surgeons are skilled in both elective and emergency surgeries including appendectomies, hernia repairs, gallbladder removals, and abdominal procedures. Laparoscopic and minimally invasive techniques are employed wherever applicable to reduce recovery time. We maintain strict infection control and sterile protocols across all surgical suites.",
  },
  {
    name: 'Orthopaedics Department',
    image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Orthopaedics department for bone and joint care at A Square Hospital Jharsuguda',
    content: 'Our Orthopaedics department in Jharsuguda specializes in the diagnosis and treatment of musculoskeletal conditions affecting bones, joints, muscles, and tendons. We manage fractures, ligament injuries, arthritis, and spine-related disorders with both surgical and non-surgical approaches. The department is supported by digital X-ray facilities and physiotherapy services for comprehensive rehabilitation. Joint replacement surgeries and trauma care are performed by experienced orthopaedic surgeons.',
  },
  {
    name: 'Paediatrics Department',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWeyuB1hQ9EytZYg5sFTBrKEcsXOhIz8RHg&s',
    alt: 'Paediatrics and child healthcare department at A Square Hospital Jharsuguda',
    content: 'The Paediatrics department at A Square Hospital, Jharsuguda provides specialized medical care for infants, children, and adolescents. Our paediatricians are trained to address the unique health needs of young patients with warmth and expertise. We offer newborn care, vaccination programs, nutritional counseling, and management of childhood illnesses. Our NICU is equipped to handle premature births and critically ill newborns. A child-friendly environment ensures that young patients feel comfortable and safe during their visit.',
  },
  {
    name: 'Anaesthesia Department',
    image: 'https://drpksahahospital.com/wp-content/uploads/2022/06/OT-6-1-1-1024x683.jpg',
    alt: 'Anaesthesia and perioperative care department at A Square Hospital Jharsuguda',
    content: 'The Department of Anaesthesia plays a vital role in supporting all surgical and procedural interventions at A Square Hospital, Jharsuguda. Our qualified anaesthesiologists provide safe and effective anaesthesia care for a wide variety of operations, from routine procedures to complex emergency surgeries. Pre-anaesthetic assessments are conducted thoroughly to evaluate patient fitness and minimize risks. We utilize modern anaesthetic agents and monitoring equipment to ensure patient comfort and safety throughout every procedure.',
  },
];

export function DepartmentsPage() {
  return (
    <>
      <Helmet>
        <title>Hospital Departments in Jharsuguda | Gynaecology, Surgery, NICU & More — A Square Hospital</title>
        <meta name="description" content="Explore departments at A Square Hospital Jharsuguda — Gynaecology & Obstetrics, General Medicine, Surgery, Orthopaedics, Paediatrics & Anaesthesia. Experienced doctors, modern facilities." />
        <meta name="keywords" content="hospital departments Jharsuguda, gynaecology department Jharsuguda, surgery department Jharsuguda, orthopaedics Jharsuguda, paediatrics Jharsuguda, NICU Jharsuguda, A Square Hospital departments" />
        <link rel="canonical" href="https://asquarehospital.com/departments" />
      </Helmet>
      <div className="pt-28 sm:pt-36 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Our Specialities</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
              Hospital <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Departments</span> in Jharsuguda
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical specialities with experienced doctors and modern facilities at A Square Hospital, Jharsuguda — serving all your healthcare needs.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-10 items-center`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={dept.image}
                    alt={dept.alt}
                    className="w-full h-48 sm:h-[370px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="inline-block bg-blue-50 text-[#0077B6] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Department
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">{dept.name}</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mb-5" />
                  <p className="text-gray-600 leading-relaxed text-base">{dept.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
