import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col flex-nowrap justify-center content-center gap-3 pb-5'>
        <div className='flex justify-center' >
            <h3>Portafolio 2024</h3>
            <ul>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className='flex justify-center'>
            <p>copyright &copy;2024 designed by <span>Milenaria</span></p>
        </div>
    </div>
  )
}

export default Footer