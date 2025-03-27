import { Link } from 'react-router-dom'
import Styles from '@/components/project/project.module.scss'

interface ProjectItemProps {
  projectID: string
  title: string
  image: string
}

const ProjectItem = ({ projectID, title, image }: ProjectItemProps) => {
  return (
    <article className={Styles['project-item']}>
      <Link to={`/projects/${projectID}`}>
        <figure>
          <img src={image} alt="" className={Styles['project-thumb']} />
          <figcaption className={Styles['project-title']}>{title}</figcaption>
        </figure>
      </Link>
    </article>
  )
}

export default ProjectItem
