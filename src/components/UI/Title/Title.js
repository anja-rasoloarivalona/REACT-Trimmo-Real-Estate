import React from 'react';
import classes from './Title.css';


const title = (props) => {
  return (
    <div className={classes.TitleContainer}>
            <div className={classes.TitleText}>
                <div>{props.title1}</div>
                <div>{props.title2}</div>
            </div>
            <div className={classes.TitleLine}>
                <hr />
                <hr />
            </div>
            
            
    </div>
  )
}

export default title
