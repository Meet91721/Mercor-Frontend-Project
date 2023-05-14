import React from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const Section2 = () => {

    return (
        <div className="md:h-[300vh] relative w-10/12 m-auto h-auto">
            <div className='sm:h-[90vh] sm:top-10   sm:sticky  sm:flex '>
                <LeftPane />
                <RightPane />
                {/* <ScrollBar /> */}
            </div>
        </div>
    )
}

export default Section2;