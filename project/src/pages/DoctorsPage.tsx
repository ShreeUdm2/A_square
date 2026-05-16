import { Helmet } from 'react-helmet-async';
import { Doctors } from '../components/Doctors';

export function DoctorsPage() {
  return (
    <>
      <Helmet>
        <title>Best Doctors in Jharsuguda | Expert Specialists at A Square Hospital</title>
        <meta name="description" content="Meet the expert doctors at A Square Hospital Jharsuguda — specialists in gynaecology, obstetrics, surgery, orthopaedics, paediatrics, cardiology, neurology & more. Book an appointment today." />
        <meta name="keywords" content="best doctors Jharsuguda, gynaecologist Jharsuguda, doctor near me Jharsuguda, specialist doctor Jharsuguda, orthopaedic doctor Jharsuguda, cardiologist Jharsuguda, paediatrician Jharsuguda, Dr Babita Ramani" />
        <link rel="canonical" href="https://asquarehospital.com/doctors" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Doctors at A Square Hospital Jharsuguda",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Physician",
                  "name": "Dr. Babita Ramani",
                  "medicalSpecialty": "Gynaecology & Obstetrics",
                  "description": "MD O&G, FICOG, IVF Fellowship (KIEL Germany) — 15+ years experience",
                  "worksFor": {"@type": "MedicalOrganization", "name": "A Square Hospital Jharsuguda"}
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Physician",
                  "name": "Dr. Dipti Arland",
                  "medicalSpecialty": "General Medicine",
                  "description": "MBBS, RHS O&G — 20+ years experience",
                  "worksFor": {"@type": "MedicalOrganization", "name": "A Square Hospital Jharsuguda"}
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Physician",
                  "name": "Dr. Romi Arland",
                  "medicalSpecialty": "General Surgery",
                  "description": "MS, DLS — Laparoscopic Surgery Specialist, 20+ years experience",
                  "worksFor": {"@type": "MedicalOrganization", "name": "A Square Hospital Jharsuguda"}
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      <div className="pt-20">
        <Doctors />
      </div>
    </>
  );
}
