import gyno from '../assets/speciality/gyno.png'
import maternity from '../assets/speciality/matenitycare.png'
import general_medicine from '../assets/speciality/generalmedicine.png'
import general_surgery from '../assets/speciality/surgery.png'
import orthopedics from '../assets/speciality/ortho.png'
import paediatrics from '../assets/speciality/paediatrics.png'
import nicu from '../assets/speciality/nicu.png'
import fertility from '../assets/speciality/fertilyCare.png'

const specialities = [
  {
    id: 1,
    image: gyno,
    name: 'Gynecology & Obstetrics',
    description: "Women's health, pregnancy care, normal delivery, painless delivery, high-risk pregnancy management, and infertility treatment.",
  },
  {
    id: 2,
    image: maternity,
    name: 'Maternity Care',
    description: 'Safe motherhood services with modern labour room and postnatal care.',
  },
  {
    id: 3,
    image: general_medicine,
    name: 'General Medicine',
    description: 'Diagnosis and treatment for fever, infections, diabetes, hypertension, and other medical conditions.',
  },
  {
    id: 4,
    image: general_surgery,
    name: 'General Surgery',
    description: 'Minor and major surgical procedures with modern operation theatre facilities.',
  },
  {
    id: 5,
    image: orthopedics,
    name: 'Orthopedics',
    description: 'Bone, joint, fracture, arthritis, and trauma care.',
  },
  {
    id: 6,
    image: paediatrics,
    name: 'Paediatrics',
    description: 'Complete healthcare services for newborns, infants, children, and adolescents.',
  },
  {
    id: 7,
    image: nicu,
    name: 'Advanced NICU',
    description: 'Specialized intensive care for premature and critically ill newborn babies.',
  },
  {
    id: 8,
    image: fertility,
    name: 'Fertility Care',
    description: 'Consultation and advanced solutions for infertility and reproductive health.',
  },
];

export function Departments() {
  return (
    <section id="departments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Our Specialities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mt-3 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Healthcare</span> Services
          </h2>
          <p className="text-base sm:text-md text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of medical specialities with experienced  <br />doctors and modern equipment
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {specialities.map((dept) => {
            return (
              <div
                key={dept.id}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden bg-gray-50 group-hover:bg-blue-50/50 transition-colors duration-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-[80%] object-contain group-hover:scale-110 group-hover:-rotate-3 group-hover:-translate-y-1 transition-all duration-500 drop-shadow-sm group-hover:drop-shadow-lg relative z-10"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg  font-bold text-gray-800 mb-2 text-center group-hover:text-[#0077B6] transition-colors duration-300">
                   <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">{dept.name}</span>  
                  </h3>
                  <p className="text-sm text-gray-600 text-center leading-relaxed ">
                    {dept.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
