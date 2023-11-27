
let index;
// function to remove model
const num3 = document.querySelector('.num3')
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
        const num3 = document.querySelector('.num3')
        let num1 = document.querySelector('.num1')
        let background = document.querySelector('.background')
        const list = document.querySelectorAll('.setup_items');
        list.forEach((item, index) => {
            num3.innerHTML = list.length
           
        const mark = item.querySelector('.item_header_img')
                mark.addEventListener('click', () => {
                        mark.src ='https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg'
                        num1.innerHTML = index + 1
                        switch (index) {
                            case 1:
                                background.style.width = '20px'
                                break;
                            case 2:
                                background.style.width = '40px'
                                break;
                            case 3:
                                 background.style.width = '60px'
                                 break;
                            case 4:
                                 background.style.width = '80px'
                                 break;
                            case 5:
                                 background.style.width = '100px'
                                 break;
                        }
                })
                    

            item.addEventListener('click', () => {
                mainItem = item.querySelector('.setup_item_wrapper')
                const checkClass = mainItem.classList.contains('seen')
               if(checkClass){
                mainItem.classList.remove('seen')
                // mark.src ='https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg'
               }
             
               if(!checkClass){
                mainItem.classList.add('seen')
                mark.src = 'https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg'
                index - 1
               }
            })
        })
    }
    getSetup()