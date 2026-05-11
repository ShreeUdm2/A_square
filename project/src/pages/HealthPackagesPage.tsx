import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Users, Info as AlertCircle, FlaskConical } from 'lucide-react';

type Package = {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  idealFor: string;
  whyImportant: string;
  tests: string[];
  popular?: boolean;
};

const packages: Package[] = [
  {
    id: 1,
    name: 'Basic Health Checkup Package',
    category: 'Preventive Care',
    price: '₹999',
    description: 'A foundational health screening package designed for routine wellness monitoring and early detection of common health issues.',
    idealFor: 'Adults of all age groups looking for an affordable annual health check, first-time health screening, or routine monitoring of general health parameters.',
    whyImportant: 'Regular basic health checkups help identify early warning signs of conditions like diabetes, anaemia, kidney dysfunction, and thyroid disorders — enabling timely intervention before complications arise.',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Sugar – Fasting',
      'Blood Sugar – Post Prandial (PP)',
      'Lipid Profile (Cholesterol, Triglycerides, HDL, LDL)',
      'Liver Function Test (LFT)',
      'Kidney Function Test (KFT / RFT)',
      'Thyroid Stimulating Hormone (TSH)',
      'Urine Routine & Microscopy',
      'ECG (Electrocardiogram)',
      'Blood Pressure Measurement',
      'Body Weight & BMI Assessment',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Comprehensive Health Checkup Package',
    category: 'Preventive Care',
    price: '₹2,499',
    description: 'A thorough health assessment combining laboratory investigations with imaging and specialist consultations for a complete picture of your health.',
    idealFor: 'Adults above 30 years, working professionals under stress, individuals with a family history of chronic diseases, and anyone seeking a detailed annual health evaluation.',
    whyImportant: 'This package goes beyond basic parameters to check vitamins, heart health, abdominal health, and lung function — critical for catching lifestyle-related diseases at a reversible stage.',
    tests: [
      'All tests included in Basic Health Checkup Package',
      'HbA1c (Glycated Haemoglobin)',
      'Vitamin D3',
      'Vitamin B12',
      'Serum Uric Acid',
      'Chest X-Ray (PA View)',
      'USG Abdomen & Pelvis',
      'Echo Cardiography (2D Echo)',
      'Pulmonary Function Test (Spirometry)',
      'Doctor Consultation (General Physician)',
      'Dietary & Lifestyle Counselling',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Senior Citizen Health Package',
    category: 'Preventive Care',
    price: '₹3,999',
    description: 'Specially designed for elderly individuals with a comprehensive set of investigations addressing age-related health concerns and organ function monitoring.',
    idealFor: 'Men and women above 55 years of age, elderly patients with multiple comorbidities, and those requiring periodic organ function assessment.',
    whyImportant: 'Ageing increases the risk of heart disease, osteoporosis, prostate issues (in men), vision problems, and cognitive decline. Early detection through regular testing significantly improves quality of life and longevity.',
    tests: [
      'All tests included in Comprehensive Health Checkup Package',
      'Bone Density Test (DEXA Scan)',
      'Prostate Specific Antigen – PSA (Men)',
      'Mammography (Women)',
      'Pap Smear (Women)',
      'Ophthalmology Check (Vision & Eye Pressure)',
      'Dental Check (Oral Health Screening)',
      'Cardiology Consultation',
      'Geriatric Medicine Consultation',
      'Free Home Sample Collection',
      'Complimentary Follow-up Consultation',
    ],
    popular: false,
  },
  {
    id: 4,
    name: "Women's Wellness Package",
    category: "Women's Health",
    price: '₹1,999',
    description: "A targeted health screening package addressing the unique physiological and hormonal health needs of women across all life stages.",
    idealFor: "Women aged 18–55 years, especially those with irregular menstrual cycles, hormonal imbalances, planning pregnancy, or seeking a routine gynaecological health check.",
    whyImportant: "Women are at higher risk for thyroid disorders, PCOS, anaemia, and reproductive cancers. This package helps identify these conditions early, supporting long-term reproductive and overall health.",
    tests: [
      'Complete Blood Count (CBC)',
      'Thyroid Profile – T3, T4, TSH',
      'Blood Sugar – Fasting & PP',
      'Lipid Profile',
      'Serum Ferritin (Iron Stores)',
      'Pap Smear (Cervical Cancer Screening)',
      'USG Pelvis (Uterus & Ovaries)',
      'Vitamin D3 & Vitamin B12',
      'Calcium & Phosphorus',
      'Gynaecologist Consultation',
    ],
    popular: false,
  },
  {
    id: 5,
    name: 'Antenatal (Maternity) Care Package',
    category: 'Maternity',
    price: 'Contact for Pricing',
    description: 'A structured antenatal care programme providing comprehensive monitoring and support throughout pregnancy to ensure the health and safety of mother and baby.',
    idealFor: 'Pregnant women from the first trimester through delivery, including high-risk pregnancies requiring closer monitoring.',
    whyImportant: 'Consistent antenatal care significantly reduces the risk of pregnancy complications, preterm birth, and maternal or neonatal mortality. Regular monitoring ensures timely management of any arising concerns.',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Group & Rh Factor',
      'Blood Sugar – Fasting & OGTT',
      'Urine Routine & Culture',
      'VDRL / TPHA (Syphilis)',
      'HBsAg (Hepatitis B)',
      'HIV Screening',
      'Thyroid Profile (TSH)',
      'USG Dating Scan (1st Trimester)',
      'Anomaly Scan (2nd Trimester)',
      'Growth Scan (3rd Trimester)',
      'Iron & Folic Acid Supplementation Counselling',
      'Regular Gynaecologist Consultations (as per trimester)',
      'Blood Pressure & Weight Monitoring',
    ],
    popular: false,
  },
  {
    id: 6,
    name: 'Normal Delivery Package',
    category: 'Maternity',
    price: 'Contact for Pricing',
    description: 'A complete package covering all aspects of normal vaginal delivery with round-the-clock nursing care and postnatal support.',
    idealFor: 'Expectant mothers with uncomplicated, low-risk pregnancies opting for natural/normal vaginal delivery.',
    whyImportant: 'Normal delivery is associated with faster recovery, reduced infection risk, and better initiation of breastfeeding. A well-supported delivery process ensures safety and comfort for both mother and newborn.',
    tests: [
      'Admission & Labour Room charges',
      'Normal Delivery (with/without episiotomy)',
      'Painless delivery (Epidural Analgesia) – optional',
      'Labour Monitoring (Partograph)',
      'CTG (Cardiotocography) – Fetal Heart Rate Monitoring',
      'Neonatal care (APGAR scoring, immediate newborn care)',
      'Nursing care – 24x7 during hospital stay',
      'Postnatal care (Mother)',
      'Newborn examination by Paediatrician',
      'Breastfeeding support & counselling',
      'Meals for patient during stay',
      'Discharge summary & follow-up prescription',
    ],
    popular: false,
  },
  {
    id: 7,
    name: 'LSCS (Caesarean Section) Package',
    category: 'Maternity',
    price: 'Contact for Pricing',
    description: 'A comprehensive surgical delivery package covering all pre-operative, intra-operative, and post-operative care for caesarean section delivery.',
    idealFor: 'Expectant mothers with medical indications for caesarean delivery such as foetal distress, cephalopelvic disproportion, placenta previa, or previous C-section.',
    whyImportant: 'When normal delivery is not safe or possible, a well-managed LSCS is a life-saving procedure. This package ensures complete surgical and anaesthetic care with post-operative monitoring for mother and baby.',
    tests: [
      'Pre-operative blood investigations (CBC, BT/CT, Blood Group)',
      'Pre-operative USG & Foetal Assessment',
      'Operation Theatre (OT) charges',
      'Surgeon & Assistant Surgeon fees',
      'Anaesthesia (Spinal/General) charges',
      'Intraoperative monitoring & consumables',
      'Post-operative nursing care (ICU/ward)',
      'Pain management (post-op)',
      'Newborn NICU evaluation (if required)',
      'Paediatrician review',
      'Postnatal wound care & suture removal',
      'Meals for patient',
      'Discharge summary with follow-up instructions',
    ],
    popular: false,
  },
  {
    id: 8,
    name: 'Fertility Evaluation Package',
    category: 'Fertility Care',
    price: 'Contact for Pricing',
    description: 'A focused diagnostic package for couples experiencing difficulty in conceiving, covering hormonal, structural, and male factor assessments.',
    idealFor: 'Couples who have been trying to conceive for 6–12 months without success, women with PCOS or irregular periods, men with suspected low sperm count or motility issues.',
    whyImportant: 'Infertility affects approximately 10–15% of couples. Early evaluation helps identify treatable causes — such as hormonal imbalances, blocked tubes, or sperm abnormalities — and guides the most appropriate treatment path.',
    tests: [
      'Hormonal Profile – FSH, LH, Estradiol (Day 2–3 of cycle)',
      'Anti-Müllerian Hormone (AMH) – Ovarian Reserve',
      'Progesterone (Day 21)',
      'Thyroid Profile (TSH, T3, T4)',
      'Prolactin',
      'USG Pelvis – Follicular Study (Antral Follicle Count)',
      'Hysterosalpingography (HSG) – Tubal Patency (if indicated)',
      'Semen Analysis – Volume, Motility, Morphology, Count (Partner)',
      'Blood Group & RH Factor (Both partners)',
      'Fertility Specialist Consultation',
      'Infertility Counselling Session',
    ],
    popular: false,
  },
  {
    id: 9,
    name: 'Paediatric Health Checkup Package',
    category: 'Paediatrics',
    price: '₹799',
    description: 'A comprehensive health assessment package for infants, children, and adolescents to monitor growth, development, and nutritional status.',
    idealFor: 'Newborns, infants (0–12 months), children (1–12 years), and adolescents (13–18 years) for routine health monitoring, vaccination review, and developmental assessment.',
    whyImportant: 'Childhood is a critical window for early detection of developmental delays, nutritional deficiencies, congenital conditions, and vision or hearing problems. Timely intervention leads to significantly better outcomes.',
    tests: [
      'Complete Blood Count (CBC)',
      'Blood Sugar (Fasting)',
      'Urine Routine Examination',
      'Stool Examination (if indicated)',
      'Height, Weight, and BMI for Age Assessment',
      'Head Circumference (infants)',
      'Vision Screening',
      'Hearing Screening',
      'Developmental Milestone Assessment',
      'Vaccination Chart Review & Update',
      'Nutritional & Dietary Assessment',
      'Paediatrician Consultation',
    ],
    popular: false,
  },
  {
    id: 10,
    name: 'NICU (Neonatal Intensive Care) Package',
    category: 'Paediatrics',
    price: 'Contact for Pricing',
    description: 'Specialized intensive care and monitoring for premature, critically ill, or at-risk newborns requiring advanced neonatal support.',
    idealFor: 'Premature babies (born before 37 weeks), low birth weight newborns, babies with respiratory distress, birth asphyxia, jaundice, infections, or any neonatal emergency.',
    whyImportant: 'The neonatal period is the most vulnerable time in a child\'s life. Advanced NICU care dramatically improves survival rates and reduces long-term complications in high-risk newborns.',
    tests: [
      'NICU bed charges (Intensive / Step-down)',
      'Continuous cardiorespiratory monitoring',
      'Pulse oximetry & temperature monitoring',
      'Ventilator support (if required)',
      'CPAP / High-flow nasal cannula (if required)',
      'Phototherapy for jaundice (if required)',
      'IV access & fluid management',
      'Neonatal blood investigations (CBC, CRP, bilirubin, blood culture)',
      'Neonatal USG (Head, Abdomen – if required)',
      'Neonatologist/Paediatrician – daily review',
      'Nursing care 24x7',
      'Parent counselling & education',
    ],
    popular: false,
  },
  {
    id: 11,
    name: 'General Surgery Package',
    category: 'Surgery',
    price: 'Contact for Pricing',
    description: 'A complete surgical care package covering pre-operative workup, surgical procedure, and post-operative recovery for general surgical conditions.',
    idealFor: 'Patients requiring elective or emergency surgeries such as appendicectomy, hernia repair, cholecystectomy (gallbladder removal), abscess drainage, or other general surgical procedures.',
    whyImportant: 'Timely surgical intervention prevents complications like perforation, peritonitis, or sepsis. A structured package ensures complete care from pre-op to discharge with no hidden costs.',
    tests: [
      'Pre-operative blood investigations (CBC, BT/CT, blood group, RFT, LFT, ECG)',
      'Pre-operative chest X-ray and USG (if indicated)',
      'Anaesthesia fitness assessment',
      'Operation Theatre (OT) charges',
      'Surgeon & Assistant Surgeon fees',
      'Anaesthesia charges (General / Spinal / Local)',
      'Surgical consumables & sutures',
      'Post-operative nursing care (ward)',
      'Pain management',
      'Wound care & dressing',
      'Histopathology (specimen, if required)',
      'Medicines during hospital stay',
      'Discharge summary & follow-up',
    ],
    popular: false,
  },
  {
    id: 12,
    name: 'Orthopaedic Surgery Package',
    category: 'Surgery',
    price: 'Contact for Pricing',
    description: 'A structured orthopaedic care package for bone, joint, and trauma surgeries with physiotherapy support for faster rehabilitation.',
    idealFor: 'Patients with fractures, dislocations, joint problems, ligament injuries, or conditions requiring surgical orthopaedic intervention including joint replacement.',
    whyImportant: 'Proper orthopaedic care restores mobility, prevents deformity, and ensures long-term functional recovery. A comprehensive package reduces complications and accelerates return to daily activities.',
    tests: [
      'Pre-operative X-rays & MRI/CT (as required)',
      'Pre-operative blood & cardiac workup',
      'Operation Theatre (OT) charges',
      'Orthopaedic Surgeon & Assistant fees',
      'Anaesthesia charges',
      'Implants / Prosthetics (priced separately based on type)',
      'Plaster / Splint / Traction (if required)',
      'Post-operative nursing care',
      'Physiotherapy sessions (in-hospital)',
      'Wound care & suture removal',
      'Post-op X-ray',
      'Medicines during stay',
      'Discharge with rehabilitation plan',
    ],
    popular: false,
  },
];

const categories = ['All', ...Array.from(new Set(packages.map(p => p.category)))];

const categoryColors: Record<string, string> = {
  'Preventive Care': 'bg-blue-100 text-blue-700',
  "Women's Health": 'bg-pink-100 text-pink-700',
  'Maternity': 'bg-rose-100 text-rose-700',
  'Fertility Care': 'bg-teal-100 text-teal-700',
  'Paediatrics': 'bg-green-100 text-green-700',
  'Surgery': 'bg-orange-100 text-orange-700',
};

function PackageCard({ pkg }: { pkg: Package }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl flex flex-col ${
        pkg.popular
          ? 'border-[#0077B6] ring-2 ring-[#0077B6] ring-offset-2'
          : 'border-gray-200 hover:border-[#0077B6]/40'
      }`}
    >
      {pkg.popular && (
        <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white text-xs font-bold text-center py-1.5 tracking-wider uppercase rounded-t-2xl">
          Most Popular
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <span className={`inline-block self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${categoryColors[pkg.category] || 'bg-gray-100 text-gray-600'}`}>
          {pkg.category}
        </span>

        {/* Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug">{pkg.name}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{pkg.description}</p>

        {/* Price */}
        <div className="mb-4">
          {pkg.price === 'Contact for Pricing' ? (
            <span className="text-base font-semibold text-[#0077B6]">Contact for Pricing</span>
          ) : (
            <span className="text-3xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
              {pkg.price}
            </span>
          )}
        </div>

        {/* Included tests preview */}
        <ul className="space-y-1.5 mb-4">
          {pkg.tests.slice(0, expanded ? pkg.tests.length : 5).map((test, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 text-green-600" />
              </div>
              <span className="text-sm text-gray-700">{test}</span>
            </li>
          ))}
        </ul>

        {/* Expandable details */}
        {expanded && (
          <div className="space-y-4 mb-4 border-t border-gray-100 pt-4">
            {/* Ideal For */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-[#0077B6]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Ideal For</p>
                <p className="text-sm text-gray-700 leading-relaxed">{pkg.idealFor}</p>
              </div>
            </div>
            {/* Why Important */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-4 h-4 text-[#00B894]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Why This Package is Important</p>
                <p className="text-sm text-gray-700 leading-relaxed">{pkg.whyImportant}</p>
              </div>
            </div>
            {/* All Tests */}
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                <FlaskConical className="w-4 h-4 text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">All Included Tests / Services</p>
                <ul className="space-y-1.5">
                  {pkg.tests.map((test, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-700">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-[#0077B6] text-sm font-semibold mb-4 hover:text-[#00B894] transition-colors"
        >
          {expanded ? (
            <>
              <ChevronUp className="w-4 h-4" /> Show Less
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" /> View Full Details
            </>
          )}
        </button>

        {/* CTA */}
        <div className="mt-auto">
          <a
            href="/#appointment"
            className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition ${
              pkg.popular
                ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white hover:shadow-lg hover:scale-105 transform'
                : 'bg-gray-100 text-gray-800 hover:bg-[#0077B6] hover:text-white'
            }`}
          >
            {pkg.price === 'Contact for Pricing' ? 'Enquire Now' : 'Book Now'}
          </a>
        </div>
      </div>
    </div>
  );
}

export function HealthPackagesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? packages
    : packages.filter(p => p.category === activeCategory);

  return (
    <div className="pt-36 pb-20 bg-white min-h-screen">
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
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Comprehensive healthcare packages tailored for every stage of life — from preventive screenings to specialized surgical care at A Square Hospital, Jharsuguda.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
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

        {/* Count */}
        <p className="text-center text-sm text-gray-400 mb-8">
          Showing {filtered.length} package{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center border border-blue-100">
          <p className="text-gray-700 font-semibold mb-1">Need a custom or corporate health package?</p>
          <p className="text-sm text-gray-500 mb-4">Contact our team at A Square Hospital, Jharsuguda for personalized and group healthcare solutions.</p>
          <a
            href="/#appointment"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transition transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </div>
  );
}
