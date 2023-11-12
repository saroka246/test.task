//слайдеры

const swiper1 = new Swiper('#slider1',{
    slidesPerView: 4,
    spaceBetween: 64,
    navigation: {
        prevEl:".you__tab--container .prev",
        nextEl:".you__tab--container .next"
    },
    pagination: {
        type: "bullets",
        el: '.you__pagination--container .swiper-pagination:first-of-type',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 4,
        }
    }

}), swiper2 = new Swiper('#slider2',{
    slidesPerView: 4,
    spaceBetween: 64,
    navigation: {
        prevEl:".you__tab--container .prev",
        nextEl:".you__tab--container .next"
    },
    pagination: {
        type: "bullets",
        el: '.you__pagination--container .swiper-pagination:last-of-type',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1280: {
            slidesPerView: 4,
        }
    }
});

//проверка браузера

var BrowserDetect = {
    init: function () {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
    for (var i=0;i<data.length;i++) {
    var dataString = data[i].string;
    var dataProp = data[i].prop;
    this.versionSearchString = data[i].versionSearch || data[i].identity;
    if (dataString) {
    if (dataString.indexOf(data[i].subString) != -1)
    return data[i].identity;
    }
    else if (dataProp)
    return data[i].identity;
    }
    },
    searchVersion: function (dataString) {
    var index = dataString.indexOf(this.versionSearchString);
    if (index == -1) return;
    return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    dataBrowser: [
    {
    string: navigator.userAgent,
    subString: "Chrome",
    identity: "Chrome"
    },
    { string: navigator.userAgent,
    subString: "OmniWeb",
    versionSearch: "OmniWeb/",
    identity: "OmniWeb"
    },
    {
    string: navigator.vendor,
    subString: "Apple",
    identity: "Safari",
    versionSearch: "Version"
    },
    {
    prop: window.opera,
    identity: "Opera",
    versionSearch: "Version"
    },
    {
    string: navigator.vendor,
    subString: "iCab",
    identity: "iCab"
    },
    {
    string: navigator.vendor,
    subString: "KDE",
    identity: "Konqueror"
    },
    {
    string: navigator.userAgent,
    subString: "Firefox",
    identity: "Firefox"
    },
    {
    string: navigator.vendor,
    subString: "Camino",
    identity: "Camino"
    },
    {  
    /* For Newer Netscapes (6+) */
    string: navigator.userAgent,
    subString: "Netscape",
    identity: "Netscape"
    },
    {
    string: navigator.userAgent,
    subString: "MSIE",
    identity: "Internet Explorer",
    versionSearch: "MSIE"
    },
    {
    string: navigator.userAgent,
    subString: "Gecko",
    identity: "Mozilla",
    versionSearch: "rv"
    },
    {  
    /* For Older Netscapes (4-) */
    string: navigator.userAgent,
    subString: "Mozilla",
    identity: "Netscape",
    versionSearch: "Mozilla"
    }
    ],
    dataOS : [
    {
    string: navigator.platform,
    subString: "Win",
    identity: "Windows"
    },
    {
    string: navigator.platform,
    subString: "Mac",
    identity: "Mac"
    },
    {
    string: navigator.userAgent,
    subString: "iPhone",
    identity: "iPhone/iPod"
    },
    {
    string: navigator.platform,
    subString: "Linux",
    identity: "Linux"
    }
    ]
  
};
BrowserDetect.init();
if(BrowserDetect.browser == 'Chrome' && BrowserDetect.version < 92){
    $("body").addClass('old-browser');
}
if(BrowserDetect.browser == 'Internet Explorer' && BrowserDetect.version < 11){
    $("body").addClass('old-browser');
}
if(BrowserDetect.browser == 'Firefox' && BrowserDetect.version < 91){
    $("body").addClass('old-browser');
}
if(BrowserDetect.browser == 'Safari' && BrowserDetect.version < 14){
    $("body").addClass('old-browser');
}
$("#browser-support button").click(function(){
    $("body").removeClass('old-browser');
});

//скрипты страницы: табы, поля ввода

$(document).ready(function(){
    $('.you__btns--container button').click(function(){
        if(!$(this).hasClass('active')){
            $('.you__btns--container button.active, .you__tab.active').removeClass('active');
            $(this).addClass('active');
            $(`.you__tab:eq(${$(this).index()})`).addClass('active');
            swiper1.slideTo(0, 500);
            swiper2.slideTo(0, 500);
        }
    });
    $('form').validate({
        hideLabels: false,
        validateOnBlur: false,
    });
    $('form input').change(function(){
        if($(this).val() != ""){
            $(this).addClass('not-empty');
        } else {
            $(this).removeClass('not-empty');
        }
    });
});
