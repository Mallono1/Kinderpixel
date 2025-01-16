import React from 'react'
import './Programs.css'
import program_1 from '../../assets/img/Program_1.jpg'
import program_2 from '../../assets/img/Program_2.jpg'
import program_3 from '../../assets/img/Program_3.jpg'
import program_icon_1 from "../../assets/img/hand-logo2.png"
import program_icon_2 from "../../assets/img/hand-logo2.png"
import program_icon_3 from "../../assets/img/hand-logo2.png"

const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'> 
            <img src={program_1} alt='' />
            <div className='caption'>
                <img src={program_icon_1} alt='' />
                <p>Alterstufe 5-7</p>
            </div>
        </div>
        <div className='program'> 
            <img src={program_2} alt='' />
            <div className='caption'>
                <img src={program_icon_2} alt='' />
                <p>Alterstufe 8-10</p>
            </div>
        </div>
        <div className='program'> 
            <img src={program_3} alt='' />
            <div className='caption'>
                <img src={program_icon_3} alt='' />
                <p>Alterstufe 11-14</p>
            </div>
        </div>
    </div>
  )
}

export default Programs