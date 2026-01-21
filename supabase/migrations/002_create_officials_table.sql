-- Officials table
CREATE TABLE IF NOT EXISTS officials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  department TEXT,
  email TEXT,
  phone TEXT,
  photo_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for ordering
CREATE INDEX IF NOT EXISTS idx_officials_order ON officials(order_index);
CREATE INDEX IF NOT EXISTS idx_officials_department ON officials(department);

-- Enable Row Level Security
ALTER TABLE officials ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Public read access for officials"
  ON officials
  FOR SELECT
  USING (true);

-- Add comment
COMMENT ON TABLE officials IS 'Government officials directory with contact information';
