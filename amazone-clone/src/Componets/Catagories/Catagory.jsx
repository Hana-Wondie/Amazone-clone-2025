
import catagoryImage from "../Catagories/catagoryFullInfo.js"
import CatagoryCard from "./CatagoryCard.jsx";
import classes from "../Catagories/Catagory.module.css"
function Catagory() {
  return (
    <div className= {classes.catagory_container}>
      {catagoryImage?.map((infos) => (
        <CatagoryCard
        key = {infos.name}
        title = {infos.title}
        imgLink = {infos.imgLink} 
        name = {infos.name}
      
        />
))}
    </div>
  );
}

export default Catagory
