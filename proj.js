let bt1=document.getElementById('b1');
var counter=0;

bt1.onmouseout=function(){
    this.style.color="";
    this.style.backgroundColor="";
    this.style.border="";
}

bt1.onclick=function(){
    var value = document.getElementById('s1').value;

    if(value==""){
        alert("Select Corrct Option")
    }
    else{

        let flag=true;
    //for checking label
     
     try{
        for(var i=0;i<counter;i++){
            //bool=true;
            let tl=document.querySelector(`#lb${i+1}`);
            let ti=document.querySelector(`#inp${i+1}`);
            if(tl.contains(ti)){
             alert("add label first");
             console.log(tl);
             flag=false;
             break;
            }
           
            flag=true;
        }
    }
    catch{}

    //for checking to see whether label is added or not 
    if(flag == true){

    counter=counter+1;
    var li = document.createElement('li');
    li.className="listyle";

    if(counter%2!==0)
    li.className="listyle list1";
    else
    li.className="listyle list";


    this.style.color="white";
    this.style.backgroundColor="black";
    this.style.border="3px solid black";

    // try{
    //     if(tl.contains(ti))
    //      alert("add label");
    // }
    // catch{}

    if(value == "text" || value == "email" || value == "number"){
        
        li.innerHTML =
        `<label for="" id="lb${counter}">
        <input type="text" name="" id="inp${counter}" placeholder="Label">
        <button id="${counter}" class="add">ADD</button>
        </label>
    
        <div id="del${counter}" class="delx"><input type="${value}" class="inpt" id="it${counter}" placeholder="${value.toUpperCase()}"></div>`
        var btc = document.createElement('button');
        var x = document.createTextNode("x");
        btc.appendChild(x);
        btc.className="cross";
        btc.addEventListener("click",function(){
            this.parentNode.remove();
            //counter--;
        })
        li.appendChild(btc);

        
        
        //console.log(li)  
        document.getElementById('ul').appendChild(li);

        let bt2 = document.getElementById(counter);
        bt2.onclick=function(){
           var v1 = this.id;
           //console.log(v1);
           let val=document.getElementById("inp"+v1).value;
        //    li.innerHTML =`<label for="" id="lb1">${v1}:-</label>
       
        //    <input type="text" name="" id="it1">`;

           this.parentNode.innerHTML=`${val}:-`;

        

        }

    }

    

    else if(value == "radio"){

        try{

            var divs=document.querySelectorAll('.del > input');
            var dbut=document.querySelectorAll('.del > button');
            
            for(var i=0;i<divs.length;i++)
            divs[i].style.display="none";
    
            for(var i=0;i<dbut.length;i++)
            dbut[i].style.display="none";

            }
            catch{
               // alert("Select option")
            }

            
        li.innerHTML =
        
        `<label for="" id="lb${counter}">
        <input type="text" name="" id="inp${counter}" placeholder="Label">
        <button id="${counter}" class="add">ADD</button>
        </label>
    
        <div id="del${counter}" class="del">
        <div id="extra1${counter}"></div>
        <input type="text" name="" id="it${counter}" placeholder="${value.toUpperCase()}">
        <button id="1${counter}" value="${counter}" class="add">ADD</button>
        </div>`
        var btc = document.createElement('button');
        var x = document.createTextNode("x");
        btc.appendChild(x);
        btc.className="cross";
        btc.addEventListener("click",function(){
            this.parentNode.remove();
           // counter--;
        })
        li.appendChild(btc);

        

        
        
        //console.log(li)  
        document.getElementById('ul').appendChild(li);

        let bt2 = document.getElementById(counter);
        bt2.onclick=function(){
           var v1 = this.id;
           //console.log(v1);
           let val=document.getElementById("inp"+v1).value;
    

           this.parentNode.innerHTML=`${val}:-`;

        

        }

        let bt3=document.getElementById(`1${counter}`);
        bt3.onclick=function(){
            var v1 = this.value;
            //console.log(v1);
            let val=document.getElementById(`it${v1}`).value;
            document.getElementById(`extra1${v1}`).innerHTML+=
            `<input type="radio" name="same${v1}" id="rd${v1}" class="radio${v1}" value="${val}">${val}<br>`

        }

        

    }




    ////////////////////////Checkbox
    else if(value == "checkbox"){

        try{

            var divs=document.querySelectorAll('.del > input');
            var dbut=document.querySelectorAll('.del > button');
            
            for(var i=0;i<divs.length;i++)
            divs[i].style.display="none";
    
            for(var i=0;i<dbut.length;i++)
            dbut[i].style.display="none";

            }
            catch{
               // alert("Select option")
            }

        li.innerHTML =
        `<label for="" id="lb${counter}">
        <input type="text" name="" id="inp${counter}" placeholder="Label">
        <button id="${counter}" class="add">ADD</button>
        </label>
    
        <div id="del${counter}" class="del">
        <div id="extra1${counter}"></div>
        <input type="text" name="" id="it${counter}" placeholder="${value.toUpperCase()}">
        <button id="1${counter}" value="${counter}" class="add">ADD</button>
        </div>`
        var btc = document.createElement('button');
        var x = document.createTextNode("x");
        btc.appendChild(x);
        btc.className="cross";
        btc.addEventListener("click",function(){
            this.parentNode.remove();
            //counter--;
        })
        li.appendChild(btc);

        

        
        
        //console.log(li)  
        document.getElementById('ul').appendChild(li);

        let bt2 = document.getElementById(counter);
        bt2.onclick=function(){
           var v1 = this.id;
           //console.log(v1);
           let val=document.getElementById("inp"+v1).value;
    

           this.parentNode.innerHTML=`${val}:-`;

        

        }

        let bt3=document.getElementById(`1${counter}`);
        bt3.onclick=function(){
            var v1 = this.value;
            //console.log(v1);
            let val=document.getElementById(`it${v1}`).value;
            document.getElementById(`extra1${v1}`).innerHTML+=
            `<input type="${value}" name="same${v1}" id="chk${v1}" class="checkbox${v1}" value="${val}">${val}<br>`

        }

        

    }

    else if(value == "select"){

        try{

            var divs=document.querySelectorAll('.del > input');
            var dbut=document.querySelectorAll('.del > button');
            
            for(var i=0;i<divs.length;i++)
            divs[i].style.display="none";
    
            for(var i=0;i<dbut.length;i++)
            dbut[i].style.display="none";

            }
            catch{
               // alert("Select option")
            }


        li.innerHTML =
        `<label for="" id="lb${counter}">
        <input type="text" name="" id="inp${counter}" placeholder="Label">
        <button id="${counter}" class="add">ADD</button>
        </label>
    
        <div id="del${counter}" class="del">
        <div id="extra1${counter}">
        <select name="" id="sel${counter}" class="selx">
        <option value="">Select</option>
        </select>
        </div>
        <input type="text" name="" id="it${counter}" placeholder="OPTION">
        <button id="1${counter}" value="${counter}" class="add">ADD</button>
        </div>`
        var btc = document.createElement('button');
        var x = document.createTextNode("x");
        btc.appendChild(x);
        btc.className="cross";
        btc.addEventListener("click",function(){
            this.parentNode.remove();
            //counter--;
        })
        li.appendChild(btc);

        

        
        
        //console.log(li)  
        document.getElementById('ul').appendChild(li);

        let bt2 = document.getElementById(counter);
        bt2.onclick=function(){
           var v1 = this.id;
           //console.log(v1);
           let val=document.getElementById("inp"+v1).value;
    

           this.parentNode.innerHTML=`${val}:-`;

        

        }

        let bt3=document.getElementById(`1${counter}`);
        bt3.onclick=function(){
            var v1 = this.value;
            //console.log(v1);
            let val=document.getElementById(`it${v1}`).value;
            document.getElementById(`sel${v1}`).innerHTML+=
            `<option value="${val}">${val}</option>`

        }

        

    }

    
    

    else if(value == "submit"){

        

        let sub1=document.getElementById('sub');
        let a=document.getElementById('d1');

        let list=document.querySelectorAll("ul li");
        if(list.length==0){
            alert("select option");
        }
        else if(a.contains(sub1)){
            alert("You already added submit button");
        }
        else{

            if(confirm("is your form complete ?")){

                try{

                var divs=document.querySelectorAll('.del > input');
                var dbut=document.querySelectorAll('.del > button');
                
                for(var i=0;i<divs.length;i++)
                divs[i].style.display="none";
        
                for(var i=0;i<dbut.length;i++)
                dbut[i].style.display="none";

                }
                catch{
                   // alert("Select option")
                }

                // document.getElementById('d1').innerHTML +=
            // ` <button id="sub">Submit</button>`//not work

            li.innerHTML=` <button id="sub">Submit</button>`;
            li.className="listyle up";
            document.getElementById('ul').appendChild(li);

            bt1.style.opacity="0.6";
            bt1.disabled=true;
            


            let sub2=document.getElementById('sub');
            sub2.onclick=function(){

                var q=document.querySelectorAll(".cross");
                //console.log(q);
                for(var i=0;i<q.length;i++){
                    q[i].style.visibility="hidden";//display="none"
                }

              
                
    
                this.disabled=true;
    
                // let fulllist=document.getElementsByTagName('li');
                // for(var i=0;i<fulllist.length-1;i++){
                //     document.getElementById('f1').innerHTML += fulllist[i].innerHTML;
                // }


    
                 document.getElementById('f1').innerHTML = document.getElementById('ul').innerHTML;

                 //for last submit button make none 
                 let last=document.querySelectorAll('form > li');
                 last[last.length-1].style.display="none";
                 console.log(last);
    
                document.getElementById('demo1').innerHTML += `<input type="submit" value="Submit" id="val" class="upb">`;
                //console.log(counter)
    
                let sub1=document.getElementById('val');
                sub1.onclick=function(){
                    console.log(counter)
                   // let counter2=counter;

                   //\\let form=document.getElementById('f1');

                   for(var i=1;i<=counter;i++){

                    var a=document.querySelector("#f1 #del"+i);
                    
                    var b=document.querySelector("#f1 #rd"+i);
                    var c=document.querySelector('#f1 #chk'+i);
                    var d=document.querySelector('#f1 #sel'+i);
                    
                    try{

                        if(a.contains(b)){
                            var r=document.querySelector(`form #lb${i}`).innerHTML;
                            let rad=document.getElementsByClassName(`radio${i}`);
                                for(var j=0;j<rad.length;j++){
                                    if(rad[j].checked)
                                    //console.log(rad[i].value);
                                    document.getElementById('ans').innerHTML +=`<p><span id="spl${i}">${r}</span>
                                                                                     <span id="sp${i}">${rad[j].value}</span></p>`
                                }
                        }
    
                        else if(a.contains(c)){
                            var r=document.querySelector(`form #lb${i}`).innerHTML;
                            document.getElementById('ans').innerHTML +=`<p><span id="spl${i}" ></span><span id="sp${i}"></span></p>`
                            let chk=document.getElementsByClassName(`checkbox${i}`);
                                for(var j=0;j<chk.length;j++){
                                    if(chk[j].checked){
                                        document.getElementById('sp'+i).innerHTML +=chk[j].value+"<br>"; 
                                        document.getElementById('spl'+i).innerHTML =r;
                                    }                            
                                }
                        }

                        else if(a.contains(d)){
                            var r = document.querySelector(`form #lb${i}`).innerHTML;
                           //  console.log(document.querySelector("form sel"+i))
                            var s=document.querySelector("form #sel"+i).value;

                            document.getElementById('ans').innerHTML +=`<p><span id="spl${i}">${r}</span><span id="sp${i}">${s}</span></p>`;

                        }
                        
                        else{
                            var m=document.querySelector(`form #lb${i}`).innerHTML;
                            var l=document.querySelector(`form #it${i}`).value;
                            
                            document.getElementById('ans').innerHTML +=`<p><span id="spl${i}">${m}</span><span id="sp${i}">${l}</span></p>`;
    
                        }

                        document.getElementById(`sp${i}`).style.color="darkred";
                    }
                    catch{}
                   }
                   
                   
                
                   
                    // for(var i=1;i<=counter-1;i++){//for reading label and input
    
                    //     var a=document.querySelector(`form #lb${i}`).innerHTML;
                        
                        
                        
                    //     if(a=="Gender:-" || a=="Caste:-"){

                            
                    //         let rad=document.getElementsByClassName(`radio${i}`);
                    //         for(var j=0;j<rad.length;j++){
                    //             if(rad[j].checked)
                    //             //console.log(rad[i].value);
                    //             document.getElementById('ans').innerHTML +=`<p><span>${a}</span><span>${rad[j].value}</span></p>`
                    //         }

                    //     }
                    //     else{

                    //         var b=document.querySelector(`form #it${i}`).value;
                        
                    //     document.getElementById('ans').innerHTML +=`<p><span>${a}</span><span>${b}</span></p>`

                    //     }
                        
    
                    // }
    
                //document.getElementById('ans').innerHTML=document.querySelector('form #it1').value;
                this.disabled=true;
               }
               
    
            }

            }
        }
        
       

        
    }

    // else{
    //     alert("Select Corrct Option")
    // }
    }
        
    }
      

    
    
    



}

 

function fun1(x){
    x.style.background="#9C9386";
    x.style.color="white";
}


function fun2(x){
    x.style.background="";
    x.style.color="";
}

function fun3(x){
    x.style.background="#9C9386";
    x.style.color="white";
}


























