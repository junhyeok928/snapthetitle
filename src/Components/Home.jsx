import img1 from '../img/main_01.jpg';
import img2 from '../img/main_02.jpg';
import img3 from '../img/main_03.jpg';
import ImageSlider from './ImageSlider';
import InstagramFeed from "./InstagramFeed";

const images = [img1, img2, img3]; // 이미지 경로를 적절히 수정하세요.

const Home = () => {
    return (
        <div >
            <ImageSlider images={images}/>
            <InstagramFeed/>
        </div>
    )
}

export default Home;