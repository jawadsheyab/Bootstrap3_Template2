/*global $, console, jQuery*/

$(function () {
    'use strict';
    
    var scrollButton = $("#scroll-top"),
        
        scrollLink = $('.scroll');
    
    //Add Fixed Navbar On Scroll
    $(window).scroll(function () {
        var navbar = $('.navbar');
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    
    // Deal With Tabs
    $('.tab-switch li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.' + $(this).data('class')).show().siblings().hide();
        //console.log($(this).data('class'));
    });
    
    
    // Show Scroll To Top Button
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.social-section').offset().top - 70) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });
    
    //Smooth Scroll To Div
    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $(id).offset().top
        }, 'slow');
    }
    
    // Click On Brand To Scroll To Top
    $('.navbar-brand').on('click', function () {
        $('.navbar ul li a').each(function () {
            $(this).removeClass('active');
        });
        
        goToByScroll('#home');
        return false;
    });
    
    // Click On Button To Scroll Top
    scrollButton.click(function () {
        $('.navbar ul li a').each(function () {
            $(this).removeClass('active');
        });
        goToByScroll('#home');
        return false;
    });
    
    //Add Active Class On Links
    $('.navbar ul li a').on('click', function (e) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var href = $(this).attr('href');
        
        goToByScroll(href);
        return false;
    });
    
    
    
    //Active Link Switching When Scrolling
    $(window).scroll(function () {
            
        var scrollBarLocation = $(this).scrollTop(),
            scrollBarLocationbtm = $(this).scrollTop() + $(window).height();
        
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top,
                sectionOffsetbtm = $(this.hash).offset().top + $(this.hash).height();
            
            if (sectionOffset <= scrollBarLocation || scrollBarLocationbtm >= sectionOffsetbtm) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
        
    });
    
});