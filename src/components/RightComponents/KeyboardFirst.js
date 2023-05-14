import { useEffect } from 'react'
import image_p1 from '../../assets/cmdnum.png'
import image_p2 from '../../assets/shiftT.png'
import image_p3 from '../../assets/slash.png'

const KeyboardFirst = () => {
    useEffect(() => {
        let images = [image_p1, image_p2, image_p3];
        // console.log(images)
        let index = 0;
        const imgElement = document.querySelector('#imgelement');

        function change() {
            imgElement.src = images[index];
            index > 1 ? index = 0 : index++;
        }

        window.onload = function () {
            setInterval(change, 1500);
        };
    })
    return (
        // <div >
        //     <p inert className="text-white select-none">Bullets to visuals in a click</p>
        // </div>
        <div className='px-10 pb-16 bg-[#101010] rounded-3xl max-[600px]:w-[80vw]   border-red-200 border-2 sections'>
            <img src={image_p1} className='h-72 ' id='imgelement'></img>

            <p className='text-[#f1f1ef] text-[1.9rem] leading-tight font-[600] text-center  mx-12 pb-5 select-none'>
                A keyboard first experience.
            </p>
            <p className='text-[#ADADAD] text-[22px] text-center select-none '>
                Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!
            </p>
        </div>
    )
}

export default KeyboardFirst;