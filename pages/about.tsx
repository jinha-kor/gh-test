import React from 'react';

const About: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: ''
    };

    return (
        <div ref={props.isRef}>
            <p>ABOUT PAGES</p>
        </div>
    )
}

export interface Props {
    isRef: any
}

export default About;