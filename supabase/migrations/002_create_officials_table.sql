-- Create officials table
CREATE TABLE IF NOT EXISTS officials (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    department TEXT,
    office_location TEXT,
    email TEXT,
    phone TEXT,
    photo_url TEXT,
    is_elected BOOLEAN DEFAULT false,
    display_order INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE officials ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Allow public read access on officials"
    ON officials FOR SELECT
    USING (true);

-- Create indexes
CREATE INDEX idx_officials_position ON officials(position);
CREATE INDEX idx_officials_display_order ON officials(display_order);

-- Add comments
COMMENT ON TABLE officials IS 'City government officials and their contact information';
COMMENT ON COLUMN officials.is_elected IS 'Whether the official is elected or appointed';
COMMENT ON COLUMN officials.display_order IS 'Order for displaying officials on the website';
