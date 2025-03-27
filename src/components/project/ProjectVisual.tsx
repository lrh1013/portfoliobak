interface ProjectVisualProps {
  title: string
  image: string
}

const ProjectVisual = ({ title, image }: ProjectVisualProps) => {
  return (
    <section className="project-visual">
      <div className="maxinner">
        <h2>{title}</h2>
        <div className="bg">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ProjectVisual
