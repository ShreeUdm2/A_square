// Shared blog data — used by both the Blog listing page and individual BlogPost detail pages.
// All post slugs match the URLs in /public/sitemap.xml exactly.

export type ContentSegment = string | { text: string; href: string; title?: string };

export type ContentSection = {
  heading?: string;
  segments: ContentSegment[];
};

export type FAQ = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified: string; // ISO YYYY-MM-DD
  readTime: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content: ContentSection[];
  faqs: FAQ[];
  interlinks: string[]; // slugs of related posts for the "Related Articles" block
  authorName: string;
  authorType: 'Person' | 'Organization';
  faqSchema: string; // serialized JSON-LD for FAQPage
  articleSchema: string; // serialized JSON-LD for Article
};

const SITE = 'https://asquarehospital.com';

const buildArticleSchema = (p: BlogPost) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.metaDescription,
    image: p.image,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: { '@type': p.authorType, name: p.authorName },
    publisher: {
      '@type': 'Organization',
      name: 'A Square Hospital',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo.jpg` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/blog/${p.slug}`,
    },
  });

const buildFaqSchema = (p: BlogPost) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  });

// helper to keep the post literals compact
const post = (p: Omit<BlogPost, 'faqSchema' | 'articleSchema'>): BlogPost => ({
  ...p,
  faqSchema: buildFaqSchema(p as BlogPost),
  articleSchema: buildArticleSchema(p as BlogPost),
});

export const posts: BlogPost[] = [
  post({
    slug: 'importance-of-regular-health-checkups-jharsuguda',
    title: 'Why Regular Health Checkups Are Essential — A Guide for Jharsuguda Residents',
    metaTitle: 'Importance of Regular Health Checkups in Jharsuguda | A Square Hospital',
    metaDescription:
      'Discover why regular health checkups save lives. Learn about preventive screening for diabetes, heart disease & more at A Square Hospital, Jharsuguda.',
    date: 'March 15, 2025',
    datePublished: '2025-03-15',
    dateModified: '2026-06-24',
    readTime: '8 min read',
    category: 'Preventive Health',
    image:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Doctor conducting health checkup at A Square Hospital Jharsuguda',
    excerpt:
      'Many serious diseases develop silently for years. A timely health checkup can detect problems early and save you from costly treatments later.',
    authorName: 'A Square Hospital Jharsuguda',
    authorType: 'Organization',
    interlinks: [
      'heart-disease-prevention-jharsuguda',
      'diabetes-management-jharsuguda',
      'senior-citizen-health-care-jharsuguda',
      'industrial-health-workers-jharsuguda',
    ],
    content: [
      {
        segments: [
          'In our busy lives, it is easy to skip annual health checkups — especially when we feel perfectly healthy. But the truth is, feeling well does not always mean being well. Many of the most serious conditions, including diabetes, hypertension, thyroid disorders, and early-stage cancers, develop silently and may show no symptoms until they reach an advanced stage. For families in Jharsuguda and across Odisha, regular preventive screening at ',
          { text: 'A Square Hospital', href: '/' },
          ' is the single most effective way to stay ahead of these silent conditions.',
        ],
      },
      {
        heading: 'What Does a Regular Health Checkup Include?',
        segments: [
          'A standard preventive health checkup typically includes blood tests (CBC, blood sugar, lipid profile), urine analysis, liver and kidney function tests, thyroid screening, ECG, chest X-ray, and an ultrasound of the abdomen. At A Square Hospital in Jharsuguda, we offer affordable packages tailored for different age groups and health conditions. You can view all our ',
          { text: 'preventive health packages here', href: '/health-packages' },
          '. Each package is designed by our team of physicians and is regularly updated to reflect current medical guidelines.',
        ],
      },
      {
        heading: 'Why Early Detection Matters in Jharsuguda',
        segments: [
          'Jharsuguda is an industrial city where many residents are exposed to occupational health risks including dust, fumes, and physically demanding work. Industrial workers, corporate professionals, and even homemakers face lifestyle diseases accelerated by stress, irregular diet, and limited physical activity. Regular screening helps detect these risks before they become serious medical emergencies. In our experience, patients who undergo ',
          { text: 'annual heart checkups', href: '/blog/heart-disease-prevention-jharsuguda' },
          ' and ',
          { text: 'diabetic screening', href: '/blog/diabetes-management-jharsuguda' },
          ' are far more likely to catch early warning signs and reverse conditions before they become chronic.',
        ],
      },
      {
        heading: 'How Often Should You Get a Health Checkup?',
        segments: [
          'Adults aged 18–40 should ideally get a basic health checkup once every year. Those above 40 or with risk factors like family history of diabetes or heart disease should consider screening every six months. Seniors above 50 benefit greatly from a comprehensive annual check that includes cardiac, kidney, bone, and metabolic health assessments — which is why we designed a dedicated ',
          { text: 'Senior Citizen Health Package', href: '/blog/senior-citizen-health-care-jharsuguda' },
          ' that covers all of these in a single visit. For working professionals in factories and corporate offices, our ',
          { text: 'Executive Health Package', href: '/blog/industrial-health-workers-jharsuguda' },
          ' includes occupational fitness certification alongside the standard screening panel.',
        ],
      },
      {
        heading: 'Common Myths About Preventive Health Checkups',
        segments: [
          'One of the most common myths we hear from patients in Jharsuguda is that a checkup is only needed when something feels wrong. The opposite is true — by the time symptoms appear, most chronic conditions have already done significant damage. Another myth is that healthy young adults do not need screening. Unfortunately, India is seeing a sharp rise in lifestyle diseases in people under 30, particularly type 2 diabetes and pre-hypertension. A third myth is that checkups are expensive. In reality, our preventive packages at A Square Hospital start from ₹1,050, which is far less than the cost of treating an advanced disease discovered too late.',
        ],
      },
      {
        heading: 'What Happens If a Checkup Reveals an Issue?',
        segments: [
          'When a checkup reveals an abnormal result, our physicians guide patients through the next steps. This may include additional confirmatory tests, specialist consultations, lifestyle modification plans, or follow-up monitoring. Because A Square Hospital is a multi-speciality hospital, the same team that detects an issue can also treat it — including ',
          { text: 'cardiology', href: '/services' },
          ', endocrinology, gynaecology, and orthopaedics — without the patient having to travel to multiple facilities.',
        ],
      },
      {
        heading: 'Take the First Step Today',
        segments: [
          'Prevention is always better — and far more affordable — than cure. A Square Hospital, Jharsuguda, provides comprehensive health packages starting from ₹1,050, giving you complete peace of mind. Schedule your health checkup today and stay one step ahead of potential health problems. Call ',
          { text: '+91 9827973991', href: 'tel:+919827973991' },
          ' or ',
          { text: 'book an appointment online', href: '/#appointment' },
          ' to get started.',
        ],
      },
      {
        heading: 'Family Health Checkups — A Shared Responsibility',
        segments: [
          'Health checkups are most effective when approached as a family commitment. When one member of the household gets screened and adopts preventive habits, the entire family tends to follow. We encourage families in Jharsuguda to schedule checkups together, particularly during festival seasons or birthday months when people are more likely to make health a priority. Couples planning a pregnancy should both get screened three to six months before conception to identify and address any genetic, infectious, or metabolic risks. Parents above 40 should pair their own checkup with paediatric visits for younger children to model healthy behaviour and consolidate healthcare logistics into fewer trips.',
        ],
      },
      {
        heading: 'How to Prepare for Your Health Checkup',
        segments: [
          'To get the most accurate results from your preventive health checkup, fast for 10–12 hours before blood tests — water is allowed and encouraged. Wear comfortable clothing that allows easy access for ECG leads and blood pressure measurement. Bring a list of any medications, supplements, or herbal remedies you are currently taking, along with previous medical records if available. Avoid heavy exercise, alcohol, and fatty meals the night before the checkup. Women who are menstruating should inform the phlebotomist, as certain test results may be temporarily altered. If you have specific concerns — family history of a particular disease, recent symptoms, or occupational exposures — write them down beforehand so the consulting physician can address them comprehensively.',
        ],
      },
      {
        heading: 'Reading Your Reports — What Do the Numbers Mean?',
        segments: [
          'After your checkup, our physicians walk you through every result in plain language. Key markers include fasting blood sugar (normal below 100 mg/dL, pre-diabetes 100–125, diabetes 126 or higher), total cholesterol (desirable below 200 mg/dL), HbA1c (normal below 5.7%, pre-diabetes 5.7–6.4%, diabetes 6.5% or higher), blood pressure (optimal below 120/80 mmHg), and BMI (normal range 18.5–24.9). Liver enzymes, kidney function values, and thyroid hormones also have well-defined reference ranges. Our team explains which values are normal, which need monitoring, and which require immediate intervention. We also provide a printed summary you can share with other family members or future physicians.',
        ],
      },
      {
        heading: 'Corporate Wellness and Group Checkups in Jharsuguda',
        segments: [
          'For businesses and factories in Jharsuguda, group health checkups are a smart investment. Our ',
          { text: 'corporate wellness team', href: '/blog/industrial-health-workers-jharsuguda' },
          ' organises on-site camps and group bookings with discounted rates. Employees who undergo regular screening take fewer sick days, have higher productivity, and report better job satisfaction. A Square Hospital coordinates directly with HR teams to schedule camps, dispatch phlebotomy staff to the workplace when feasible, and provide consolidated health reports for management while preserving individual privacy. From pre-employment fitness to annual executive checkups, our programs are designed to support the industrial backbone of Jharsuguda.',
        ],
      },
      {
        heading: 'Building a Lifelong Health Partnership with Your Doctor',
        segments: [
          'Beyond the immediate results of any single checkup, the most valuable outcome is a long-term partnership with a trusted primary care physician. When the same doctor sees you year after year, they develop an intuitive understanding of your baseline health, family history, lifestyle, and personal values. Small changes that might be missed by a new physician are noticed immediately by someone who knows you well. This continuity of care is associated with better chronic disease management, fewer unnecessary tests, lower healthcare costs, and higher patient satisfaction. At A Square Hospital, we encourage every family in Jharsuguda to designate a primary care physician and schedule at least one comprehensive annual visit. Whether you need a checkup, a sick visit, or simply reassurance, having that ongoing relationship transforms healthcare from a series of transactions into a true partnership that supports your long-term wellbeing.',
        ],
      },
      {
        heading: 'The Role of Technology in Modern Preventive Care',
        segments: [
          'Technology has dramatically improved preventive healthcare delivery. Electronic health records ensure your information is available to every physician you see, reducing duplicated tests and dangerous drug interactions. Patient portals allow you to view results, request refills, and message your care team from home. Wearable devices can track heart rate, sleep, activity, and even detect atrial fibrillation — feeding useful data into your medical record when shared with your physician. Telemedicine consultations provide convenient access for follow-ups and minor concerns. At A Square Hospital, we have invested in modern diagnostic equipment, a robust electronic records system, and a secure patient portal to deliver efficient, connected care. While technology is not a replacement for in-person evaluation when truly needed, it removes friction from routine healthcare and empowers patients to take an active role in managing their own health.',
        ],
      },
      {
        heading: 'Investing in Your Health — A Long-Term Perspective',
        segments: [
          'Few investments yield better returns than investment in your own health. A few hours each year spent on preventive checkups, combined with consistent daily choices about food, activity, sleep, and stress, can add decades to your life and dramatically improve its quality. The cost of preventive care is a fraction of the cost of treating advanced disease. Beyond finances, good health preserves your ability to work, travel, play with grandchildren, pursue hobbies, and enjoy the people you love. At A Square Hospital, Jharsuguda, we view every patient relationship as a long-term partnership. Our goal is not to treat you when you are sick, but to keep you well enough that serious illness never develops. Whether you are 25 or 75, this is the right time to begin — and we are here to walk the journey with you, year after year, toward a healthier, fuller life. The best time to start prioritising your health was twenty years ago. The second best time is today — and we invite you to take that step right now by scheduling your preventive checkup at A Square Hospital.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How often should I get a health checkup in Jharsuguda?',
        a: 'Adults between 18–40 should have an annual checkup. Those above 40 or with chronic conditions should consider one every 6 months.',
      },
      {
        q: 'What is included in a basic health checkup at A Square Hospital Jharsuguda?',
        a: 'It includes CBC, blood sugar, thyroid (TSH), urine routine, blood group, X-ray chest, USG abdomen, and physician consultation — all in our Basic Health Check Package at ₹2,600.',
      },
    ],
  }),

  post({
    slug: 'gynaecologist-jharsuguda-womens-health',
    title: "Women's Health in Jharsuguda — When to See a Gynaecologist",
    metaTitle: "Women's Health & Gynaecologist in Jharsuguda | A Square Hospital",
    metaDescription:
      "Expert advice on women's health in Jharsuguda. Learn about PCOS, irregular periods, fertility & why regular gynaecology check-ups matter. Dr. Babita Ramani, A Square Hospital.",
    date: 'March 22, 2025',
    datePublished: '2025-03-22',
    dateModified: '2026-06-24',
    readTime: '9 min read',
    category: "Women's Health",
    image:
      'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: "Women's health consultation at A Square Hospital Jharsuguda with gynaecologist",
    excerpt:
      "From irregular periods to PCOS and fertility concerns, women's health issues are often ignored until they become serious. Here's what every woman in Jharsuguda should know.",
    authorName: 'Dr. Babita Ramani',
    authorType: 'Person',
    interlinks: [
      'safe-delivery-maternity-care-jharsuguda',
      'nicu-premature-baby-care-jharsuguda',
      'child-health-paediatric-care-jharsuguda',
    ],
    content: [
      {
        segments: [
          "A woman's body goes through constant changes from adolescence to menopause. Hormonal shifts, reproductive health concerns, and lifestyle pressures mean that women are at risk of a wide range of conditions — many of which go unnoticed until they cause significant discomfort or complications. In Jharsuguda, many women delay gynaecology visits due to lack of awareness or hesitation. Dr. Babita Ramani and the team at A Square Hospital are here to change that. As one of the most experienced gynaecologists in the region, Dr. Babita has supported thousands of women through every stage of their reproductive health journey.",
        ],
      },
      {
        heading: 'Common Gynaecological Issues Women in Jharsuguda Face',
        segments: [
          'Polycystic Ovary Syndrome (PCOS) is extremely prevalent and often undiagnosed. Irregular or painful periods, unusual discharge, pelvic pain, and unexplained weight changes are all signs that warrant a gynaecology consultation. Left untreated, conditions like PCOS can lead to fertility challenges, diabetes, and cardiovascular risks. Thyroid disorders, which are common in Odisha, can also masquerade as gynaecological problems and require careful evaluation. Women experiencing any of these symptoms should not delay booking a consultation at our ',
          { text: 'gynaecology department', href: '/specialties' },
          '.',
        ],
      },
      {
        heading: 'Why a Pap Smear is Important',
        segments: [
          'Cervical cancer is one of the most preventable cancers when detected early. A Pap smear test can identify abnormal cells before they become cancerous. The Women\'s Wellness Package at A Square Hospital includes a Pap smear, hormonal profile, FSH, LH, breast screening, and more — all at ₹6,380 (25% off the standard price). We strongly recommend that all sexually active women above the age of 21 get a Pap smear every three years, and those above 30 should combine it with HPV testing for comprehensive cervical cancer screening.',
        ],
      },
      {
        heading: 'Fertility Care and IVF in Jharsuguda',
        segments: [
          'Infertility affects many couples but remains a topic that many find difficult to discuss. Dr. Babita Ramani, an IVF Fellow from KIEL, Germany, brings world-class fertility expertise to Jharsuguda. Whether you are exploring your options or have been trying to conceive for a while, compassionate, evidence-based fertility care is available at A Square Hospital. Couples considering fertility treatment should also understand the importance of preconception health — topics we cover in detail in our ',
          { text: 'maternity care guide', href: '/blog/safe-delivery-maternity-care-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Pregnancy, Motherhood, and Beyond',
        segments: [
          'Once a woman becomes pregnant, her care journey transitions into maternity care. A Square Hospital provides end-to-end maternity support, from the first trimester through delivery and postnatal recovery. Our advanced ',
          { text: 'NICU', href: '/blog/nicu-premature-baby-care-jharsuguda' },
          ' ensures that even in high-risk pregnancies, the newborn receives specialist care. For women who have recently delivered, our ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' continues to support the family through infancy, vaccinations, and early childhood.',
        ],
      },
      {
        heading: 'Menopause and Mid-Life Health',
        segments: [
          'Women in their 40s and 50s face a unique set of health challenges related to perimenopause and menopause. Hot flashes, mood changes, bone density loss, and increased cardiovascular risk are all common. Gynaecological checkups during this phase are essential for managing symptoms, screening for osteoporosis, and addressing sexual health concerns that are often left unspoken. Our team provides confidential, judgement-free support for women at every life stage.',
        ],
      },
      {
        heading: 'Book a Women\'s Health Consultation',
        segments: [
          "Don't wait for symptoms to become severe. Annual preventive screening is the most powerful tool a woman has to protect her long-term health. Call +91 9827973991 or ",
          { text: 'visit A Square Hospital, Jharsuguda today', href: '/contact' },
          '. Our team is ready to support you with personalised, compassionate care at every stage of life.',
        ],
      },
      {
        heading: 'Adolescent Gynaecology — Starting the Conversation Early',
        segments: [
          'Gynaecological health begins long before pregnancy. Adolescent girls between 10 and 19 years often experience concerns related to puberty, menstrual irregularities, acne, mood changes, and body image. A confidential, non-judgmental consultation with a gynaecologist can address these issues and provide reassurance. In Jharsuguda, many families hesitate to bring young women for gynaecology visits due to cultural sensitivities, but early education and preventive counselling can prevent years of silent suffering. Dr. Babita Ramani and her team create a safe, respectful environment for adolescent patients and their parents, addressing everything from period pain to PCOS to HPV vaccination — a critical preventive measure that is most effective when administered during adolescence.',
        ],
      },
      {
        heading: 'Cancer Screening for Women — What You Need to Know',
        segments: [
          'Women face unique cancer risks that require dedicated screening. Breast cancer is the most common cancer in Indian women, and clinical breast examination along with mammography (recommended annually after age 40) dramatically improves early detection. Cervical cancer, caused primarily by HPV, can be screened through Pap smears and HPV co-testing, and largely prevented through HPV vaccination ideally administered before sexual debut. Ovarian cancer and endometrial cancer are less common but more dangerous, and any unusual pelvic symptoms warrant prompt evaluation. Our Women\'s Wellness Package includes breast examination, Pap smear, and ultrasound as appropriate for age and risk. The ',
          { text: 'preventive health checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' guide explains how cancer screening fits into broader annual care.',
        ],
      },
      {
        heading: 'Mental Health and Hormonal Balance',
        segments: [
          'Women experience hormonal fluctuations throughout life that can significantly impact mental wellbeing. Premenstrual dysphoric disorder, postpartum depression, perimenopausal anxiety, and menopausal depression are all real and treatable conditions. Unfortunately, in many Indian families and communities, mental health concerns in women are dismissed as moodiness, weakness, or exaggeration. At A Square Hospital, we take women\'s mental health seriously and provide confidential counselling, hormonal evaluation, and referral to mental health specialists when needed. Thyroid disorders — extremely common in Odisha — frequently present with depression, anxiety, fatigue, and weight changes, and are easily missed without proper blood testing. Treating the underlying hormonal imbalance often resolves the mental health symptoms completely.',
        ],
      },
      {
        heading: 'Sexual and Reproductive Health — Open, Honest, and Confidential',
        segments: [
          'Sexual health is an essential part of overall wellbeing, yet it remains one of the most under-discussed topics in Indian healthcare. Women have legitimate concerns about contraception, sexually transmitted infections, painful intercourse, low libido, and questions about sexual orientation or identity. Dr. Babita Ramani provides confidential, evidence-based counselling in a private setting where women can speak openly without judgement. We offer a full range of contraceptive options including pills, IUCDs, injections, and barrier methods, along with guidance on emergency contraception. STI screening is recommended for sexually active women, particularly those with new or multiple partners, and our laboratory provides confidential testing for HIV, hepatitis B, syphilis, chlamydia, and gonorrhoea.',
        ],
      },
      {
        heading: 'When Menstrual Changes Signal Something Serious',
        segments: [
          'Menstrual cycles vary widely between individuals, but certain changes warrant medical evaluation. Absent periods (amenorrhea) in a previously regular woman may indicate pregnancy, hormonal imbalance, excessive exercise, eating disorders, or polycystic ovary syndrome. Extremely heavy bleeding (menorrhagia) can cause anaemia and may signal fibroids, polyps, hormonal disorders, or rarely, cancer. Bleeding between periods, after intercourse, or after menopause always requires prompt investigation. Severe pain that interferes with daily life may indicate endometriosis or adenomyosis, both of which respond to medical and surgical treatment. Our gynaecologists provide thorough evaluation of menstrual concerns including hormonal testing, pelvic ultrasound, and minimally invasive diagnostic procedures when indicated. Early evaluation leads to better outcomes and often simpler treatment.',
        ],
      },
      {
        heading: 'Building Health Habits Across the Female Lifespan',
        segments: [
          'Health is not built in a single checkup — it accumulates across decades through daily choices. In the teenage years, focus on nutrition, regular physical activity, HPV vaccination, and menstrual health education builds a strong foundation. In the twenties and thirties, preconception care, fertility awareness, regular gynaecological screening, and STI prevention are priorities. The forties bring perimenopause, the importance of bone density, breast screening, and cardiovascular risk reduction. The fifties and beyond require cancer screening continuation, osteoporosis management, mental wellness, and maintaining social connections. At A Square Hospital, our ',
          { text: 'preventive checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' programs adapt to each life stage. Dr. Babita Ramani and her team are honoured to walk alongside Jharsuguda women through every chapter of their health journey.',
        ],
      },
      {
        heading: 'A Safe Space for Women\'s Health Conversations',
        segments: [
          'Many women in Jharsuguda and across India delay seeking gynaecological care due to embarrassment, fear of judgement, or simply not knowing that effective treatments exist. At A Square Hospital, we work actively to remove these barriers. Our female staff nurses ensure privacy during examinations, our consultation rooms are designed for confidentiality, and our physicians explain every step of examination and treatment in advance so patients feel in control. We treat every concern with the seriousness it deserves — whether it is a routine question or a complex condition. Women who have postponed care for years often tell us they wish they had come sooner, because treatment was simpler than they feared. If you have been putting off a gynaecology visit, please consider this your invitation. You deserve care that respects you, and we are honoured to provide it. From your first period to your last, from contraception to conception, from wellness to crisis — Dr. Babita Ramani and the women\'s health team at A Square Hospital are here, ready to walk with you through every chapter of your health journey with compassion, expertise, and absolute confidentiality. We see our role not just as treating disease, but as your lifelong partner in health — answering questions big and small, providing reassurance when worry arises, and celebrating every stage of womanhood alongside you. Whether you walk into our Jharsuguda clinic for a routine checkup, a fertility consultation, or a complex gynaecological concern, you will find the same standard of care: warm, evidence-based, and centred entirely on you and your unique needs.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who is the best gynaecologist in Jharsuguda?',
        a: 'Dr. Babita Ramani at A Square Hospital, Jharsuguda is a highly experienced Obstetrician & Gynaecologist with an MD in O&G, FICOG, and an IVF Fellowship from KIEL, Germany with 15+ years of experience.',
      },
      {
        q: 'Does A Square Hospital Jharsuguda offer fertility and IVF treatment?',
        a: 'Yes. Dr. Babita Ramani provides expert fertility consultations and IVF guidance at A Square Hospital, Jharsuguda.',
      },
    ],
  }),

  post({
    slug: 'safe-delivery-maternity-care-jharsuguda',
    title: 'Safe Delivery & Maternity Care in Jharsuguda — What to Expect at A Square Hospital',
    metaTitle: 'Best Maternity Hospital in Jharsuguda | Safe Delivery — A Square Hospital',
    metaDescription:
      'Planning your delivery in Jharsuguda? A Square Hospital offers safe normal delivery, C-section, painless delivery & high-risk pregnancy care. Expert OB-GYN team. Call +91 9827973991.',
    date: 'April 5, 2025',
    datePublished: '2025-04-05',
    dateModified: '2026-06-24',
    readTime: '9 min read',
    category: 'Maternity',
    image:
      'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Safe maternity care and delivery at A Square Hospital Jharsuguda',
    excerpt:
      'A safe pregnancy begins with the right hospital. Learn how A Square Hospital, Jharsuguda supports every mother through her journey from the first trimester to delivery and beyond.',
    authorName: 'A Square Hospital Jharsuguda',
    authorType: 'Organization',
    interlinks: [
      'gynaecologist-jharsuguda-womens-health',
      'nicu-premature-baby-care-jharsuguda',
      'child-health-paediatric-care-jharsuguda',
    ],
    content: [
      {
        segments: [
          'Choosing the right hospital for your delivery is one of the most important decisions an expectant mother makes. At A Square Hospital in Jharsuguda, we provide a complete, supportive maternity care environment where every mother receives personalized attention, expert obstetric care, and emotional support throughout her pregnancy journey. Our maternity wing is designed to be calm, private, and family-friendly, allowing mothers to focus on the joy of welcoming their baby.',
        ],
      },
      {
        heading: 'Antenatal Care — Starting Right',
        segments: [
          'Good maternity care begins early. Our antenatal check-ups monitor the health of both mother and baby throughout pregnancy. The Maternity Care Package (Antenatal Basic) at ₹1,935 includes gynaecology consultation, CBC & ESR, blood group & Rh typing, blood sugar, HIV, HBsAg, VDRL, urine routine, and USG Obstetric — everything needed to start pregnancy safely. Expectant mothers are encouraged to ',
          { text: 'consult our gynaecologist', href: '/blog/gynaecologist-jharsuguda-womens-health' },
          ' as soon as pregnancy is confirmed so that the entire journey can be carefully planned and monitored.',
        ],
      },
      {
        heading: 'Normal Delivery & Painless Delivery Options',
        segments: [
          'We offer both normal vaginal delivery and painless (epidural) delivery options in our modern, fully equipped labour room. Our experienced obstetricians and skilled nursing team ensure that every delivery is as safe and comfortable as possible for both mother and child. Painless delivery is increasingly popular among first-time mothers in Jharsuguda and can significantly reduce labour-related stress and exhaustion. Our anaesthesiology team is on standby around the clock to support epidurals whenever clinically appropriate.',
        ],
      },
      {
        heading: 'High-Risk Pregnancy Management',
        segments: [
          'Conditions like gestational diabetes, hypertension in pregnancy, multiple pregnancies, and previous complicated deliveries require specialist attention. Dr. Babita Ramani and our team are experienced in managing high-risk pregnancies with clinical precision and continuous monitoring. We coordinate with endocrinology, cardiology, and neonatal teams as needed, so that any complication is addressed immediately. For mothers with previously identified risk factors, we recommend early booking and a personalized birth plan.',
        ],
      },
      {
        heading: 'C-Section and Surgical Expertise',
        segments: [
          'When a Caesarean section is medically indicated, our surgical team performs the procedure in a state-of-the-art operation theatre with full neonatal support on standby. Our C-section protocols follow national and international best practices, with emphasis on maternal comfort, minimal blood loss, and rapid recovery. Post-operative care includes dedicated nursing support, lactation guidance, and physiotherapy as needed. We also support vaginal birth after Caesarean (VBAC) for eligible mothers who wish to attempt a natural delivery in a subsequent pregnancy.',
        ],
      },
      {
        heading: 'NICU Support for Newborns',
        segments: [
          'Our advanced NICU at A Square Hospital ensures that premature or critically ill newborns receive the specialized care they need. Parents can be confident that their baby is in safe, experienced hands from the very first moment of life. To learn more about the conditions we manage and the team that handles them, read our detailed ',
          { text: 'NICU care guide', href: '/blog/nicu-premature-baby-care-jharsuguda' },
          '. After discharge, our ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' continues to support the family with vaccinations, growth monitoring, and nutrition counselling.',
        ],
      },
      {
        heading: 'Postnatal Care and Lactation Support',
        segments: [
          'The first six weeks after delivery are critical for both mother and baby. Our postnatal program includes regular check-ups, lactation counselling, mental health screening for postpartum depression, and guidance on newborn care. Mothers are encouraged to reach out to our team any time during this period — our nursing staff is available by phone for lactation queries, feeding challenges, and emotional support. We believe that a well-supported mother raises a healthy, happy baby, and our care continues long after discharge.',
        ],
      },
      {
        heading: 'Choosing Your Birth Plan',
        segments: [
          'A birth plan is a written document that outlines your preferences for labour, delivery, and immediate postpartum care. While birth is inherently unpredictable and clinical decisions must take priority, having a plan helps your care team understand your wishes for pain management, birth positions, support persons present, cord cutting, skin-to-skin contact, breastfeeding initiation, and newborn procedures. We encourage expectant mothers in Jharsuguda to discuss their birth plan with our obstetricians during the third trimester. Common preferences include dim lighting, music, freedom to move around during labour, delayed cord clamping, and immediate breastfeeding. Whatever your choices, our team is committed to honouring them whenever it is safe to do so.',
        ],
      },
      {
        heading: 'Pregnancy Nutrition — Eating for Two the Right Way',
        segments: [
          'Pregnancy nutrition is about quality, not quantity. During the second and third trimesters, calorie needs increase by about 350–500 calories per day — far less than the "eating for two" myth suggests. Focus on iron-rich foods (lean meats, lentils, dark leafy greens) to prevent anaemia, calcium-rich foods (dairy, sesame, ragi) for fetal bone development, folate-rich foods (beans, citrus, leafy greens) to prevent neural tube defects, and protein (eggs, pulses, dairy, lean meat) for placental and fetal growth. Avoid raw or undercooked meat, unpasteurized dairy, high-mercury fish, excessive caffeine, and alcohol entirely. Iron and folic acid supplementation is recommended from preconception through at least the first trimester, and our ',
          { text: 'antenatal packages', href: '/health-packages' },
          ' include all required micronutrient testing.',
        ],
      },
      {
        heading: 'Exercise and Activity During Pregnancy',
        segments: [
          'Unless medically contraindicated, regular physical activity during pregnancy is safe and beneficial. Moderate exercise such as walking, swimming, prenatal yoga, and stationary cycling helps control weight gain, reduces back pain, improves sleep, decreases gestational diabetes risk, and may even shorten labour duration. Aim for at least 150 minutes of moderate-intensity activity per week, spread across most days. Avoid contact sports, activities with fall risk, and supine exercise after the first trimester. Our obstetricians provide personalised exercise guidance based on your fitness level and pregnancy progression, and we strongly encourage women in Jharsuguda to stay active throughout pregnancy for the benefit of both mother and baby.',
        ],
      },
      {
        heading: 'When to Call Your Doctor Immediately',
        segments: [
          'Certain symptoms during pregnancy require urgent medical attention. Contact us immediately if you experience vaginal bleeding, severe abdominal pain, sudden severe swelling of face or hands, persistent severe headache, visual disturbances, high fever, reduced foetal movement after 28 weeks, leaking of clear fluid before 37 weeks (suggesting preterm labour), or regular painful contractions before 37 weeks. After 37 weeks, regular contractions every five minutes for an hour, rupture of membranes, or heavy bleeding all warrant immediate hospital visit. Our maternity unit is staffed 24/7 — do not hesitate to call +91 9827973991 at any time, day or night, with any concern.',
        ],
      },
      {
        heading: 'Common Pregnancy Discomforts and How to Manage Them',
        segments: [
          'Pregnancy brings a host of physical changes that can be uncomfortable but are usually manageable with simple measures. Morning sickness in the first trimester responds to small frequent meals, ginger, vitamin B6, and acupressure wristbands. Heartburn in later pregnancy improves with smaller meals, avoiding spicy or fatty foods, sleeping propped up, and antacids approved by your doctor. Back pain benefits from proper posture, supportive footwear, pregnancy pillows, and gentle stretching. Swollen ankles and feet are managed by elevating legs, avoiding prolonged standing, and staying hydrated. Constipation responds to high-fibre foods, plenty of fluids, and gentle exercise. Hemorrhoids can be soothed with sitz baths and topical treatments. While these discomforts are usually benign, our obstetric team is always available to discuss any concern — there is no such thing as a silly question during pregnancy.',
        ],
      },
      {
        heading: 'Preparing Your Home and Family for the New Baby',
        segments: [
          'The third trimester is the ideal time to prepare practically for the new arrival. Set up the nursery with a safe sleep space — a firm, flat crib with a fitted sheet and no loose blankets, pillows, or bumpers. Stock up on newborn essentials including diapers, wipes, gentle clothing, swaddles, and a baby thermometer. Install a rear-facing infant car seat and have it inspected by a certified technician. Identify a paediatrician for your baby before birth — our ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' welcomes prenatal meet-and-greet visits. Prepare siblings with age-appropriate books and conversations about the new baby. Line up help for the first few weeks postpartum — family, friends, or paid support can make an enormous difference. Freeze meals, set up online grocery delivery, and identify resources for postpartum mental health support. Thoughtful preparation reduces stress and allows new parents to focus on bonding with their baby.',
        ],
      },
      {
        heading: 'The Golden Hour — Bonding With Your Newborn',
        segments: [
          'The first hour after birth — often called the golden hour — is precious for both mother and baby. Skin-to-skin contact during this time helps regulate the baby\'s temperature, breathing, and heart rate, while also promoting successful breastfeeding initiation. Delayed cord clamping (waiting 1–3 minutes before cutting) increases the baby\'s iron stores and reduces anaemia risk. Immediate breastfeeding within the first hour takes advantage of the baby\'s natural alert state and instinct to crawl to the breast. Our maternity team facilitates these evidence-based practices whenever the delivery is uncomplicated, ensuring that the first moments of your baby\'s life are calm, connected, and supported. We encourage partners to be present, take photographs, and participate in this profound experience alongside the mother. The memories you create in these first hours last a lifetime, and our team is honoured to safeguard them for Jharsuguda families every day. Our maternity nurses are specially trained in lactation support and will be at your side in those early hours — helping you find comfortable feeding positions, troubleshooting latch issues, and reassuring you through every step of newborn care. We also offer round-the-clock postpartum support, lactation consultations after discharge, and a dedicated helpline for new parents to call whenever concerns arise at home. Our commitment to your family does not end at hospital discharge — it simply transitions to a new phase of continued care.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Which is the best maternity hospital in Jharsuguda?',
        a: 'A Square Hospital, Jharsuguda is a trusted maternity hospital offering safe normal delivery, painless delivery, C-section, high-risk pregnancy care, and NICU support under Dr. Babita Ramani.',
      },
      {
        q: 'What does the Maternity Care Package at A Square Hospital include?',
        a: 'The Antenatal Basic Maternity Package costs ₹1,935 and includes gynaecology consultation, blood tests, ultrasound, and essential screening for mother and baby.',
      },
    ],
  }),

  post({
    slug: 'heart-disease-prevention-jharsuguda',
    title: 'Heart Disease Prevention — 7 Warning Signs You Should Never Ignore in Jharsuguda',
    metaTitle: 'Heart Disease Prevention & Cardiac Care in Jharsuguda | A Square Hospital',
    metaDescription:
      'Learn the 7 warning signs of heart disease and how to prevent cardiac emergencies. Heart Check Package available at A Square Hospital Jharsuguda — ₹2,400.',
    date: 'April 18, 2025',
    datePublished: '2025-04-18',
    dateModified: '2026-06-24',
    readTime: '8 min read',
    category: 'Cardiac Health',
    image:
      'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Cardiac health screening and ECG at A Square Hospital Jharsuguda',
    excerpt:
      'Heart disease is the leading cause of sudden emergencies. Know the warning signs, risk factors, and how preventive cardiac screening at A Square Hospital Jharsuguda can protect your life.',
    authorName: 'A Square Hospital Jharsuguda',
    authorType: 'Organization',
    interlinks: [
      'importance-of-regular-health-checkups-jharsuguda',
      'diabetes-management-jharsuguda',
      'industrial-health-workers-jharsuguda',
    ],
    content: [
      {
        segments: [
          'Heart disease does not always announce itself with dramatic symptoms. In many cases, people feel completely normal until a sudden heart attack or stroke occurs. This is why preventive cardiac screening is so important — especially for people in Jharsuguda who lead demanding industrial or corporate lives that create significant physiological stress. A simple annual heart checkup can reveal silent blockages, arrhythmias, and valve issues that would otherwise go undetected for years.',
        ],
      },
      {
        heading: '7 Warning Signs You Should Never Ignore',
        segments: [
          '1. Chest pain or tightness — even mild, recurring episodes. 2. Shortness of breath during normal activities. 3. Palpitations or irregular heartbeat. 4. Persistent fatigue and weakness with no obvious cause. 5. Swelling in the feet, ankles, or legs. 6. Dizziness, lightheadedness, or fainting. 7. Pain radiating to the jaw, shoulder, or arm. If you or a family member experiences any of these, seek immediate medical attention. Even mild symptoms that come and go deserve a proper cardiac evaluation.',
        ],
      },
      {
        heading: 'Risk Factors Specific to Jharsuguda Residents',
        segments: [
          'Industrial workers in Jharsuguda are exposed to stress, physical strain, irregular shift work, and sometimes occupational hazards that increase cardiovascular risk. Combined with unhealthy diets, sedentary lifestyles, and untreated diabetes or hypertension, the risk of heart disease rises significantly. Workers in power plants, aluminium smelters, and mining operations often have shift patterns that disrupt sleep, elevate cortisol, and accelerate plaque formation in arteries. A dedicated ',
          { text: 'occupational health program', href: '/blog/industrial-health-workers-jharsuguda' },
          ' can help identify at-risk workers before a cardiac event occurs.',
        ],
      },
      {
        heading: 'What the Heart Check Package at A Square Hospital Includes',
        segments: [
          'Our Heart Check Package at ₹2,400 covers physician consultation, lipid profile, blood sugar, ECG, chest X-ray, and 2D Echo — providing a comprehensive picture of your cardiac health. This is strongly recommended annually for anyone above 35, or more frequently for those with high blood pressure, diabetes, or a family history of heart disease. For a broader health overview, our ',
          { text: 'complete health checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' includes additional tests for kidney, liver, and thyroid function. Diabetics should also book our dedicated ',
          { text: 'Diabetic Care Package', href: '/blog/diabetes-management-jharsuguda' },
          ' which evaluates cardiac risk in the context of blood sugar control.',
        ],
      },
      {
        heading: 'Lifestyle Changes That Protect Your Heart',
        segments: [
          'Beyond screening, lifestyle modification is the most powerful tool for preventing heart disease. We recommend at least 30 minutes of moderate exercise daily, a diet rich in vegetables, fruits, and whole grains with limited saturated fat, smoking cessation, moderation of alcohol, and stress management through yoga or mindfulness. For patients with high cholesterol or family history, our physicians may also recommend statin therapy in addition to lifestyle changes. Small consistent changes — even a 10% reduction in body weight — can dramatically lower cardiac risk.',
        ],
      },
      {
        heading: 'Act Before It Is Too Late',
        segments: [
          'A simple heart check today can prevent a serious cardiac emergency tomorrow. Book your Heart Check Package at A Square Hospital, Jharsuguda by calling +91 9827973991. Our cardiology team is committed to keeping the hearts of Jharsuguda healthy, one patient at a time.',
        ],
      },
      {
        heading: 'Understanding Cholesterol — Good, Bad, and Triglycerides',
        segments: [
          'Cholesterol is often misunderstood. LDL (low-density lipoprotein) is the "bad" cholesterol that deposits in artery walls, while HDL (high-density lipoprotein) is the "good" cholesterol that helps remove LDL from circulation. Triglycerides are a type of blood fat that, when elevated, significantly increase cardiac risk. Optimal targets for most adults are total cholesterol below 200 mg/dL, LDL below 100 mg/dL (or below 70 in high-risk patients), HDL above 40 mg/dL in men and 50 mg/dL in women, and triglycerides below 150 mg/dL. Our lipid profile testing provides a complete breakdown, and our cardiologists create personalised plans to address any abnormal values through diet, exercise, and medication when necessary.',
        ],
      },
      {
        heading: 'High Blood Pressure — The Silent Killer',
        segments: [
          'Hypertension affects nearly one in three adults in urban India and is one of the leading causes of heart attack, stroke, and kidney failure. The danger is that high blood pressure often has no symptoms — many people in Jharsuguda live with undiagnosed hypertension for years before a major event occurs. We recommend that all adults above 30 get their blood pressure checked at least every six months, and more frequently if readings are elevated. Home monitoring is also encouraged — a simple digital BP machine used correctly can provide valuable data for your physician. Target BP for most adults is below 130/80 mmHg; for diabetic or kidney patients the target is even lower. Lifestyle changes including reduced salt intake, regular exercise, weight management, and limiting alcohol can dramatically lower BP, with medications added when needed.',
        ],
      },
      {
        heading: 'Women and Heart Disease — An Overlooked Risk',
        segments: [
          'Many people mistakenly believe heart disease is a male problem, but it is the leading cause of death in women globally. Women often experience different symptoms during a heart attack than men — nausea, jaw pain, upper back pain, shortness of breath, and extreme fatigue rather than the classic crushing chest pain. This atypical presentation leads to delayed diagnosis and worse outcomes. Women-specific risk factors include PCOS, early menopause, pregnancy complications like preeclampsia and gestational diabetes, and certain contraceptive formulations in smokers. Our ',
          { text: 'women\'s wellness program', href: '/blog/gynaecologist-jharsuguda-womens-health' },
          ' and ',
          { text: 'preventive checkups', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' include cardiac risk assessment for women at every life stage.',
        ],
      },
      {
        heading: 'Emergency Response — What to Do in a Cardiac Event',
        segments: [
          'Every minute counts during a heart attack. If you or someone near you experiences chest pain, sudden shortness of breath, fainting, or severe unexplained upper body discomfort, call our emergency line at +91 9827973991 immediately or visit A Square Hospital, Jharsuguda without delay. Chewing an aspirin (300 mg) at the onset of symptoms can help thin the blood and limit damage, but should never delay transport to a hospital. Our emergency team is trained in advanced cardiac life support and the cath lab is on standby for primary angioplasty when needed. Do not attempt to drive yourself to the hospital during a suspected heart attack — call for help. Bystander CPR, while less common in India, can double survival rates and we offer free community CPR training in Jharsuguda.',
        ],
      },
      {
        heading: 'Stroke Prevention and Recognition',
        segments: [
          'Stroke shares many risk factors with heart disease and is equally preventable. High blood pressure, atrial fibrillation, diabetes, high cholesterol, smoking, and sedentary lifestyle all increase stroke risk. The FAST acronym is a useful tool for recognising stroke symptoms: Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services. Other warning signs include sudden severe headache, confusion, vision changes, dizziness, and loss of balance. Like heart attacks, strokes are time-critical — clot-dissolving treatment is most effective within 4.5 hours of symptom onset. Our cardiac and emergency teams are trained to recognise stroke symptoms rapidly and initiate appropriate imaging and treatment. Patients with atrial fibrillation benefit from anticoagulation to prevent stroke-causing clots, and our ',
          { text: 'heart check program', href: '/blog/heart-disease-prevention-jharsuguda' },
          ' includes ECG screening to detect this condition.',
        ],
      },
      {
        heading: 'The Truth About Dietary Fats and Your Heart',
        segments: [
          'Dietary fat has been wrongly demonised for decades. The real story is more nuanced — the type of fat matters more than the total amount. Saturated fats (in red meat, butter, ghee, coconut oil) and trans fats (in many packaged snacks and fried foods) raise LDL cholesterol and increase heart disease risk. Monounsaturated fats (in olive oil, avocados, nuts) and omega-3 polyunsaturated fats (in fatty fish, flaxseeds, walnuts) are protective. Recent research has also highlighted the dangers of highly processed vegetable oils rich in omega-6. For Jharsuguda residents accustomed to traditional cooking, sensible modifications include using cold-pressed oils in moderation, incorporating fish twice a week, limiting fried snacks, and choosing whole-food sources of fat over packaged alternatives. Combined with plenty of vegetables, fruits, whole grains, and legumes, this approach supports heart health without sacrificing cultural food traditions.',
        ],
      },
      {
        heading: 'Exercise — The Most Powerful Cardiac Medicine',
        segments: [
          'Few interventions in medicine are as effective as regular exercise for preventing and managing heart disease. Just 150 minutes of moderate activity per week (such as brisk walking, cycling, or swimming) reduces cardiovascular mortality by 30–40% — comparable to or better than many medications. Exercise strengthens the heart muscle, improves circulation, lowers blood pressure, raises HDL cholesterol, reduces inflammation, helps maintain healthy weight, and improves mental health. For Jharsuguda residents, accessible options include morning and evening walks in the cooler parts of the day, yoga, traditional dance forms, and group fitness classes. Start slowly if you have been sedentary — even 10-minute walks add up. Patients with known heart conditions should consult their physician before starting vigorous exercise, and our ',
          { text: 'heart check program', href: '/blog/heart-disease-prevention-jharsuguda' },
          ' provides safe exercise prescription based on individual fitness levels. Combine regular movement with healthy nutrition, stress management, adequate sleep, and avoiding tobacco to maximise the protective benefits for your heart. Small consistent choices, repeated over months and years, add up to extraordinary protection against cardiovascular disease. For Jharsuguda residents, the goal is to weave these protective habits into daily life — climbing stairs, walking to nearby shops, playing with children, and choosing home-cooked meals over fried snacks. The most sustainable exercise routine is the one you actually enjoy and can maintain. Whether you prefer morning walks in the park, evening yoga, weekend cricket, or dancing to music at home, every minute of movement counts toward a stronger, healthier heart.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is 2D Echo available at A Square Hospital Jharsuguda?',
        a: 'Yes, 2D Echocardiography is available as part of our Heart Check Package at A Square Hospital Jharsuguda.',
      },
      {
        q: 'How much does a heart checkup cost in Jharsuguda?',
        a: 'Our Heart Check Package is available at ₹2,400 (25% discount from the standard price of ₹3,200) at A Square Hospital, Jharsuguda.',
      },
    ],
  }),

  post({
    slug: 'diabetes-management-jharsuguda',
    title: 'Managing Diabetes in Jharsuguda — A Practical Guide from A Square Hospital',
    metaTitle: 'Diabetes Care & Management in Jharsuguda | A Square Hospital — Expert Physicians',
    metaDescription:
      'Practical guide to diabetes management in Jharsuguda. HbA1c testing, diet tips, kidney protection & Diabetic Care Package at ₹2,290. A Square Hospital, Jharsuguda.',
    date: 'May 2, 2025',
    datePublished: '2025-05-02',
    dateModified: '2026-06-24',
    readTime: '9 min read',
    category: 'Chronic Care',
    image:
      'https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Diabetes care and blood sugar monitoring at A Square Hospital Jharsuguda',
    excerpt:
      'Diabetes is a silent epidemic affecting millions across India. Without regular monitoring, it can damage the heart, kidneys, nerves, and eyes. Here is how to stay in control.',
    authorName: 'A Square Hospital Jharsuguda',
    authorType: 'Organization',
    interlinks: [
      'heart-disease-prevention-jharsuguda',
      'senior-citizen-health-care-jharsuguda',
      'importance-of-regular-health-checkups-jharsuguda',
    ],
    content: [
      {
        segments: [
          'Diabetes affects an estimated 77 million people in India — and a significant proportion remain undiagnosed. In Jharsuguda, the combination of high-calorie diets, sedentary industrial jobs, and genetic predisposition makes the population particularly vulnerable to type 2 diabetes and its complications. The good news is that with proper monitoring, lifestyle changes, and timely medical care, diabetes can be managed effectively and complications can be delayed or prevented entirely.',
        ],
      },
      {
        heading: 'Why HbA1c Testing Matters',
        segments: [
          'A single blood sugar reading only tells you your level at one point in time. HbA1c, on the other hand, reflects your average blood sugar over the past 2–3 months, giving a much more accurate picture of diabetes control. Our Diabetic Care Package at ₹2,290 includes HbA1c, fasting & post-prandial blood sugar, lipid profile, kidney function test (KFT), urine microalbumin, and ECG. We recommend HbA1c testing every 3–6 months for known diabetics, and at least once a year for high-risk individuals as part of a broader ',
          { text: 'annual health checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Protecting Your Kidneys and Heart',
        segments: [
          'The most common and dangerous complications of poorly controlled diabetes are kidney disease (diabetic nephropathy) and heart disease. Urine microalbumin testing detects early kidney damage before it progresses to kidney failure. Regular lipid profile and ECG monitoring help identify cardiac risk early, enabling timely intervention. To learn more about cardiac risk in diabetic patients, read our detailed ',
          { text: 'heart disease prevention guide', href: '/blog/heart-disease-prevention-jharsuguda' },
          '. For seniors above 50, the combination of diabetes and aging dramatically increases both cardiac and renal risk — which is why our ',
          { text: 'Senior Citizen Health Package', href: '/blog/senior-citizen-health-care-jharsuguda' },
          ' includes comprehensive diabetes and kidney evaluation alongside cardiac screening.',
        ],
      },
      {
        heading: 'Diet and Lifestyle Tips for Diabetics in Jharsuguda',
        segments: [
          'Reduce refined carbohydrates, sugar-sweetened beverages, and white rice. Include more vegetables, pulses, and whole grains. Even a 30-minute daily walk significantly improves insulin sensitivity. Stress management and adequate sleep also play a critical role in blood sugar control. Local Jharsuguda dietary habits — including rice-heavy meals and sweet tea multiple times a day — can be modified with simple swaps like brown rice, millets (ragi, jowar), and unsweetened beverages. We recommend that diabetic patients consult our in-house dietitians for personalized meal planning that respects cultural preferences while controlling sugar intake.',
        ],
      },
      {
        heading: 'Medication, Monitoring, and Technology',
        segments: [
          'Modern diabetes management goes far beyond daily pills. Our physicians prescribe the latest medications including SGLT2 inhibitors and GLP-1 agonists that protect the heart and kidneys in addition to lowering blood sugar. For patients on insulin, we teach proper injection technique, rotation sites, and storage. Continuous glucose monitoring (CGM) devices are also available for patients who need minute-by-minute insight into their blood sugar patterns. We work closely with each patient to find a treatment plan that fits their lifestyle and budget.',
        ],
      },
      {
        heading: 'Diabetes and Pregnancy — Gestational Diabetes',
        segments: [
          'Gestational diabetes is a specific form of diabetes that develops during pregnancy and requires careful management to protect both mother and baby. Pregnant women with gestational diabetes are at higher risk of pre-term delivery, large birth weight babies, and subsequent type 2 diabetes. Our team coordinates with our gynaecology and maternity departments to ensure tight sugar control throughout pregnancy. Women who have had gestational diabetes should be screened for type 2 diabetes every 1–3 years for life.',
        ],
      },
      {
        heading: 'How Often Should Diabetics Get Tested?',
        segments: [
          'Known diabetics should get their Diabetic Care Package every 3–6 months. High-risk individuals — those with family history, obesity, or PCOS — should be screened annually. A Square Hospital, Jharsuguda offers this package at ₹2,290 with 25% savings. Combine it with our annual full body checkup for the most complete health picture. To book your package, call +91 9827973991 or visit the hospital directly.',
        ],
      },
      {
        heading: 'Type 1 vs Type 2 Diabetes — Different Diseases, Different Care',
        segments: [
          'While type 2 diabetes dominates public health discussions, type 1 diabetes is an autoimmune condition that usually presents in childhood or adolescence and requires lifelong insulin therapy. Type 1 diabetics need careful insulin dose adjustment based on carbohydrate intake, physical activity, and stress, and they rely on multiple daily injections or insulin pumps. Type 2 diabetes, more common in adults, may be managed initially with lifestyle changes and oral medications, progressing to insulin as the disease advances. Both types benefit from consistent monitoring, dietary discipline, and regular follow-up with a diabetologist. Our team at A Square Hospital is experienced in managing both conditions across all age groups, with paediatric patients supported by our ',
          { text: 'paediatric endocrinology service', href: '/blog/child-health-paediatric-care-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Diabetic Foot Care — Preventing Amputation',
        segments: [
          'Diabetic foot complications are among the most feared consequences of uncontrolled diabetes. Nerve damage (neuropathy) reduces sensation, so small cuts or pressure sores go unnoticed. Poor circulation delays healing, and high blood sugar feeds bacterial growth. Together these factors can lead to infections that progress to gangrene and amputation. Prevention is straightforward and dramatically effective: inspect feet daily for cuts, blisters, or redness; wash and dry feet thoroughly (especially between toes); wear well-fitted, closed shoes; never walk barefoot, even indoors; trim nails carefully straight across; and have a healthcare professional examine your feet at every checkup. Our Diabetic Care Package includes foot examination and education, and any concerning lesion warrants immediate consultation.',
        ],
      },
      {
        heading: 'Diabetes and Mental Health — The Hidden Burden',
        segments: [
          'Living with diabetes is psychologically demanding. The constant need to monitor blood sugar, plan meals, take medications, and fear complications leads to diabetes distress, anxiety, and depression in up to 40% of patients. Many people feel guilty about their condition, frustrated by fluctuations in blood sugar, and overwhelmed by the long-term outlook. These feelings are completely normal and treatable. Our team screens for mental health concerns during every diabetic consultation and provides counselling, peer support referrals, and medication when appropriate. Family support is equally important — when loved ones understand diabetes management, they become allies rather than sources of additional stress. Patients who address their mental health alongside physical health consistently achieve better blood sugar control.',
        ],
      },
      {
        heading: 'Reversing Pre-Diabetes — A Critical Window',
        segments: [
          'Pre-diabetes is a wake-up call, not a life sentence. With deliberate lifestyle change, studies show that more than half of pre-diabetic individuals can return to normal blood sugar and prevent type 2 diabetes entirely. The keys are weight loss of just 5–7% of body weight, 150 minutes of moderate weekly exercise, and dietary changes emphasising whole grains, lean protein, vegetables, and limited refined carbohydrates. Our physicians create personalised pre-diabetes reversal programs that include structured nutrition planning, supervised exercise recommendations, and regular monitoring. For Jharsuguda residents with pre-diabetes or family history, this is the most important health intervention available — far easier than managing diabetes after it develops. Pair pre-diabetes care with our ',
          { text: 'annual checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' for the best long-term outcome.',
        ],
      },
      {
        heading: 'Diabetic Eye Disease — Protecting Your Vision',
        segments: [
          'Diabetic retinopathy is the leading cause of preventable blindness in working-age adults. Chronically high blood sugar damages the small blood vessels in the retina, leading to leakage, swelling, and abnormal blood vessel growth. In early stages, there are no symptoms — by the time vision changes occur, significant damage has often happened. This is why annual dilated eye examination is recommended for all diabetics, even those with well-controlled blood sugar. Early detection allows treatment with laser, injections, or surgery that can prevent most vision loss. Diabetics are also at higher risk for cataracts, glaucoma, and macular degeneration. Control of blood sugar, blood pressure, and cholesterol dramatically reduces eye complication risk. Our Diabetic Care Package includes referrals to our ophthalmology partners for comprehensive screening.',
        ],
      },
      {
        heading: 'Diabetes in Children and Adolescents',
        segments: [
          'While type 2 diabetes was once considered an adult disease, it is increasingly diagnosed in children and adolescents — particularly in India where genetic predisposition combines with rising childhood obesity. Type 1 diabetes can also present in childhood, often with sudden severe symptoms including excessive thirst, frequent urination, weight loss, and fatigue. Both forms require careful family-centred management including blood sugar monitoring, insulin or oral medication, meal planning, physical activity, and emotional support. Our ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' works alongside our diabetologists to provide comprehensive care for young patients, including school support plans, family education, and transition planning as teens move into adult diabetes care. Early diagnosis and excellent glycaemic control during childhood dramatically reduce lifetime complication risk.',
        ],
      },
      {
        heading: 'Living Well With Diabetes — A Practical Roadmap',
        segments: [
          'A diabetes diagnosis is not the end of a healthy life — it is the beginning of a different approach to health. Patients who take ownership of their condition and partner with their healthcare team consistently achieve excellent outcomes and live full, active lives. The foundation of good diabetes management includes consistent blood sugar monitoring (using a glucometer or continuous glucose monitor), adherence to prescribed medications, structured physical activity, mindful eating emphasising whole foods, adequate sleep, stress management, smoking cessation, and regular medical follow-up. Support from family and friends dramatically improves adherence and quality of life. At A Square Hospital, our diabetes program combines clinical care with education, counselling, and ongoing motivation to help every patient in Jharsuguda live well with diabetes. Whether you are newly diagnosed or have lived with diabetes for years, we meet you where you are and help you take the next step forward with confidence, knowledge, and unwavering support from our multidisciplinary team.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What tests are included in the Diabetic Care Package at A Square Hospital Jharsuguda?',
        a: 'The package includes physician consultation, fasting & PP blood sugar, HbA1c, lipid profile, KFT, urine microalbumin, and ECG at ₹2,290.',
      },
      {
        q: 'How often should diabetics get checked at A Square Hospital?',
        a: 'Diabetics should get their care package checked every 3–6 months. High-risk individuals should screen annually.',
      },
    ],
  }),

  post({
    slug: 'child-health-paediatric-care-jharsuguda',
    title: "Your Child's Health in Jharsuguda — A Complete Guide to Paediatric Care",
    metaTitle: 'Best Paediatrician in Jharsuguda | Child Health Care — A Square Hospital',
    metaDescription:
      "Expert paediatric care in Jharsuguda for infants, children & adolescents. Vaccinations, growth monitoring & nutrition counseling. Child Health Package at ₹4,390 — A Square Hospital.",
    date: 'May 10, 2025',
    datePublished: '2025-05-10',
    dateModified: '2026-06-24',
    readTime: '8 min read',
    category: 'Paediatrics',
    image:
      'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Paediatric care and child health checkup at A Square Hospital Jharsuguda',
    excerpt:
      "Children's health needs change rapidly from infancy through adolescence. Here's how regular paediatric checkups at A Square Hospital, Jharsuguda, support your child's healthy development.",
    authorName: 'Dr. Dolamani Tandi',
    authorType: 'Person',
    interlinks: [
      'nicu-premature-baby-care-jharsuguda',
      'safe-delivery-maternity-care-jharsuguda',
    ],
    content: [
      {
        segments: [
          "Childhood is a time of rapid physical, mental, and emotional growth. Each developmental stage comes with its own health requirements — from nutrition and vaccinations in infancy to growth monitoring and immunity building during school years. At A Square Hospital, Jharsuguda, our paediatrics department provides comprehensive, compassionate care for every child, supported by an advanced ",
          { text: 'NICU', href: '/blog/nicu-premature-baby-care-jharsuguda' },
          ' for newborns who need extra medical attention.',
        ],
      },
      {
        heading: 'Why Routine Paediatric Checkups Are Important',
        segments: [
          'Many childhood health issues — including anaemia, nutritional deficiencies, vision problems, delayed growth, and immunity-related conditions — develop gradually and may not show obvious symptoms. Routine checkups allow early detection and timely intervention, preventing long-term complications. In Jharsuguda, common paediatric concerns include worm infestations, iron deficiency anaemia, recurrent respiratory infections, and growth delays due to inadequate nutrition. A structured ',
          { text: 'maternity to childhood care journey', href: '/blog/safe-delivery-maternity-care-jharsuguda' },
          ' ensures continuity from birth onwards.',
        ],
      },
      {
        heading: 'Vaccinations — Building Lifelong Immunity',
        segments: [
          'Vaccinations remain one of the most powerful tools in preventive paediatric medicine. Our Child Health Package includes HPV vaccination (2 doses), which provides critical protection against cervical cancer later in life. Dr. Dolamani Tandi, our Paediatrician with 10 years of experience, ensures each child follows an appropriate vaccination schedule. We follow the IAP (Indian Academy of Paediatrics) immunization schedule, including optional vaccines for typhoid, HPV, and influenza. Parents receive a digital vaccination record that is easy to share with schools and other healthcare providers.',
        ],
      },
      {
        heading: 'Growth Assessment and Nutrition Counseling',
        segments: [
          "Monitoring height, weight, and developmental milestones against age-appropriate standards helps identify growth concerns early. Our Child Health Package includes growth assessment and dedicated nutrition counseling, ensuring your child receives the right guidance for their individual needs. For infants, we assess breastfeeding technique and complementary feeding practices. For toddlers and school-age children, we evaluate dietary patterns and address picky eating. Adolescents receive special attention to nutrition during growth spurts, hormonal changes, and increased physical activity.",
        ],
      },
      {
        heading: 'Common Childhood Illnesses and When to See a Doctor',
        segments: [
          'Parents in Jharsuguda should consult a paediatrician promptly if their child has high fever lasting more than 24 hours, persistent vomiting or diarrhea, breathing difficulty, signs of dehydration, severe rash, or unusual lethargy. Recurrent infections, poor weight gain, behavioural changes, and school performance issues also warrant a professional evaluation. Our paediatric team is trained to manage common childhood illnesses including respiratory infections, gastrointestinal issues, allergies, asthma, and skin conditions. We also offer guidance on sleep, screen time, and age-appropriate developmental activities.',
        ],
      },
      {
        heading: 'Child Health Package at A Square Hospital Jharsuguda',
        segments: [
          'Our Child Health Package (0–15 years) at ₹4,390 includes paediatric consultation, CBC, stool routine, urine routine, growth assessment, nutrition counseling, and HPV vaccination (2 doses). This represents a 25% saving over individual service pricing. For newborns who needed NICU support, our ',
          { text: 'NICU team', href: '/blog/nicu-premature-baby-care-jharsuguda' },
          ' provides structured follow-up including neurodevelopmental assessment, vision and hearing screening, and early intervention services when needed. To book a paediatric consultation, call +91 9827973991 or ',
          { text: 'request an appointment online', href: '/#appointment' },
          '.',
        ],
      },
      {
        heading: 'Newborn Care — The First 28 Days',
        segments: [
          'The neonatal period is the most vulnerable time in a child\'s life. The first 28 days require meticulous care: exclusive breastfeeding on demand (8–12 times daily), maintaining body temperature, umbilical cord care with dry cord care or antiseptic as advised, vitamin K supplementation as per protocol, and hepatitis B vaccination at birth. Newborn screening for congenital hypothyroidism, congenital adrenal hyperplasia, G6PD deficiency, and other metabolic conditions is also recommended and can be done from a simple heel-prick blood spot. Our ',
          { text: 'maternity team', href: '/blog/safe-delivery-maternity-care-jharsuguda' },
          ' educates new parents on these essentials before discharge, and our paediatric outpatient clinic provides newborn follow-up at 7 days, 14 days, and 28 days to ensure healthy early growth.',
        ],
      },
      {
        heading: 'Adolescent Health — Addressing the Teen Years',
        segments: [
          'Adolescence (10–19 years) is a period of rapid physical, emotional, and social change. Teens face unique health concerns including acne, irregular periods in girls, sports injuries, mental health issues, substance use, sexual health questions, and eating disorders. A trusted paediatrician or adolescent health specialist can provide a safe space for teens to discuss these concerns without judgement. At A Square Hospital, Dr. Dolamani Tandi provides adolescent-friendly consultations that respect privacy while keeping parents appropriately informed. We address topics ranging from puberty and hygiene to academic stress, peer pressure, and healthy relationships. HPV vaccination, mental health screening, and lifestyle counselling are core components of adolescent care.',
        ],
      },
      {
        heading: 'Common Childhood Allergies in Jharsuguda',
        segments: [
          'Allergic conditions including asthma, allergic rhinitis, food allergies, and eczema are increasingly common in Indian children. Jharsuguda\'s industrial environment, dusty conditions during summer, and changing dietary patterns contribute to rising allergy rates. Common triggers include dust mites, pollen, mould, certain foods (peanuts, milk, eggs, soy, wheat), pet dander, and industrial pollutants. Children with a family history of allergies are at higher risk. Our paediatric team provides allergy testing, environmental control counselling, dietary modification plans, and medication management including inhalers for asthma. Parents should never dismiss recurrent cold-like symptoms, chronic cough, persistent rashes, or stomach complaints as "just part of growing up" — proper evaluation can dramatically improve quality of life.',
        ],
      },
      {
        heading: 'Screen Time and Child Development',
        segments: [
          'Excessive screen time is a modern parenting challenge with real consequences for child development. The Indian Academy of Paediatrics recommends no screen time for children under 2 years (except video calls with family), and a maximum of 1 hour per day for children aged 2–5, with high-quality programming only. For older children, screen time should not displace sleep, physical activity, study, or social interaction. Excessive screens are linked to obesity, sleep disturbances, attention problems, anxiety, and delayed language development. Our paediatricians work with families to create healthy media plans, including device-free meals, screens-off bedrooms at night, and shared viewing of content. We also offer guidance on social media safety as children approach adolescence.',
        ],
      },
      {
        heading: 'Nutrition for Growing Children in Jharsuguda',
        segments: [
          'Childhood nutrition sets the foundation for lifelong health. Infants need exclusive breastfeeding for the first 6 months, with continued breastfeeding alongside complementary foods until at least 2 years. Complementary feeding should begin with iron-rich pureed foods — mashed dal, vegetable purees, fruit purees, and iron-fortified cereals. From 1 year onwards, children should eat family meals modified for their developmental stage. School-age children need balanced meals with adequate protein (eggs, dairy, pulses, lean meat), whole grains, vegetables, fruits, and healthy fats. Common nutritional deficiencies in Indian children include iron deficiency anaemia, vitamin D deficiency, vitamin B12 deficiency, and inadequate protein. Picky eating is normal developmental behaviour but should be addressed patiently without forcing food. Our nutritionists work with families to create realistic, culturally appropriate meal plans that address deficiencies and establish healthy eating patterns for life.',
        ],
      },
      {
        heading: 'When to Worry About Your Child\'s Development',
        segments: [
          'Every child develops at their own pace, but certain milestones should be reached within expected windows. By 6 months, most babies smile responsively, roll over, and babble. By 12 months, they should sit without support, crawl, respond to their name, and say a few words. By 18 months, walking and using 10+ words is typical. By 2 years, two-word phrases and following simple instructions. By 3 years, three-word sentences, toilet training readiness, and imaginative play. Red flags warranting paediatric evaluation include not making eye contact, no social smiling by 3 months, no babbling by 9 months, no words by 18 months, loss of previously acquired skills, persistent toe-walking, repetitive behaviours, extreme difficulty with transitions, or significant delays in motor milestones. Early identification of developmental delays allows intervention during the most responsive window of brain development. Our ',
          { text: 'NICU follow-up', href: '/blog/nicu-premature-baby-care-jharsuguda' },
          ' and general paediatric services include developmental screening at every well-child visit.',
        ],
      },
      {
        heading: 'Childhood Immunisation — Protecting Jharsuguda\'s Children',
        segments: [
          'Vaccination is one of the greatest public health achievements, preventing 3.5–5 million deaths globally every year. The Indian Academy of Paediatrics and Government of India immunisation schedule protects children against tuberculosis, hepatitis B, diphtheria, pertussis, tetanus, polio, Haemophilus influenzae type b, rotavirus, pneumococcal disease, measles, mumps, rubella, varicella, HPV, and more. The recommended schedule starts at birth (BCG, OPV, hepatitis B) and continues through adolescence. Jharsuguda families sometimes have questions about vaccine safety — extensive research continues to confirm that vaccines are safe, serious side effects are extremely rare, and the benefits dramatically outweigh risks. Our paediatric team provides complete immunisation services in a child-friendly environment, with a private discussion of any concerns, comfortable injection techniques, and a digital record of all vaccines given. Following the recommended schedule is the simplest, most effective way to protect your child from dangerous diseases.',
        ],
      },
      {
        heading: 'Parenting in the Digital Age — Finding Balance',
        segments: [
          'Modern parents in Jharsuguda face unprecedented challenges that earlier generations never encountered. Social media creates unrealistic comparisons, screen-based entertainment competes with traditional play, and information overload from online sources can generate anxiety. Despite these challenges, the fundamentals of good parenting remain unchanged — unconditional love, consistent discipline, time and attention, clear communication, and being present. Quality time without devices, family meals together, shared outdoor activities, reading aloud, and simply listening are timeless gifts that no technology can replace. Children who feel secure, valued, and supported develop resilience that serves them throughout life. At A Square Hospital, we are honoured to support Jharsuguda families with both medical care and evidence-based parenting guidance through every stage of childhood.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who is the best paediatrician in Jharsuguda?',
        a: 'Dr. Dolamani Tandi at A Square Hospital, Jharsuguda is an experienced paediatrician with an MD in Paediatrics and over 10 years of practice.',
      },
      {
        q: 'Is HPV vaccination available at A Square Hospital Jharsuguda?',
        a: 'Yes, HPV vaccination (2 doses) is included in the Child Health Package at A Square Hospital, Jharsuguda.',
      },
    ],
  }),

  post({
    slug: 'senior-citizen-health-care-jharsuguda',
    title: 'Senior Citizen Health Care in Jharsuguda — Why Annual Screening is Critical After 50',
    metaTitle: 'Senior Citizen Health Package in Jharsuguda | A Square Hospital — Healthy Aging',
    metaDescription:
      'Comprehensive health care for senior citizens in Jharsuguda. Annual screening for heart, kidneys, bones & more. Senior Citizen Package at ₹6,350. A Square Hospital.',
    date: 'May 18, 2025',
    datePublished: '2025-05-18',
    dateModified: '2026-06-24',
    readTime: '8 min read',
    category: 'Senior Health',
    image:
      'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Senior citizen health checkup and care at A Square Hospital Jharsuguda',
    excerpt:
      'After the age of 50, the body becomes increasingly vulnerable to age-related diseases. Annual health screening at A Square Hospital, Jharsuguda, helps seniors stay healthy, active, and independent.',
    authorName: 'A Square Hospital Jharsuguda',
    authorType: 'Organization',
    interlinks: [
      'diabetes-management-jharsuguda',
      'heart-disease-prevention-jharsuguda',
      'importance-of-regular-health-checkups-jharsuguda',
      'orthopaedic-care-bone-joint-jharsuguda',
    ],
    content: [
      {
        segments: [
          'Aging is a natural process, but many age-related health conditions are preventable or manageable when detected early. For seniors above 50 in Jharsuguda, regular health screening is not just recommended — it is essential. Heart disease, diabetes, hypertension, osteoporosis, and kidney disorders often develop gradually and can significantly impact quality of life if left unaddressed. A thoughtful annual screening plan can add years of healthy, independent living.',
        ],
      },
      {
        heading: 'What Changes After 50?',
        segments: [
          'After 50, bone density starts to decline, cardiovascular risk increases, kidney function can gradually weaken, and the thyroid gland may become less efficient. Vitamin D and B12 deficiencies are extremely common in older adults and can cause fatigue, weakness, memory problems, and increased fracture risk. To address these specific concerns, our Senior Citizen Health Package includes calcium, Vitamin D, and B12 assessment alongside standard blood work. Read more about how ',
          { text: 'bone and joint health', href: '/blog/orthopaedic-care-bone-joint-jharsuguda' },
          ' evolves with age in our detailed orthopaedic guide.',
        ],
      },
      {
        heading: 'Cardiology Consultation Included',
        segments: [
          "One of the unique features of A Square Hospital's Senior Citizen Package is the inclusion of a dedicated Cardiology Consultation alongside comprehensive blood tests, pulmonary function testing, ECG, and imaging. At ₹6,350, this package is designed to give a thorough health picture in a single visit. For patients with existing cardiac risk factors, our ",
          { text: 'heart check program', href: '/blog/heart-disease-prevention-jharsuguda' },
          ' can be combined with the senior package for even more detailed evaluation.',
        ],
      },
      {
        heading: 'Calcium and Vitamin Deficiency Screening',
        segments: [
          'Serum calcium, Vitamin D & B12 testing is essential for seniors to prevent osteoporosis and nerve damage. Our Senior Citizen Package includes all of these, helping families get ahead of age-related deficiencies that are routinely missed in standard check-ups. Many seniors in Jharsuguda who experience fatigue, weakness, or frequent falls are actually suffering from undiagnosed vitamin deficiencies that are easily treatable. Early detection means a few months of supplementation can restore energy and prevent fractures.',
        ],
      },
      {
        heading: 'Diabetes and Kidney Function in Seniors',
        segments: [
          'Type 2 diabetes is increasingly common after 50, and kidney function naturally declines with age — making seniors especially vulnerable to diabetic kidney disease. Our Senior Citizen Package includes fasting and post-prandial blood sugar, HbA1c, and comprehensive kidney function tests. For patients already diagnosed with diabetes, our ',
          { text: 'Diabetic Care Package', href: '/blog/diabetes-management-jharsuguda' },
          ' can be combined with the senior package for the most thorough evaluation. We also recommend annual eye and foot examinations for diabetic seniors to catch early signs of retinopathy and neuropathy.',
        ],
      },
      {
        heading: 'Supporting Healthy, Independent Aging in Jharsuguda',
        segments: [
          'We encourage all seniors in Jharsuguda and the surrounding region to schedule their annual health screening at A Square Hospital. Our compassionate team ensures every elderly patient feels comfortable, respected, and fully informed about their health status. Beyond the screening itself, we provide lifestyle counselling on nutrition, safe physical activity, fall prevention at home, medication management, and mental wellness. For a complete overview of preventive screening at any age, read our ',
          { text: 'complete guide to regular health checkups', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Bone Health and Osteoporosis Prevention',
        segments: [
          'Osteoporosis — the silent loss of bone density — affects one in three postmenopausal women and one in five men above 50. Fractures from osteoporosis, particularly hip fractures, carry significant morbidity and mortality in seniors. Prevention begins in mid-life with adequate calcium intake (1200 mg/day), Vitamin D (800–1000 IU daily), weight-bearing exercise, and avoidance of smoking and excessive alcohol. DEXA bone density scanning is recommended for women above 65 and men above 70, or earlier with risk factors. Our ',
          { text: 'orthopaedic team', href: '/blog/orthopaedic-care-bone-joint-jharsuguda' },
          ' works alongside our physicians to provide comprehensive bone health assessment and fall-prevention counselling for elderly patients in Jharsuguda.',
        ],
      },
      {
        heading: 'Memory, Cognition, and Dementia Risk',
        segments: [
          'Mild memory lapses are common with age and do not necessarily indicate dementia. However, persistent or progressive memory loss, confusion about time and place, difficulty with familiar tasks, and changes in personality warrant evaluation. Vascular dementia, Alzheimer\'s disease, thyroid disorders, vitamin B12 deficiency, depression, and certain medications can all affect cognition, and many are treatable. Our Senior Citizen Package includes cognitive screening using simple bedside tools, and patients with concerning findings are referred for detailed neuropsychological assessment. Lifestyle measures that protect brain health include regular physical activity, social engagement, lifelong learning, blood pressure control, and management of diabetes and cholesterol.',
        ],
      },
      {
        heading: 'Fall Prevention at Home',
        segments: [
          'Falls are the leading cause of injury-related hospitalisation in seniors, and most falls happen at home. Simple modifications dramatically reduce risk: remove loose rugs and clutter, install grab bars in bathrooms and near stairs, ensure adequate lighting in hallways and bathrooms, use non-slip mats in the shower, wear well-fitted shoes with non-slip soles, keep frequently-used items within easy reach, and consider a raised toilet seat. Regular vision and hearing checkups also reduce fall risk. Exercise programs that improve balance — such as tai chi or simple standing balance exercises — have been shown to reduce fall rates by 30%. Our Senior Citizen Package includes a home safety assessment guide that families can implement together.',
        ],
      },
      {
        heading: 'Medication Safety and Polypharmacy',
        segments: [
          'Many seniors take five or more medications daily, increasing the risk of drug interactions, side effects, and adherence challenges. Every senior should have an annual medication review with their physician, who can deprescribe unnecessary drugs, simplify dosing schedules, and check for harmful interactions. Common issues include double-dosing of the same drug under different brand names, sedating medications that increase fall risk, and drugs that worsen kidney function. Our Senior Citizen Package includes a pharmacist-led medication review, and our physicians work with each patient to streamline their regimen while ensuring all necessary conditions remain optimally managed. Family members are encouraged to attend these reviews with the patient for better outcomes.',
        ],
      },
      {
        heading: 'Emotional Wellbeing and Social Connection in Later Life',
        segments: [
          'Depression in seniors is often missed because symptoms can mimic other conditions or be dismissed as "normal ageing." Persistent sadness, loss of interest in previously enjoyed activities, sleep changes, appetite changes, fatigue, and difficulty concentrating all warrant evaluation. Retirement, loss of spouse, chronic illness, and reduced social contact all increase risk. Social isolation is as dangerous as smoking 15 cigarettes a day in terms of mortality impact. We strongly encourage seniors in Jharsuguda to maintain active social lives through community groups, religious gatherings, multigenerational family activities, volunteer work, or learning new skills. Our Senior Citizen Package includes mental health screening, and we provide counselling referrals when needed. Building meaningful connections and finding purpose in later life is as important to health as medication and exercise.',
        ],
      },
      {
        heading: 'Cancer Screening Recommendations After 50',
        segments: [
          'Cancer risk increases significantly with age, making screening especially important for seniors. Women should continue mammography every 1–2 years until at least 75. Pap smears can usually stop after 65 if prior screening was adequate. Both sexes should have colon cancer screening (colonoscopy every 10 years or stool-based testing every 1–3 years) until at least 75. Lung cancer screening with annual low-dose CT is recommended for current or former smokers aged 50–80 with significant smoking history. Prostate cancer screening with PSA is a personal decision that should be discussed with your physician. Any new persistent symptoms — unexplained weight loss, persistent fatigue, new lumps, changes in bowel or bladder habits, unusual bleeding — warrant prompt evaluation. Our ',
          { text: 'preventive checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' programs include age-appropriate cancer screening, and our specialist partners provide treatment when needed.',
        ],
      },
      {
        heading: 'Caring for Caregivers — A Hidden Population',
        segments: [
          'Most of the medical attention rightly goes to the seniors themselves, but we must not forget the family caregivers who support them. Spouses, adult children, and other relatives who provide daily care often experience significant physical, emotional, and financial strain. Caregiver burnout is real and is associated with higher rates of depression, anxiety, sleep disturbance, and even premature death. A Square Hospital supports caregivers through education, respite planning, home care coordination, and direct counselling. We also teach practical skills — safe transfers, medication management, nutrition, behavioural management for dementia, and end-of-life care decisions. Caregivers who take care of their own health are better able to care for their loved ones. We encourage caregivers in Jharsuguda to schedule their own checkups, maintain social connections, and seek help without guilt. You cannot pour from an empty cup. If you are caring for an ageing parent or spouse, please reach out to our team — we have resources, support groups, and medical expertise ready to help you sustain both your loved one\'s health and your own wellbeing over the long journey ahead. Our holistic approach recognises that the health of the family system is just as important as the health of the individual senior. We work with the whole family, not just the patient, because everyone\'s wellbeing is interconnected. Ageing well is a team sport, and we are honoured to be part of your team here in Jharsuguda. From routine checkups and chronic disease management to memory care and end-of-life support, our senior care services are designed to honour the dignity, wisdom, and contribution of every older adult we serve. We believe that adding years to life is important, but adding life to those years is what truly matters. Reach out to us at +91 9827973991 to learn more about our senior care programs, home visit services, and how we can partner with you and your family through the journey of ageing with grace, dignity, and excellent medical care.',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is included in the Senior Citizen Health Package at A Square Hospital Jharsuguda?',
        a: 'The package at ₹6,350 includes CBC & ESR, blood sugar, lipid profile, LFT, KFT, USG abdomen, thyroid, X-ray, ECG, pulmonary function test, Vitamin B12, Vitamin D & B12, serum calcium, urine routine, and cardiology consultation.',
      },
      {
        q: 'How often should seniors above 50 get a health checkup?',
        a: 'Strongly recommended every 6–12 months for all individuals above 50 years of age.',
      },
    ],
  }),

  post({
    slug: 'nicu-premature-baby-care-jharsuguda',
    title: 'Advanced NICU Care in Jharsuguda — What Parents Need to Know About Premature Births',
    metaTitle: 'Advanced NICU in Jharsuguda | Premature Baby Care — A Square Hospital',
    metaDescription:
      'A Square Hospital Jharsuguda has an advanced NICU for premature and critically ill newborns. Expert neonatology care 24/7. Learn what to expect from our NICU team.',
    date: 'May 25, 2025',
    datePublished: '2025-05-25',
    dateModified: '2026-06-24',
    readTime: '8 min read',
    category: 'Neonatal Care',
    image:
      'https://images.pexels.com/photos/3259624/pexels-photo-3259624.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Advanced NICU for premature newborns at A Square Hospital Jharsuguda',
    excerpt:
      'A premature birth is an emotional and medical challenge for any family. Our advanced NICU at A Square Hospital, Jharsuguda, provides specialized 24/7 care for the most vulnerable newborns.',
    authorName: 'Dr. Dolamani Tandi',
    authorType: 'Person',
    interlinks: [
      'safe-delivery-maternity-care-jharsuguda',
      'child-health-paediatric-care-jharsuguda',
    ],
    content: [
      {
        segments: [
          'A premature birth — before 37 weeks of gestation — requires specialized medical attention that goes far beyond a standard nursery. The neonatal period is critical, and any delay in intervention can have lifelong consequences. A Square Hospital in Jharsuguda has invested in an advanced NICU designed to give premature and critically ill newborns the best possible start in life. Our NICU works in close coordination with our ',
          { text: 'maternity department', href: '/blog/safe-delivery-maternity-care-jharsuguda' },
          ' and ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' to provide seamless care from delivery through childhood.',
        ],
      },
      {
        heading: 'What is a NICU?',
        segments: [
          "The Neonatal Intensive Care Unit (NICU) is a specialized ward equipped with incubators, warmers, respiratory support devices, continuous monitoring systems, and infusion pumps for providing round-the-clock care to newborns who need more support than a standard maternity ward can offer. Our NICU at A Square Hospital is staffed 24/7 by trained neonatal nurses and supervised by a consultant paediatrician with neonatology credentials, ensuring that expert help is always available — even in the middle of the night.",
        ],
      },
      {
        heading: 'Conditions Managed in Our NICU',
        segments: [
          'Our NICU at A Square Hospital, Jharsuguda handles a range of conditions including prematurity, low birth weight, neonatal jaundice (hyperbilirubinemia), respiratory distress syndrome, birth asphyxia, neonatal sepsis, and feeding difficulties in newborns. We also support babies born to diabetic mothers, multiple gestation babies (twins, triplets), and babies with congenital conditions that require immediate stabilization. Each condition has a defined clinical protocol, and outcomes are tracked continuously for quality improvement.',
        ],
      },
      {
        heading: 'Our Neonatology Team',
        segments: [
          'Dr. Dolamani Tandi leads our paediatrics and neonatal team. With qualifications including MD Paediatrics, NALS (Neonatal Advanced Life Support), PALS, and PGPN, and 10 years of clinical experience, Dr. Tandi ensures every newborn in our NICU receives expert, evidence-based care. Our team is supported by dedicated NICU-trained nurses, lactation consultants, and on-call paediatric subspecialists including cardiology and neurology when needed. Together, we provide a level of neonatal care that is rare in tier-2 cities like Jharsuguda.',
        ],
      },
      {
        heading: 'What Parents Can Expect During a NICU Stay',
        segments: [
          'A NICU stay can feel overwhelming for new parents. Our team prioritizes clear, regular communication — including daily updates from the treating paediatrician, structured family counselling sessions, and 24/7 access to a duty nurse for urgent questions. We encourage kangaroo mother care (skin-to-skin contact) for stable premature babies as it has been shown to improve weight gain, reduce infection rates, and strengthen parent-baby bonding. Breastfeeding support is also a key part of NICU care, with lactation consultants available to help mothers establish and maintain milk supply even when direct breastfeeding is not yet possible.',
        ],
      },
      {
        heading: 'Follow-Up Care After NICU Discharge',
        segments: [
          'Babies discharged from the NICU need structured follow-up to monitor growth, neurodevelopment, vision, and hearing. Our ',
          { text: 'paediatric outpatient team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' provides dedicated high-risk infant follow-up clinics that include developmental assessment, vaccination catch-up, and parental guidance. Early intervention for any developmental delay dramatically improves long-term outcomes, and our team works closely with families to ensure no concern is missed. To learn more about our comprehensive maternity-to-childhood care, read our ',
          { text: 'maternity care guide', href: '/blog/safe-delivery-maternity-care-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Support for NICU Families in Jharsuguda',
        segments: [
          "We understand that having a baby in the NICU is stressful and emotionally overwhelming. Our nursing team and doctors keep families closely informed and involved in their baby's care journey. We offer a compassionate, family-centered approach in our NICU at A Square Hospital, Jharsuguda. If you are an expectant parent with a high-risk pregnancy, or have any concerns about preterm labour, please consult our maternity team early so that we can plan for the safest possible delivery and immediate newborn support.",
        ],
      },
      {
        heading: 'Levels of NICU Care — Understanding Where Your Baby Fits',
        segments: [
          'NICU care is generally classified into levels based on the complexity of care provided. Level I nurseries care for healthy term newborns. Level II (special care nurseries) handle babies born after 32 weeks who need additional monitoring, IV fluids, or short-term respiratory support. Level III NICUs, like ours at A Square Hospital, provide comprehensive care for the most critically ill and premature newborns including those born before 32 weeks, those needing mechanical ventilation, and those with complex surgical needs. Level IV NICUs, found only at tertiary centres, handle the most complex congenital conditions and provide advanced surgical subspecialties. Our Level III facility serves as a critical access point for Jharsuguda and surrounding districts, accepting referrals from smaller hospitals.',
        ],
      },
      {
        heading: 'Common NICU Procedures Parents Should Know',
        segments: [
          'Parents often feel overwhelmed by the technical nature of NICU care. Common procedures include CPAP or mechanical ventilation for immature lungs, phototherapy for jaundice using blue-spectrum light, intravenous nutrition (TPN) until oral feeding is possible, gavage tube feeding directly into the stomach, lumbar puncture to rule out meningitis, blood transfusions for anaemia of prematurity, and cranial ultrasound to detect brain bleeds. Each procedure is explained in detail by our team before being performed, and parents are encouraged to ask questions and participate in care decisions. We aim to make the NICU experience as transparent and supportive as possible.',
        ],
      },
      {
        heading: 'Developmental Care in the NICU',
        segments: [
          'Modern NICU care goes far beyond survival — it focuses on optimising long-term neurodevelopment. Our developmental care practices include minimising noise and bright lights, clustering care to allow longer rest periods, supporting sleep cycles, providing boundaries with rolled blankets to mimic the womb, encouraging kangaroo mother care for stable babies, and using breast milk for oral immune protection. These measures have been shown to reduce length of stay, improve weight gain, and decrease rates of cerebral palsy and other developmental delays. Our team receives ongoing training in family-centered developmental care, and we provide parents with guidance on how to support their baby\'s development even before discharge.',
        ],
      },
      {
        heading: 'Preparing for Discharge — The Final NICU Milestone',
        segments: [
          'NICU discharge is a milestone that requires careful preparation. Babies typically go home when they are medically stable, breathing independently, gaining weight consistently on oral feeds, and maintaining body temperature outside an incubator. Parents must demonstrate competency in feeding, medication administration, basic newborn care, and recognising warning signs. We conduct a thorough discharge class covering car seat safety, sleep positioning, infection prevention, feeding cues, and emergency contacts. Home visits by our neonatal nurse liaison are available for families who need additional support. Follow-up appointments with our ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' are scheduled within a week of discharge to ensure a smooth transition.',
        ],
      },
      {
        heading: 'Breastfeeding Support for NICU Mothers',
        segments: [
          'Establishing and maintaining milk supply is one of the most important things a NICU mother can do for her baby, even when direct breastfeeding is not yet possible. Breast milk provides immune protection, is easier to digest than formula, and is associated with significantly better outcomes for premature babies including reduced risk of necrotising enterocolitis, sepsis, and retinopathy of prematurity. Our lactation consultants work with NICU mothers from the earliest days — teaching hand expression and pump techniques, ensuring proper milk storage, providing transport containers for the hospital, and supporting the transition to direct breastfeeding when baby is ready. Many NICU mothers find the pumping journey exhausting, and we provide emotional support alongside practical guidance to help them sustain breastfeeding through the NICU stay and beyond.',
        ],
      },
      {
        heading: 'Recognising Premature Baby Cues and Behavioural States',
        segments: [
          'Premature babies communicate through subtle behavioural cues that parents learn to read over time. Stress cues include hiccups, yawning, sneezing, arching, finger splaying, colour changes, and bradycardia (slow heart rate). Self-soothing cues include hand-to-mouth movements, grasping, foot bracing, and tucking. Recognising these cues allows parents to provide comfort when needed and rest when appropriate. Preterm infants cycle through six behavioural states — deep sleep, light sleep, drowsy, quiet alert, active alert, and crying. Working with the baby during quiet alert states for interaction, and protecting deep sleep periods, supports healthy development. Our NICU team teaches parents to read these cues and respond appropriately, building the foundation for secure attachment that will serve the child for life.',
        ],
      },
      {
        heading: 'When a NICU Stay Becomes a Marathon — Family Support',
        segments: [
          'Long NICU stays take a profound toll on families. Parents often must return to work, manage household responsibilities, care for other children, and travel long distances while their baby remains in hospital. Emotional exhaustion, financial strain, marital stress, and grief are common. Our NICU social worker connects families with financial assistance, accommodation support, transportation services where available, and peer support groups with other NICU parents who truly understand the journey. We also provide regular family meetings with the medical team to discuss progress, plan next steps, and answer questions. For families in Jharsuguda facing an extended NICU stay, please know you are not alone. Our team is here to support your entire family, not just your baby, through every difficult day. Every milestone your baby reaches — breathing without support, opening eyes for the first time, taking full feeds, going home — is celebrated by our entire NICU team as if it were our own. We are with you for the long journey, and we share both the worry and the joy with you. Even after discharge, our follow-up clinic tracks your baby\'s growth and development for years, providing developmental screening, nutrition counselling, immunisations, and parental support. We stay connected with families well beyond the NICU stay, because we believe every preterm baby deserves a long runway to thrive, and every family deserves a partner committed to their child\'s brightest possible future.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does A Square Hospital Jharsuguda have an NICU?',
        a: 'Yes, A Square Hospital has an advanced NICU equipped to handle premature births, neonatal jaundice, respiratory conditions, and other critical newborn conditions.',
      },
      {
        q: 'Who is the NICU specialist at A Square Hospital Jharsuguda?',
        a: 'Dr. Dolamani Tandi leads the Paediatrics and NICU team at A Square Hospital. He holds MD Paediatrics, NALS, PALS, and PGPN with 10+ years of experience.',
      },
    ],
  }),

  post({
    slug: 'industrial-health-workers-jharsuguda',
    title: 'Occupational Health for Industrial Workers in Jharsuguda — Risks, Screening & Care',
    metaTitle: 'Industrial & Occupational Health Screening in Jharsuguda | A Square Hospital',
    metaDescription:
      'A Square Hospital Jharsuguda offers industrial health screening and fitness certificates for factory workers & corporate staff. Executive & Pre-Employment packages from ₹1,050.',
    date: 'June 3, 2025',
    datePublished: '2025-06-03',
    dateModified: '2026-06-24',
    readTime: '9 min read',
    category: 'Occupational Health',
    image:
      'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Industrial and occupational health screening for workers in Jharsuguda',
    excerpt:
      "Jharsuguda is one of Odisha's key industrial centres. Factory workers, mine staff, and corporate employees face unique health risks that require dedicated occupational health screening.",
    authorName: 'A Square Hospital Jharsuguda',
    authorType: 'Organization',
    interlinks: [
      'heart-disease-prevention-jharsuguda',
      'importance-of-regular-health-checkups-jharsuguda',
      'orthopaedic-care-bone-joint-jharsuguda',
    ],
    content: [
      {
        segments: [
          "Jharsuguda is one of Odisha's most important industrial towns, home to major power plants, aluminium smelters, and manufacturing units. The thousands of workers employed in these industries face occupational health risks that ordinary health checkups may not adequately address. A Square Hospital provides specialized Executive Health Packages and Pre-Employment Fitness Packages designed specifically for this workforce, in line with the Factories Act and modern occupational medicine guidelines.",
        ],
      },
      {
        heading: 'Common Health Risks for Industrial Workers',
        segments: [
          'Long-term exposure to dust and fumes can cause respiratory conditions including occupational asthma and silicosis. Shift work disrupts circadian rhythms and increases the risk of heart disease, diabetes, and metabolic syndrome. Heavy physical work increases musculoskeletal injury risk, while stress and irregular meals accelerate hypertension and peptic ulcer disease. Workers in Jharsuguda — particularly in heavy industry — are also at higher risk of noise-induced hearing loss, vibration-related nerve damage, and chemical exposure injuries. Read more about cardiac risks in our ',
          { text: 'heart disease prevention guide', href: '/blog/heart-disease-prevention-jharsuguda' },
          ' and joint risks in our ',
          { text: 'orthopaedic care guide', href: '/blog/orthopaedic-care-bone-joint-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Pre-Employment Fitness Certificate — A Legal & Safety Requirement',
        segments: [
          'Many industries require employees to have a valid fitness certificate before joining or returning from extended leave. Our Pre-Employment & Industrial Fitness Package at ₹1,050 includes a physician fitness certificate, CBC, blood sugar, urine routine, chest X-ray, and vision test — providing all essentials for occupational health compliance. The certificate is issued the same day and is accepted by most factories and HR departments in the region. For higher-risk job roles, additional tests such as audiometry, spirometry, and ECG can be added.',
        ],
      },
      {
        heading: 'Executive Health Package for Comprehensive Screening',
        segments: [
          'For more comprehensive occupational health screening, our Executive Health Package at ₹7,225 covers 20 tests including cardiac, liver, kidney, thyroid, lung function, sexually transmitted infection screening, vitamin deficiencies, and more. Recommended every 6–12 months for all working professionals. This package is particularly suited for senior executives, managers, and professionals in high-stress roles who need a thorough annual review of their health. For broader preventive care that covers all age groups, our ',
          { text: 'complete health checkup', href: '/blog/importance-of-regular-health-checkups-jharsuguda' },
          ' provides an accessible option for families.',
        ],
      },
      {
        heading: 'Periodic Health Monitoring for Industrial Workers',
        segments: [
          'The Factories Act and various industry-specific regulations require periodic medical examination of workers exposed to occupational hazards. A Square Hospital provides customized periodic health monitoring programs for industries in and around Jharsuguda. These programs include scheduled on-site camps, individual health records, trend analysis over time, and statutory compliance reporting. We work with HR and safety teams to identify at-risk workers early and intervene before minor issues become major health problems or accidents.',
        ],
      },
      {
        heading: 'Workplace Wellness and Lifestyle Programs',
        segments: [
          'Beyond screening, our occupational health team offers workplace wellness programs including on-site health talks, ergonomic assessments, stress management workshops, and smoking cessation support. We also provide nutritional guidance specific to shift workers and those in physically demanding roles. Companies that invest in workplace wellness see measurable improvements in employee retention, productivity, and healthcare costs. Our team is happy to design a custom wellness calendar for your organization.',
        ],
      },
      {
        heading: "A Square Hospital's Commitment to Jharsuguda's Workforce",
        segments: [
          "We are proud to be a healthcare partner for Jharsuguda's industrial community. Our hospital offers group booking options for companies and factories. Contact us at +91 9827973991 or email Asquarehospital@gmail.com for corporate health screening arrangements. Whether you are an HR manager looking for an annual checkup partner, or an individual worker wanting to take charge of your own health, A Square Hospital is here to support you.",
        ],
      },
      {
        heading: 'Respiratory Health in Jharsuguda\'s Industrial Environment',
        segments: [
          'Jharsuguda\'s aluminium smelters, power plants, and cement factories expose workers to particulate matter, sulphur dioxide, fluorides, and other respiratory irritants. Long-term exposure causes occupational asthma, chronic bronchitis, silicosis, and significantly elevated lung cancer risk. Effective respiratory protection programs include fit-tested N95 respirators or supplied-air respirators depending on exposure levels, regular spirometry testing to detect early lung function decline, smoking cessation support (smoking multiplies occupational lung damage), and engineering controls such as enclosed processes and effective ventilation. Our Pre-Employment Package includes baseline spirometry, and our Executive Package adds advanced pulmonary function testing. Workers experiencing persistent cough, breathlessness, or wheezing should be evaluated promptly — early intervention can prevent permanent lung damage and preserve quality of life.',
        ],
      },
      {
        heading: 'Hearing Conservation Programs',
        segments: [
          'Industrial noise exposure above 85 decibels for prolonged periods causes permanent, irreversible hearing loss. Many Jharsuguda factories operate at noise levels well above this threshold, yet hearing protection compliance remains inconsistent. A comprehensive hearing conservation program includes noise level monitoring at workstations, audiometric testing at hire and annually thereafter, provision of properly fitted earplugs or earmuffs, and worker education on the permanent nature of noise-induced hearing loss. Our occupational health team can design custom hearing conservation programs for industrial clients, with on-site audiometry and reporting. We also treat occupational hearing loss when detected early, including middle ear monitoring for workers exposed to pressure changes.',
        ],
      },
      {
        heading: 'Mental Health and Workplace Stress',
        segments: [
          'Mental health is an often-overlooked aspect of occupational health. Industrial workers in Jharsuguda face shift work fatigue, separation from family, performance pressure, financial stress, and exposure to traumatic events — all of which contribute to anxiety, depression, substance abuse, and burnout. Suicide rates among industrial workers have been rising across India and represent a public health crisis. Our occupational health team offers confidential mental health screening, counselling referrals, and crisis support. We work with HR teams to develop psychologically safe workplaces that encourage help-seeking, train supervisors to recognise warning signs, and provide access to confidential Employee Assistance Programs. Mental health support is not a luxury — it is a critical component of workplace safety and productivity.',
        ],
      },
      {
        heading: 'Ergonomics and Repetitive Strain Injury Prevention',
        segments: [
          'Repetitive motions, awkward postures, forceful exertions, and vibration cause musculoskeletal disorders that account for nearly a third of all workplace injury claims. Common conditions include carpal tunnel syndrome, tendinitis, lower back pain, and vibration-induced neuropathy. Prevention requires ergonomic workplace design — adjustable workstations, anti-fatigue mats, lifting aids, tool redesign — combined with worker training on proper technique, regular micro-breaks, stretching exercises, and rotation between tasks. Our ',
          { text: 'orthopaedic team', href: '/blog/orthopaedic-care-bone-joint-jharsuguda' },
          ' collaborates with industrial clients to identify ergonomic risks, conduct workplace assessments, and treat affected workers. Early intervention prevents chronic disability and keeps experienced workers productively employed.',
        ],
      },
      {
        heading: 'Heat Stress and Outdoor Worker Safety',
        segments: [
          'Jharsuguda\'s climate exposes outdoor workers to dangerous heat stress, particularly between March and June. Heat exhaustion and heat stroke can be fatal if not recognised and treated promptly. Symptoms include heavy sweating, weakness, cold/pale/clammy skin, fast/weak pulse, nausea, fainting (heat exhaustion) or hot/dry skin, rapid/strong pulse, confusion, seizures, and loss of consciousness (heat stroke). Prevention requires adequate hydration (drinking before thirst develops, electrolyte replacement during heavy sweating), rest breaks in shaded or cool areas every 30–60 minutes, lightweight breathable clothing, scheduling strenuous work for cooler parts of the day, and acclimatisation programs for new workers. Supervisors should be trained to recognise early warning signs and our ',
          { text: 'emergency services', href: '/contact' },
          ' provide rapid response for severe cases. Workers with chronic conditions like heart disease or diabetes require extra precautions.',
        ],
      },
      {
        heading: 'Substance Abuse in the Industrial Workplace',
        segments: [
          'Substance abuse — including alcohol, tobacco, and other drugs — disproportionately affects industrial workers due to stress, peer pressure, physical pain, and shift work fatigue. Beyond the obvious health consequences, substance abuse increases accident rates, reduces productivity, and contributes to absenteeism. Many industries now require pre-employment and random drug testing as part of their safety programs. A Square Hospital provides confidential substance abuse screening, counselling referrals, and rehabilitation support. We also help companies develop comprehensive substance abuse policies that balance safety with compassionate support for workers struggling with addiction. Tobacco cessation programs are particularly important in industrial settings, as smoking multiplies the health risks of occupational exposures including lung disease and heart disease.',
        ],
      },
      {
        heading: 'Building a Culture of Safety — Beyond Compliance',
        segments: [
          'Truly safe workplaces go beyond regulatory compliance. The safest companies embed safety into their culture — from the CEO down to the newest worker. They empower workers to report hazards without fear, conduct regular safety audits, invest in continuous training, and view safety incidents as opportunities to learn rather than blame. Workers are recognised and rewarded for safe behaviours, and management leads by example. The result is lower injury rates, higher productivity, better employee retention, and improved public reputation. A Square Hospital partners with Jharsuguda industries to support this culture shift, providing not just medical services but expertise in safety program design, supervisor training, and incident investigation. Together we can make Jharsuguda\'s industrial workplaces among the safest in India. Every worker who goes home safely to their family at the end of a shift is a success story — and our team is committed to making that outcome the rule, not the exception, across every industry we serve. Our medical and occupational health expertise is a phone call away, and we welcome the opportunity to partner with companies large and small to build safer, healthier, more productive workplaces across the region. Whether you need annual health screenings, emergency response planning, ergonomics consultation, or simply a trusted medical partner for your team, A Square Hospital is ready to support Jharsuguda\'s industrial workforce today and for years to come.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does A Square Hospital Jharsuguda provide fitness certificates for industrial workers?',
        a: 'Yes. Our Pre-Employment & Industrial Fitness Package at ₹1,050 includes a physician fitness certificate, CBC, blood sugar, chest X-ray, and vision test.',
      },
      {
        q: 'Can companies arrange group health screening at A Square Hospital Jharsuguda?',
        a: 'Yes. A Square Hospital offers corporate and group health screening arrangements. Call +91 9827973991 for details.',
      },
    ],
  }),

  post({
    slug: 'orthopaedic-care-bone-joint-jharsuguda',
    title: 'Bone & Joint Health in Jharsuguda — When to See an Orthopaedic Specialist',
    metaTitle: 'Best Orthopaedic Doctor in Jharsuguda | Bone & Joint Care — A Square Hospital',
    metaDescription:
      'Experiencing joint pain, fractures or back pain in Jharsuguda? A Square Hospital offers expert orthopaedic care with Dr. Uditansu Das, MS Orthopaedics. Book appointment: +91 9827973991.',
    date: 'June 12, 2025',
    datePublished: '2025-06-12',
    dateModified: '2026-06-24',
    readTime: '8 min read',
    category: 'Orthopaedics',
    image:
      'https://images.pexels.com/photos/7659573/pexels-photo-7659573.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Orthopaedic consultation for bone and joint pain at A Square Hospital Jharsuguda',
    excerpt:
      'Joint pain, fractures, and back problems affect people of all ages in Jharsuguda. Learn when to see an orthopaedic specialist and what modern treatment options are available.',
    authorName: 'Dr. Uditansu Das',
    authorType: 'Person',
    interlinks: [
      'senior-citizen-health-care-jharsuguda',
      'industrial-health-workers-jharsuguda',
    ],
    content: [
      {
        segments: [
          "Bone and joint problems are among the most common reasons people seek medical attention across all age groups. From sports injuries in younger patients to arthritis and osteoporosis in seniors, orthopaedic conditions significantly impact mobility, independence, and quality of life. At A Square Hospital, Jharsuguda, Dr. Uditansu Das leads our Orthopaedics department with 12 years of specialized experience. Our team manages everything from acute fractures to chronic joint conditions, with strong links to our ",
          { text: 'senior care', href: '/blog/senior-citizen-health-care-jharsuguda' },
          ' and ',
          { text: 'occupational health', href: '/blog/industrial-health-workers-jharsuguda' },
          ' programs.',
        ],
      },
      {
        heading: 'Common Orthopaedic Conditions We Treat',
        segments: [
          'Our orthopaedics team in Jharsuguda treats fractures (including complex and compound fractures), ligament tears and sports injuries, knee and hip arthritis, spine and disc problems, carpal tunnel syndrome, tendon injuries, and bone infections (osteomyelitis). We also manage paediatric orthopaedic conditions including congenital deformities, growth plate injuries, and scoliosis. Industrial workers in Jharsuguda — particularly those in heavy manufacturing — frequently present with work-related musculoskeletal disorders that require both medical and ergonomic intervention.',
        ],
      },
      {
        heading: 'When Should You See an Orthopaedic Doctor?',
        segments: [
          'You should consult an orthopaedic specialist if you experience persistent joint pain that lasts more than a few weeks, swelling or deformity after an injury, difficulty walking or climbing stairs, back pain that radiates down the leg, or any fracture or significant trauma. For seniors, even minor falls can result in hip fractures that require urgent surgical attention. We strongly recommend that older adults maintain regular bone density screening and fall-proof their homes — both topics covered in our ',
          { text: 'senior citizen health guide', href: '/blog/senior-citizen-health-care-jharsuguda' },
          '.',
        ],
      },
      {
        heading: 'Minimally Invasive and Modern Surgical Techniques',
        segments: [
          'Where surgery is needed, our orthopaedic team employs minimally invasive techniques that reduce recovery time, blood loss, and post-operative pain. Modern implants and fixation devices ensure strong and durable repairs for fractures and joint replacements. Our operation theatre is equipped with C-arm imaging, laminar flow, and dedicated orthopaedic instrumentation. We use international-standard protocols for infection prevention and pain management, allowing most patients to begin walking within 24–48 hours of joint replacement surgery.',
        ],
      },
      {
        heading: 'Sports Injuries and Arthroscopy',
        segments: [
          'For younger, active patients, sports injuries such as ACL tears, meniscus injuries, and shoulder dislocations are common. Our team performs arthroscopic (keyhole) surgeries that allow faster recovery and minimal scarring compared to open procedures. Common procedures include ACL reconstruction, meniscus repair, rotator cuff repair, and shoulder stabilization. We also provide pre-season fitness assessments and post-injury rehabilitation programs for local sports teams and school athletes in Jharsuguda.',
        ],
      },
      {
        heading: 'Physiotherapy and Rehabilitation in Jharsuguda',
        segments: [
          'Surgical intervention is only the beginning of recovery. Our comprehensive orthopaedic care includes physiotherapy guidance and rehabilitation planning to ensure patients regain full function. We work closely with patients to set realistic recovery goals and support them every step of the way. For workers injured on the job, our ',
          { text: 'occupational health team', href: '/blog/industrial-health-workers-jharsuguda' },
          ' coordinates return-to-work planning and fitness certification. For seniors recovering from fractures or joint replacement, we offer home exercise programs and periodic in-clinic assessments to track progress.',
        ],
      },
      {
        heading: 'Book an Orthopaedic Consultation',
        segments: [
          'Whether you are dealing with a recent injury, chronic joint pain, or a long-standing orthopaedic condition, Dr. Uditansu Das and the team at A Square Hospital, Jharsuguda are here to help. Call +91 9827973991 to book an appointment. We are committed to keeping the people of Jharsuguda mobile, active, and pain-free at every stage of life.',
        ],
      },
      {
        heading: 'Back Pain — The Modern Epidemic',
        segments: [
          'Lower back pain is one of the most common reasons for medical consultation globally, and Jharsuguda is no exception. Sedentary jobs, prolonged sitting, poor posture, heavy lifting, and lack of core strength all contribute. Most back pain is mechanical (muscle strain, ligament sprain, disc degeneration) and resolves with conservative treatment including activity modification, physical therapy, anti-inflammatory medication, and gradual return to normal activity. Bed rest beyond 24–48 hours actually worsens outcomes. Warning signs that require urgent evaluation include back pain with fever (possible infection), numbness or weakness in legs (possible nerve compression), bowel or bladder dysfunction (cauda equina syndrome — a surgical emergency), and pain following significant trauma. Our orthopaedic team provides comprehensive back pain evaluation including imaging when indicated, and coordinates with physiotherapy for long-term recovery.',
        ],
      },
      {
        heading: 'Arthritis — Living Well Despite Joint Disease',
        segments: [
          'Osteoarthritis is the most common form of arthritis and affects millions of Indians, particularly those above 50. It results from gradual cartilage loss in weight-bearing joints, causing pain, stiffness, and reduced mobility. While joint replacement is the definitive treatment for advanced disease, conservative management is highly effective in earlier stages. Weight loss of even 5 kg reduces knee osteoarthritis pain by 50%. Low-impact exercise such as swimming, cycling, and yoga strengthens the muscles that support joints. Glucosamine and chondroitin supplements may provide modest symptom relief. Intra-articular injections of corticosteroid or hyaluronic acid can reduce pain and improve function. Our ',
          { text: 'senior care', href: '/blog/senior-citizen-health-care-jharsuguda' },
          ' and orthopaedic teams work together to provide integrated arthritis care.',
        ],
      },
      {
        heading: 'Childhood Orthopaedic Conditions — Early Intervention Matters',
        segments: [
          'Children are not simply small adults — their growing bones and joints have unique vulnerabilities and remarkable healing capacity. Common paediatric orthopaedic conditions include clubfoot (treated successfully with the Ponseti method), developmental dysplasia of the hip (diagnosed by ultrasound in infants), scoliosis (curvature of the spine often noticed in pre-teens), Osgood-Schlatter disease (knee pain in athletic adolescents), and growth plate fractures from sports injuries. Early diagnosis dramatically improves outcomes — many conditions that require complex surgery in adulthood can be managed conservatively if caught early. Our paediatric orthopaedic service coordinates with our ',
          { text: 'paediatric team', href: '/blog/child-health-paediatric-care-jharsuguda' },
          ' to provide comprehensive care for Jharsuguda children.',
        ],
      },
      {
        heading: 'Trauma Care and Fracture Management',
        segments: [
          'Jharsuguda\'s busy roads, industrial sites, and agricultural surroundings create a high incidence of traumatic injuries. Our emergency department and orthopaedic team are equipped to handle everything from simple fractures to complex polytrauma. We follow ATLS (Advanced Trauma Life Support) protocols, with 24/7 availability of orthopaedic surgeons, anaesthesiologists, and operation theatre staff. Modern fracture care emphasises early definitive fixation, which reduces hospital stay, complications, and time away from work. We use locking plates, intramedullary nails, and external fixators as appropriate, with physiotherapy beginning as soon as safely possible. Post-operative follow-up continues until full recovery, and our ',
          { text: 'occupational health team', href: '/blog/industrial-health-workers-jharsuguda' },
          ' coordinates return-to-work planning for injured workers.',
        ],
      },
      {
        heading: 'Osteoporosis — The Silent Disease You Can Prevent',
        segments: [
          'Osteoporosis affects an estimated 50 million Indians, yet most people only discover they have it after a fracture occurs. The disease causes bones to become weak and brittle, with hip, spine, and wrist fractures being the most common and consequential. Risk factors include being female (especially postmenopausal), advanced age, low body weight, smoking, excessive alcohol, sedentary lifestyle, inadequate calcium and vitamin D, long-term steroid use, and family history. DEXA scanning provides accurate bone density measurement, and the FRAX tool estimates 10-year fracture risk. Prevention and treatment include adequate calcium (1200 mg/day), vitamin D (800–1000 IU daily), weight-bearing exercise, smoking cessation, and when appropriate, medications like bisphosphonates. Our ',
          { text: 'senior care', href: '/blog/senior-citizen-health-care-jharsuguda' },
          ' and orthopaedic teams coordinate to identify at-risk patients and provide evidence-based treatment before fractures occur.',
        ],
      },
      {
        heading: 'When Joint Pain Becomes a Surgical Question',
        segments: [
          'Joint replacement surgery has transformed the lives of millions with severe arthritis, but it is not a first-line treatment. Surgery is considered when conservative measures — weight loss, exercise, physical therapy, medications, injections — have failed to provide adequate quality of life. Indications include pain that disrupts sleep or daily activities, severe stiffness limiting function, failure to respond to multiple conservative treatments, and radiographic evidence of advanced joint damage. Pre-operative optimisation includes managing diabetes, controlling blood pressure, treating anaemia, addressing dental issues, and losing weight if appropriate. Recovery from joint replacement requires commitment to rehabilitation but most patients experience dramatic pain relief and functional improvement. Our team provides thorough pre-operative education, expert surgical care, and structured post-operative rehabilitation to maximise outcomes for our Jharsuguda patients.',
        ],
      },
      {
        heading: 'Sports Injuries — Prevention, Treatment, and Return to Play',
        segments: [
          'Active Jharsuguda residents who play cricket, football, kabaddi, badminton, or run for fitness are prone to sports-related injuries. Common injuries include ACL and meniscus tears in the knee, ankle sprains, rotator cuff strains, tennis elbow, hamstring strains, and shin splints. Most are managed conservatively with rest, ice, compression, elevation, physiotherapy, and gradual return to activity. More serious injuries may require arthroscopic or open surgery followed by structured rehabilitation. The key to successful return to play is completing a graduated rehab program rather than returning as soon as pain subsides. Our orthopaedic team includes sports injury specialists who provide complete care from acute injury to full recovery, including injury prevention counselling, sports-specific conditioning, and performance optimisation. Whether you are a competitive athlete or a weekend warrior, we help you return to your sport safely and strongly. We also advise on injury prevention through proper warm-up, technique correction, conditioning programs, and equipment selection — because the best injury is the one that never happens. Our orthopaedic team has supported countless local athletes, weekend sportspersons, and injured workers on their recovery journeys, and we would be honoured to support yours as well. Whether your goal is a cricket tournament, a return to manual labour, or simply walking your grandchildren to the park without pain, we are here to help you achieve it safely and sustainably.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Who is the best orthopaedic doctor in Jharsuguda?',
        a: 'Dr. Uditansu Das at A Square Hospital, Jharsuguda is an experienced orthopaedic surgeon with an MS in Orthopaedics and 12 years of clinical experience.',
      },
      {
        q: 'Does A Square Hospital Jharsuguda perform joint replacement surgery?',
        a: 'Our orthopaedics team manages joint conditions and performs fracture surgeries. For complex joint replacements, we provide referrals to appropriate specialist facilities as needed.',
      },
    ],
  }),
];

export const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return posts.find((p) => p.slug === slug);
}
