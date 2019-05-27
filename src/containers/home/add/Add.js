import React from 'react';
import classes from './Add.css';

const add = () => {
    return (
        <section className={classes.Add}
                style={{backgroundImage: "linear-gradient(110deg, rgba(198, 153, 99,1) 0%, rgba(198, 153, 99,1) 46%, white 46%, white 47%,  rgba(16, 29, 44,1) 47%)",
                backgroundPosition: "center",
                backgroundSize: "cover"}}>

            <div className={classes.AddInfo1}>
                <div>FIND YOUR</div>
                <div>DREAM HOME</div>
            </div>

            <div className={classes.AddInfo2}>
                <div>WE ARE READY TO RECEIVE YOUR CALL</div>
                <div>+1 514 123 1234</div>
            </div>

        </section>
    )
}

export default add;