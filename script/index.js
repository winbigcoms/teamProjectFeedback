const naviOpenBtn = document.querySelector(".naviOpenBtn");
const naviCloseBtn = document.querySelector(".naviCloseBtn");
const navi = document.querySelector(".appNav");
const openMenuDetailBtn = document.querySelectorAll(".openMenuDetail");
const menuDetailCloseBtn = document.querySelectorAll(".menuDetailCloseBtn");
// 네비 열기
naviOpenBtn.addEventListener("click",function(e){
    console.log(e.currentTarget.parentNode.nextElementSibling);
    navi.classList.add("naviShow");
    naviOpenBtn.setAttribute("aria-pressed","true");
});

naviCloseBtn.addEventListener("click",function(e){
    navi.classList.remove("naviShow");
    naviOpenBtn.setAttribute("aria-pressed","false");
})

for( i=0; i < openMenuDetailBtn.length; i++){
    // hover시 이미지 사이즈 변화 이벤트
    openMenuDetailBtn[i].addEventListener("mouseover",function(e){
        MenuImg = e.currentTarget.previousElementSibling.querySelector("img")
        MenuImg.style.transform = "scale(1.2)";
    });
    openMenuDetailBtn[i].addEventListener("mouseout",function(e){
        MenuImg = e.currentTarget.previousElementSibling.querySelector("img")
        MenuImg.style.transform = "scale(1)";
    });

    // 클릭시 메뉴디테일 나오는 이벤트
    openMenuDetailBtn[i].addEventListener("click",function(e){
        const DetailMenu =  e.currentTarget.nextElementSibling;
        DetailMenu.style.display ="block";
        setTimeout(function(e){
           DetailMenu.style.opacity = 1 
        },50);
        e.currentTarget.setAttribute("aria-pressed","true");
    })
}
for( r = 0; r<menuDetailCloseBtn.length; r++){
    menuDetailCloseBtn[r].addEventListener("click",function(e){

        const setTarget = e.currentTarget.parentNode;
        
        setTarget.style.opacity = 0;
        
        setTimeout(function(e){
            setTarget.style.display="none";
        },700)
        setTarget.previousElementSibling.setAttribute("aria-pressed","false");
    })


}