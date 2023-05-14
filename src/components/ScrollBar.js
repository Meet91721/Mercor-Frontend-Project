import { useEffect } from "react";
import './Section2.css';

const ScrollBar = () => {

    useEffect(() => {
        const progressBar = document.getElementsByClassName("progress-bar")[0];

        const onScroll = (e) => {
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
    //#a594fd
    return (
        <div className='text-white   h-screen  max-[600px]:hidden'>
            <div className="some-bar">
                01
                <br></br>
                <div className='progress-container'>
                    <div className=' progress-bar'></div>
                </div>
                03
            </div>
        </div>
    );
}

export default ScrollBar;   