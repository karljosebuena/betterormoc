-- Create Budget-Related Tables for Ormoc City
-- Migration 009: Budget and Transparency Tables

-- ============================================
-- Budget Overview Table
-- ============================================
CREATE TABLE IF NOT EXISTS budget_overview (
    id BIGSERIAL PRIMARY KEY,
    year INTEGER NOT NULL UNIQUE,
    total_budget DECIMAL(15,2) NOT NULL,
    total_revenue DECIMAL(15,2),
    total_expenditure DECIMAL(15,2),
    surplus_deficit DECIMAL(15,2),
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Revenue Sources Table
-- ============================================
CREATE TABLE IF NOT EXISTS revenue_sources (
    id BIGSERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    source_name TEXT NOT NULL,
    category TEXT NOT NULL, -- 'local', 'national', 'other'
    amount DECIMAL(15,2) NOT NULL,
    percentage DECIMAL(5,2),
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Expenditure Categories Table
-- ============================================
CREATE TABLE IF NOT EXISTS expenditure_categories (
    id BIGSERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    category_name TEXT NOT NULL,
    sector TEXT NOT NULL, -- 'social_services', 'infrastructure', 'education', 'health', etc.
    amount DECIMAL(15,2) NOT NULL,
    percentage DECIMAL(5,2),
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Major Projects Table
-- ============================================
CREATE TABLE IF NOT EXISTS major_projects (
    id BIGSERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    project_name TEXT NOT NULL,
    sector TEXT NOT NULL,
    budget_allocation DECIMAL(15,2) NOT NULL,
    status TEXT, -- 'planned', 'ongoing', 'completed'
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Budget Documents Table
-- ============================================
CREATE TABLE IF NOT EXISTS budget_documents (
    id BIGSERIAL PRIMARY KEY,
    year INTEGER NOT NULL,
    document_type TEXT NOT NULL, -- 'annual_budget', 'quarterly_report', 'audit_report', etc.
    title TEXT NOT NULL,
    description TEXT,
    file_url TEXT,
    file_size TEXT,
    upload_date DATE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- Enable RLS
-- ============================================
ALTER TABLE budget_overview ENABLE ROW LEVEL SECURITY;
ALTER TABLE revenue_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE expenditure_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE major_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE budget_documents ENABLE ROW LEVEL SECURITY;

-- ============================================
-- Create Policies for Public Read Access
-- ============================================
CREATE POLICY "Allow public read access on budget_overview"
    ON budget_overview FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on revenue_sources"
    ON revenue_sources FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on expenditure_categories"
    ON expenditure_categories FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on major_projects"
    ON major_projects FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on budget_documents"
    ON budget_documents FOR SELECT
    USING (true);

-- ============================================
-- Create Indexes
-- ============================================
CREATE INDEX idx_budget_overview_year ON budget_overview(year);
CREATE INDEX idx_revenue_sources_year ON revenue_sources(year);
CREATE INDEX idx_revenue_sources_category ON revenue_sources(category);
CREATE INDEX idx_expenditure_categories_year ON expenditure_categories(year);
CREATE INDEX idx_expenditure_categories_sector ON expenditure_categories(sector);
CREATE INDEX idx_major_projects_year ON major_projects(year);
CREATE INDEX idx_major_projects_sector ON major_projects(sector);
CREATE INDEX idx_budget_documents_year ON budget_documents(year);
CREATE INDEX idx_budget_documents_type ON budget_documents(document_type);

-- ============================================
-- Add Comments
-- ============================================
COMMENT ON TABLE budget_overview IS 'Annual budget overview and summary for Ormoc City';
COMMENT ON TABLE revenue_sources IS 'Detailed breakdown of city revenue sources by year';
COMMENT ON TABLE expenditure_categories IS 'Detailed breakdown of city expenditures by sector';
COMMENT ON TABLE major_projects IS 'Major infrastructure and development projects with budget allocations';
COMMENT ON TABLE budget_documents IS 'Downloadable budget and financial documents';

COMMENT ON COLUMN revenue_sources.category IS 'Revenue category: local, national, or other';
COMMENT ON COLUMN expenditure_categories.sector IS 'Expenditure sector: social_services, infrastructure, education, health, administration, other';
COMMENT ON COLUMN major_projects.status IS 'Project status: planned, ongoing, or completed';
COMMENT ON COLUMN budget_documents.document_type IS 'Document type: annual_budget, quarterly_report, audit_report, procurement_plan, etc.';
