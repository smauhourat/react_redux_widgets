import React, {Fragment} from 'react'

const Accordion = ({ items }) => {
    const renderedItems = items.map(item => {
        return (
            <Fragment key={item.title}>
                <div className="active title">
                    <i className="dropdown icon"></i>
                        {item.title}
                </div>
                <div className="active content">
                    <p>{item.content}</p>
                </div>
            </Fragment>
        )
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion
