import BannerImgLg from '../../../assets/banner-img-lg.png'
import BannerImgMd from '../../../assets/banner-img-md.png'
import BannerImgSm from '../../../assets/banner-img-sm.png'

import './HeroImg.css'

export default function HeroImg() {
    return (
        <div className="img-container">
        <picture>
            <source media="(max-width: 600px)" srcSet={BannerImgSm} />
            <source media="(max-width: 900px)" srcSet={BannerImgMd} />
            <img src={BannerImgLg} alt="" />
        </picture>
    </div>
    )
}