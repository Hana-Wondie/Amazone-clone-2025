
import classes from "../Catagories/Catagory.module.css"
function CatagoryCard({title, imgLink}) {
  return (
    <div className= {classes.Catagory}>
      <a href="">
        <span>
          <h2>{title}</h2>
        </span>
        <img src= {imgLink} alt="" />
        <p>shop now</p>
      </a>
      
    </div>
  )
}

export default CatagoryCard

