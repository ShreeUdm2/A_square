import { useEffect, useState } from 'react';
import { Award, Calendar } from 'lucide-react';
import { supabase, Doctor, Department } from '../lib/supabase';

const fallbackPhotos = [
  'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5214949/pexels-photo-5214949.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
  'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400',
];

export function Doctors() {
  const [doctors, setDoctors] = useState<(Doctor & { department: Department | null })[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
  }, []);

  async function fetchDoctors() {
    try {
      const { data, error } = await supabase
        .from('doctors')
        .select(`
          *,
          department:departments(*)
        `)
        .eq('is_available', true)
        .order('display_order', { ascending: true })
        .limit(6);

      if (error) throw error;
      setDoctors(data || []);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading doctors...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="doctors" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#00B894] font-semibold text-sm uppercase tracking-wider">
            Our Medical Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#0077B6] to-[#00B894] bg-clip-text text-transparent">Expert Doctors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Highly qualified and experienced medical professionals dedicated to your health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 bg-gradient-to-br from-[#0077B6] to-[#00B894] overflow-hidden">
                <img
                  src={doctor.image_url || fallbackPhotos[index % fallbackPhotos.length]}
                  alt={doctor.name}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1.5 shadow-lg">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#00B894]" />
                    <span className="text-sm font-semibold text-gray-800">{doctor.experience_years}+ Years</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {doctor.department?.name || 'General'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 font-medium mb-2">{doctor.qualification}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {Array.isArray(doctor.specialization) ? doctor.specialization.join(', ') : doctor.specialization}
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Consultation Fee</div>
                    <div className="text-xl font-bold text-[#0077B6]">₹{doctor.consultation_fee}</div>
                  </div>
                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0077B6] to-[#00B894] text-white px-4 py-2.5 rounded-lg hover:shadow-lg transition transform hover:scale-105 font-medium text-sm"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
