interface ProjectDescriptionProps {
  description: string
  siteUrl: string
}

const ProjectDescription = ({
  description,
  siteUrl,
}: ProjectDescriptionProps) => {
  return (
    <section className="project-visual">
      <div className="maxinner">
        <p>{description}</p>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-link"
        >
          사이트 바로가기
        </a>
      </div>
    </section>
  )
}

export default ProjectDescription
