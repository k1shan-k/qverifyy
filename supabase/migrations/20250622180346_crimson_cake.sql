/*
  # Fix Application Submission for Anonymous Users

  1. Policy Updates
    - Drop existing restrictive policies
    - Create new policies that allow anonymous submissions
    - Maintain security for authenticated users

  2. Security
    - Anonymous users can only insert applications with null user_id
    - Authenticated users can insert applications with their own user_id
    - All users can read their own applications
*/

-- Drop existing policies to recreate them properly
DROP POLICY IF EXISTS "Users can insert their own applications" ON applications;
DROP POLICY IF EXISTS "Allow application submissions" ON applications;
DROP POLICY IF EXISTS "Anonymous users can submit applications" ON applications;

-- Create a comprehensive INSERT policy that handles both cases
CREATE POLICY "Enable application submissions for all users"
  ON applications
  FOR INSERT
  WITH CHECK (
    -- Case 1: Anonymous users (not authenticated) can submit with user_id = NULL
    (auth.uid() IS NULL AND user_id IS NULL)
    OR
    -- Case 2: Authenticated users can submit with their own user_id
    (auth.uid() IS NOT NULL AND auth.uid() = user_id)
  );

-- Ensure the SELECT policy allows users to read their own applications
-- Keep existing SELECT policy but make sure it's properly defined
DROP POLICY IF EXISTS "Users can read their own applications" ON applications;

CREATE POLICY "Enable read access for application owners"
  ON applications
  FOR SELECT
  USING (
    -- Authenticated users can read their own applications
    (auth.uid() IS NOT NULL AND auth.uid() = user_id)
    OR
    -- For anonymous applications, we might want to restrict this
    -- For now, let's not allow reading anonymous applications for security
    false
  );

-- Add a policy for admins to read all applications (optional)
-- This would be useful for the Qverify team to review applications
CREATE POLICY "Enable read access for service role"
  ON applications
  FOR SELECT
  TO service_role
  USING (true);