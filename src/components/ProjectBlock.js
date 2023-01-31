import React from 'react'

const ProjectBlock = ({title, description, view, tags, img}) => {
  return (
    <article className="project-block">
      <div className="project-block__left">
        <h3 className="project-block__title">{title}</h3>
        <p className="project-block__description">{description}</p>
        <a href={view} target="_blank" rel="noreferrer" className="btn btn--sm">View</a>
        <p className="project-block__tags">{tags}</p>
      </div>
      <div className="project-block__right">
        <figure className="project-block__image">
          <img src={img} alt="" />
        </figure>
      </div>
    </article>
  )
}

export default ProjectBlock
