import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items}/>
    }
}

const App = props => {
    const [selectedOption, setSelectedOption ] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            <h1>Widgets App</h1>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    options={options} 
                    label="Select a Color"
                    onSelectedOptionChange={setSelectedOption}
                    selectedOption={selectedOption}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>            
        </div>
    )
}

export default App
