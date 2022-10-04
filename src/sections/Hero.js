import React from 'react'

function Hero(props, ref) {

    return (
        <div className='hero' ref={ref}>
            <div className="container">
                <div className="left">
                    <p className="greeting">Hi, I am <strong className="name">Jeffrey Lustica</strong></p>
                    <h1 className="intro">Love Arts and Sports!</h1>
                    <p className='intro-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, cumque. Nemo necessitatibus minus consectetur dolorum aperiam ullam voluptate cum error?</p>

                    <button className="hero__btn cv-btn">Download CV</button>
                    <button className="hero__btn learn-more-btn">Learn more</button>
                </div>

                {/* <div className="right">
                    <h1>Right</h1>
                </div> */}
            </div>
        </div>
    )
}

const forwardedRef = React.forwardRef(Hero)

export default forwardedRef
