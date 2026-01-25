-- Add downloads column to services table
ALTER TABLE services
ADD COLUMN downloads JSONB DEFAULT '[]'::jsonb;

-- Update Marriage Certificate with downloadable forms
UPDATE services
SET 
  downloads = '[
    {
      "title": "Application for Marriage License",
      "url": "https://solano.gov.ph/wp-content/uploads/2021/10/Application-for-Marriage-License.pdf",
      "type": "PDF"
    },
    {
      "title": "Affidavit of Parental Consent",
      "url": "#",
      "type": "DOCX"
    }
  ]'::jsonb,
  updated_at = NOW()
WHERE slug = 'marriage-certificate';
