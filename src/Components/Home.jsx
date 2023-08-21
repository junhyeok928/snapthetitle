import {Link} from "react-router-dom";
import { Fade } from "react-reveal";
import img1 from '../img/logo.png';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
const Home = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full flex flex-col items-center justify-center">
            {/*<div className="container px-5 py-24 mx-auto flex flex-wrap">*/}
                <div className="lg:w-8/12 mx-auto">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-5/12">
                            <Fade duration={1000} delay={500}>
                                <div className="justify-center flex flex-wrap w-full sm:pt-16 pt-16 sm:px-10 px-6 relative">
                                    <img alt="gallery"
                                         className="w-1/2 h-full"
                                         src={img1}/>
                                </div>
                            </Fade>
                            <Fade duration={1000} delay={750}>
                                <div className="flex flex-wrap w-full sm:pt-5 pt-5 pb-60 sm:px-10 px-6 relative">
                                    <img alt="gallery"
                                         className="w-full h-full"
                                         src={img2}/>
                                </div>
                            </Fade>
                        </div>
                        <div className="w-7/12">
                            <Fade duration={1000} delay={1000}>
                                <div className="flex flex-wrap w-full sm:pt-16 pt-16 sm:px-10 px-6 relative justify-center">
                                    <img alt="gallery"
                                         className="w-full h-4/5"
                                         src={img3}/>
                                </div>
                            </Fade>
                            <Fade duration={1000} delay={1250}>
                                <div className="flex flex-wrap w-full sm:py-5 py-5 sm:px-10 px-6 relative justify-center">
                                    <span>스냅더 타이틀 입니다.</span>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Home;