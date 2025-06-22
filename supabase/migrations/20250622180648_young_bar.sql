/*
  # Allow anonymous application submissions

  1. Security Changes
    - Add RLS policy to allow anonymous users to insert applications
    - This enables the application form to work without user authentication
    - Anonymous users can only insert, not read or update applications

  2. Policy Details
    - Allow INSERT for anonymous users when user_id is null
    - Maintains existing policies for authenticated users
*/

-- Allow anonymous users to insert applications
CREATE POLICY "Allow anonymous application submissions"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (user_id IS NULL);