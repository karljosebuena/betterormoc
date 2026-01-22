export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      services: {
        Row: {
          id: string
          title: string
          category: string
          description: string | null
          requirements: Json | null
          fees: string | null
          processing_time: string | null
          office: string | null
          contact_info: Json | null
          slug: string
          steps: Json | null
          faq: Json | null
          related_services: string[] | null
          office_details: Json | null
          requirements_by_type: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          category: string
          description?: string | null
          requirements?: Json | null
          fees?: string | null
          processing_time?: string | null
          office?: string | null
          contact_info?: Json | null
          slug: string
          steps?: Json | null
          faq?: Json | null
          related_services?: string[] | null
          office_details?: Json | null
          requirements_by_type?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          category?: string
          description?: string | null
          requirements?: Json | null
          fees?: string | null
          processing_time?: string | null
          office?: string | null
          contact_info?: Json | null
          slug?: string
          steps?: Json | null
          faq?: Json | null
          related_services?: string[] | null
          office_details?: Json | null
          requirements_by_type?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      officials: {
        Row: {
          id: string
          name: string
          position: string
          department: string | null
          email: string | null
          phone: string | null
          photo_url: string | null
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          position: string
          department?: string | null
          email?: string | null
          phone?: string | null
          photo_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          position?: string
          department?: string | null
          email?: string | null
          phone?: string | null
          photo_url?: string | null
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      ordinances: {
        Row: {
          id: string
          number: string
          title: string
          date_passed: string | null
          description: string | null
          pdf_url: string | null
          category: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          number: string
          title: string
          date_passed?: string | null
          description?: string | null
          pdf_url?: string | null
          category?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          number?: string
          title?: string
          date_passed?: string | null
          description?: string | null
          pdf_url?: string | null
          category?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      resolutions: {
        Row: {
          id: string
          number: string
          title: string
          date_passed: string | null
          description: string | null
          pdf_url: string | null
          category: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          number: string
          title: string
          date_passed?: string | null
          description?: string | null
          pdf_url?: string | null
          category?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          number?: string
          title?: string
          date_passed?: string | null
          description?: string | null
          pdf_url?: string | null
          category?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      statistics: {
        Row: {
          id: string
          category: string
          label: string
          value: string
          year: number | null
          source: string | null
          metadata: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          category: string
          label: string
          value: string
          year?: number | null
          source?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          category?: string
          label?: string
          value?: string
          year?: number | null
          source?: string | null
          metadata?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

// Helper types for services
export type Service = Database['public']['Tables']['services']['Row']
export type Official = Database['public']['Tables']['officials']['Row']
export type Ordinance = Database['public']['Tables']['ordinances']['Row']
export type Resolution = Database['public']['Tables']['resolutions']['Row']
export type Statistic = Database['public']['Tables']['statistics']['Row']

// Enhanced service field types
export interface ServiceStep {
  title: string
  description: string
  order: number
}

export interface ServiceFAQ {
  question: string
  answer: string
  order: number
}

export interface OfficeDetails {
  name: string
  location: string
  address: string
  phone: string
  hours: string
  map_coordinates?: {
    lat: number
    lng: number
  }
}

export interface RequirementsByType {
  [key: string]: string[]
}
