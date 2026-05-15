export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.1" };
  public: {
    Tables: {
      leads: {
        Row: {
          consent_given: boolean;
          created_at: string;
          email: string;
          id: string;
          message: string;
          name: string;
          phone: string;
        };
        Insert: {
          consent_given?: boolean;
          created_at?: string;
          email: string;
          id?: string;
          message: string;
          name: string;
          phone: string;
        };
        Update: {
          consent_given?: boolean;
          created_at?: string;
          email?: string;
          id?: string;
          message?: string;
          name?: string;
          phone?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
  };
};
