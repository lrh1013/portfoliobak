import { Link } from 'react-router-dom'
import { ProjectItemProps } from '@/utils/interfaces/projectData'
import Styles from '@/components/project/project.module.scss'

const ProjectItem = ({ title, image }: ProjectItemProps) => {
  return (
    <article className={Styles['project-item']}>
      <Link to="">
        <figure>
          <img src={image} alt="" className={Styles['project-thumb']} />
          <figcaption className={Styles['project-title']}>{title}</figcaption>
        </figure>
      </Link>
    </article>
  )
}

export default ProjectItem
