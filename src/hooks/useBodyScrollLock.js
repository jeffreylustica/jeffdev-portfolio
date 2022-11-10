import {useState, useEffect, useRef} from 'react'

function useBodyScrollLock() {
    const ref = useRef(null)
    const bodyStyle = document.body.style
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth

    const [isLocked, setIsLocked] = useState(false)

    useEffect(() => {
        bodyStyle.overflowY = isLocked ? 'hidden' : 'auto'
        bodyStyle.paddingRight =  isLocked ? `${scrollBarCompensation}px` : '0px'

        if (ref.current) {
            ref.current.style.paddingRight = isLocked ? `${scrollBarCompensation}px` : '0px'
        }

    }, [isLocked, bodyStyle])

    function toggleScrollLock() {
        setIsLocked(!isLocked)
    }

    function scrollUnlock() {
        setIsLocked(false)
    }

    return {ref, toggleScrollLock, scrollUnlock}
}

export default useBodyScrollLock