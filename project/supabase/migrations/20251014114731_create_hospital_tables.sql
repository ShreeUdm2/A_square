/*
  # Create MaxHeal Hospital Database Schema

  1. New Tables
    - `departments`
      - `id` (uuid, primary key)
      - `name` (text) - Department name
      - `slug` (text, unique) - URL-friendly identifier
      - `description` (text) - Department description
      - `icon` (text) - Icon identifier for UI
      - `image_url` (text, optional) - Department image
      - `treatments` (text array, optional) - List of treatments offered
      - `equipment` (text array, optional) - Available equipment
      - `display_order` (integer) - Order for display
      - `is_active` (boolean) - Active status
      - `created_at` (timestamp)

    - `doctors`
      - `id` (uuid, primary key)
      - `name` (text) - Doctor's full name
      - `slug` (text, unique) - URL-friendly identifier
      - `department_id` (uuid, foreign key) - References departments
      - `qualification` (text) - Educational qualifications
      - `experience_years` (integer) - Years of experience
      - `specialization` (text array) - Areas of expertise
      - `bio` (text, optional) - Doctor's biography
      - `image_url` (text, optional) - Profile picture
      - `consultation_fee` (numeric) - Consultation charges
      - `is_available` (boolean) - Availability status
      - `display_order` (integer) - Order for display
      - `created_at` (timestamp)

    - `appointments`
      - `id` (uuid, primary key)
      - `patient_name` (text) - Patient's name
      - `patient_email` (text) - Patient's email
      - `patient_phone` (text) - Patient's phone number
      - `department_id` (uuid, foreign key) - References departments
      - `doctor_id` (uuid, foreign key) - References doctors
      - `appointment_date` (date) - Appointment date
      - `appointment_time` (text) - Appointment time
      - `reason` (text, optional) - Reason for visit
      - `status` (text) - Status: pending, confirmed, cancelled, completed
      - `notes` (text, optional) - Additional notes
      - `created_at` (timestamp)

    - `testimonials`
      - `id` (uuid, primary key)
      - `patient_name` (text) - Patient's name
      - `department` (text, optional) - Department name
      - `rating` (integer) - Rating out of 5
      - `comment` (text) - Testimonial comment
      - `is_approved` (boolean) - Approval status for display
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access on departments and doctors
    - Add policies for authenticated insert on appointments and testimonials
    - Add policies for public read on approved testimonials only
*/

-- Create departments table
CREATE TABLE IF NOT EXISTS departments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  image_url text,
  treatments text[],
  equipment text[],
  display_order integer NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create doctors table
CREATE TABLE IF NOT EXISTS doctors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  department_id uuid NOT NULL REFERENCES departments(id) ON DELETE CASCADE,
  qualification text NOT NULL,
  experience_years integer NOT NULL DEFAULT 0,
  specialization text[] NOT NULL,
  bio text,
  image_url text,
  consultation_fee numeric NOT NULL DEFAULT 500,
  is_available boolean NOT NULL DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  patient_email text NOT NULL,
  patient_phone text NOT NULL,
  department_id uuid NOT NULL REFERENCES departments(id) ON DELETE CASCADE,
  doctor_id uuid NOT NULL REFERENCES doctors(id) ON DELETE CASCADE,
  appointment_date date NOT NULL,
  appointment_time text NOT NULL,
  reason text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  department text,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  is_approved boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE doctors ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Departments policies (public read access)
CREATE POLICY "Anyone can view active departments"
  ON departments FOR SELECT
  USING (is_active = true);

-- Doctors policies (public read access)
CREATE POLICY "Anyone can view available doctors"
  ON doctors FOR SELECT
  USING (is_available = true);

-- Appointments policies (public can insert, but cannot read others' appointments)
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  WITH CHECK (true);

-- Testimonials policies (public read for approved only, public insert)
CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  USING (is_approved = true);

CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_doctors_department ON doctors(department_id);
CREATE INDEX IF NOT EXISTS idx_appointments_department ON appointments(department_id);
CREATE INDEX IF NOT EXISTS idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON appointments(appointment_date);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved);
