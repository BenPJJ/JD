/*
 * @Author: benpjj 
 * @Date: 2018-09-14 09:24:02 
 * @Last Modified by: benpjj
 * @Last Modified time: 2018-09-14 11:21:49
 */

/* 轮播li对象 调用 wheel() 方法 */
$.fn.wheel = function (num) {

    var animated = ''
    
    // 鼠标触摸小圆点事件
    $('.jd_clo2_focus ol li').mouseenter(function () {
        var index = $(this).index()
        circular(index)
        sowing(index-1)
        arrow(index)
    })

    // 鼠标进入轮播区域事件
    $('.jd_clo2_focus ul li').mouseenter(function () {
        clearInterval(animated)
    }).mouseleave(function () {
       run($(this).index())
    })

    // 鼠标进入左右按钮事件
    $('.arrow a').mouseenter(function () {
        $(this).addClass('arr_activity')
    }).mouseleave(function () {
        $(this).removeClass('arr_activity')
    })

    // 圆点
    function circular(index) {
        $('.jd_clo2_focus ol li').eq(index).addClass('current').siblings().removeClass('current')
    }

    // 切图
    function sowing(index) {
        $('.jd_clo2_focus ul li').removeClass('slider_activity').eq(index).addClass('slider_activity')
    }

    // 左右按钮切换
    arrow(0)
    function arrow(index) {
        $('.jd_clo2_focus .arrow a').click(function () {
            clearInterval(animated)
            var name = $(this).attr('class')
            if (name === 'arr_l') {
                index--
                if (index == -num) {
                    index = 0
                }
            } else {
                index++
                if (index == num) {
                    index = 0
                }
            }
            sowing(index - 1)
            circular(index)
        })
    }

    // 轮播效果
    run(0)
    
    function run(index) {
        animated = setInterval(function () {
            index++
            if (index == num) {
                index = 0
            }
            sowing(index - 1)
            circular(index)
            // console.log(index)
        }, 2000)
    }
}
