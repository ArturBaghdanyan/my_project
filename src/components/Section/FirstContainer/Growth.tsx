import card from "./card.svg";
import "../styles.scss";
export function Growth() {
    return (
        <div className="column">
            <div className="row_item">
                <img src={card} alt="card"/>
            </div>
            <div className="row_item2">
                <p className="text-3xl">Made for Growth</p>
                <p className="w-[33rem]">
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. A aliquam commodi consectetur
                    cumque dolor doloribus, dolorum est ex magnam
                    modi necessitatibus nesciunt porro quis reiciendis
                    ut. Commodi consectetur esse hic laudantium nobis
                    quae, quidem quis quod sit ullam unde vero.
                </p>
                <p className="text-purple-900 text-xl">Read the case studies</p>
            </div>
        </div>
    )
}