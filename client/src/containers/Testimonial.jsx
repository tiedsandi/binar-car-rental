import { Box } from '@mui/material'
import React from 'react'
import './flickity.css'

// Create the function
export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement('script');
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

const Testimonial = () => {
    return (

        <section className="testimonial-section" id="testimonial">
            <Box mt={10} px={"6rem"}>
                <h1 className="title-2">Testimonial</h1>
                <p className="paragraf">Berbagai review positif dari pelanggan kami</p>
            </Box>

            <div className=" js-flickity row" data-flickity-options='{"wrapAround": true }'>
                <div className="konten-testimonial">
                    <div className="gambar-testimonial">
                        <img src="./images/img_photo (1).png" alt="orang" />
                    </div>
                    <div className="isi-testimonial">
                        <img src="./images/Rate.png" alt="" />
                        <p className="paragraf">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod”
                        </p>
                        <h6 className="title-3">John Dee 32, Bromo</h6>
                    </div>
                </div>
                <div className="konten-testimonial">
                    <div className="gambar-testimonial">
                        <img src="./images/img_photo (1).png" alt="orang" />
                    </div>
                    <div className="isi-testimonial">
                        <img src="./images/Rate.png" alt="" />
                        <p className="paragraf">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod”
                        </p>
                        <h6 className="title-3">John Dee 32, Bromo</h6>
                    </div>
                </div>
                <div className="konten-testimonial">
                    <div className="gambar-testimonial">
                        <img src="./images/img_photo.png" alt="orang" />
                    </div>
                    <div className="isi-testimonial">
                        <img src="./images/Rate.png" alt="" />
                        <p className="paragraf">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod”
                        </p>
                        <h6 className="title-3">John Dee 32, Bromo</h6>
                    </div>
                </div>
                <div className="konten-testimonial">
                    <div className="gambar-testimonial">
                        <img src="./images/img_photo (1).png" alt="orang" />
                    </div>
                    <div className="isi-testimonial">
                        <img src="./images/Rate.png" alt="" />
                        <p className="paragraf">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod”
                        </p>
                        <h6 className="title-3">John Dee 32, Bromo</h6>
                    </div>
                </div>
                <div className="konten-testimonial">
                    <div className="gambar-testimonial">
                        <img src="./images/img_photo.png" alt="orang" />
                    </div>
                    <div className="isi-testimonial">
                        <img src="./images/Rate.png" alt="" />
                        <p className="paragraf">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod”
                        </p>
                        <h6 className="title-3">John Dee 32, Bromo</h6>
                    </div>
                </div>
            </div>
            {AddLibrary(window.location.origin + '/flickity.pkdg.min.js')}
        </section >

    )
}

export default Testimonial
