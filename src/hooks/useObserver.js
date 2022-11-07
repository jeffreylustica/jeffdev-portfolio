import {useEffect, useRef} from 'react'

export default function useObserver(options) {
    const intersectedRef = useRef([])
    intersectedRef.current = []

    function addToRefs(elRef) {
        if (elRef) {
            intersectedRef.current.push(elRef)
            console.log(elRef.dataset.transitionClass)
        }
    }


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const refClassName = entry.target.dataset.transitionClass
                    console.log(entry.target)
                    entry.target.classList.add(refClassName)
                    observer.unobserve(entry.target)
                }
            })
        }, options)

        intersectedRef.current.forEach(ref => {
            observer.observe(ref)
        })

        return () => {
            observer.disconnect()
        }

    }, [])

    return [addToRefs]  
}

