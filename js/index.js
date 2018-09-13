/*
 * @Author: benpjj 
 * @Date: 2018-09-08 15:51:16 
 * @Last Modified by: benpjj
 * @Last Modified time: 2018-09-13 17:31:51
 */

/* 京东顶部 */
$('#icon_close').click(function () {
    $('.J_event').hide()
})



/* 轮播图部分 */
var index = ''

function sowing(index) {
    $('.jd_clo2_focus ul li').eq(index).toggleClass('slider_activity').siblings().removeClass('slider_activity')
}

function circular(ele, index) {
    ele.removeClass('current').eq(index).addClass('current')
}

function arrow(num) {
    $('.jd_clo2_focus .arrow a').click(function () {
        var name = $(this).attr('class')
        if (name === 'arr_l') {
            num--
            if (num == -8) {
                num = 0
            }
        } else {
            num++
            if (num == 8) {
                num = 0
            }
        }
        sowing(num - 1)
        circular($('.jd_clo2_focus ol li'), num)
    })
}

$('.jd_clo2_focus ol li').mouseenter(function () {
    var index = $(this).index()
    circular($('.jd_clo2_focus ol li'), index)
    sowing(index - 1)
    arrow(index)
})

arrow(0)

setInterval(function () {
    index++
    if (index == 8) {
        index = 0
    }
    sowing(index - 1)
    circular($('.jd_clo2_focus ol li'), index)
}, 3000)

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