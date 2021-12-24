import React, {useState} from 'react'
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React',
        content: 'React is a frontend javascript framework'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Red Color',
        value: 'red'
    },
    {
        label: 'The Red Green',
        value: 'green'
    },
    {
        label: 'The Red Blue',
        value: 'blue'
    }
]

const App = props => {
    const [selectedOption, setSelectedOption ] = useState(options[0]);

    return (
        <div>
            <h1>Widgets App</h1>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            <Dropdown 
                options={options} 
                onSelectedOptionChange={setSelectedOption}
                selectedOption={selectedOption}
            />
        </div>
    )
}

export default App
