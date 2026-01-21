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
