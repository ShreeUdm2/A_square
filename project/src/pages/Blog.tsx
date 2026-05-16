import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Testimonials } from '../components/Testimonials';
import { X, Clock, Tag, ChevronRight } from 'lucide-react';

type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: { heading?: string; text: string }[];
  faqs: { q: string; a: string }[];
  schema: string;
};

const posts: BlogPost[] = [
  {
    slug: 'importance-of-regular-health-checkups-jharsuguda',
    title: 'Why Regular Health Checkups Are Essential — A Guide for Jharsuguda Residents',
    metaTitle: 'Importance of Regular Health Checkups in Jharsuguda | A Square Hospital',
    metaDescription: 'Discover why regular health checkups save lives. Learn about preventive screening for diabetes, heart disease & more at A Square Hospital, Jharsuguda.',
    date: 'March 15, 2025',
    readTime: '5 min read',
    category: 'Preventive Health',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Doctor conducting health checkup at A Square Hospital Jharsuguda',
    excerpt: 'Many serious diseases develop silently for years. A timely health checkup can detect problems early and save you from costly treatments later.',
    content: [
      { text: 'In our busy lives, it is easy to skip annual health checkups — especially when we feel perfectly healthy. But the truth is, feeling well does not always mean being well. Many of the most serious conditions, including diabetes, hypertension, thyroid disorders, and early-stage cancers, develop silently and may show no symptoms until they reach an advanced stage.' },
      { heading: 'What Does a Regular Health Checkup Include?', text: 'A standard preventive health checkup typically includes blood tests (CBC, blood sugar, lipid profile), urine analysis, liver and kidney function tests, thyroid screening, ECG, chest X-ray, and an ultrasound of the abdomen. At A Square Hospital in Jharsuguda, we offer affordable packages tailored for different age groups and health conditions.' },
      { heading: 'Why Early Detection Matters in Jharsuguda', text: 'Jharsuguda is an industrial city where many residents are exposed to occupational health risks including dust, fumes, and physically demanding work. Industrial workers, corporate professionals, and even homemakers face lifestyle diseases accelerated by stress, irregular diet, and limited physical activity. Regular screening helps detect these risks before they become serious medical emergencies.' },
      { heading: 'How Often Should You Get a Health Checkup?', text: 'Adults aged 18–40 should ideally get a basic health checkup once every year. Those above 40 or with risk factors like family history of diabetes or heart disease should consider screening every six months. Seniors above 50 benefit greatly from a comprehensive annual check that includes cardiac, kidney, bone, and metabolic health assessments.' },
      { heading: 'Take the First Step Today', text: 'Prevention is always better — and far more affordable — than cure. A Square Hospital, Jharsuguda, provides comprehensive health packages starting from ₹1,050, giving you complete peace of mind. Schedule your health checkup today and stay one step ahead of potential health problems.' },
    ],
    faqs: [
      { q: 'How often should I get a health checkup in Jharsuguda?', a: 'Adults between 18–40 should have an annual checkup. Those above 40 or with chronic conditions should consider one every 6 months.' },
      { q: 'What is included in a basic health checkup at A Square Hospital Jharsuguda?', a: 'It includes CBC, blood sugar, thyroid (TSH), urine routine, blood group, X-ray chest, USG abdomen, and physician consultation — all in our Basic Health Check Package at ₹2,600.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Why Regular Health Checkups Are Essential — A Guide for Jharsuguda Residents',
      'datePublished': '2025-03-15',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital', 'logo': 'https://asquarehospital.com/logo.jpg' },
      'description': 'Discover why regular health checkups save lives in Jharsuguda. Learn about preventive screening for diabetes, heart disease & more.',
    }),
  },
  {
    slug: 'gynaecologist-jharsuguda-womens-health',
    title: "Women's Health in Jharsuguda — When to See a Gynaecologist",
    metaTitle: "Women's Health & Gynaecologist in Jharsuguda | A Square Hospital",
    metaDescription: "Expert advice on women's health in Jharsuguda. Learn about PCOS, irregular periods, fertility & why regular gynaecology check-ups matter. Dr. Babita Ramani, A Square Hospital.",
    date: 'March 22, 2025',
    readTime: '6 min read',
    category: "Women's Health",
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: "Women's health consultation at A Square Hospital Jharsuguda with gynaecologist",
    excerpt: "From irregular periods to PCOS and fertility concerns, women's health issues are often ignored until they become serious. Here's what every woman in Jharsuguda should know.",
    content: [
      { text: "A woman's body goes through constant changes from adolescence to menopause. Hormonal shifts, reproductive health concerns, and lifestyle pressures mean that women are at risk of a wide range of conditions — many of which go unnoticed until they cause significant discomfort or complications. In Jharsuguda, many women delay gynaecology visits due to lack of awareness or hesitation. Dr. Babita Ramani and the team at A Square Hospital are here to change that." },
      { heading: 'Common Gynaecological Issues Women in Jharsuguda Face', text: 'Polycystic Ovary Syndrome (PCOS) is extremely prevalent and often undiagnosed. Irregular or painful periods, unusual discharge, pelvic pain, and unexplained weight changes are all signs that warrant a gynaecology consultation. Left untreated, conditions like PCOS can lead to fertility challenges, diabetes, and cardiovascular risks.' },
      { heading: 'Why a Pap Smear is Important', text: 'Cervical cancer is one of the most preventable cancers when detected early. A Pap smear test can identify abnormal cells before they become cancerous. The Women\'s Wellness Package at A Square Hospital includes a Pap smear, hormonal profile, FSH, LH, breast screening, and more — all at ₹6,380 (25% off the standard price).' },
      { heading: 'Fertility Care and IVF in Jharsuguda', text: 'Infertility affects many couples but remains a topic that many find difficult to discuss. Dr. Babita Ramani, an IVF Fellow from KIEL, Germany, brings world-class fertility expertise to Jharsuguda. Whether you are exploring your options or have been trying to conceive for a while, compassionate, evidence-based fertility care is available at A Square Hospital.' },
      { heading: 'Book a Women\'s Health Consultation', text: "Don't wait for symptoms to become severe. Annual preventive screening is the most powerful tool a woman has to protect her long-term health. Call +91 9827973991 or visit A Square Hospital, Jharsuguda today." },
    ],
    faqs: [
      { q: 'Who is the best gynaecologist in Jharsuguda?', a: 'Dr. Babita Ramani at A Square Hospital, Jharsuguda is a highly experienced Obstetrician & Gynaecologist with an MD in O&G, FICOG, and an IVF Fellowship from KIEL, Germany with 15+ years of experience.' },
      { q: 'Does A Square Hospital Jharsuguda offer fertility and IVF treatment?', a: 'Yes. Dr. Babita Ramani provides expert fertility consultations and IVF guidance at A Square Hospital, Jharsuguda.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': "Women's Health in Jharsuguda — When to See a Gynaecologist",
      'datePublished': '2025-03-22',
      'author': { '@type': 'Person', 'name': 'Dr. Babita Ramani' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital', 'logo': 'https://asquarehospital.com/logo.jpg' },
    }),
  },
  {
    slug: 'safe-delivery-maternity-care-jharsuguda',
    title: 'Safe Delivery & Maternity Care in Jharsuguda — What to Expect at A Square Hospital',
    metaTitle: 'Best Maternity Hospital in Jharsuguda | Safe Delivery — A Square Hospital',
    metaDescription: 'Planning your delivery in Jharsuguda? A Square Hospital offers safe normal delivery, C-section, painless delivery & high-risk pregnancy care. Expert OB-GYN team. Call +91 9827973991.',
    date: 'April 5, 2025',
    readTime: '6 min read',
    category: 'Maternity',
    image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Safe maternity care and delivery at A Square Hospital Jharsuguda',
    excerpt: 'A safe pregnancy begins with the right hospital. Learn how A Square Hospital, Jharsuguda supports every mother through her journey from the first trimester to delivery and beyond.',
    content: [
      { text: 'Choosing the right hospital for your delivery is one of the most important decisions an expectant mother makes. At A Square Hospital in Jharsuguda, we provide a complete, supportive maternity care environment where every mother receives personalized attention, expert obstetric care, and emotional support throughout her pregnancy journey.' },
      { heading: 'Antenatal Care — Starting Right', text: 'Good maternity care begins early. Our antenatal check-ups monitor the health of both mother and baby throughout pregnancy. The Maternity Care Package (Antenatal Basic) at ₹1,935 includes gynaecology consultation, CBC & ESR, blood group & Rh typing, blood sugar, HIV, HBsAg, VDRL, urine routine, and USG Obstetric — everything needed to start pregnancy safely.' },
      { heading: 'Normal Delivery & Painless Delivery Options', text: 'We offer both normal vaginal delivery and painless (epidural) delivery options in our modern, fully equipped labour room. Our experienced obstetricians and skilled nursing team ensure that every delivery is as safe and comfortable as possible for both mother and child.' },
      { heading: 'High-Risk Pregnancy Management', text: 'Conditions like gestational diabetes, hypertension in pregnancy, multiple pregnancies, and previous complicated deliveries require specialist attention. Dr. Babita Ramani and our team are experienced in managing high-risk pregnancies with clinical precision and continuous monitoring.' },
      { heading: 'NICU Support for Newborns', text: "Our advanced NICU at A Square Hospital ensures that premature or critically ill newborns receive the specialized care they need. Parents can be confident that their baby is in safe, experienced hands from the very first moment of life." },
    ],
    faqs: [
      { q: 'Which is the best maternity hospital in Jharsuguda?', a: 'A Square Hospital, Jharsuguda is a trusted maternity hospital offering safe normal delivery, painless delivery, C-section, high-risk pregnancy care, and NICU support under Dr. Babita Ramani.' },
      { q: 'What does the Maternity Care Package at A Square Hospital include?', a: 'The Antenatal Basic Maternity Package costs ₹1,935 and includes gynaecology consultation, blood tests, ultrasound, and essential screening for mother and baby.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Safe Delivery & Maternity Care in Jharsuguda',
      'datePublished': '2025-04-05',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'heart-disease-prevention-jharsuguda',
    title: 'Heart Disease Prevention — 7 Warning Signs You Should Never Ignore in Jharsuguda',
    metaTitle: 'Heart Disease Prevention & Cardiac Care in Jharsuguda | A Square Hospital',
    metaDescription: 'Learn the 7 warning signs of heart disease and how to prevent cardiac emergencies. Heart Check Package available at A Square Hospital Jharsuguda — ₹2,400.',
    date: 'April 18, 2025',
    readTime: '7 min read',
    category: 'Cardiac Health',
    image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Cardiac health screening and ECG at A Square Hospital Jharsuguda',
    excerpt: 'Heart disease is the leading cause of sudden emergencies. Know the warning signs, risk factors, and how preventive cardiac screening at A Square Hospital Jharsuguda can protect your life.',
    content: [
      { text: 'Heart disease does not always announce itself with dramatic symptoms. In many cases, people feel completely normal until a sudden heart attack or stroke occurs. This is why preventive cardiac screening is so important — especially for people in Jharsuguda who lead demanding industrial or corporate lives that create significant physiological stress.' },
      { heading: '7 Warning Signs You Should Never Ignore', text: '1. Chest pain or tightness — even mild, recurring episodes. 2. Shortness of breath during normal activities. 3. Palpitations or irregular heartbeat. 4. Persistent fatigue and weakness with no obvious cause. 5. Swelling in the feet, ankles, or legs. 6. Dizziness, lightheadedness, or fainting. 7. Pain radiating to the jaw, shoulder, or arm.' },
      { heading: 'Risk Factors Specific to Jharsuguda Residents', text: 'Industrial workers in Jharsuguda are exposed to stress, physical strain, irregular shift work, and sometimes occupational hazards that increase cardiovascular risk. Combined with unhealthy diets, sedentary lifestyles, and untreated diabetes or hypertension, the risk of heart disease rises significantly.' },
      { heading: 'What the Heart Check Package at A Square Hospital Includes', text: 'Our Heart Check Package at ₹2,400 covers physician consultation, lipid profile, blood sugar, ECG, chest X-ray, and 2D Echo — providing a comprehensive picture of your cardiac health. This is strongly recommended annually for anyone above 35, or more frequently for those with high blood pressure, diabetes, or a family history of heart disease.' },
      { heading: 'Act Before It Is Too Late', text: 'A simple heart check today can prevent a serious cardiac emergency tomorrow. Book your Heart Check Package at A Square Hospital, Jharsuguda by calling +91 9827973991.' },
    ],
    faqs: [
      { q: 'Is 2D Echo available at A Square Hospital Jharsuguda?', a: 'Yes, 2D Echocardiography is available as part of our Heart Check Package at A Square Hospital Jharsuguda.' },
      { q: 'How much does a heart checkup cost in Jharsuguda?', a: 'Our Heart Check Package is available at ₹2,400 (25% discount from the standard price of ₹3,200) at A Square Hospital, Jharsuguda.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Heart Disease Prevention — 7 Warning Signs You Should Never Ignore in Jharsuguda',
      'datePublished': '2025-04-18',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'diabetes-management-jharsuguda',
    title: 'Managing Diabetes in Jharsuguda — A Practical Guide from A Square Hospital',
    metaTitle: 'Diabetes Care & Management in Jharsuguda | A Square Hospital — Expert Physicians',
    metaDescription: 'Practical guide to diabetes management in Jharsuguda. HbA1c testing, diet tips, kidney protection & Diabetic Care Package at ₹2,290. A Square Hospital, Jharsuguda.',
    date: 'May 2, 2025',
    readTime: '7 min read',
    category: 'Chronic Care',
    image: 'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Diabetes care and blood sugar monitoring at A Square Hospital Jharsuguda',
    excerpt: 'Diabetes is a silent epidemic affecting millions across India. Without regular monitoring, it can damage the heart, kidneys, nerves, and eyes. Here is how to stay in control.',
    content: [
      { text: 'Diabetes affects an estimated 77 million people in India — and a significant proportion remain undiagnosed. In Jharsuguda, the combination of high-calorie diets, sedentary industrial jobs, and genetic predisposition makes the population particularly vulnerable to type 2 diabetes and its complications.' },
      { heading: 'Why HbA1c Testing Matters', text: 'A single blood sugar reading only tells you your level at one point in time. HbA1c, on the other hand, reflects your average blood sugar over the past 2–3 months, giving a much more accurate picture of diabetes control. Our Diabetic Care Package at ₹2,290 includes HbA1c, fasting & post-prandial blood sugar, lipid profile, kidney function test (KFT), urine microalbumin, and ECG.' },
      { heading: 'Protecting Your Kidneys and Heart', text: 'The most common and dangerous complications of poorly controlled diabetes are kidney disease (diabetic nephropathy) and heart disease. Urine microalbumin testing detects early kidney damage before it progresses to kidney failure. Regular lipid profile and ECG monitoring help identify cardiac risk early, enabling timely intervention.' },
      { heading: 'Diet and Lifestyle Tips for Diabetics in Jharsuguda', text: 'Reduce refined carbohydrates, sugar-sweetened beverages, and white rice. Include more vegetables, pulses, and whole grains. Even a 30-minute daily walk significantly improves insulin sensitivity. Stress management and adequate sleep also play a critical role in blood sugar control.' },
      { heading: 'How Often Should Diabetics Get Tested?', text: 'Known diabetics should get their Diabetic Care Package every 3–6 months. High-risk individuals — those with family history, obesity, or PCOS — should be screened annually. A Square Hospital, Jharsuguda offers this package at ₹2,290 with 25% savings.' },
    ],
    faqs: [
      { q: 'What tests are included in the Diabetic Care Package at A Square Hospital Jharsuguda?', a: 'The package includes physician consultation, fasting & PP blood sugar, HbA1c, lipid profile, KFT, urine microalbumin, and ECG at ₹2,290.' },
      { q: 'How often should diabetics get checked at A Square Hospital?', a: 'Diabetics should get their care package checked every 3–6 months. High-risk individuals should screen annually.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Managing Diabetes in Jharsuguda — A Practical Guide',
      'datePublished': '2025-05-02',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'child-health-paediatric-care-jharsuguda',
    title: "Your Child's Health in Jharsuguda — A Complete Guide to Paediatric Care",
    metaTitle: 'Best Paediatrician in Jharsuguda | Child Health Care — A Square Hospital',
    metaDescription: "Expert paediatric care in Jharsuguda for infants, children & adolescents. Vaccinations, growth monitoring & nutrition counseling. Child Health Package at ₹4,390 — A Square Hospital.",
    date: 'May 10, 2025',
    readTime: '6 min read',
    category: 'Paediatrics',
    image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Paediatric care and child health checkup at A Square Hospital Jharsuguda',
    excerpt: "Children's health needs change rapidly from infancy through adolescence. Here's how regular paediatric checkups at A Square Hospital, Jharsuguda, support your child's healthy development.",
    content: [
      { text: "Childhood is a time of rapid physical, mental, and emotional growth. Each developmental stage comes with its own health requirements — from nutrition and vaccinations in infancy to growth monitoring and immunity building during school years. At A Square Hospital, Jharsuguda, our paediatrics department provides comprehensive, compassionate care for every child." },
      { heading: 'Why Routine Paediatric Checkups Are Important', text: 'Many childhood health issues — including anaemia, nutritional deficiencies, vision problems, delayed growth, and immunity-related conditions — develop gradually and may not show obvious symptoms. Routine checkups allow early detection and timely intervention, preventing long-term complications.' },
      { heading: 'Vaccinations — Building Lifelong Immunity', text: 'Vaccinations remain one of the most powerful tools in preventive paediatric medicine. Our Child Health Package includes HPV vaccination (2 doses), which provides critical protection against cervical cancer later in life. Dr. Dolamani Tandi, our Paediatrician with 10 years of experience, ensures each child follows an appropriate vaccination schedule.' },
      { heading: 'Growth Assessment and Nutrition Counseling', text: "Monitoring height, weight, and developmental milestones against age-appropriate standards helps identify growth concerns early. Our Child Health Package includes growth assessment and dedicated nutrition counseling, ensuring your child receives the right guidance for their individual needs." },
      { heading: 'Child Health Package at A Square Hospital Jharsuguda', text: 'Our Child Health Package (0–15 years) at ₹4,390 includes paediatric consultation, CBC, stool routine, urine routine, growth assessment, nutrition counseling, and HPV vaccination (2 doses). This represents a 25% saving over individual service pricing.' },
    ],
    faqs: [
      { q: 'Who is the best paediatrician in Jharsuguda?', a: 'Dr. Dolamani Tandi at A Square Hospital, Jharsuguda is an experienced paediatrician with an MD in Paediatrics and over 10 years of practice.' },
      { q: 'Is HPV vaccination available at A Square Hospital Jharsuguda?', a: 'Yes, HPV vaccination (2 doses) is included in the Child Health Package at A Square Hospital, Jharsuguda.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': "Your Child's Health in Jharsuguda — A Complete Guide to Paediatric Care",
      'datePublished': '2025-05-10',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'senior-citizen-health-care-jharsuguda',
    title: 'Senior Citizen Health Care in Jharsuguda — Why Annual Screening is Critical After 50',
    metaTitle: 'Senior Citizen Health Package in Jharsuguda | A Square Hospital — Healthy Aging',
    metaDescription: 'Comprehensive health care for senior citizens in Jharsuguda. Annual screening for heart, kidneys, bones & more. Senior Citizen Package at ₹6,350. A Square Hospital.',
    date: 'May 18, 2025',
    readTime: '6 min read',
    category: 'Senior Health',
    image: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Senior citizen health checkup and care at A Square Hospital Jharsuguda',
    excerpt: 'After the age of 50, the body becomes increasingly vulnerable to age-related diseases. Annual health screening at A Square Hospital, Jharsuguda, helps seniors stay healthy, active, and independent.',
    content: [
      { text: 'Aging is a natural process, but many age-related health conditions are preventable or manageable when detected early. For seniors above 50 in Jharsuguda, regular health screening is not just recommended — it is essential. Heart disease, diabetes, hypertension, osteoporosis, and kidney disorders often develop gradually and can significantly impact quality of life if left unaddressed.' },
      { heading: 'What Changes After 50?', text: 'After 50, bone density starts to decline, cardiovascular risk increases, kidney function can gradually weaken, and the thyroid gland may become less efficient. Vitamin D and B12 deficiencies are extremely common in older adults and can cause fatigue, weakness, memory problems, and increased fracture risk.' },
      { heading: 'Cardiology Consultation Included', text: "One of the unique features of A Square Hospital's Senior Citizen Package is the inclusion of a dedicated Cardiology Consultation alongside comprehensive blood tests, pulmonary function testing, ECG, and imaging. At ₹6,350, this package is designed to give a thorough health picture in a single visit." },
      { heading: 'Calcium and Vitamin Deficiency Screening', text: 'Serum calcium, Vitamin D & B12 testing is essential for seniors to prevent osteoporosis and nerve damage. Our Senior Citizen Package includes all of these, helping families get ahead of age-related deficiencies that are routinely missed in standard check-ups.' },
      { heading: 'Supporting Healthy, Independent Aging in Jharsuguda', text: 'We encourage all seniors in Jharsuguda and the surrounding region to schedule their annual health screening at A Square Hospital. Our compassionate team ensures every elderly patient feels comfortable, respected, and fully informed about their health status.' },
    ],
    faqs: [
      { q: 'What is included in the Senior Citizen Health Package at A Square Hospital Jharsuguda?', a: 'The package at ₹6,350 includes CBC & ESR, blood sugar, lipid profile, LFT, KFT, USG abdomen, thyroid, X-ray, ECG, pulmonary function test, Vitamin B12, Vitamin D & B12, serum calcium, urine routine, and cardiology consultation.' },
      { q: 'How often should seniors above 50 get a health checkup?', a: 'Strongly recommended every 6–12 months for all individuals above 50 years of age.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Senior Citizen Health Care in Jharsuguda — Why Annual Screening is Critical After 50',
      'datePublished': '2025-05-18',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'nicu-premature-baby-care-jharsuguda',
    title: 'Advanced NICU Care in Jharsuguda — What Parents Need to Know About Premature Births',
    metaTitle: 'Advanced NICU in Jharsuguda | Premature Baby Care — A Square Hospital',
    metaDescription: 'A Square Hospital Jharsuguda has an advanced NICU for premature and critically ill newborns. Expert neonatology care 24/7. Learn what to expect from our NICU team.',
    date: 'May 25, 2025',
    readTime: '6 min read',
    category: 'Neonatal Care',
    image: 'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Advanced NICU for premature newborns at A Square Hospital Jharsuguda',
    excerpt: 'A premature birth is an emotional and medical challenge for any family. Our advanced NICU at A Square Hospital, Jharsuguda, provides specialized 24/7 care for the most vulnerable newborns.',
    content: [
      { text: 'A premature birth — before 37 weeks of gestation — requires specialized medical attention that goes far beyond a standard nursery. The neonatal period is critical, and any delay in intervention can have lifelong consequences. A Square Hospital in Jharsuguda has invested in an advanced NICU designed to give premature and critically ill newborns the best possible start in life.' },
      { heading: 'What is a NICU?', text: "The Neonatal Intensive Care Unit (NICU) is a specialized ward equipped with incubators, warmers, respiratory support devices, continuous monitoring systems, and infusion pumps for providing round-the-clock care to newborns who need more support than a standard maternity ward can offer." },
      { heading: 'Conditions Managed in Our NICU', text: 'Our NICU at A Square Hospital, Jharsuguda handles a range of conditions including prematurity, low birth weight, neonatal jaundice (hyperbilirubinemia), respiratory distress syndrome, birth asphyxia, neonatal sepsis, and feeding difficulties in newborns.' },
      { heading: 'Our Neonatology Team', text: 'Dr. Dolamani Tandi leads our paediatrics and neonatal team. With qualifications including MD Paediatrics, NALS (Neonatal Advanced Life Support), PALS, and PGPN, and 10 years of clinical experience, Dr. Tandi ensures every newborn in our NICU receives expert, evidence-based care.' },
      { heading: 'Support for NICU Families in Jharsuguda', text: 'We understand that having a baby in the NICU is stressful and emotionally overwhelming. Our nursing team and doctors keep families closely informed and involved in their baby\'s care journey. We offer a compassionate, family-centered approach in our NICU at A Square Hospital, Jharsuguda.' },
    ],
    faqs: [
      { q: 'Does A Square Hospital Jharsuguda have an NICU?', a: 'Yes, A Square Hospital has an advanced NICU equipped to handle premature births, neonatal jaundice, respiratory conditions, and other critical newborn conditions.' },
      { q: 'Who is the NICU specialist at A Square Hospital Jharsuguda?', a: 'Dr. Dolamani Tandi leads the Paediatrics and NICU team at A Square Hospital. He holds MD Paediatrics, NALS, PALS, and PGPN with 10+ years of experience.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Advanced NICU Care in Jharsuguda — What Parents Need to Know About Premature Births',
      'datePublished': '2025-05-25',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'industrial-health-workers-jharsuguda',
    title: 'Occupational Health for Industrial Workers in Jharsuguda — Risks, Screening & Care',
    metaTitle: 'Industrial & Occupational Health Screening in Jharsuguda | A Square Hospital',
    metaDescription: 'A Square Hospital Jharsuguda offers industrial health screening and fitness certificates for factory workers & corporate staff. Executive & Pre-Employment packages from ₹1,050.',
    date: 'June 3, 2025',
    readTime: '7 min read',
    category: 'Occupational Health',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Industrial and occupational health screening for workers in Jharsuguda',
    excerpt: "Jharsuguda is one of Odisha's key industrial centres. Factory workers, mine staff, and corporate employees face unique health risks that require dedicated occupational health screening.",
    content: [
      { text: "Jharsuguda is one of Odisha's most important industrial towns, home to major power plants, aluminium smelters, and manufacturing units. The thousands of workers employed in these industries face occupational health risks that ordinary health checkups may not adequately address. A Square Hospital provides specialized Executive Health Packages and Pre-Employment Fitness Packages designed specifically for this workforce." },
      { heading: 'Common Health Risks for Industrial Workers', text: 'Long-term exposure to dust and fumes can cause respiratory conditions including occupational asthma and silicosis. Shift work disrupts circadian rhythms and increases the risk of heart disease, diabetes, and metabolic syndrome. Heavy physical work increases musculoskeletal injury risk, while stress and irregular meals accelerate hypertension and peptic ulcer disease.' },
      { heading: 'Pre-Employment Fitness Certificate — A Legal & Safety Requirement', text: 'Many industries require employees to have a valid fitness certificate before joining or returning from extended leave. Our Pre-Employment & Industrial Fitness Package at ₹1,050 includes a physician fitness certificate, CBC, blood sugar, urine routine, chest X-ray, and vision test — providing all essentials for occupational health compliance.' },
      { heading: 'Executive Health Package for Comprehensive Screening', text: 'For more comprehensive occupational health screening, our Executive Health Package at ₹7,225 covers 20 tests including cardiac, liver, kidney, thyroid, lung function, sexually transmitted infection screening, vitamin deficiencies, and more. Recommended every 6–12 months for all working professionals.' },
      { heading: "A Square Hospital's Commitment to Jharsuguda's Workforce", text: "We are proud to be a healthcare partner for Jharsuguda's industrial community. Our hospital offers group booking options for companies and factories. Contact us at +91 9827973991 or email Asquarehospital@gmail.com for corporate health screening arrangements." },
    ],
    faqs: [
      { q: 'Does A Square Hospital Jharsuguda provide fitness certificates for industrial workers?', a: 'Yes. Our Pre-Employment & Industrial Fitness Package at ₹1,050 includes a physician fitness certificate, CBC, blood sugar, chest X-ray, and vision test.' },
      { q: 'Can companies arrange group health screening at A Square Hospital Jharsuguda?', a: 'Yes. A Square Hospital offers corporate and group health screening arrangements. Call +91 9827973991 for details.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Occupational Health for Industrial Workers in Jharsuguda',
      'datePublished': '2025-06-03',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
  {
    slug: 'orthopaedic-care-bone-joint-jharsuguda',
    title: 'Bone & Joint Health in Jharsuguda — When to See an Orthopaedic Specialist',
    metaTitle: 'Best Orthopaedic Doctor in Jharsuguda | Bone & Joint Care — A Square Hospital',
    metaDescription: 'Experiencing joint pain, fractures or back pain in Jharsuguda? A Square Hospital offers expert orthopaedic care with Dr. Uditansu Das, MS Orthopaedics. Book appointment: +91 9827973991.',
    date: 'June 12, 2025',
    readTime: '6 min read',
    category: 'Orthopaedics',
    image: 'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Orthopaedic consultation for bone and joint pain at A Square Hospital Jharsuguda',
    excerpt: 'Joint pain, fractures, and back problems affect people of all ages in Jharsuguda. Learn when to see an orthopaedic specialist and what modern treatment options are available.',
    content: [
      { text: "Bone and joint problems are among the most common reasons people seek medical attention across all age groups. From sports injuries in younger patients to arthritis and osteoporosis in seniors, orthopaedic conditions significantly impact mobility, independence, and quality of life. At A Square Hospital, Jharsuguda, Dr. Uditansu Das leads our Orthopaedics department with 12 years of specialized experience." },
      { heading: 'Common Orthopaedic Conditions We Treat', text: 'Our orthopaedics team in Jharsuguda treats fractures (including complex and compound fractures), ligament tears and sports injuries, knee and hip arthritis, spine and disc problems, carpal tunnel syndrome, tendon injuries, and bone infections (osteomyelitis).' },
      { heading: 'When Should You See an Orthopaedic Doctor?', text: 'You should consult an orthopaedic specialist if you experience persistent joint pain that lasts more than a few weeks, swelling or deformity after an injury, difficulty walking or climbing stairs, back pain that radiates down the leg, or any fracture or significant trauma.' },
      { heading: 'Minimally Invasive and Modern Surgical Techniques', text: 'Where surgery is needed, our orthopaedic team employs minimally invasive techniques that reduce recovery time, blood loss, and post-operative pain. Modern implants and fixation devices ensure strong and durable repairs for fractures and joint replacements.' },
      { heading: 'Physiotherapy and Rehabilitation in Jharsuguda', text: 'Surgical intervention is only the beginning of recovery. Our comprehensive orthopaedic care includes physiotherapy guidance and rehabilitation planning to ensure patients regain full function. We work closely with patients to set realistic recovery goals and support them every step of the way.' },
    ],
    faqs: [
      { q: 'Who is the best orthopaedic doctor in Jharsuguda?', a: 'Dr. Uditansu Das at A Square Hospital, Jharsuguda is an experienced orthopaedic surgeon with an MS in Orthopaedics and 12 years of clinical experience.' },
      { q: 'Does A Square Hospital Jharsuguda perform joint replacement surgery?', a: 'Our orthopaedics team manages joint conditions and performs fracture surgeries. For complex joint replacements, we provide referrals to appropriate specialist facilities as needed.' },
    ],
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Bone & Joint Health in Jharsuguda — When to See an Orthopaedic Specialist',
      'datePublished': '2025-06-12',
      'author': { '@type': 'Organization', 'name': 'A Square Hospital Jharsuguda' },
      'publisher': { '@type': 'Organization', 'name': 'A Square Hospital' },
    }),
  },
];

const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Health Blog — Tips & Advice for Jharsuguda | A Square Hospital</title>
        <meta name="description" content="Expert health articles from A Square Hospital Jharsuguda — covering women's health, maternity care, diabetes, heart health, paediatrics, NICU, orthopaedics & preventive care." />
        <meta name="keywords" content="health blog Jharsuguda, hospital blog Jharsuguda, women health tips Jharsuguda, diabetes care Jharsuguda, maternity care Jharsuguda, NICU Jharsuguda, A Square Hospital blog" />
        <link rel="canonical" href="https://asquarehospital.com/blog" />
      </Helmet>

      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">Health Articles</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-gray-800">
              Health &amp; <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Wellness Blog</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0077B6] to-[#00B894] rounded mx-auto mb-4" />
            <p className="text-gray-500 max-w-2xl mx-auto text-base">Expert health advice from A Square Hospital, Jharsuguda — helping families across Odisha live healthier lives.</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0077B6]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <article key={post.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-[#00B894] font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />{post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" />{post.readTime}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 mb-2">{post.date}</span>
                  <h2 className="text-base font-bold mt-1 mb-3 text-gray-800 leading-snug">{post.title}</h2>
                  <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">{post.excerpt}</p>
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-1.5 text-[#0077B6] font-semibold text-sm hover:gap-2.5 transition-all mt-auto"
                  >
                    Read Full Article <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition z-10 shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>

            <img src={selectedPost.image} alt={selectedPost.imageAlt} className="w-full h-64 sm:h-80 object-cover rounded-t-2xl" />

            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 text-xs text-[#00B894] font-semibold bg-green-50 px-2.5 py-1 rounded-full">
                  <Tag className="w-3 h-3" />{selectedPost.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />{selectedPost.readTime}
                </span>
                <span className="text-xs text-gray-400">{selectedPost.date}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 leading-snug">{selectedPost.title}</h2>

              <div className="space-y-5">
                {selectedPost.content.map((section, i) => (
                  <div key={i}>
                    {section.heading && (
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{section.heading}</h3>
                    )}
                    <p className="text-gray-600 leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>

              {selectedPost.faqs.length > 0 && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {selectedPost.faqs.map((faq, i) => (
                      <div key={i} className="bg-blue-50 rounded-xl p-4">
                        <p className="font-semibold text-gray-800 text-sm mb-1">{faq.q}</p>
                        <p className="text-gray-600 text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex gap-3">
                <a
                  href="/#appointment"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:shadow-lg transition"
                >
                  Book Appointment
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#0077B6] text-[#0077B6] px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: selectedPost.schema }} />
          </div>
        </div>
      )}
    </>
  );
}
