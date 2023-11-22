
// function to remove model

function removeModel(){
    const closeModel = document.querySelector('.model_container');
        closeModel.remove();
}

// function to toggle setup

function toggleSetup(){
    const setupToggle = document.getElementById('guide_container_wrapper');
    const toggleImg = document.querySelector('.toggle');
    // console.log(setupToggle);
    setupToggle.classList.toggle('seen_list');
   const checkClass = setupToggle.classList.contains('seen_list');
    if(checkClass){
        toggleImg.src='https://crushingit.tech/hackathon-assets/icon-arrow-up.svg'
    }else{
        toggleImg.src='https://crushingit.tech/hackathon-assets/icon-arrow-down.svg'
    }
  
    }
   
    // function to toggle Notification ball

    function toggleBell(){
        const bellToggle = document.getElementById('noti_container');
        console.log(bellToggle)
         bellToggle.classList.toggle('show_noti')
    }