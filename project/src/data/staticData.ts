import doc1Img from '../assets/image.png';
import doc2Img from '../assets/dr-DA.png';
import doc3Img from '../assets/dr_RA.png';
//import one dummy image of doctor
// import doc4Img from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEWi8Y-A6fCNXLlJRD16VGPe5ws8MGvMDXA&s';
// import doc5Img from 'https://www.vhv.rs/dpng/d/544-5444690_transparent-medical-png-doctor-png-images-royalty-free.png';
// import doc6Img from 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
// import doc7Img from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-3kE-G78jU85BfK8uY4qT1oW3mJ1R9n3wA&s';
// import doc8Img from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJ7tN5rQ1kL6p_l0t-z0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0k0&s';

export type Department = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  image_url?: string;
  treatments?: string[];
  equipment?: string[];
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type Doctor = {
  id: string;
  name: string;
  slug: string;
  department_id: string;
  qualification: string;
  experience_years: number;
  specialization: string[];
  bio?: string;
  image_url?: string;
  consultation_fee: number;
  is_available: boolean;
  display_order: number;
  created_at: string;
};

export type Testimonial = {
  id: string;
  patient_name: string;
  department?: string;
  rating: number;
  comment: string;
  is_approved: boolean;
  created_at: string;
};

export const departmentsData: Department[] = [
  {
    id: 'dept-gynec',
    name: 'Gynecology & Obstetrics',
    slug: 'gynecology-obstetrics',
    description: "Women's health, pregnancy care, normal delivery, painless delivery, high-risk pregnancy management, and infertility treatment.",
    icon: 'Heart',
    display_order: 1,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-maternity',
    name: 'Maternity Care',
    slug: 'maternity-care',
    description: 'Safe motherhood services with modern labour room and postnatal care.',
    icon: 'Baby',
    display_order: 2,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-medicine',
    name: 'General Medicine',
    slug: 'general-medicine',
    description: 'Diagnosis and treatment for fever, infections, diabetes, hypertension, and other medical conditions.',
    icon: 'Stethoscope',
    display_order: 3,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-surgery',
    name: 'General Surgery',
    slug: 'general-surgery',
    description: 'Minor and major surgical procedures with modern operation theatre facilities.',
    icon: 'Scissors',
    display_order: 4,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-ortho',
    name: 'Orthopedics',
    slug: 'orthopedics',
    description: 'Bone, joint, fracture, arthritis, and trauma care.',
    icon: 'Bone',
    display_order: 5,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-paediatrics',
    name: 'Paediatrics',
    slug: 'paediatrics',
    description: 'Complete healthcare services for newborns, infants, children, and adolescents.',
    icon: 'User',
    display_order: 6,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-nicu',
    name: 'Advanced NICU',
    slug: 'advanced-nicu',
    description: 'Specialized intensive care for premature and critically ill newborn babies.',
    icon: 'Activity',
    display_order: 7,
    is_active: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'dept-fertility',
    name: 'Fertility Care',
    slug: 'fertility-care',
    description: 'Consultation and advanced solutions for infertility and reproductive health.',
    icon: 'Leaf',
    display_order: 8,
    is_active: true,
    created_at: new Date().toISOString()
  }
];

export type DoctorExtended = Doctor & {
  bio_full?: string;
  designation?: string;
};


// doctors with real images first
// dummy image doctors after them

export const doctorsData: DoctorExtended[] = [
  {
    id: 'doc-1',
    name: 'Dr. Babita Ramani',
    slug: 'babita-ramani',
    department_id: 'dept-gynec',
    qualification:
      'MD (O&G), FICOG, IVF Fellowship – KIEL, Germany',
    experience_years: 15,
    specialization: [
      'Gynecology & Obstetrics',
      'IVF & Fertility Treatment',
      'High-Risk Pregnancy',
      'Laparoscopic Surgery',
      'Ultrasonology',
      'Women’s Health',
    ],
    consultation_fee: 500,
    is_available: true,
    display_order: 1,
    created_at: new Date().toISOString(),
    image_url: doc1Img,
    designation: 'Senior Obstetrician & Gynaecologist',
    bio: 'Senior Obstetrician & Gynaecologist with 15+ years of experience in fertility, IVF, high-risk pregnancy, and laparoscopic surgery.',
    bio_full:
      'With over 15 years of experience, Dr. Babita Ramani provides complete women’s healthcare including fertility treatment, IVF guidance, high-risk pregnancy management, and advanced laparoscopic procedures. Her approach combines international training, ethical practice, and personalized care supported by modern ultrasound and diagnostic facilities.24×7 availability ensures timely care for pregnancy, delivery, stitch-less uterus removal, recurrent pregnancy loss, menstrual and hormonal disorders, and gynaecological surgeries.'
  },

  {
    id: 'doc-2',
    name: 'Dr. Dipti Arland',
    slug: 'dipti-arland',
    department_id: 'dept-general',
    qualification: 'MBBS, RHS (O&G)',
    experience_years: 20,
    specialization: [
      'General Medicine',
      'Women’s Health',
      'Preventive Care',
      'Chronic Disease Management',
      'Primary Healthcare',
    ],
    consultation_fee: 300,
    is_available: true,
    display_order: 2,
    created_at: new Date().toISOString(),
    image_url: doc2Img,
    designation: 'General Physician',
    bio: 'Trusted General Physician with 20+ years of experience in primary healthcare and preventive medicine.',
    bio_full:
      'With over 20 years of experience, Dr. Dipti Arland offers trusted primary healthcare for all age groups. She focuses on accurate diagnosis, preventive care, chronic disease management, women’s health, and general medical consultations in a patient-friendly environment.'
  },

  {
    id: 'doc-3',
    name: 'Dr. Romi Arland',
    slug: 'romi-arland',
    department_id: 'dept-surgery',
    qualification: 'MS, DLS',
    experience_years: 20,
    specialization: [
      'General Surgery',
      'Laparoscopic Surgery',
      'GI Endoscopic Surgery',
      'Hernia Surgery',
      'Gallbladder Surgery',
      'Emergency Surgery',
    ],
    consultation_fee: 500,
    is_available: true,
    display_order: 3,
    created_at: new Date().toISOString(),
    image_url: doc3Img,
    designation: 'Senior General & Laparoscopic Surgeon',
    bio: 'Senior General & Laparoscopic Surgeon with 20+ years of experience in advanced and minimally invasive surgeries.',
    bio_full:
      'With 20+ years of surgical experience, Dr. Romi Arland delivers safe and advanced general surgery focused on minimal pain and faster recovery. He specializes in laparoscopic and GI endoscopic procedures using modern operation theatres and strict safety protocols.Services include general surgery, hernia, appendix, gallbladder surgery, piles, fissure & fistula treatment, and minor & emergency surgeries'
  },

  // dummy image doctors below

  {
    id: 'doc-4',
    name: 'Dr. Dolamani Tandi',
    slug: 'dolamani-tandi',
    department_id: 'dept-paediatric',
    qualification:
      'MD (Paediatrics), NALS, PALS, PGPN – Boston University',
    experience_years: 10,
    specialization: [
      'Paediatrics',
      'Neonatology',
      'Paediatric Emergency Care',
      'Child Nutrition',
      'Vaccination',
      'Growth & Development',
    ],
    consultation_fee: 400,
    is_available: true,
    display_order: 4,
    created_at: new Date().toISOString(),
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEWi8Y-A6fCNXLlJRD16VGPe5ws8MGvMDXA&s',
    designation: 'Consultant Paediatrician',
    bio: 'Experienced Paediatrician & Neonatologist specializing in child healthcare.',
    bio_full:
      'With over 10 years of experience, Dr. Dolamani Tandi provides comprehensive child healthcare from new-borns to adolescents, including neonatal care, paediatric emergencies, growth and development monitoring, and nutrition management. His approach combines advanced life support training, international certification in paediatric nutrition, and evidence-based, ethical, and personalized care.Provides timely care for new-born emergencies, infections, vaccination, developmental concerns, acute and chronic illnesses, and complete child health support.'
  },

  {
    id: 'doc-5',
    name: 'Dr. Uditansu Das',
    slug: 'uditansu-das',
    department_id: 'dept-orthopaedic',
    qualification: 'MS (Orthopaedics)',
    experience_years: 12,
    specialization: [
      'Orthopaedics',
      'Fracture Management',
      'Joint Pain Treatment',
      'Sports Injuries',
      'Trauma Care',
      'Spine Disorders',
    ],
    consultation_fee: 400,
    is_available: true,
    display_order: 5,
    created_at: new Date().toISOString(),
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEWi8Y-A6fCNXLlJRD16VGPe5ws8MGvMDXA&s',
    designation: 'Consultant Orthopaedic Surgeon',
    bio: 'Orthopaedic Surgeon providing advanced treatment for bone and joint conditions.',
    bio_full:
      'With extensive experience in orthopaedics, Dr. Uditansu Das provides advanced care for bone, joint, and musculoskeletal conditions with a focus on accurate diagnosis, effective treatment, and faster recovery. His approach combines modern techniques, patient-centred care, and evidence-based practices. Services include fracture management, joint pain treatment, arthritis care, sports injury management, trauma care, spine-related issues, and minor & emergency orthopaedic procedures'
  },

  {
    id: 'doc-6',
    name: 'Dr. B. C. Nanda',
    slug: 'bc-nanda',
    department_id: 'dept-medicine',
    qualification: 'MD (Medicine)',
    experience_years: 25,
    specialization: [
      'Internal Medicine',
      'Diabetes Management',
      'Hypertension',
      'Respiratory Disorders',
      'Infectious Diseases',
    ],
    consultation_fee: 500,
    is_available: true,
    display_order: 6,
    created_at: new Date().toISOString(),
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEWi8Y-A6fCNXLlJRD16VGPe5ws8MGvMDXA&s',
    designation: 'On-Call Visiting Physician',
    bio: 'Experienced Internal Medicine specialist providing adult medical care.',
    bio_full:
      'With extensive experience in internal medicine, Dr. B. C. Nanda provides expert care for adult medical conditions with a focus on accurate diagnosis and effective treatment. His approach is based on evidence-based practice and patient-centred care. Services include management of diabetes, hypertension, infections, respiratory illnesses, gastrointestinal disorders, and general medical consultations'
  },

  {
    id: 'doc-7',
    name: 'Dr. Ashish Hota',
    slug: 'ashish-hota',
    department_id: 'dept-cardiology',
    qualification: 'DM (Cardiology)',
    experience_years: 12,
    specialization: [
      'Cardiology',
      'Heart Check-ups',
      'Hypertension Management',
      'Preventive Cardiology',
      'ECG & Cardiac Evaluation',
    ],
    consultation_fee: 600,
    is_available: true,
    display_order: 7,
    created_at: new Date().toISOString(),
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEWi8Y-A6fCNXLlJRD16VGPe5ws8MGvMDXA&s',
    designation: 'Visiting Cardiologist',
    bio: 'Cardiologist specializing in advanced cardiac care and preventive cardiology.',
    bio_full:
      'With expertise in advanced cardiac care, Dr. Ashish Hota provides comprehensive evaluation and treatment of heart-related conditions with a focus on early diagnosis and preventive care. His approach combines modern cardiology practices with patient-centred, evidence-based management. Services include heart check-ups, ECG & cardiac evaluation, hypertension management, chest pain assessment, preventive cardiology, and management of chronic heart diseases'
  },

  {
    id: 'doc-8',
    name: 'Dr. Abhishek Nanda',
    slug: 'abhishek-nanda',
    department_id: 'dept-neurology',
    qualification: 'DM (Neurology)',
    experience_years: 10,
    specialization: [
      'Neurology',
      'Stroke Care',
      'Epilepsy Treatment',
      'Migraine Management',
      'Spine Disorders',
      'Nerve Disorders',
    ],
    consultation_fee: 600,
    is_available: true,
    display_order: 8,
    created_at: new Date().toISOString(),
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEWi8Y-A6fCNXLlJRD16VGPe5ws8MGvMDXA&s',
    designation: 'Visiting Neurologist',
    bio: 'Neurologist providing expert care for brain, spine, and nerve disorders.',
    bio_full:
      'With expertise in neurological care, Dr. Abhishek Nanda provides comprehensive evaluation and management of brain, spine, and nerve-related disorders with a focus on accurate diagnosis and advanced treatment. His approach is based on evidence-based practice and patient-centred care. Specializes in stroke care, epilepsy management, migraine treatment, and neuro-critical care, helping patients achieve better neurological health and improved quality of life through precise diagnosis and effective treatment strategies.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    patient_name: 'Vivek Kumar',
    department: 'Cardiology',
    rating: 5,
    comment: 'Excellent service from ASquare Hospital. The doctors are very professional and the staff is extremely helpful.',
    is_approved: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'test-2',
    patient_name: 'Ritesh Agrawal',
    department: 'Orthopedics',
    rating: 5,
    comment: 'After my knee replacement surgery, I was back on my feet much faster than I expected. The physiotherapy team is amazing.',
    is_approved: true,
    created_at: new Date().toISOString()
  },
  {
    id: 'test-3',
    patient_name: 'Priyanka Saha',
    department: 'Neurology',
    rating: 4,
    comment: 'Very professional environment. The consultation was thorough and all my questions were answered patiently.',
    is_approved: true,
    created_at: new Date().toISOString()
  }
];
