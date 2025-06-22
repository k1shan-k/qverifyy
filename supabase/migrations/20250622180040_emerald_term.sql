/*
  # Allow anonymous application submissions

  1. Security Changes
    - Add RLS policy to allow anonymous users to insert applications
    - Maintain existing policies for authenticated users
    - Ensure anonymous submissions have user_id set to NULL

  This migration adds a policy that allows unauthenticated users (anon role) to submit 
  applications, which is necessary for the public application form to work.
*/

-- Add policy to allow anonymous users to insert applications
CREATE POLICY "Anonymous users can submit applications"
  ON applications
  FOR INSERT
  TO anon
  WITH CHECK (user_id IS NULL);