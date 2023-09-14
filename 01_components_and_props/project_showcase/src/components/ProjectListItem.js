function ProjectListItem({project}){

  const {name, about, phase, link, image} = project

  return(
    <>
      <l1>
        <br/>
        <h2>ProjectLisItem Component</h2>
        <p>{name}</p>
        <p>{about}</p>
        <a href = {link}>Project Link</a>
        {/* <img src= {image} /> */}
      </l1>
    </>
  )
}

export default ProjectListItem
