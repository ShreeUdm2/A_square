import { Helmet } from 'react-helmet-async';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact A Square Hospital Jharsuguda | Book Appointment — Call +91 9827973991</title>
        <meta name="description" content="Contact A Square Hospital Jharsuguda for appointments, emergencies or enquiries. Call +91 9827973991 or email Asquarehospital@gmail.com. 24/7 emergency services available." />
        <meta name="keywords" content="contact A Square Hospital Jharsuguda, book appointment Jharsuguda, hospital phone number Jharsuguda, hospital address Jharsuguda, emergency hospital Jharsuguda" />
        <link rel="canonical" href="https://asquarehospital.com/contact" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact A Square Hospital Jharsuguda",
            "description": "Get in touch with A Square Hospital Jharsuguda for appointments, medical enquiries and emergency care.",
            "url": "https://asquarehospital.com/contact",
            "mainEntity": {
              "@type": "MedicalOrganization",
              "name": "A Square Hospital",
              "telephone": "+919827973991",
              "email": "Asquarehospital@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jharsuguda",
                "addressRegion": "Odisha",
                "addressCountry": "IN"
              }
            }
          }
        `}</script>
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </>
  );
}
