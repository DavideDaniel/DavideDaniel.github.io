$(document)
    .ready(function () {
        // sliders
        $('.sampleWork')
            .slick({
                autoplay: false,
                centerMode: true,
                centerPadding: '60px',
                cssEase: 'ease',
                speed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        $('.testimonials')
            .slick({
                autoplay: true,
                autoplaySpeed: 3000,
                centerMode: true,
                centerPadding: '60px',
                dots: true,
                dotsClass: 'slick-dots',
                draggable: true,
                cssEase: 'ease',
                easing: 'linear',
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 3,
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
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

                headingText = $(heading)
                    .text()

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

    });