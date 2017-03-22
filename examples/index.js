import React from "react"
import ReactDOM from "react-dom"

const Scrollbar = require('../index.js')

class App extends React.Component{
    render(){
        return <div style={{overflow:"hidden",height:"100px"}}>
            <Scrollbar>
                <div>
                    <div>1,Scrollbar</div>
                    <div>2,Scrollbar</div>
                    <div>3,Scrollbar</div>
                    <div>4,Scrollbar</div>
                    <div>5,Scrollbar</div>
                    <div>6,Scrollbar</div>
                    <div>7,Scrollbar</div>
                    <div>8,Scrollbar</div>
                    <div>9,Scrollbar</div>
                    <div>10,Scrollbar</div>
                    <div>11,Scrollbar</div>
                </div>
            </Scrollbar>
        </div>
    }
}

console.error(1);

ReactDOM.render(<App/>,document.getElementById('app'))
