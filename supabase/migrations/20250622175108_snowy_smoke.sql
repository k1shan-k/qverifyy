/*
  # Allow anonymous application submissions

  1. Security Changes
    - Update INSERT policy on `applications` table to allow anonymous users
    - Allow both authenticated users (inserting their own applications) and anonymous users (with null user_id)
    
  2. Policy Details
    - Authenticated users can still insert applications with their own user_id
    - Anonymous users can insert applications with null user_id
    - This enables the application form to work for visitors who haven't created accounts yet
*/

-- Drop the existing restrictive INSERT policy
DROP POLICY IF EXISTS "Users can insert their own applications" ON applications;

-- Create a new INSERT policy that allows both authenticated and anonymous submissions
CREATE POLICY "Allow application submissions"
  ON applications
  FOR INSERT
  TO public
  WITH CHECK (
    -- Allow authenticated users to insert with their own user_id
    (auth.uid() IS NOT NULL AND auth.uid() = user_id)
    OR
    -- Allow anonymous users to insert with null user_id
    (auth.uid() IS NULL AND user_id IS NULL)
  );