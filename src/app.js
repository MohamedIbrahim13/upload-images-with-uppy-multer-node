const Uppy= require('@uppy/core');
const Dashboard = require('@uppy/dashboard');
const XHR= require('@uppy/xhr-upload');
const WebCam =  require('@uppy/webcam');

const uppy = new Uppy().use(Dashboard,{
    inline:true,
    target:"#drag-drop-area"
}).use(XHR,{
    endpoint:'http://localhost:3000/image',
    fieldName:'photo',
    formData:true
}).use(WebCam,{target:Dashboard});

uppy.on('complete',(res)=>{
    console.log(res.successful);
});