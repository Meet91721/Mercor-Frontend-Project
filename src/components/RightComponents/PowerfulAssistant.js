import image_p from '../../assets/powerful_assistant.webp'
const PowerfulAssistant = () => {
    return (
        <div className='px-10 pb-16 bg-[#101010] rounded-3xl sections'>
            <img src={image_p}></img>

            <p className='text-[#f1f1ef] text-[1.9rem] leading-tight font-[600] text-center pt-[4rem] mx-12 pb-10'>
                A powerful assistant
                just a click away
            </p>
            <p className='text-[#ADADAD] text-[22px] text-center'>
                Insert blocks, perform powerful actions and leverage the limitless power of AI - all without leaving your keyboard
            </p>
        </div>
    )
}
export default PowerfulAssistant;