export interface Career {
  id: number
  quantity: number
  short_title: string
  slug: string
  title: string
  end_date: number
  department_name: string
  content?: string
  job_code: string
  link_submit: string
}

export interface CareerConfig {
  name: string
  id: string
}