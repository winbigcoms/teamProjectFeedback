const naviOpenBtn = document.querySelector(".naviOpenBtn");
const naviCloseBtn = document.querySelector(".naviCloseBtn");
const navi = document.querySelector(".appNav");
const openMenuDetailBtn = document.querySelectorAll(".openMenuDetail");
const menuDetailCloseBtn = document.querySelectorAll(".menuDetailCloseBtn");
const clickNavi = document.querySelectorAll(".openSubmenu");
const menuItem = document.querySelectorAll(".menuItem");
const subMenu = document.querySelectorAll(".subMenu");
const notice = document.querySelector(".notice a");
const logoA = document.querySelector(".appHeaderHeading a");
const confirmY = document.querySelector(".confirmNoticY");
const confirmN = document.querySelector(".confirmNoticN");
// 최초 접근시 단축키 알려주고 확인 하면 세션스토리지에 저장해서 안알려주기
window.addEventListener("load", function (e) {
    if (sessionStorage.getItem("confirm")) {
        notice.parentNode.style.display = "none";
        logoA.focus();
    } else if (!sessionStorage.getItem("confirm")) {
        notice.parentNode.style.display = "block";
        notice.parentNode.style.visibility = "visible";
        notice.focus();
    }
})

// 안내문 포커스 동안 엔터 누르면 재알림 안하기
notice.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        notice.parentNode.style.display = "none";
        logoA.focus();
        window.sessionStorage.setItem("confirm", "yes");
        // esc누르면 저장안하고 나가기
    } else if (e.keyCode == 27) {
        e.preventDefault();
        notice.parentNode.style.display = "none";
        logoA.focus();
    } else if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
        notice.focus();
        // 엔터하면 저장하고 밖으로
    }
})
// 안내문 버튼 이벤트
confirmY.addEventListener("keydown", function (e) {
    // 확인에서 쉬프트 탭하면 본문으로
    if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
        notice.focus();
        // 엔터하면 저장하고 밖으로
    } else if (e.keyCode == 13) {
        notice.parentNode.style.display = "none";
        logoA.focus();
        window.sessionStorage.setItem("confirm", "yes");
        // esc하면 저장안하고 밖으로
    } else if (e.keyCode == 27) {
        e.preventDefault();
        notice.parentNode.style.display = "none";
        logoA.focus();
    };
});
confirmY.addEventListener("click", function (e) {
    notice.parentNode.style.display = "none";
    logoA.focus();
    window.sessionStorage.setItem("confirm", "yes");
})
// 취소에서
confirmN.addEventListener("keydown", function (e) {
    // 쉬프트 탭하면 확인 버튼으로
    if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault();
        confirmY.focus();
        // 엔터하면 저장안하고 밖으로
    } else if (e.keyCode == 13) {
        e.preventDefault();
        notice.parentNode.style.display = "none";
        logoA.focus();
        // esc해도 저장 안하고 밖으로
    } else if (e.keyCode == 27) {
        e.preventDefault();
        notice.parentNode.style.display = "none";
        logoA.focus();
        // 탭하면 본문으로
    } else if (e.keyCode == 9) {
        e.preventDefault();
        notice.focus();
    }
});

confirmN.addEventListener("click", function (e) {
    e.preventDefault();
    notice.parentNode.style.display = "none";
    logoA.focus();
})

// 어디에서든 컨트롤 쉬프트 q 로 네비 버튼
document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 81) {
        // 메뉴 열려있음 닫고 네비 오픈버튼으로
        if (navi.classList.contains("naviShow")) {
            navi.classList.remove("naviShow");
            naviOpenBtn.setAttribute("aria-pressed", "false");
            naviCloseBtn.setAttribute("aria-pressed", "true");
            naviOpenBtn.focus();
        }
        naviOpenBtn.focus();
    }
})

// 네비 클릭 열기
naviOpenBtn.addEventListener("click", function (e) {
    navi.classList.add("naviShow");
    naviOpenBtn.setAttribute("aria-pressed", "true");
    naviCloseBtn.setAttribute("aria-pressed", "false")
    clickNavi[0].focus()
});

// 네비 클릭 닫기
naviCloseBtn.addEventListener("click", function (e) {
    navi.classList.remove("naviShow");
    naviOpenBtn.setAttribute("aria-pressed", "false");
    naviCloseBtn.setAttribute("aria-pressed", "true");
})

//  네비 키보드 열기
naviOpenBtn.addEventListener("keydown", function (e) {
    // 엔터는 네비열기
    if (e.keyCode == 13) {
        navi.classList.add("naviShow");
        naviOpenBtn.setAttribute("aria-pressed", "true");
        naviCloseBtn.setAttribute("aria-pressed", "false")
        // 탭 누르면 메뉴로
    } else if (e.keyCode == 9) {
        e.preventDefault()
        menuItem[0].firstChild.nextSibling.focus()
    }
});
// 네비 키보드 닫기
naviCloseBtn.addEventListener("keydown", function (e) {
    // 엔터는 네비 닫고 첫 메뉴 포커스
    if (e.keyCode == 13 || (e.shiftKey && e.keyCode == 9)) {
        navi.classList.remove("naviShow");
        naviOpenBtn.setAttribute("aria-pressed", "false");
        naviCloseBtn.setAttribute("aria-pressed", "true")
        menuItem[0].firstChild.nextSibling.focus()
        // 탭은 첫 네비 메뉴로 
    } else if (e.keyCode == 9) {
        clickNavi[0].focus()
    }
});
// 쉬프트 탭으로 첫 메뉴에서 네비 버튼으로 돌아가기
menuItem[0].addEventListener("keydown", function (e) {
    if (e.shiftKey && e.keyCode == 9) {
        e.preventDefault()
        naviOpenBtn.focus();
    }
})


// 서브 네비게이션 클릭 이벤트
let checkClick = "false";
for (y = 0; y < clickNavi.length; y++) {
    clickNavi[y].addEventListener("click", function (e) {
        const navSub = e.currentTarget.nextElementSibling;
        const openedSubMenu = document.querySelector(".navSubOpen");

        // 서브네브 1번째 이후 클릭
        if (checkClick == "true") {
            openedSubMenu.classList.remove("navSubOpen")
            navSub.classList.add("navSubOpen");
        }
        // 서브 네비 최초클릭
        navSub.classList.add("navSubOpen");
        checkClick = "true"
    });

    clickNavi[y].addEventListener("keydown", function (e) {
        // 만약 서브 네비가 열려있을 때 아래 방향키 누르면 서브 네비로 포커스
        if (e.currentTarget.nextElementSibling.classList.contains("navSubOpen")) {
            if (e.keyCode == 40) {
                e.currentTarget.nextElementSibling.firstChild.nextSibling.firstChild.focus()
            }
            // 위 화살표 위로 움직이기
            if (e.keyCode == 38) {
                let checkExistPreE = e.currentTarget.parentNode.previousElementSibling !== null;
                if (checkExistPreE) {
                    e.currentTarget.parentNode.previousElementSibling.querySelector(".openSubmenu").focus()
                    // 더 위로 갈게 없으면 닫기 버튼 포커스
                } else if (!checkExistPreE) {
                    naviCloseBtn.focus();
                }
            }
            // 만약 서브 네비가 닫혀있을 때 아래 방향키 누르면 다음 네비로 포커스
        } else {
            // 아래화살표누르면 다음 네비 아이템, 없으면 버튼으로
            if (e.keyCode == 40) {
                let checkExistNext = e.currentTarget.parentNode.nextElementSibling !== null;
                if (checkExistNext) {
                    e.currentTarget.parentNode.nextElementSibling.querySelector(".openSubmenu").focus()
                    // 더 내려갈게 없으면 닫기버튼 포커스
                } else if (!checkExistNext) {
                    naviCloseBtn.focus();
                }
            }
            // 위화살표 누르면 이전 네비 아이템, 없으면 버튼으로
            if (e.keyCode == 38) {
                let checkExistPreE = e.currentTarget.parentNode.previousElementSibling !== null;
                if (checkExistPreE) {
                    e.currentTarget.parentNode.previousElementSibling.querySelector(".openSubmenu").focus()
                } else if (!checkExistPreE) {
                    naviCloseBtn.focus();
                }
            }
        }
    })

    // 네비게이션에서 esc누르면 메뉴로 나가서 첫 번째 메뉴에 포커스해주기
    clickNavi[y].addEventListener("keydown", function (e) {
        if (e.keyCode == 27) {
            navi.classList.remove("naviShow");
            naviOpenBtn.setAttribute("aria-pressed", "false");
            naviCloseBtn.setAttribute("aria-pressed", "true");
            menuItem[0].firstChild.nextSibling.focus()
        }
    })

    naviCloseBtn.addEventListener("keydown", function (e) {
        e.preventDefault();
        // 닫기버튼에서 아래 방향키 누르면 첫 네비 아이템에 포커스
        let naviLength = clickNavi.length - 1;

        if (e.keyCode == 40) {
            clickNavi[0].focus();
        };
        // 위 방향키 누르면 마지막 네비 아이템에 포커스
        if (e.keyCode == 38) {
            clickNavi[naviLength].focus();
        }
        if (e.keyCode == 27) {
            navi.classList.remove("naviShow");
            naviOpenBtn.setAttribute("aria-pressed", "false");
            naviCloseBtn.setAttribute("aria-pressed", "true");
            menuItem[0].firstChild.nextSibling.focus()
        }
    })
}

for (z = 0; z < subMenu.length; z++) {
    subMenu[z].addEventListener("keydown", function (e) {
        const checkNextParent = e.currentTarget.parentNode.nextElementSibling !== null;
        const checkPrevParent = e.currentTarget.parentNode.previousElementSibling !== null;
        // 아래키
        if (e.keyCode == 40) {
            if (checkNextParent) {
                e.currentTarget.parentNode.nextElementSibling.querySelector(".subMenu").focus();
            } else if (!checkNextParent) {
                const checkparentNext = e.currentTarget.parentNode.parentNode.parentNode.nextElementSibling !== null;
                if (checkparentNext) {
                    e.currentTarget.parentNode.parentNode.parentNode.nextElementSibling.querySelector(".openSubmenu").focus();
                } else if (!checkparentNext) {
                    naviCloseBtn.focus();
                }
            }
        }
        if (e.keyCode == 38) {
            if (checkPrevParent) {
                e.currentTarget.parentNode.previousElementSibling.querySelector(".subMenu").focus();
            } else if (!checkPrevParent) {
                e.currentTarget.parentNode.parentNode.previousElementSibling.focus();
            }
        }
    })
}

// hover시 이미지 사이즈 변화 이벤트
for (i = 0; i < openMenuDetailBtn.length; i++) {
    openMenuDetailBtn[i].addEventListener("mouseover", function (e) {
        MenuImg = e.currentTarget.previousElementSibling.querySelector("img")
        if (MenuImg.classList.contains("brownie")) {
            MenuImg.style.transform = "scale(0.9)";
        } else {
            MenuImg.style.transform = "scale(1.1)";
        }
    });
    // 브라우니 이미지 크기 조정
    openMenuDetailBtn[i].addEventListener("mouseout", function (e) {
        MenuImg = e.currentTarget.previousElementSibling.querySelector("img")
        if (MenuImg.classList.contains("brownie")) {
            MenuImg.style.transform = "scale(0.8)";
        } else {
            MenuImg.style.transform = "scale(1.0)";
        }
    });

    // 클릭시 메뉴디테일 나오는 이벤트
    openMenuDetailBtn[i].addEventListener("click", function (e) {
        const DetailMenu = e.currentTarget.nextElementSibling;
        DetailMenu.style.display = "block";
        setTimeout(function (e) {
            DetailMenu.style.opacity = 1
        }, 50);
        e.currentTarget.setAttribute("aria-pressed", "true");
    })
}
// 메뉴 닫기 버튼
for (r = 0; r < menuDetailCloseBtn.length; r++) {
    menuDetailCloseBtn[r].addEventListener("click", function (e) {
        const setTarget = e.currentTarget.parentNode;
        setTarget.style.opacity = 0;
        setTimeout(function (e) {
            setTarget.style.display = "none";
        }, 700)
        setTarget.previousElementSibling.setAttribute("aria-pressed", "false");
    })
}
