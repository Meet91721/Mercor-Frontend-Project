import arrow from '../../assets/arrow.svg';

const Button = () => {
    return (
        <div className=" text-white sm:hidden flex">

            <button className='bg-white rotate-180  rounded-3xl m-5 flex w-40 border-2 justify-center items-center'><img src={arrow} /></button>
            <button className='m-5 bg-white   flex rounded-3xl h-12 w-40 justify-center items-center'><img src={arrow} /></button>
        </div>
    )
}

export default Button;