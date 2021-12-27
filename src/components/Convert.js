import React, {useState, useEffect} from 'react'
import google from '../api/google';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [output, setOutput] = useState('');
    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [text]);

    useEffect(() => {
     
        const onTranslateSubmit = async () => {
            const { data } = await google.post('', {}, {
                params: {
                    q: debouncedText,
                    target: language.value
                }
            });
            setOutput(data.data.translations[0].translatedText);
        };

        onTranslateSubmit();
    }, [language, debouncedText]);

    return (
        <div>
            {output}
        </div>
    )
}

export default Convert
