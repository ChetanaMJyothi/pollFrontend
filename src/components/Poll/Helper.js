import React from 'react'
import style from './Helper.module.css';
const Helper = () => {
    return (
        <div className={style.helper_div}>
            <ol>
                <li className={style.liItems}>Your survey is live now, you can see it in Active poll section and also see what other users have posted</li>
                <li className={style.liItems}>Go to Results section to see others opinion on your question</li>
            </ol>
        </div>
    )
}

export default Helper
