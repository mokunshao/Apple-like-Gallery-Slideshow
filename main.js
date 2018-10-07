$('.menus>ul>li').eq(0).addClass('active').siblings().removeClass('active')

let n = 0

let menusLength = $('.menus>ul>li').length

let autoPlay = setInterval(function(){
    $('.menus>ul>li').eq(n%menusLength).trigger('click')
    n++
},3000)

$('.menus>ul>li').on('click',function(e){
    let current = e.currentTarget
    let index = $(current).index()
    $('.menus>ul>li').eq(index).addClass('active').siblings().removeClass('active')
    $('.pictures>img').css({transform:`translateX(${-920*index}px)`})
    n = index
})

$('.pictures').on('mouseenter',function(){
    window.clearInterval(autoPlay)
})

$('.pictures').on('mouseleave',function(){
    autoPlay = setInterval(function(){
        $('.menus>ul>li').eq(n%menusLength).trigger('click')
        n++
    },3000)
})

$(document).on('visibilitychange',function(){
    if(document.hidden){
        window.clearInterval(autoPlay)
    }else if(!document.hidden){
        autoPlay = setInterval(function(){
            $('.menus>ul>li').eq(n%menusLength).trigger('click')
            n++
        },3000)    
    }
})