import '../styles/LoadingCircle.css'

const LoadingCircle = () => {
    return (
        <div className="circle__box">
            <div className="circle__wrapper circle__wrapper--right">
                <div className="circle__whole circle__right"></div>
            </div>
            <div className="circle__wrapper circle__wrapper--left">
                <div className="circle__whole circle__left"></div>
            </div>
        </div>
    )
}

export default LoadingCircle;