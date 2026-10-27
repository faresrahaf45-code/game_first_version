let index22=1,index21=1,index1=0,name1,health1=0,defense1=0,index31=0,index32=0,user1 = [name1,health1,defense1,index21] ,name2,health2=0,defense2=0,user2 = [name2,health2,defense2,index22] ,winner,n1,n2,i,f=1,t,a1,a2,som1,som2;
user1 = ["",0,0,1];
user2 = ["",0,0,1];

function statuss (){
        console.log(`---------------------------`);
        console.log(` ${user1 [0]}                    ${user2 [0]}`);
        console.log(` health:${user1 [1]}                   health:${user2 [1]} `);
        console.log(` defense:${user1 [2]}                   defense:${user2 [2]}`);
}




function firstattack(arro,arri,index1,attack){
    let [name,a,b,d]=arro;// elli 3am bhjom 3le
    let [name2,a2,b2,d2]=arri;
    let t=b-attack;
    if(t>=0){
        b=t;
        index1++;
        return[[name,a,b,d],[name2,a2,b2,d2],index1];
    }

    else{
        b=0;
        a+=t;
        index1++;
        return[[name,a,b,d],[name2,a2,b2,d2],index1];
    }
    
}
function strongattack(arro,arri,index1,attack,h){
    let [name,a,b,d]=arro;// elli 3am bhjom 3le
    let [name2,a2,b2,d2]=arri;

    if(d2>=h){
        let t=b-attack;
        if(t>=0){
            b=t;
            index1++;
            d2-=h;
            return[[name,a,b,d],[name2,a2,b2,d2],index1];


                }
        else{
            b=0;
            a+=t;
            index1++;

            d2-=h;
            return[[name,a,b,d],[name2,a2,b2,d2],index1];

            }
        }
    else{
        console.log(`not enough rounds try another move`);
        return[[name,a,b,d],[name2,a2,b2,d2],index1];
        }
    }

function defensess(arro ,arri,index1,h){
    let [name,a,b,d]=arro;
    let [name2,a2,b2,d2]=arri;//elli 3am yo5od 7imeye

    if(d2>=h){
        b2+=3;
        d2-=h;
        index1++;
        return[[name,a,b,d],[name2,a2,b2,d2],index1];

    }
    else{
        console.log("not enough rounds try another move\n");
        return[[name,a,b,d],[name2,a2,b2,d2],index1];
    }   
    
}
function healing(arro,arri,index1,h){
    let [name,a,b,d]=arro;
    let [name2,a2,b2,d2]=arri;//elli 3am yo5d health

    if(d2>=h){
        a2+=3;
        d2-=h;
        index1++;
        return[[name,a,b,d],[name2,a2,b2,d2],index1];
            }
    else{
        console.log("not enough rounds try another move\n");
        return[[name,a,b,d],[name2,a2,b2,d2],index1];
        
    }
}

function healingfromother(arro,arri,index1,h){
    let [name,a,b,d]=arro;
    let [name2,a2,b2,d2]=arri;

    if(d2>=h){
        a2+=2;
        d2-=3;

        let t=b-3;
        if(t>=0){
            b=t;
            index1++;
            return[[name,a,b,d],[name2,a2,b2,d2],index1];
        }

        else{
            b=0;
            a+=t;
            index1++;
            return[[name,a,b,d],[name2,a2,b2,d2],index1];
        }

    }
    else{
        console.log("not enough rounds try another move\n");
        return[[name,a,b,d],[name2,a2,b2,d2],index1];

    }
}
function protection(protection){
    protection=1;
    return protection;
}
function timereverse(timereverse){
    timereverse=2;
    return timereverse;
}

















function lion(){
    console.log(`lion:  1- 3 attack
        2- 7 attack - 2 round
        3- 3 defense - 2 round`);
}
function wolf(){
    console.log(`wolf:   1- 4 attack
        2- 3 defense - 2 round
        3- 3 healing - 3 round`);
}
function frog(){
    console.log(`frog:  1- 3 attack
        2- 3 healing - 2 round
        3- 2 healing from other - 3 round`);
}







function savename(){
    user1 [0] = document.getElementById("player1name").value;
    user2 [0] = document.getElementById("player2name").value;
    console.log(`hi ${user1 [0]}`);
    console.log(`hi ${user2[0]}`);
    let btnname=document.getElementById("btn");
    btnname.disabled=true;
}





function player_choosing_monster() {
    n1 = document.getElementById("monster1").value;
    
switch(n1){
        case '1':{
            lion()
            user1 [1]=30;
            user1 [2]=0;
            break;
        }
        case '2':{
            wolf()
            user1 [1]=25;
            user1 [2]=5;
            break;
        }
        case '3':{
            frog()
            user1 [1]=20;
            user1 [2]=15;
            break;
        }
        default:{
            lion()
            user1 [1]=30;
            user1 [2]=0;
            break;
        }
    }
    n2 =  document.getElementById("monster2").value;
    switch(n2)
    {
        case '1':{
            lion()
            user2 [1]=30;
            user2 [2]=0;
            break;
        }
        case '2':{
            wolf()
            user2 [1]=25;
            user2 [2]=5;
            break;
        }
        case '3':{
            frog()
            user2 [1]=20;
            user2 [2]=15;
            break;
        }
        default:{
            lion()
            user2 [1]=30;
            user2 [2]=0;
            break; 
        }
    }
statuss();
let btnmonster= document.getElementById("btnmonster");
btnmonster.disabled=true;
return n1,n2;
}



const mvt1=document.getElementById("mvt1");
const mvt2=document.getElementById("mvt2");

const mouvement1 = ()=>{
    index1=0;
    
    let a1=document.querySelector('.move1:checked').value;
    switch(n1)
    {
        case '2':
        {
            if(a1=='1') [user2,user1,index1] = firstattack(user2,user1,index1,3);
            if(a1=='2') [user2,user1,index1] = strongattack(user2,user1,index1,7,2);
            if(a1=='3') [user2,user1,index1] = defensess(user2,user1,index1,2);
            break;
        }
        case '3':
        {
            if(a1=='1') [user2,user1,index1] = firstattack(user2,user1,index1,4);
            if(a1=='2') [user2,user1,index1] = defensess(user2,user1,index1,2);
            if(a1=='3') [user2,user1,index1] = healing(user2,user1,index1,3);
            break;    
         }

        case '1':{
                        
            if(a1=='1') [user2,user1,index1] = firstattack(user2,user1,index1,3);
            if(a1=='2') [user2,user1,index1] = healing(user2,user1,index1,2);
            if(a1=='3') [user2,user1,index1] = healingfromother(user2,user1,index1,3);
            break;      
            
        }
    }
    if(index1== 1){
        user1[3]++;
        statuss();
        mvt1.disabled=true;
        mvt2.disabled=false;
    }
    if(user2[1]<=0){
        console.log(`${user1[0]} is the winner`);
        mvt2.disabled=true; 
        mvt1.disabled=true; 

}
}



const mouvement2 = ()=>{
    index1=0;

    let a2=document.querySelector('.move2:checked').value;
    switch(n2){
        case '2':{
            if(a2=='1') [user1,user2,index1] = firstattack(user1,user2,index1,3);
            if(a2=='2') [user1,user2,index1] = strongattack(user1,user2,index1,7,2);
            if(a2=='3') [user1,user2,index1] = defensess(user1,user2,index1,2);
            break;         
        }
        case '3':{
            if(a2=='1') [user1,user2,index1] = firstattack(user1,user2,index1,4);
            if(a2=='2') [user1,user2,index1] = defensess(user1,user2,index1,2);
            if(a2=='3') [user1,user2,index1] = healing(user1,user2,index1,3);
            break;    
        }

        case '1':{
                        
            if(a2=='1') [user1,user2,index1] = firstattack(user1,user2,index1,3);
            if(a2=='2') [user1,user2,index1] = healing(user1,user2,index1,2);
            if(a2=='3') [user1,user2,index1] = healingfromother(user1,user2,index1,3);
            break;
        }
    }
    if(index1== 1){
        user2[3]++;
        statuss(); 
        mvt2.disabled=true; 
        mvt1.disabled=false;
    }

    if(user1[1]<=0){
        console.log(`${user2[0]} is the winner`);
        mvt2.disabled=true; 
        mvt1.disabled=true; 

}
}

