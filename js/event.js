console.log('external file')

// Option 2 
 function makeYellow(){
            document.body.style.backgroundColor='yellow';
        }
        function makeRed(){
            document.body.style.backgroundColor='red';
        }

        // Option 3 Get element by id and then set onclick

          const btnMakeBlue = document.getElementById('btn-make-blue');
    //    console.log(btnMakeBlue)
    btnMakeBlue.onclick =  function makeBlue (){
        document.body.style.backgroundColor='blue';
    }

    // option 3 different  version


    const btnMakePurple = document.getElementById('btn-make-purple');
    //  console.log(btnMakePurple)

    btnMakePurple.onclick=makePurple;
function makePurple(){
    document.body.style.backgroundColor='purple'
}

//   get element by id().addEventlistener('event type', handler)

    document.getElementById('btn-make-green').addEventListener('click', function
        makeGreen(){
            document.body.style.backgroundColor='green';
        }
    )
    

   document.getElementById('btn-make-gold').addEventListener('click', function()
    {
        document.body.style.backgroundColor='goldenrod';
    }
   )


//    Input er vitore name  likle  sey name p tag a change hobe 
// set event listener
document.getElementById('btn-update').addEventListener('click',function(){
    console.log('update-btn click')
    // 2. get the text from the input  field
    const nameInput=document.getElementById('input-name');
    console.log(nameInput)
    const name  =  nameInput.value;    //  .value  holo input a ki lekso  seyta
    console.log('name :', name)

    // set the name

const nameP = document.getElementById('name')
nameP.innerText =  name ;
})
