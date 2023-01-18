import "./styles.scss";
import {Image} from "./Image";
function Article() {

    return (
        <div className="title">
           <div className="text-8xl">Sell creatively</div>
           <div className="title_text">
               <p>Swell is the most powerfull headless eccomerse platform</p>
               <p>for modern brands,startups, and agencies</p>
           </div>
            <div>
                <input type="text" placeholder="Enter your email" className="input"/>
                <button>Start free trial</button>
            </div>
            <Image />
        </div>
    )
}
export default Article;