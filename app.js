
let index;
// function to remove model

function removeModel(){
    const closeModel = document.querySelector('.model_container');
        closeModel.remove();
}

// function to toggle setup

function toggleSetup(){
    const setupToggle = document.getElementById('guide_container_wrapper');
    const toggleImg = document.querySelector('.toggle');
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
        const bellToggle = document.querySelector('.noti_container');
         bellToggle.classList.toggle('show_noti')
    }

    // function to toggle menu

    function toggleMenu(){
        const menuToggle = document.querySelector('.menu');
        menuToggle.classList.toggle('show_menu')
    }

    // mark icon when clicked
    // function for setup guide
    function getSetup(){
        let imageChange = false;
        const list = document.querySelectorAll('.setup_items');
        list.forEach((item, index) => {
         
        const mark = item.querySelector('.item_header_img')
                mark.addEventListener('click', () => {
                        mark.src ='https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg'
                })
            item.addEventListener('click', () => {
                mainItem = item.querySelector('.setup_item_wrapper')
                //  mainItem.classList.add('seen')
            })
        })
    }
    getSetup()