import { GoArrowUp } from "react-icons/go";
import { LinkArrowTop } from "./StyleComponents/linkArrowTop";

const ArrowTop = () => {
    return(
        <LinkArrowTop href="#top" className="arrow">
            <GoArrowUp/>
        </LinkArrowTop>
    )
}
export default ArrowTop
