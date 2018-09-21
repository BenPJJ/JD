/*
 * @Author: benpjj 
 * @Date: 2018-09-08 15:51:16 
 * @Last Modified by: benpjj
 * @Last Modified time: 2018-09-18 11:44:22
 */

/* 京东顶部 */
$('#J_icon_close').click(function () {
    $('.J_event').addClass('event_activity').animate({
        'height':'0px'
    }, 100)
})

/* 快捷导航模块制作 */
$('#J_fl_cities li').click(function () {
    $('#J_fl_cities a').removeClass('seleted')
    $(this).find('a').addClass('seleted')
    $('#J_city a').text($(this).text()).attr('title', $(this).text())
})

$('#J_city').mouseenter(function () {
    $('#J_fl_cities').show()
    $(this).addClass('bj_activity')
}).mouseleave(function () {
    $('#J_fl_cities').hide() 
    $(this).removeClass('bj_activity')
})

$('#J_fl_cities').mouseenter(function () {
    $(this).show()
    $('#J_city').addClass('bj_activity')
}).mouseleave(function () {
    $(this).hide()
    $('#J_city').removeClass('bj_activity')
})

var i = 0

/* 搜索框部分 */
var searchword = ['蓝月亮超级新品日 七色至尊 全新上市', '大牌单反直降3000', '全棉时代湿巾', '魅族手机', '美的饮水机', '中秋食品超级品类日', '榨汁机家用']
setInterval(function () {
    i++
    if (i > searchword.length) {
        i = 0
    }
    $('#J_search_txt').attr('value', searchword[i])
}, 5000)

/* 热词部分 */
var lotword = ['中秋海鲜劫', '食品超品日', '相机低价抢']

setInterval(function () {
    i++
    if (i > lotword.length) {
        i = 0
    }
    $('#J_lotword').text(lotword[i])
}, 2000)

/* 新闻部分 */
$('.J_hd_item_first').mouseenter(function () {
    $('.line').css('transform', 'translateX(13px)')
    $('.J_bd_item_first').show()
    $('.J_bd_item_last').hide()
})

$('.J_hd_item_last').mouseenter(function () {
    $('.line').css('transform', 'translateX(73px)')
    $('.J_bd_item_first').hide()
    $('.J_bd_item_last').show()
})
