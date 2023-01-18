import card2 from "./card2.svg";
import "../styles.scss";

export function Compromise() {
    return (
        <div className="column">

            <div className="row_item2">
                <p className="text-3xl">Commerce without compromise</p>
                <p className="w-[32rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Autem mollitia nemo nesciunt numquam omnis,
                    perferendis qui similique sint voluptates voluptatibus.
                    Autem deleniti nihil quam qui.
                </p>
                <p className="text-purple-900 text-xl">Tell me more</p>
            </div>

            <div className="row_item">
                <img src={card2} alt="card"/>
            </div>

        </div>
    )
}