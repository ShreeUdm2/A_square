import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file or Netlify environment settings.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

export type Appointment = {
  id: string;
  patient_name: string;
  patient_email: string;
  patient_phone: string;
  department_id: string;
  doctor_id: string;
  appointment_date: string;
  appointment_time: string;
  reason?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  notes?: string;
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
