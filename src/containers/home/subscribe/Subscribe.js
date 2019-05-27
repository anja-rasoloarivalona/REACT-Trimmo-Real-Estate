import React from 'react';
import classes from './Subscribe.css';
import handshake from '../../../assets/img/handshake.jpg';
const subscribe = () => {
    return (
        <section className={classes.Subscribe}
            style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(" + handshake + ")",
            backgroundPosition: "center",
            backgroundSize: "cover"}}>

              <div className={classes.SubscribeTitle}>
                <div>SUBSCRIBE</div>
                <div>NEWSLETTER</div>
              </div>
              <p>
              consectetur adipisicing elit. Beatae ducimus in enim quae 
              </p>
              <form className={classes.Form}>              
                    <input type="email" placeholder="Email adress" className={classes.Input}/>
                    <input className={classes.FormCTA} type="submit" value="Send"></input>                         
              </form>
        </section>
    )
}

export default subscribe;