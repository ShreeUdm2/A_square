import { useState } from 'react';
import { X, Check, Users, Info, FlaskConical, ChevronRight } from 'lucide-react';

type Test = {
  no: number;
  description: string;
  rate: string;
};

type Package = {
  id: number;
  name: string;
  category: string;
  tagline: string;
  description: string;
  idealFor: string[];
  price: string;
  originalPrice: string;
  discount: string;
  whyImportant: string[];
  tests: Test[];
  quote: string;
  recommended: string;
  popular?: boolean;
};

const packages: Package[] = [
  {
    id: 1,
    name: 'Basic Health Check Package',
    category: 'Preventive Care',
    tagline: 'All Age 18–40',
    description:
      'Feeling Healthy Doesn\'t Always Mean You Are Healthy. Many lifestyle diseases such as diabetes, thyroid disorders, infections, liver or kidney problems often develop silently without noticeable symptoms in the early stages. A timely health check-up can help detect these conditions early and protect your long-term health. This package is specially designed for young adults and working individuals who wish to stay healthy, active, and stress-free through preventive screening.',
    idealFor: [
      'Students',
      'Working Professionals',
      'Busy Individuals',
      'First-Time Health Screening',
      'Annual Preventive Check-Up',
    ],
    price: '₹2,600',
    originalPrice: '₹3,460',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'General Physician Consultation', rate: '₹400' },
      { no: 2, description: 'Complete Blood Count (CBC)', rate: '₹350' },
      { no: 3, description: 'TSH', rate: '₹350' },
      { no: 4, description: 'Blood Sugar (Fasting/Random)', rate: '₹100' },
      { no: 5, description: 'Urine Routine Examination', rate: '₹60' },
      { no: 6, description: 'Blood Group Test', rate: '₹50' },
      { no: 7, description: 'X-Ray Chest', rate: '₹300' },
      { no: 8, description: 'Ultrasound (USG) Whole Abdomen', rate: '₹1,000' },
      { no: 9, description: 'Thyroid Profile', rate: '₹850' },
    ],
    whyImportant: [
      'Detects early signs of diabetes, infections & organ issues',
      'Screens liver, kidney & abdominal health',
      'Helps prevent future complications',
      'Saves you from costly treatments later',
      'Perfect for Annual Health Screening',
    ],
    quote: '"Your health is your greatest investment; regular check-ups help you stay one step ahead."',
    recommended: 'Annual Preventive Health Screening',
    popular: false,
  },
  {
    id: 2,
    name: 'Executive Health Package',
    category: 'Corporate / Industrial',
    tagline: 'Industrial / Corporate',
    description:
      'Your Job Takes a Toll on Your Health — Are You Monitoring It? Long working hours, industrial exposure, stress, pollution, irregular food habits, lack of sleep, and sedentary lifestyles can gradually affect your health without obvious warning signs. Conditions such as diabetes, hypertension, heart disease, liver disorders, lung problems, thyroid imbalance, and vitamin deficiencies often develop silently and may remain unnoticed until complications arise.',
    idealFor: [
      'Industrial Employees',
      'Corporate Professionals',
      'Executives',
      'Shift Workers',
      'Factory Staff',
      'Business Owners',
      'High-Stress Occupations',
    ],
    price: '₹7,225',
    originalPrice: '₹9,630',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'General Physician Consultation', rate: '₹400' },
      { no: 2, description: 'Complete Blood Count (CBC) & ESR', rate: '₹700' },
      { no: 3, description: 'Fasting & PP Blood Sugar', rate: '₹100' },
      { no: 4, description: 'Lipid Profile', rate: '₹500' },
      { no: 5, description: 'Liver Function Test (LFT)', rate: '₹600' },
      { no: 6, description: 'HPLC', rate: '₹1,000' },
      { no: 7, description: 'Kidney Function Test (KFT)', rate: '₹500' },
      { no: 8, description: 'Ultrasound Whole Abdomen', rate: '₹1,000' },
      { no: 9, description: 'HIV', rate: '₹250' },
      { no: 10, description: 'HBsAg', rate: '₹170' },
      { no: 11, description: 'HCV', rate: '₹200' },
      { no: 12, description: 'Sickling', rate: '₹150' },
      { no: 13, description: 'VDRL', rate: '₹100' },
      { no: 14, description: 'Thyroid Profile', rate: '₹850' },
      { no: 15, description: 'X-Ray Chest', rate: '₹300' },
      { no: 16, description: 'ECG', rate: '₹400' },
      { no: 17, description: 'Pulmonary Function Test', rate: '₹500' },
      { no: 18, description: 'Vitamin B12', rate: '₹850' },
      { no: 19, description: 'Vitamin D & B12', rate: '₹1,000' },
      { no: 20, description: 'Urine Routine Examination', rate: '₹60' },
    ],
    whyImportant: [
      'Early detection of lifestyle & occupation-related diseases',
      'Comprehensive screening for heart, liver, kidney & lung health',
      'Identifies hidden deficiencies causing fatigue, weakness & low productivity',
      'Supports long-term fitness for demanding work environments',
      'Helps reduce future medical expenses through early diagnosis',
      'Promotes healthier, safer, and more productive living',
    ],
    quote: '"A Small Health Check Today Can Prevent a Major Health Problem Tomorrow."',
    recommended: 'Every 6–12 Months for Working Professionals',
    popular: true,
  },
  {
    id: 3,
    name: 'Senior Citizen Package',
    category: 'Preventive Care',
    tagline: 'Age above 50 Years',
    description:
      'Healthy Aging Starts with Timely Health Checkups. As we grow older, the body naturally becomes more vulnerable to conditions such as heart disease, diabetes, hypertension, thyroid imbalance, kidney disorders, lung problems, vitamin deficiencies, and bone weakness. Many of these illnesses develop silently, often without noticeable symptoms in the early stages. Regular preventive health screening plays a vital role in detecting these conditions early, helping seniors maintain independence, mobility, and a better quality of life.',
    idealFor: [
      'Individuals Aged 50+',
      'Elderly Parents',
      'Retired Professionals',
      'Routine Preventive Health Monitoring',
      'Senior Wellness Screening',
    ],
    price: '₹6,350',
    originalPrice: '₹8,460',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'General Physician Consultation', rate: '₹400' },
      { no: 2, description: 'Complete Blood Count (CBC) & ESR', rate: '₹700' },
      { no: 3, description: 'Fasting & PP Blood Sugar', rate: '₹100' },
      { no: 4, description: 'Lipid Profile', rate: '₹500' },
      { no: 5, description: 'Liver Function Test (LFT)', rate: '₹600' },
      { no: 6, description: 'Kidney Function Test (KFT)', rate: '₹500' },
      { no: 7, description: 'Ultrasound (USG) Whole Abdomen', rate: '₹1,000' },
      { no: 8, description: 'Thyroid Profile', rate: '₹850' },
      { no: 9, description: 'X-Ray Chest', rate: '₹300' },
      { no: 10, description: 'ECG', rate: '₹400' },
      { no: 11, description: 'Pulmonary Function Test', rate: '₹500' },
      { no: 12, description: 'Vitamin B12', rate: '₹850' },
      { no: 13, description: 'Vitamin D & B12', rate: '₹1,000' },
      { no: 14, description: 'Serum Calcium', rate: '₹200' },
      { no: 15, description: 'Urine Routine Test', rate: '₹60' },
      { no: 16, description: 'Cardiology Consultation', rate: '₹500' },
    ],
    whyImportant: [
      'Early detection of age-related diseases and hidden health risks',
      'Comprehensive screening for heart, kidney, liver & lung health',
      'Helps prevent complications such as heart attack, stroke & kidney failure',
      'Identifies vitamin and calcium deficiencies affecting bone strength & energy',
      'Supports active, healthy, and independent living',
      'Helps reduce long-term healthcare expenses through early intervention',
    ],
    quote: '"Because Good Health is the Foundation of a Longer, Happier & Independent Life"',
    recommended: 'Strongly Recommended Every 6–12 Months After Age 50',
    popular: false,
  },
  {
    id: 4,
    name: "Women's Wellness Package",
    category: "Women's Health",
    tagline: 'All Age Groups',
    description:
      "Prioritize Your Health at Every Stage of Life. A woman's body experiences constant hormonal and physical changes throughout life — from adolescence and marriage to pregnancy, motherhood and menopause. Many health conditions such as thyroid imbalance, anemia, PCOS, infections, cervical abnormalities and hormonal disorders often develop silently and may remain unnoticed until they begin affecting daily life and overall wellbeing.",
    idealFor: [
      'Women of All Age Groups',
      'Working Women',
      'Homemakers',
      'Pre-Marital Health Screening',
      'Routine Preventive Health Check',
    ],
    price: '₹6,380',
    originalPrice: '₹8,510',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Gynecology Consultation', rate: '₹350' },
      { no: 2, description: 'Complete Blood Count (CBC) & ESR', rate: '₹700' },
      { no: 3, description: 'Lipid Profile', rate: '₹500' },
      { no: 4, description: 'Liver Function Test (LFT)', rate: '₹600' },
      { no: 5, description: 'Creatinine Test', rate: '₹200' },
      { no: 6, description: 'Thyroid Profile', rate: '₹850' },
      { no: 7, description: 'Fasting & PP Blood Sugar', rate: '₹100' },
      { no: 8, description: 'Urine Routine', rate: '₹60' },
      { no: 9, description: 'Pap Smear', rate: '₹1,000' },
      { no: 10, description: 'HPLC', rate: '₹1,000' },
      { no: 11, description: 'Ultrasound Whole Abdomen', rate: '₹1,000' },
      { no: 12, description: 'Hormonal Profile', rate: '₹550' },
      { no: 13, description: 'FSH', rate: '₹600' },
      { no: 14, description: 'LH', rate: '₹500' },
      { no: 15, description: 'Breast Screening', rate: '₹500' },
    ],
    whyImportant: [
      'Early detection of gynecological and hormonal disorders',
      'Hormonal Profile — helpful for irregular periods, PCOS, infertility & hormonal imbalance',
      'Pap Smear — important for early detection of cervical abnormalities and cancer prevention',
      'Breast Screening — supports early identification of breast-related abnormalities',
      'Helps prevent serious conditions like cervical cancer',
      'Supports reproductive and overall health',
      'Promotes confidence, well-being & quality of life',
    ],
    quote: '"A Healthy Woman Builds a Healthy Family — Take Care of Yourself First."',
    recommended: 'Once a Year for Every Woman',
    popular: false,
  },
  {
    id: 5,
    name: 'Maternity Care Package',
    category: 'Maternity',
    tagline: 'Antenatal Basic',
    description:
      'A Healthy Pregnancy Begins with Timely Antenatal Care. Pregnancy is one of the most important journeys in a woman\'s life and regular antenatal check-ups play a vital role in ensuring the health and safety of both mother and baby. Many pregnancy-related conditions such as anemia, high blood sugar, infections, blood group incompatibility and fetal growth concerns may develop silently without early symptoms. Timely screening and medical supervision help detect these risks early and support a safer, healthier pregnancy.',
    idealFor: [
      'Pregnant Women',
      'First-Time Mothers',
      'Early Pregnancy Check-Up',
    ],
    price: '₹1,935',
    originalPrice: '₹2,580',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Gynecology Consultation', rate: '₹350' },
      { no: 2, description: 'Complete Blood Count (CBC) & ESR', rate: '₹700' },
      { no: 3, description: 'Blood Group & Rh Typing', rate: '₹50' },
      { no: 4, description: 'Blood Sugar', rate: '₹100' },
      { no: 5, description: 'HIV', rate: '₹250' },
      { no: 6, description: 'HBsAg', rate: '₹170' },
      { no: 7, description: 'VDRL', rate: '₹100' },
      { no: 8, description: 'Urine Routine', rate: '₹60' },
      { no: 9, description: 'USG Obstetric', rate: '₹800' },
    ],
    whyImportant: [
      'Ensures early detection of pregnancy-related risks',
      'Helps prevent complications for both mother and baby',
      'Provides timely medical guidance at every stage',
      'Promotes a safe, healthy, and stress-free pregnancy',
    ],
    quote: '"Because Every Healthy Baby Begins with a Healthy & Well-Cared Mother."',
    recommended: 'As Early as Pregnancy is Confirmed',
    popular: false,
  },
  {
    id: 6,
    name: 'Child Health Package',
    category: 'Paediatrics',
    tagline: '0–15 Years',
    description:
      'Healthy Children Today, Stronger Future Tomorrow. Childhood is a crucial stage of growth and development. During these early years, children require proper nutrition, regular monitoring and timely medical care to ensure healthy physical, mental and emotional development. Many conditions such as anemia, nutritional deficiencies, infections, delayed growth and immunity-related problems may develop silently and remain unnoticed without routine health screening.',
    idealFor: [
      'Infants',
      'School-Going Children',
      'Adolescents',
      'Routine Pediatric Health Monitoring',
    ],
    price: '₹4,390',
    originalPrice: '₹5,850',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Pediatric Consultation', rate: '₹400' },
      { no: 2, description: 'Complete Blood Count (CBC)', rate: '₹350' },
      { no: 3, description: 'Stool Routine', rate: '₹100' },
      { no: 4, description: 'Urine Routine', rate: '₹100' },
      { no: 5, description: 'Growth Assessment', rate: '₹300' },
      { no: 6, description: 'Nutrition Counseling', rate: '₹600' },
      { no: 7, description: 'Vaccination Packages (HPV 2 Doses)', rate: '₹4,000' },
    ],
    whyImportant: [
      'Helps detect hidden health issues at an early stage',
      'Supports healthy physical, mental & emotional development',
      'Identifies nutritional deficiencies and growth-related concerns',
      'Strengthens immunity and supports disease prevention',
      'Ensures children achieve age-appropriate growth milestones',
      'Encourages healthy habits for a stronger future',
    ],
    quote: '"Because Every Child Deserves a Healthy Start for a Bright Future."',
    recommended: 'Regular Preventive Health Screening During Growth Years',
    popular: false,
  },
  {
    id: 7,
    name: 'Diabetic Care Package',
    category: 'Chronic Care',
    tagline: 'Early Detection & Monitoring',
    description:
      'Early Detection & Regular Monitoring Can Prevent Serious Complications. Diabetes is often called a "silent disease" because blood sugar levels can remain uncontrolled for years without noticeable symptoms. If left unmanaged, diabetes can gradually damage vital organs including the heart, kidneys, nerves, eyes and blood vessels. Many people become aware of diabetes only after complications such as heart disease, kidney problems, nerve damage, fatigue, vision changes or frequent infections begin to appear.',
    idealFor: [
      'Known Diabetic Patients',
      'Individuals with Family History of Diabetes',
      'Overweight or Sedentary Individuals',
      'Those Experiencing Fatigue, Frequent Urination, Excessive Thirst or Unexplained Weight Changes',
    ],
    price: '₹2,290',
    originalPrice: '₹3,050',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Physician Consultation', rate: '₹400' },
      { no: 2, description: 'Fasting & Post-Prandial Blood Sugar', rate: '₹100' },
      { no: 3, description: 'HbA1c', rate: '₹650' },
      { no: 4, description: 'Lipid Profile', rate: '₹500' },
      { no: 5, description: 'Kidney Function Test (KFT)', rate: '₹500' },
      { no: 6, description: 'Urine Microalbumin', rate: '₹500' },
      { no: 7, description: 'ECG', rate: '₹400' },
    ],
    whyImportant: [
      'Helps detect diabetes early or monitor existing diabetes effectively',
      'Evaluates long-term blood sugar control through HbA1c testing',
      'Screens for diabetes-related heart and kidney complications',
      'Supports timely treatment and lifestyle modification',
      'Helps prevent serious complications such as heart attack, stroke & kidney failure',
      'Encourages healthier living and reduces long-term healthcare costs',
    ],
    quote: '"Good Diabetes Control Today Protects Your Health for Tomorrow."',
    recommended: 'Regular Monitoring Every 3–6 Months for Diabetic & High-Risk Individuals',
    popular: false,
  },
  {
    id: 8,
    name: 'Heart Check Package',
    category: 'Cardiac Care',
    tagline: 'Early Cardiac Screening',
    description:
      "Don't Ignore Your Heart — Early Screening Can Save Your Life. Heart disease is one of the leading causes of serious illness and sudden medical emergencies. The most concerning part is that many heart-related conditions develop silently, often without noticeable symptoms until a major event such as a heart attack or stroke occurs. Factors such as high blood pressure, diabetes, obesity, stress, smoking, lack of exercise, unhealthy diet and family history can significantly increase the risk of heart disease even at a younger age.",
    idealFor: [
      'Individuals with High Blood Pressure',
      'Diabetes Patients',
      'Obese Individuals',
      'High Stress Levels',
      'Family History of Heart Disease',
      'Smokers',
      'Sedentary Lifestyle',
    ],
    price: '₹2,400',
    originalPrice: '₹3,200',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Physician Consultation', rate: '₹400' },
      { no: 2, description: 'Lipid Profile', rate: '₹500' },
      { no: 3, description: 'Blood Sugar', rate: '₹100' },
      { no: 4, description: 'ECG', rate: '₹400' },
      { no: 5, description: 'Chest X-Ray', rate: '₹300' },
      { no: 6, description: '2D Echo', rate: '₹1,000' },
    ],
    whyImportant: [
      'Helps identify early signs and hidden risk factors of heart disease',
      'Evaluates heart function, blood circulation & cardiac health',
      'Supports prevention of heart attack, stroke & related complications',
      'Encourages timely lifestyle modification and medical intervention',
      'Helps maintain long-term heart health and overall wellbeing',
      'Provides peace of mind through preventive cardiac screening',
    ],
    quote: '"A Simple Heart Check Today Can Prevent a Serious Cardiac Emergency Tomorrow."',
    recommended: 'Once Every Year (More frequent monitoring advised for high-risk individuals)',
    popular: false,
  },
  {
    id: 9,
    name: 'Full Body Comprehensive Package',
    category: 'Preventive Care',
    tagline: 'Complete Health Check in One Visit',
    description:
      "Complete Health Check in One Visit — Because Prevention is Better Than Cure. In today's busy and stressful lifestyle, many serious health conditions such as diabetes, heart disease, liver disorders, kidney problems, thyroid imbalance, and high cholesterol often develop silently without noticeable symptoms. By the time warning signs appear, complications may have already affected your health and quality of life. Regular preventive health screening is one of the best ways to detect problems early and take timely action.",
    idealFor: [
      'Adults of All Age Groups',
      'Working Professionals',
      'Busy Individuals',
      'Routine Preventive Health Screening',
      'Annual Health Check-Up',
    ],
    price: '₹4,090',
    originalPrice: '₹5,450',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Physician Consultation', rate: '₹400' },
      { no: 2, description: 'Complete Blood Count (CBC) & ESR', rate: '₹700' },
      { no: 3, description: 'Blood Sugar', rate: '₹100' },
      { no: 4, description: 'Lipid Profile', rate: '₹500' },
      { no: 5, description: 'Liver Function Test (LFT)', rate: '₹600' },
      { no: 6, description: 'Kidney Function Test (KFT)', rate: '₹500' },
      { no: 7, description: 'Thyroid Profile', rate: '₹850' },
      { no: 8, description: 'Urine Routine', rate: '₹100' },
      { no: 9, description: 'ECG', rate: '₹400' },
      { no: 10, description: 'Chest X-Ray', rate: '₹300' },
      { no: 11, description: 'USG Whole Abdomen', rate: '₹1,000' },
    ],
    whyImportant: [
      'Early detection of multiple diseases in a single visit',
      'Comprehensive evaluation of heart, liver, kidney & metabolic health',
      'Helps prevent serious complications and unnecessary hospitalization',
      'Saves time, effort, and future treatment expenses',
      'Encourages healthier lifestyle choices through timely diagnosis',
      'Provides complete peace of mind regarding your overall health',
    ],
    quote: '"Your Health is Your Greatest Asset — Invest in Prevention Before Problems Begin."',
    recommended: 'Once Every Year for Everyone',
    popular: false,
  },
  {
    id: 10,
    name: 'Pre-Employment / Industrial Fitness Package',
    category: 'Corporate / Industrial',
    tagline: 'Workforce Fitness Assessment',
    description:
      'Ensure a Fit, Safe & Productive Workforce. In industrial and factory environments, employee health plays a critical role in workplace safety, operational efficiency and compliance with occupational health standards. Undetected health conditions such as respiratory problems, infections, uncontrolled blood sugar, poor vision or general physical unfitness can increase the risk of workplace accidents, absenteeism, reduced productivity and long-term medical complications.',
    idealFor: [
      'Factory Workers',
      'Industrial Staff',
      'New Employee Hiring',
      'Contractor Workforce Screening',
      'Routine Employee Fitness Assessment',
    ],
    price: '₹1,050',
    originalPrice: '₹1,400',
    discount: '25% discount',
    tests: [
      { no: 1, description: 'Physician Fitness Certificate', rate: '₹400' },
      { no: 2, description: 'Complete Blood Count (CBC)', rate: '₹350' },
      { no: 3, description: 'Blood Sugar', rate: '₹100' },
      { no: 4, description: 'Urine Routine', rate: '₹100' },
      { no: 5, description: 'Chest X-Ray', rate: '₹300' },
      { no: 6, description: 'Vision Test', rate: '₹150' },
    ],
    whyImportant: [
      'Helps ensure employees are medically fit for work duties',
      'Supports workplace safety and occupational health compliance',
      'Detects hidden health conditions before job placement',
      'Reduces the risk of workplace accidents and absenteeism',
      'Promotes a healthier, safer, and more productive workforce',
      'Supports responsible hiring and employee wellbeing initiatives',
    ],
    quote: '"A Healthy Workforce is the Foundation of a Safe & Successful Organization."',
    recommended: 'Pre-Employment Medical Screening & Routine Industrial Health Checkups',
    popular: false,
  },
];

const categories = ['All', ...Array.from(new Set(packages.map(p => p.category)))];

const categoryColors: Record<string, string> = {
  'Preventive Care': 'bg-blue-100 text-blue-700',
  'Corporate / Industrial': 'bg-orange-100 text-orange-700',
  "Women's Health": 'bg-pink-100 text-pink-700',
  'Maternity': 'bg-rose-100 text-rose-700',
  'Paediatrics': 'bg-green-100 text-green-700',
  'Chronic Care': 'bg-amber-100 text-amber-700',
  'Cardiac Care': 'bg-red-100 text-red-700',
};

function PackageModal({ pkg, onClose }: { pkg: Package; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0077B6] to-[#00B894] p-5 text-white flex-shrink-0 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition"
          >
            <X className="w-6 h-6" />
          </button>
          <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 bg-white/20 text-white`}>
            {pkg.category} · {pkg.tagline}
          </span>
          <h3 className="text-xl font-bold pr-8">{pkg.name}</h3>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-2xl font-bold">{pkg.price}</span>
            <span className="text-white/60 line-through text-sm">{pkg.originalPrice}</span>
            <span className="bg-white/20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">{pkg.discount}</span>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-5 space-y-5">
          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">{pkg.description}</p>

          {/* Ideal For */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-[#0077B6]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Ideal For</p>
              <div className="flex flex-wrap gap-1.5">
                {pkg.idealFor.map((item, i) => (
                  <span key={i} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Why Important */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
              <Info className="w-4 h-4 text-[#00B894]" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Why This Package is Important</p>
              <ul className="space-y-1.5">
                {pkg.whyImportant.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00B894] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tests Table */}
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
              <FlaskConical className="w-4 h-4 text-orange-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Included Tests / Services</p>
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-3 py-2 text-xs font-semibold text-gray-500 w-8">Sr.</th>
                      <th className="text-left px-3 py-2 text-xs font-semibold text-gray-500">Description</th>
                      <th className="text-right px-3 py-2 text-xs font-semibold text-gray-500">Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pkg.tests.map((t, i) => (
                      <tr key={i} className={`border-b border-gray-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="px-3 py-2 text-gray-400 text-xs">{t.no}</td>
                        <td className="px-3 py-2 text-gray-700">{t.description}</td>
                        <td className="px-3 py-2 text-gray-700 text-right font-medium whitespace-nowrap">{t.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50 border-t border-gray-200">
                      <td colSpan={2} className="px-3 py-2 text-xs text-gray-500">Individual Total</td>
                      <td className="px-3 py-2 text-right text-xs text-gray-500 line-through">{pkg.originalPrice}</td>
                    </tr>
                    <tr className="bg-gradient-to-r from-blue-50 to-green-50">
                      <td colSpan={2} className="px-3 py-2.5 text-sm font-bold text-[#0077B6]">Package Price</td>
                      <td className="px-3 py-2.5 text-right text-sm font-bold text-[#0077B6]">{pkg.price}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          {/* Recommended */}
          <div className="bg-blue-50 rounded-xl px-4 py-3 border border-blue-100">
            <p className="text-xs font-semibold text-[#0077B6] uppercase tracking-wider mb-0.5">Recommended</p>
            <p className="text-sm text-gray-700">{pkg.recommended}</p>
          </div>

          {/* Quote */}
          <p className="text-sm text-gray-500 italic text-center border-t border-gray-100 pt-4">{pkg.quote}</p>
        </div>

        {/* Footer CTA */}
        <div className="p-4 border-t border-gray-100 flex-shrink-0">
          <a
            href="/#appointment"
            className="block w-full text-center py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white hover:shadow-lg transition transform hover:scale-[1.02]"
          >
            Book This Package
          </a>
        </div>
      </div>
    </div>
  );
}

function PackageCard({ pkg, onOpen }: { pkg: Package; onOpen: () => void }) {
  return (
    <div
      className={`relative bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full ${
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

        {/* Tagline */}
        <p className="text-xs text-gray-400 font-medium mb-1">{pkg.tagline}</p>

        {/* Name */}
        <h3 className="text-base font-bold text-gray-800 mb-3 leading-snug">{pkg.name}</h3>

        {/* Price */}
        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">
            {pkg.price}
          </span>
          <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
          <span className="text-xs text-green-600 font-semibold">{pkg.discount}</span>
        </div>

        {/* Test count */}
        <p className="text-xs text-gray-500 mb-4">{pkg.tests.length} tests / services included</p>

        {/* Why points preview */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {pkg.whyImportant.slice(0, 3).map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#00B894] flex-shrink-0 mt-0.5" />
              <span className="text-xs text-gray-600 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-auto space-y-2">
          <button
            onClick={onOpen}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border border-[#0077B6] text-[#0077B6] font-semibold text-sm hover:bg-[#0077B6] hover:text-white transition-all duration-200"
          >
            View Full Details <ChevronRight className="w-4 h-4" />
          </button>
          <a
            href="/#appointment"
            className={`block w-full text-center py-2.5 rounded-xl font-semibold text-sm transition ${
              pkg.popular
                ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white hover:shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export function HealthPackagesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

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
            Preventive healthcare packages tailored for every stage of life — all with 25% savings at A Square Hospital, Jharsuguda.
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

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(pkg => (
            <PackageCard key={pkg.id} pkg={pkg} onOpen={() => setSelectedPkg(pkg)} />
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

      {/* Modal */}
      {selectedPkg && (
        <PackageModal pkg={selectedPkg} onClose={() => setSelectedPkg(null)} />
      )}
    </div>
  );
}
