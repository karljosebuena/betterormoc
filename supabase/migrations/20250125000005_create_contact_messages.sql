-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting messages (public can insert)
CREATE POLICY "Allow public insert to contact_messages"
ON contact_messages
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy for viewing messages (only authenticated admins can view)
-- Assuming we interpret "authenticated" as admins for this context
CREATE POLICY "Allow authenticated view contact_messages"
ON contact_messages
FOR SELECT
TO authenticated
USING (true);

COMMENT ON TABLE contact_messages IS 'Stores messages submitted via the contact form';
