/**
 * 필터링 가능한 프로젝트 카테고리
 * 'all'      : 전체
 * 'work'     : 실무 프로젝트
 * 'practice' : 연습용 프로젝트
 */
export type FilterCategory = 'all' | 'work' | 'practice'

/**
 * 프로젝트 데이터 타입 정의
 * 'projectID'   : 고유 아이디
 * 'category'    : 카테고리
 * 'title'       : 프로젝트 제목
 * 'description' : 프로젝트 설명
 * 'siteUrl'     : 프로젝트 실주소
 */
export interface ProjectData {
  projectID: string
  category?: FilterCategory
  title: string
  description: string
  siteUrl: string
}
