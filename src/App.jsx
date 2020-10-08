import React,{useState} from 'react';
import Container from './Container';
import Input from './Input';
import Main from './Main';
import Button from './Button';
import './styles.css'

function App() {
    const numbers = ["(",")","%","C","7","8","9","÷","4","5","6","*","1","2","3","-","0",".","=","+"]
    const [value,setValue] = useState("")
    const [answer,setAnswer] = useState(false)
    function handleClick(e){
        var val = e.target.innerHTML;
        if(answer){
            setValue(val);
            setAnswer(false);
            return;
        }
        switch(val){
            case "C":
                setValue("")
            break;
            case "=":
                setAnswer(true)
                setValue(eval(value))
            break;
            default:
                setValue(prev=>{
                    return prev + val
                })
        }
        
    }
    return (
        <Container>
            <Input value={value} />
            <Main>
                {
                    numbers.map((e)=>(
                       <Button handleClick={handleClick} value={e}/>
                    ))
                }
            </Main>
        </Container>
    )
}

export default App
