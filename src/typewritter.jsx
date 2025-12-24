import React, {useState, useEffect} from 'react';

const Typewritter = ({text, delay, infinite}) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect( () => {
        let timeout;

        if (currentIndex < text.length){
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex +1);
            }, delay);

            
        } else if (infinite) {
            setCurrentText('');
            setCurrentIndex(0);
        }

        return()=> clearTimeout(timeout);
    }, [currentIndex, delay, text]);


    return <span>{currentText}</span>;
};

export default Typewritter;