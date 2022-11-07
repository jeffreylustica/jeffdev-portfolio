import {useRef, useState, useEffect} from "react";

export default function useHeroObserver(options, perform) {
    const ref = useRef(null)
    const [isElVisible, setIsElVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            if (entry.isIntersecting && perform.once) {
                setIsElVisible(entry.isIntersecting)
                observer.unobserve(ref.current)
            } else {
                setIsElVisible(entry.isIntersecting)
            }
        }, options)

        observer.observe(ref.current)

        return () => observer.disconnect()

    }, [])

    return {ref, isElVisible}
}

