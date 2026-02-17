   // Step 1  =>> button ta dhorte hobe + .addEventsListener add korte hobe with function

        document.getElementById('btn-comment-post')
        .addEventListener('click',function(){
            console.log('button clicked')

            // Step  2 =>> amake text area  dhorte hobe jekhane ami lekbo

            const commentBox = document.getElementById('comment-here')
            const newComment =commentBox.value
            console.log(newComment)

            // step 3 =>> p tag kotahy korbo sey parent ta k khuja lagbo

           const commentContainer = document.getElementById('comment-container')
        //    step 4 =>> p tag create kora lagbo  WS

        const commentElement=document.createElement('p')

        commentElement.classList.add('comment')


        commentElement.innerText = newComment ; //  eyta comment e ja  lekbo ta sgow korbe 

// step 5 append kora
commentContainer.appendChild(commentElement)

commentBox.value = '';


        })