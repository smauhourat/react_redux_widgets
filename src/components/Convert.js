import React, {useState, useEffect} from 'react'
import google from '../api/google';
import axios from 'axios';

const Convert = ({ language, text }) => {
    const [output, setOutput] = useState('');

    useEffect(() => {
     
        const onTranslateSubmit = async () => {
            const { data } = await google.post('', {}, {
                params: {
                    q: text,
                    target: language.value
                }
            });
            setOutput(data.data.translations[0].translatedText);
        };

        onTranslateSubmit();
    }, [language, text]);

    return (
        <div>
            {output}
        </div>
    )
}

export default Convert
