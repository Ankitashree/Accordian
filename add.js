const accordians =document.querySelectorAll('.accordian');
accordians.forEach(accordian =>{
    const icon = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');
    accordian.addEventListener('click', ()=>{
        icon.classList.toggle('active');
        answer.classList.toggle('active');
        // if(icon.classList.contains('active')){
        //     icon.classList.remove('active');
        //      answer.classList.maxHeight = null;
        // }else{
        //     icon.classList.add('active');
        //      answer.classList.maxHeight = answer.scrollHeight + 'px';
        // }



    })
})