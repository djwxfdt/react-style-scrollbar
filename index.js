const React = require('react')
const ReactDOM = require('react-dom')

class Scrollbar extends React.Component{

    constructor(){
        super();
        this.state = {
            top:0,
            left:0
        }
        this.barRate = 3.4
    }

    static propTypes = {
        padding:React.PropTypes.object,
        slot:React.PropTypes.bool,
        slotAutoHidden:React.PropTypes.bool,
        vertical:React.PropTypes.bool,
        horizontal:React.PropTypes.bool,
        opacity:React.PropTypes.number,
        barColor:React.PropTypes.string
    }

    static defaultProps = {
        padding:{left:0,top:0,right:0,bottom:0},
        slot:true,
        slotAutoHidden:true,
        vertical:true,
        horizontal:true,
        opacity:.7,
        barColor:'#777'
    }

    generateBarStyle(vertical){
        let slotStyle = {
            "zIndex": 1,
            display: "none",
            position: "absolute",
            background: "#fff",
            opacity: this.props.opacity,
            border:"solid 1px #f0f0f0"

        }
        let barStyle = {
            position: "absolute",
            opacity: this.props.opacity,
            display: "none",
            "borderRadius": "7px",
            "zIndex": 2,
            background:this.props.barColor
        }

        if(vertical){
            barStyle.top = this.state.top + "px"
            slotStyle.right = barStyle.right = "2px"
            slotStyle.width = barStyle.width = "7px"
            slotStyle.top = slotStyle.bottom = 0
        }else{
            barStyle.left = this.state.left + "px"
            slotStyle.bottom = barStyle.bottom = "2px"
            slotStyle.height = barStyle.height = "7px"
            slotStyle.left = slotStyle.right = 0
        }
        return [slotStyle,barStyle]
    }

    render(){
        const {left,top,right,bottom} = this.props.padding
        return(
            <div ref={ref=>this.ref = ref}
                style={{
                    padding:`${top || 0}px ${right || 0}px ${bottom || 0}px ${left || 0}px`,
                    postion:"relative",
                    height:"100%",
                    "width":"100%",
                    "overflow":"hidden"

                }}
                onScroll={e=>this.onScroll(e)}
                >
                {this.props.children}
                {(()=>{
                    if(this.props.vertical){
                        let [slotStyle,barStyle] = this.generateBarStyle(true)
                        return <div className="rightScroll">
                            <div className="scrollBar" style={barStyle}></div>
                            <div className="scrollSlot" style={slotStyle}></div>
                        </div>
                    }
                    if(this.props.horizontal){
                        let [slotStyle,barStyle] = this.generateBarStyle(false)
                        return <div className="bottomScroll">
                            <div className="scrollBar" style={barStyle}></div>
                            <div className="scrollSlot" style={slotStyle}></div>
                        </div>
                    }
                })()}
            </div>
        )
    }

    onScroll(e){
        console.error(e);
        if(this.props.vertical){
            let top = e.currentTarget.scrollTop
            if(top != this.state.top){
                this.setState({top})
            }
        }
        if(this.props.horizontal){
            let left = e.currentTarget.scrollLeft
            if(left != this.state.left){
                this.setState({left})
            }
        }
    }

}

module.exports = Scrollbar;
