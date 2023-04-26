$(function(){
    var quickSwiper = new Swiper(".quickSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });




    var officeSwiper = new Swiper(".officeSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });


    


    function movieList(sortData){
        fetch('assets/data/movie.json')
        .then(res=>res.json())
        .then(json=>{
            allData=json.items;
    
            resultData = allData.filter(function(data){
                return data.sort.indexOf(sortData) >= 0;
            })
            let html='';
            let randNum = 1;

            resultData.forEach(element => {
                switch (element.age) {
                    case 12:
                        ageClass = 'twel';
                        break;
                    case 15:
                        ageClass = 'fift';
                        break;
                    case 18:
                        ageClass = 'eight';
                        break;
                    default:
                        ageClass = 'all';
                        break;
                }
                ectEl = (element.dday > 0)?`<span>D-${element.dday}</span>`:`<em class="star">${element.grade}</em>`
                rankEl = (sortData == 'office')?`<span class="rank">${randNum}</span>`:'';

                html+=`<li class="swiper-slide">
                        <a href="" class="img">
                            ${rankEl}
                            <img src="${element.thumb}" alt="">
                            <span class="age ${ageClass}"></span>
                        </a>
                        <div class="info">
                            <span class="title">${element.title}</span>
                            <div class="desc">
                                <span>예매율 ${element.reseverate}%</span>
                                ${ectEl}
                            </div>
                            <a href="" class="btn">바로예매</a>
                        </div>
                    </li>`;
                    randNum++;
            });
            $('#movieList').html(html);
    
        })
    }
    movieList('office');
    var movieSwiper = new Swiper(".movieSwiper", {
        slidesPerView:'auto',
        spaceBetween:15,
    });
    $('.officeSwiper .swiper-slide').click(function(e){
        e.preventDefault();
        target = $(this).find('a').data('target');
        $(this).addClass('on').siblings().removeClass('on');
        movieList(target);

    })


    function eventList(sortData){
        fetch('assets/data/event.json')
        .then(res=>res.json())
        .then(json=>{
            allData=json.items;

            resultData = allData.filter(function(data){
                return data.sort.indexOf(sortData) >= 0;
            })
            let html='';
            let randNum = 1;

            resultData.forEach(element => {
                html+=`<li class="swiper-slide">
                            <a href="">
                                <div class="img">
                                    <img src="${element.thumb}" alt="${element.title}">
                                </div>
                                <p>${element.day}</p>
                            </a>
                        </li>`;
                        randNum++;
            });
            $('#eventList').html(html);

        })
    }
    eventList('pick');
    var eventDetailSwiper = new Swiper(".eventDetailSwiper", {
        slidesPerView:'auto',
        spaceBetween: 10,
    });

    $('.eventSwiper .swiper-slide').click(function(e){
        e.preventDefault();
        target = $(this).find('a').data('target');
        $(this).addClass('on').siblings().removeClass('on');
        eventList(target);

    })

    

    var greetSwiper = new Swiper(".greetSwiper", {
        slidesPerView:'auto',
        spaceBetween: 10,
    });


    var eventSwiper = new Swiper(".eventSwiper", {
        slidesPerView:'auto',
        spaceBetween: 15,
    });


    

    var eventDetailSwiper = new Swiper(".eventDetailSwiper", {
        slidesPerView:'auto',
        spaceBetween: 10,
    });

    var specialSwiper = new Swiper(".specialSwiper", {
        slidesPerView:'auto',
        spaceBetween: 5,
    });



    function postList(){
        fetch('../assets/data/post.json')
        .then(res=>res.json())
        .then(json=>{
            allData=json.items;
            let html='';
            let randNum = 1;

            allData.forEach(element => {
                html+=`<li class="swiper-slide">
                            <div class="img">
                                <img src="${element.thumb}" alt="${element.title}">
                            </div>
                            <div class="txt">
                                <span class="user-id">${element.id}</span>
                                <em class="title">${element.title}</em>
                                <p class="content">
                                    ${element.content}
                                </p>
                                <div class="user-click">
                                    <a href=""><i class="ico-like"></i></a>
                                    <span class="like">${element.like}</span>
                                    <a href=""><i class="ico-reply"></i></a>
                                    <span class="reply">${element.coment}</span>
                                </div>
                            </div>
                        </li>`;
                        randNum++;
            });
            $('#postList').html(html);

        })
    }
    postList();
    var postSwiper = new Swiper(".postSwiper", {
        slidesPerView:'auto',
        spaceBetween: 12,
    });

    // $('.eventSwiper .swiper-slide').click(function(e){
    //     e.preventDefault();
    //     target = $(this).find('a').data('target');
    //     $(this).addClass('on').siblings().removeClass('on');
    //     eventList(target);

    // })




    

    var banner2Swiper = new Swiper(".banner2Swiper", {
        slidesPerView:'1',
        pagination: {
            el: ".pagination",
        },
    });

    
    $('header .menu').click(function(e){
        e.preventDefault();
        $('body').addClass('hidden')
        $('.menu-page').addClass('active');
    })
    $('.menu-page .close').click(function(e){
        e.preventDefault();
        $('body').removeClass('hidden')
        $('.menu-page').removeClass('active');
    })
    

    $('.menu-page .sc-quick .title a').click(function(e){
        e.preventDefault();
        $('.menu-page .sc-quick .contain .line').toggleClass('active');
        $('.menu-page .sc-quick .contain .all-list').toggleClass('active');
    })

})