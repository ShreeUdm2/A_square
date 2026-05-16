import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { QuickAccess } from '../components/QuickAccess';
import { Statistics } from '../components/Statistics';
import { Departments } from '../components/Departments';
import { Doctors } from '../components/Doctors';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HealthPackages } from '../components/HealthPackages';
import { SpecialOffers } from '../components/SpecialOffers';
import { AppointmentForm } from '../components/AppointmentForm';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Helmet>
        <title>A Square Hospital Jharsuguda | Best Multispeciality Hospital in Jharsuguda</title>
        <meta name="description" content="A Square Hospital Jharsuguda — expert gynaecology, maternity care, NICU, IVF, orthopaedics & 24/7 emergency services. Trusted healthcare for families across Jharsuguda & Odisha. Call +91 9827973991." />
        <meta name="keywords" content="best hospital in Jharsuguda, multispeciality hospital Jharsuguda, gynaecologist Jharsuguda, maternity hospital Jharsuguda, NICU hospital Jharsuguda, IVF clinic Jharsuguda, A Square Hospital" />
        <link rel="canonical" href="https://asquarehospital.com/" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What specialities does A Square Hospital Jharsuguda offer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Square Hospital Jharsuguda offers gynaecology, maternity care, advanced NICU, IVF & fertility care, general medicine, general surgery, orthopaedics, paediatrics, diagnostics, and 24/7 emergency care."
                }
              },
              {
                "@type": "Question",
                "name": "Does A Square Hospital Jharsuguda provide 24/7 emergency services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, A Square Hospital provides round-the-clock emergency and critical care services. Contact us at +91 9827973991."
                }
              },
              {
                "@type": "Question",
                "name": "How can I book an appointment at A Square Hospital?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book an appointment by calling +91 9827973991, emailing Asquarehospital@gmail.com, or using the online appointment form on our website."
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      <Hero />
      <QuickAccess />
      <Statistics />
      <Departments />
      <Doctors limit={3} showViewAll={true} />
      <WhyChooseUs />
      <HealthPackages />
      <SpecialOffers />
      <AppointmentForm />
      <Testimonials />
      <Contact />
    </>
  );
}
