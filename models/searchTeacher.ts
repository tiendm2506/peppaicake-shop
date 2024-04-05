export interface SearchTeacherParams {
  page?: number
  limit?: number
  language?: string
  nationality_id?: string
  country_id?: string
  gender_id?: string
  major_id?: string
  region_id?: string
  tags_id?: string
  subject_id?: string
  certification_id?: string
  keyword?: string
}

export interface SearchTeacher {
  avatar: string
  country_name: string
  gender: number
  name: string[][]
  nationality_id: number
  nationality_name: string
  slug: string
  tags: string
  total_booking: string
  ranking: number
  subject: {
    id: number,
    name: string
  }[]
  subject_id: number
  region: string
  country_group: string
}

export interface Certificate {
  at: string
  certificate: string
}

export interface TeacherDetail {
  avatar: string
  birthday?: number
  country: string
  country_group?: string
  education_background: {
    en: Certificate[]
    id: Certificate[]
    th: Certificate[]
    vi: Certificate[]
  },
  tags: string
  name: string[][]
  other_working_experience: string[]
  teaching_experience: {
    en: Certificate[]
    id: Certificate[]
    th: Certificate[]
    vi: Certificate[]
  }
  ranking: number
  subject_name: string
  nationality_id?: number
  region?: string
}

export interface SearchTeacherConfig {
  gender: { [key: string]: string }
  major: { [key: string]: string }
  nationality: {
    [key: string]: {
      name: string,
      region: { [key: string]: string }
      country: { [key: string]: string }
    }
  }
  tags: { [key: string]: string }
  subject: { [key: string]: string }
  certification: { [key: string]: string }
}

export interface Schedule {
  begin_at: 'string'
  created_at?: 'string'
  created_by?: 'string'
  end_at: 'string'
  id: 'string'
  name: 'string'
  updated_at?: 'string'
  updated_by?: 'string'
  visible?: 'string'
  data?: {
    [key: number]: ScheduleDetail[]
  }
}

export interface ScheduleDetail {
  date: string
  date_format: string
  id?: string
  position_of_shift?: string
  schedule_id: string
  status: string
}

export interface WeekCalendar {
  number: number
  text: string
  timestamp: number
}
export interface FilterTeacherParams {
  page?: number
  limit?: number
  country_id?: string
  gender_id?: string
  major_id?: string
  nationality_id?: string
  region_id?: string
  tags_id?: string
  subject_id?: string
  certification_id?: string
  keyword?: string
}