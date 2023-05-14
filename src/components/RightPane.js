import useEffect from "react";
import ScrollBar from "./ScrollBar";
import PowerfulAssistant from "./RightComponents/PowerfulAssistant";
import VisualBullets from "./RightComponents/VisualBullets";
import KeyboardFirst from "./RightComponents/KeyboardFirst";
import Button from "./RightComponents/Button";

const RightPane = () => {

    useEffect(() => {
        const progressBar = document.getElementsByClassName("progress-bar")[0];

        const onScroll = () => {
            const scroll = document.documentElement.scrollTop - 2 * window.screen.height;
            const height =
                document.documentElement.scrollHeight - document.documentElement.clientHeight - 2 * window.screen.height;
            let scrolled = (scroll / height) * 100;

            if (scrolled <= 1) {
                progressBar.style.height = 1 + "%";
            }
            else {
                progressBar.style.height = Math.min(scrolled, 100) + "%";
            }
        }
        window.addEventListener("scroll", onScroll);
    })
    return (
        <div className="w-[50%] p-20  flex space-x-3 max-[600px]:w-[75vw]   max-[600px]:p-9 max-[600px]:block max-[600px]:h-[100vh] ">
            <div className="mr-12 -ml-12 ">
                <KeyboardFirst />
                <VisualBullets />
                <PowerfulAssistant />
            </div>
            <ScrollBar />
            <Button />
        </div>
    )
}
export default RightPane;