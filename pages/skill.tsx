import React from 'react';

const Skill: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        isRef: ''
    };

    return (
        <div ref={props.isRef}>
            <p>SKILL PAGES</p>
        </div>
    )
}

export interface Props {
    isRef: any
}

export default Skill;