$(document)
    .ready(function () {

        $('.sampleWork')
            .slick({
                dots: false,
                arrows: true,
                autoplay: true,
                autoplaySpeed: 5000,
                centerMode: true,
                centerPadding: '60px',
                cssEase: 'ease',
                infinite: true,
                initialSlide: 0,
                speed: 5000,
                useCSS: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });

        $('h2.line-around')
            .each(function (index, heading) {
                console.log(heading);
                console.log(index);

                headingText = $(heading)
                    .text()
                console.log(headingText);
                var myFullText = '<span>' + headingText + '</span>';
                $(heading)
                    .html(myFullText);
            })

        $('#pdf-holder')
            .bind('show', function (e) {
                paneID = $(e.target)
                    .attr('href');
                src = $(paneID)
                    .attr('data-src');
                // if the iframe hasn't already been loaded once
                if ($(paneID + " iframe")
                    .attr("src") == "") {
                    $(paneID + " iframe")
                        .attr("src", src);
                }
            });

        $('a.pdf-btn')
            .on('click', function (e) {
                e.preventDefault();

                $("#pdf-holder")
                    .html('<iframe src="img/David_Daniel_Resume_2015_for_web.pdf" frameborder="0" style="overflow:auto;overflow-x:auto;overflow-y:auto;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" ></iframe>');

            });

        // Navigation

        $(".experience .timeline .time")
            .click(function () {

                var index = $(this)
                    .data("index");
                var section_id = "#" + String($(this)
                    .data("section"));
                var child = $(section_id + "-expand-" + index);

                $(section_id + " .expand")
                    .hide();
                $(section_id + " .time")
                    .removeClass("active");
                $(this)
                    .addClass("active");

                child.show();
                child.slideDown(800);
                $.scrollTo(child, 800);
            });

        $(".experience .expand .experience-full .close")
            .click(function () {
                $(this)
                    .parent()
                    .parent()
                    .animate({
                        height: 0
                    }, 800);
                $(".experience .timeline .time")
                    .removeClass("active");
                $.scrollTo('.experience .description', 800);
            });
        // Sliders
        var experienceCount = $('.experience .timeline .time')
            .length;
        $('.experience .timeline')
            .slick({
                draggable: false,
                focusOnSelect: true,
                dots: false,
                slidesToShow: Math.min(4, experienceCount),
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                speed: 400,
                accessibility: false,
                touchMove: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(4, experienceCount),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: Math.min(3, experienceCount),
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: Math.min(2, experienceCount),
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }]
            });

        var portfolioCount = $('.portfolio .content .project')
            .length;
        $('.portfolio .content')
            .slick({
                dots: false,
                slidesToShow: Math.min(3, portfolioCount),
                slidesToScroll: 1,
                infinite: false,
                autoplay: true,
                speed: 800,
                accessibility: false,
                touchMove: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(3, portfolioCount),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }]
            });

        var galleryCount = $('.gallery .content .image')
            .length;
        $('.gallery .content')
            .slick({
                dots: false,
                slidesToShow: Math.min(4, galleryCount),
                slidesToScroll: 1,
                speed: 400,
                autoplay: true,
                accessibility: false,
                touchMove: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: Math.min(4, galleryCount),
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: Math.min(3, galleryCount),
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: Math.min(2, galleryCount),
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }]
            });

        $('.testimonials .content')
            .slick({
                dots: false,
                draggable: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1200,
                accessibility: false,
                touchMove: false,
                adaptiveHeight: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }]
            });

        if ($(window)
            .width() > 800) {

            $('.education .content')
                .slick({
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    speed: 1200,
                    accessibility: false,
                    touchMove: false,
                    draggable: false
                });

            var listCount = $('.list .content .item')
                .length;
            $('.list .content')
                .slick({
                    focusOnSelect: true,
                    dots: false,
                    slidesToShow: Math.min(4, listCount),
                    slidesToScroll: 1,
                    speed: 400,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    accessibility: false,
                    touchMove: false,
                    draggable: false
                });

        };

    });