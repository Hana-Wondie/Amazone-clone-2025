import classes from "../Header/Header.module.css"
import MenuIcon from "@mui/icons-material/Menu";
function LowerHeader() {
  return (
    <>
     <section className= {classes.outerWrapper}>
<div className= {classes.firstDiv}>
    <div className= {classes.icon}>
<MenuIcon/>
    </div>
    <div>
<p>All</p>
    </div>
</div>
<div className= {classes.listWrapper}>
<li>Today's Deals</li>
<li>Customer Service</li>
<li>Registry</li>
<li>Gift Cards</li>
<li>Sell</li>
</div>

        </section> 
    </>
  )
}

export default LowerHeader
