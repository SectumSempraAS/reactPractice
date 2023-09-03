import { useState } from "react"

const PracticeForm = () => {
    const [inputs, setInputs] = useState("")
    const [textArea, setTextArea] = useState("Text area message, can be updated!")
    const [myCar, setMyCar] = useState('Ford');
    
    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((prevInputs) => {
            return {...prevInputs, [name] : value}
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.userName);
    }

    const handleTextAreaChange = (event) => {
        const textValue = event.target.value;
        setTextArea(textValue);
    }

    const handleCarChange = (event) => {
        setMyCar(event.target.value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name: 
                <input type="text" name='userName' value={inputs.userName || ''} onChange={handleInput}/>
            </label>
            <label>Enter your age:
                <input type="number" name='age' value={inputs.age || ''} onChange={handleInput}/>
            </label>
            <div>
                <textArea value={textArea} onChange={handleTextAreaChange}/>
            </div>
            <select value={myCar} onChange={handleCarChange}>
                <option value={'Ford'}>FORD</option>
                <option value={'Santro'}>SANTRO</option>
                <option value={'Porsche'}>PORSCHE</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default PracticeForm