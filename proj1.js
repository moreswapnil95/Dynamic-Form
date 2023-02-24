var counter = 0;
function fun1(){
    let v=document.getElementById('s1').value;
    console.log(v)
    counter++;
    var div = document.createElement('div');
    div.id="dc";

    var label=document.createElement('label');
    label.id="lb"+counter;
    var int=document.createElement('input');
    int.type=`${v}`;
    int.id="int"+counter;
    int.placeholder="Name";
    label.appendChild(int);
    var bta=document.createElement('button')
    bta.id=counter;
    var btt=document.createTextNode('add');
    bta.onclick=function(){
        let temp=this.id;
        document.getElementById("lb"+temp).innerHTML=document.getElementById('int'+temp).value;
    }

    bta.appendChild(btt);
    label.appendChild(bta)
    div.appendChild(label);
     
    var btx=document.createElement('button');
    btx.onclick=function(){
        this.parentNode.remove();
        counter--
    }
    btx.className="cross";
    var btc=document.createTextNode('x');
    btx.appendChild(btc);
    div.appendChild(btx);
    
    document.getElementById('d1').appendChild(div);
}



function fun(){
    for(var i=1;i<=2;i++){
    //let a=document.getElementById(`d3${i}`);
    //let b=document.getElementById(`extra${i}`);
    console.log(document.getElementById(`d3${i}`).contains(document.getElementById(`extra${i}`)));
  
    }
}

counter=0
function fun1(){
    let li = document.createElement('li');
    
    let text = document.createTextNode('pqr');
    li.appendChild(text);

    counter++;
    if(counter%2==0)
    li.className="list";
    else
    li.className="list1";
    document.getElementById('ul').appendChild(li);
}







// let a  = [1,3,5,4,7,4,9,0,1];

// for(var i=0;i<a.length;i++){

//     if(a[i]==4){
//         console.log(a[i]);
//         break;
//     }
   
// }

function fun2(){
    let p = document.querySelector('p');
    p.style.color="red";
}


















