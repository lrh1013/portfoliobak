export type Category = 'work' | 'practice'

export interface ProjectData {
  projectID: string
  category: Category
  title: string
  description: string
  image: string
  siteUrl?: string
}

export interface ProjectItemProps {
  title: string
  image: string
}

export type FilterCategory = 'all' | Category
