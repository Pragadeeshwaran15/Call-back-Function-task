const element=document.querySelector("div")
setTimeout(()=>{
    element.innerText="10";
    setTimeout(()=>{
        element.innerText="9";
        setTimeout(()=>{
            element.innerText="8";
            setTimeout(()=>{
                element.innerText="7";
                setTimeout(()=>{
                    element.innerText="6";
                    setTimeout(()=>{
                        element.innerText="5";
                        setTimeout(()=>{
                            element.innerText="4";
                            setTimeout(()=>{
                                element.innerText="3";
                                setTimeout(()=>{
                                    element.innerText="2";
                                    setTimeout(()=>{
                                        element.innerText="1";
                                        setTimeout(()=>{
                                            element.innerText="Happy Indepences Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
document.body.append(element)