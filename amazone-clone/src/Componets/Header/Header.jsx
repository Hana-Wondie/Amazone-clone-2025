
import classes from "../Header/Header.module.css"
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LowerHeader from "./LowerHeader";
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
      <section className={classes.outerContainer}>
        <div className={classes.innerConatainer}>
          <div className={classes.divOne}>
            <div className={classes.linkWrapper}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
            </div>
            <div className={classes.locationContainer}>
              <div className={classes.locationIcon}>
                <LocationOnIcon />
              </div>
              <div>
                <p>Delivered to</p>
                <p>Ethiopia</p>
              </div>
            </div>
          </div>
          <div className={classes.divTwo}>
            <div className={classes.roundBorder}>
              <select name="" id="">
                <option value="">All</option>
              </select>
            </div>
            <div className={classes.inputContainer}>
              <input type="text" name="" id="" placeholder="select products" />
            </div>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <div className={classes.flagContainer}>
              <div>
                <img
                  src="https://pngimg.com/uploads/flags/small/flags_PNG14592.png"
                  alt=""
                />
              </div>
              <div>
                <select name="" id="">
                  <option value="" className={classes.enselect}>
                    EN
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className={classes.divThree}>
            <div className={classes.linkContainer}>
              <Link to="/auth">sign in</Link>
              <Link to="/auth">Accounts & Lists</Link>
            </div>
            <div className={classes.linkContainer}>
              <Link to="/orders">returns</Link>
              <Link to="/orders">& Orders</Link>
            </div>
            <div className={`${classes.linkContainer} ${classes.cart}`}>
              <div>
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </div>
              <div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header
