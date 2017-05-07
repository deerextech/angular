import React from 'react';
import {Link} from 'react-router'
export default NotFound = () =>{
  return (

    <div className="lightbox-view">
      <div className="lightbox-view__box">
        <h1>Page Not Found</h1>
    <p>This is not the page you're looking for.  #404</p>
    <Link to="/" className="button button--link">Head Home </Link>
  </div>
</div>
)
}
