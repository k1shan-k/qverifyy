/*
  # Create applications table for certification requests

  1. New Tables
    - `applications`
      - `id` (uuid, primary key)
      - `project_name` (text)
      - `website` (text)
      - `email` (text)
      - `description` (text)
      - `launch_date` (date)
      - `agree_to_publish` (boolean)
      - `status` (text)
      - `created_at` (timestamptz)
      - `user_id` (uuid, references auth.users)

  2. Security
    - Enable RLS on `applications` table
    - Add policies for authenticated users to:
      - Insert their own applications
      - Read their own applications
*/

CREATE TABLE applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_name text NOT NULL,
  website text NOT NULL,
  email text NOT NULL,
  description text NOT NULL,
  launch_date date NOT NULL,
  agree_to_publish boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  user_id uuid REFERENCES auth.users NOT NULL
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own applications"
  ON applications
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own applications"
  ON applications
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);