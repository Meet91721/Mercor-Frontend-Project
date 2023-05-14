import { useState, useEffect, useRef } from "react";

function Section1({ scrollY }) {
    const [height, setHeight] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        setHeight(ref.current.clientHeight - window.screen.height)
        let target = document.querySelectorAll(".js-scrollme");
        let scrollRatio = scrollY / height;
        target.forEach(function (tgt) {
            let ratio = getComputedStyle(tgt).getPropertyValue("--percent")
            if (scrollRatio > parseFloat(ratio) / 100) {
                tgt.style.opacity = 1;
            } else {
                tgt.style.opacity = 0.3;
            }
        }, [scrollY, height])
    })
    var message = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.";
    let words = message.split(" ")
    let parsed = [];
    words.forEach((word, index) => {
        parsed.push(<span key={index} className="js-scrollme" style={{ '--percent': 100 * index / words.length }}>{word} </span>);
    })
    return (
        < div className="h-[200vh] bg-black " ref={ref} >
            <div className="sticky top-0 text-white h-screen flex">
                <p className="font-sans font-medium align-center m-auto text-left mx-40 max-[600px]:mx-10">
                    {parsed}
                </p>
            </div>
        </div >
    )
}

export default Section1;