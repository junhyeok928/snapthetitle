import { Fade } from "react-reveal";
import logo from '../img/logo_01.png';
import img1 from '../img/2.jpg';
import img2 from '../img/3.jpg';
import main01 from '../img/main_01.jpg';
import main02 from '../img/main_02.jpg';
import main03 from '../img/main_03.jpg';
const Home = () => {
    return (
        <section className="text-gray-600 body-font pb-16">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full flex flex-col items-center justify-center">
                    <div className="lg:w-8/12 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="sm:w-full lg:w-5/12 overflow-hidden" >
                                <Fade duration={1000} delay={500}>
                                    <div className="flex flex-wrap w-full pt-16 px-6 relative justify-start" >
                                        <img alt="gallery"
                                             className="w-2/3 h-full"
                                             src={logo}/>
                                    </div>
                                </Fade>
                                <Fade duration={1000} delay={750}>
                                    <div className="flex flex-wrap w-full pt-5 pb-5 px-6 relative">
                                        <img alt="gallery"
                                             className="w-full h-full"
                                             src={main01}/>
                                    </div>
                                </Fade>
                            </div>
                            <div className="lg:w-7/12 sm:w-full overflow-hidden">
                                <Fade duration={1000} delay={1000}>
                                    <div className="flex flex-wrap w-full pt-16 px-6 relative justify-center">
                                        <img alt="gallery"
                                             className="w-full h-4/5"
                                             src={main03}/>
                                    </div>
                                </Fade>
                                <Fade duration={1000} delay={1250}>
                                    <div className="flex flex-wrap w-full pt-5 pb-10 px-6 relative justify-end">
                                        <span>Our movie, moody title</span>
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