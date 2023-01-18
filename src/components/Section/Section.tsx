import {Growth} from "./FirstContainer/Growth";
import {Compromise} from "./SecondContainer/Compromise";

function Section() {
    return (
        <div className="flex flex-col">
            <Growth />
            <Compromise />
        </div>
    )
}
export default Section;