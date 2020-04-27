var IoTDevice = require ('./device/device.js');

/* Edit these lines to reflect your IoT platform config. */
const ORG_ID = "x0pszr";
const ACCESS_TOKEN = "my-secure-token";
var device = new IoTDevice(ORG_ID, ACCESS_TOKEN);
class App extends Component{
    constructor(props){
      super(props);
      this.state ={
        message: ""
      }
    }
componentWillMount(){
setInterval(() => {
  device.Push('getMessage');
  var msg = device.getCurrentMessage()
  this.setState({
    message: msg
  })
}, 5000);

}
}


