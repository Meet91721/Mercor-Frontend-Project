import { useEffect } from 'react'
import image_p1 from '../../assets/beverages.svg'
import image_p2 from '../../assets/expenses-norm.svg'
import image_p3 from '../../assets/expenses.svg'

const VisualBullets = () => {
    useEffect(() => {
        let images = [image_p1, image_p2, image_p3];

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
        <div className='px-10 pb-16 bg-[#101010] rounded-3xl sections '>
            <img src={image_p1} className='h-72 ' id='imgelement'></img>

            <p className='text-[#f1f1ef] text-[1.9rem] leading-tight font-[600] text-center  mx-12 pb-5 select-none'>
                Bullets to visuals in a click
            </p>
            <p className='text-[#ADADAD] text-[22px] text-center select-none'>
                Transform any block to any other and try different options without any design hassle.
            </p>
        </div>
    )
}

export default VisualBullets;