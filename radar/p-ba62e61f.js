const e=({category:e,action:t,label:a})=>{console.log("sendTelemetry",{category:e,action:t,label:a});var o=new CustomEvent("hub-telemetry-event",{detail:{category:e,action:t,label:a}});return window.dispatchEvent(o)};export{e as s}