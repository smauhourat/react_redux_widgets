import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Spanish',
        value: 'es'
    }    
]

const Translate = () => {
    const [selectedLanguage, setSelectedLanguage ] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>			            
            
            <Dropdown 
                options={options} 
                label="Select a Language"
                onSelectedOptionChange={setSelectedLanguage}
                selectedOption={selectedLanguage}
            />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert language={selectedLanguage} text={text}/>
        </div>
    )
}

export default Translate
