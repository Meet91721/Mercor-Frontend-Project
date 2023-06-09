import { useEffect } from "react";
import ScrollBar from "./ScrollBar";
import PowerfulAssistant from "./RightComponents/PowerfulAssistant";
import VisualBullets from "./RightComponents/VisualBullets";
import KeyboardFirst from "./RightComponents/KeyboardFirst";
import Button from "./RightComponents/Button";

const RightPane = () => {
    let prev;

    useEffect(() => {
        const progressBar = document.getElementsByClassName("progress-bar")[0];

        const onScroll = (e) => {
            const scroll = document.documentElement.scrollTop - 2 * window.screen.height;
            const height =
                document.documentElement.scrollHeight - document.documentElement.clientHeight - 2 * window.screen.height;
            let scrolled = (scroll / height) * 100;
            let idx = Math.floor(scrolled / (100 / 3));

            function removeALL() {
                document.querySelectorAll(".sections").forEach((elem) => {
                    removeFOR(elem);
                });
            }

            function removeFOR(elem) {
                elem?.style?.setProperty("display", "none");
                elem?.style?.setProperty("opacity", "0");
            }

            // if (prev instanceof HTMLElement)
            //     prev?.style?.setProperty("display", "none");
            // console.log(idx);
            if (idx >= 0 && prev !== idx) {
                removeALL();
                prev = idx;
                let elem = document.getElementsByClassName("sections")[idx];
                elem?.style?.setProperty("display", "block");
                elem?.style?.setProperty("opacity", "1");
            }
        }
        window.addEventListener("scroll", onScroll);
    }, [prev])
    return (
        <div className="w-[50%] p-20  flex space-x-3 max-[600px]:w-[75vw]   max-[600px]:p-9 max-[600px]:block max-[600px]:h-[100vh] ">
            <div className="mr-12 -ml-12 flex flex-col" style={{ 'gap': '1em' }}>
                <KeyboardFirst className='sections' />
                <VisualBullets className='sections' />
                <PowerfulAssistant className='sections' />
            </div>
            <ScrollBar />
            <Button />
        </div>
    )
}
export default RightPane;