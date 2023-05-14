const LeftPane = () => {
    return (
        <div className="sm:py-[12%] sm:px-[5%]  sm:w-[50%] text-[#f1f1ef]  max-[600px]:w-[80vw]  ">
            <div className="inline-flex items-baseline">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[3px]"><path d="M8.75348 17.6952C7.72056 14.0706 3.94416 10.3084 0.305928 9.27938C-0.101976 9.14829 -0.101976 8.8599 0.305928 8.72226C3.95074 7.68666 7.72056 3.931 8.76005 0.299863C8.8719 -0.0999545 9.14164 -0.0999545 9.25349 0.299863C10.2864 3.931 14.0628 7.68666 17.6945 8.72226C18.1024 8.85335 18.1024 9.14829 17.6945 9.27938C14.0562 10.3084 10.2798 14.0706 9.24691 17.6952C9.13506 18.1016 8.86532 18.1016 8.75348 17.6952Z" fill="#A594FD"></path></svg>
                <span className="ml-2 font-semibold text-[#a594fd] text-[1.25rem] align-middle ">Workflow</span>
            </div>
            <div className="text-[4.125rem] font-[650] pr-[17%] leading-[1.1] mt-6 ">
                Create at the speed of thought.
            </div>
            <div className="mt-10 text-[1.2rem] pr-[22%] -tracking-[.01em] text-[#ADADAD] max-[600px]:hidden">
                Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you
            </div>
        </div>
    )
}

export default LeftPane;

// LabilGrotesk,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif