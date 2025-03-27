import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProjectVisual from '@/components/project/ProjectVisual'
import ProjectDescription from '@/components/project/ProjectDescription'
import { ProjectData } from '@/utils/interfaces/projectData'

const ProjectDetail = () => {
  const { projectID } = useParams()
  const [project, setProject] = useState<ProjectData | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data/projectData.json')
        if (!res.ok) throw new Error(`HTTP status: ${res.status}`)

        const data: ProjectData[] = await res.json()
        const target = data.find((item) => item.projectID === projectID)
        setProject(target ?? null)
      } catch (err) {
        console.error('에러 발생:', err)
        setProject(null)
      }
    }

    fetchData()
  }, [projectID])

  if (!project) return <p>해당 프로젝트를 찾을 수 없습니다.</p>

  return (
    <article>
      <ProjectVisual title={project.title} image={project.image} />
      <ProjectDescription
        description={project.description}
        siteUrl={project.siteUrl}
      />
    </article>
  )
}

export default ProjectDetail
