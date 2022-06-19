import Headline from "../components/Headline";
import Inputform from "../components/Inputform";
import Gallery from "../components/Gallery";
import './MainPage.css';

export default function  MainPage(){
    return(
        <div className={'MainPage'}>
           <Headline/>
            <Inputform />
            <Gallery />
        </div>
    )
}