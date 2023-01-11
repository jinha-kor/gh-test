import React from 'react';

const SkillItemList: React.FC<Props> = (props) => {
    const defaultProps: Props = {
        title: '',
        imgInfo: undefined,
    };

    return (
        <div className={'imageContent'}>
            <h1 className={'image-title'}>{props.title}</h1>
            <hr className={'image-hr'} />
            <div className={'skill-image-area'}>
                {props.imgInfo !== undefined
                    ? props.imgInfo.map((data, index) => {
                          return (
                              <div key={index} className={'skill-image'}>
                                  {data.map((item: any, idx: number) => {
                                      return (
                                          <img
                                              key={idx}
                                              src={item?.url}
                                              alt={item?.alt}
                                          />
                                      );
                                  })}
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
};

export interface Props {
    title?: string;
    imgInfo?: Array<Array<{ [key: string]: any }>>;
}

export default SkillItemList;
