import Inputform from "./Inputform";
import GalleryColumn from "./GalleryColumn";
import './Gallery.css';

export default function Gallery(){
    return(
        <div className={'Gallery'}>

          <GalleryColumn/>
            <GalleryColumn/>
            <GalleryColumn/>

        </div>

)
}