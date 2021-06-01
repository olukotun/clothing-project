import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown';

const Header = ({ currentUser,hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {
        hidden ? null :
        <CartDropDown />
        }
    </div>
  );
};
const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({
  // currentUser: state.user.currentUser,
  currentUser,
  hidden
});
export default connect(mapStateToProps)(Header);
