import { useEffect, useState } from 'react'
import { ProjectData, FilterCategory } from '@/utils/interfaces/projectData'
import Styles from '@/components/project/project.module.scss'
import ProjectTab from '@/components/project/ProjectTab'
import ProjectItem from '@/components/project/ProjectItem'

const ProjectList = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [filter, setFilter] = useState<FilterCategory>('all')

  /**
   * 프로젝트 데이터 로드
   * - 컴포넌트 마운트 시 JSON에서 데이터 비동기 fetch
   * - category 누락 시 'all'로 설정
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/projectData.json')
        if (!res.ok) throw new Error(`HTTP status: ${res.status}`)

        const data: ProjectData[] = await res.json()
        const processedData = data.map((item) => ({
          ...item,
          category: item.category ?? 'all',
        }))

        setProjects(processedData)
      } catch (err) {
        console.error('에러 발생:', err)
      }
    }

    fetchData()
  }, [])

  /**
   * 필터 조건에 따라 프로젝트 목록 필터링
   */
  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <>
      <ProjectTab filter={filter} onChange={setFilter} />
      <div
        id={`panel-${filter}`}
        role="tabpanel"
        aria-labelledby={`tab-${filter}`}
        className={Styles['project-list']}
      >
        {filteredProjects.map((project, index) => (
          <ProjectItem
            key={index}
            projectID={project.projectID}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>
    </>
  )
}

export default ProjectList
