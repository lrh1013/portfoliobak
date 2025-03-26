import { useEffect, useState } from 'react'
import { ProjectData } from '@/utils/interfaces/projectData'
import Styles from '@/components/project/project.module.scss'
import ProjectItem from '@/components/project/ProjectItem'

const ProjectList = () => {
  const [projects, setProjects] = useState<ProjectData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/projectData.json')
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        const data = await res.json() // 문자열 -> 객체 변환
        setProjects(data)
      } catch (err) {
        console.error('에러 발생:', err)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={Styles['project-list']}>
      {projects.map((project, index) => (
        <ProjectItem key={index} title={project.title} image={project.image} />
      ))}
    </div>
  )
}

export default ProjectList
