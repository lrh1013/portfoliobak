import { Link } from 'react-router-dom'
import Styles from '@/components/project/project.module.scss'
import noThumb from '@/assets/images/common/no-image.jpg'

interface ProjectItemProps {
  projectID: string
  title: string
}

/**
 * 썸네일 이미지를 glob으로 가져오기
 * 각 프로젝트의 폴더명과 projectID를 매칭
 */
const thumbImages = import.meta.glob(
  '@/assets/images/portfolio/*/thumb.{jpg,jpeg,png,webp,gif}',
  {
    eager: true,
    import: 'default',
  },
)

const ProjectItem = ({ projectID, title }: ProjectItemProps) => {
  /**
   * 썸네일 이미지 있는지 확인
   * undefined 일 경우 기본 no-thumb 이미지로 대체
   */
  const matchedImage = Object.entries(thumbImages).find(([path]) =>
    new RegExp(`/portfolio/${projectID}/thumb\\.(jpg|jpeg|png|webp|gif)$`).test(
      path,
    ),
  )?.[1] as string

  return (
    <article className={`${Styles['project-item']}`}>
      <Link to={`/projects/${projectID}`}>
        <figure>
          <img
            src={matchedImage || noThumb}
            alt=""
            className={Styles['project-thumb']}
          />
          <figcaption className={Styles['project-title']}>{title}</figcaption>
        </figure>
      </Link>
    </article>
  )
}

export default ProjectItem
