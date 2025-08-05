export interface Availability {
  business_hours: {
    [day in
      | 'monday'
      | 'tuesday'
      | 'wednesday'
      | 'thursday'
      | 'friday'
      | 'saturday'
      | 'sunday']?: {
      open: string // e.g., "09:00"
      close: string // e.g., "17:00"
    }
  }
  services: {
    name: string
    hours_available: {
      day:
        | 'monday'
        | 'tuesday'
        | 'wednesday'
        | 'thursday'
        | 'friday'
        | 'saturday'
        | 'sunday'
      start: string // e.g., "10:00"
      end: string // e.g., "14:00"
    }[]
  }[]
}

export interface Conversion {
  additionalInfo?: string
  goal: string
  link?: string
  number?: string
}

export interface Business {
  id: string // uuid
  created_at: string // ISO timestamp
  name?: string | null
  contact_name?: string | null
  url?: string | null
  message_style?: string | null
  email?: string | null
  phone_number?: string | null
  availability?: Availability | null // jsonb
}

export interface Assistant {
  id: string // uuid
  created_at: string // ISO timestamp
  business_id?: string | null // uuid FK
  lead_nurture_behavior?: string | null
  follow_up_behavior?: string | null
  messaging_style?: string | null
  messaging_examples?: Record<string, any> | null // jsonb
  number_of_messages?: number | null
  conversion: Conversion
}

export interface Lead {
  id: string // uuid
  created_at: string // ISO timestamp
  first_name?: string | null
  last_name?: string | null
  email?: string | null
  phone_number?: string | null
  business_id?: string | null // uuid FK
  customer_id?: string | null
  chat_logs?: Record<string, any>[] | null // jsonb[]
  business_number?: string | null
}

export interface User {
  id: string // uuid
  created_at: string // ISO timestamp
  first_name?: string | null
  last_name?: string | null
  email?: string | null
  clerk_id?: string | null
}
