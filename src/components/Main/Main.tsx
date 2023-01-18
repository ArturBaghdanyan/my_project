import "./styles.scss";
import icon from "./icon.svg";
import sign from "./sign.svg";
function Main() {
    return (
        <div className="container">

            <div className="w-[40rem] text-5xl">
                <h1>More of what you need, out of the box</h1>
            </div>

            <div className="row_list">
                <div className="column_list">
                    <div className="list_item">
                        <img src={sign} alt="checked"/>
                        <span>Native subscriptions</span>
                    </div>
                    <div className="list_item">
                        <img src={sign} alt="checked"/>
                        <span>1,000+ variants per product</span>
                    </div>
                    <div className="list_item">
                        <img src={sign} alt="checked"/>
                        <span>Custom content models</span>
                    </div>
                    <div className="list_item">
                        <img src={sign} alt="checked"/>
                        <span>B2B wholesale features</span>
                    </div>
                    <div className="list_item">
                        <img src={sign} alt="checked"/>
                        <span>Checkout API</span>
                    </div>
                    <div className="mt-6 text-purple-900">Explore all features</div>
                </div>
                <div className="image">
                    <img src={icon} alt=""/>
                </div>
            </div>

        </div>
    )
}
export default Main;