
import classes from "../Catagories/Catagory.module.css"
import {Link} from "react-router-dom"
function CatagoryCard({title, imgLink, name}) {
  return (
    <div className={classes.Catagory}>
      <Link to={`/categories/${name.replace(" ", "%20")}`}>
        <span>
          <h2>{title}</h2>
        </span>
        <img src={imgLink} alt="" />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard

