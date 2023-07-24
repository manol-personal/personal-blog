$(document).ready(function () {

    $('.fpointer').each((index, a) => {
        $(a).attr('id',   $(a).html() + 'footnote');
        $(a).click((el) => {
            let target = $(el.currentTarget).attr("target");
            let title = $(el.currentTarget).html();
            let content = $(el.currentTarget).attr("content");
            $('.footnote').hide();
            $('#' + target).show();
            $('#' + target).find('#title').html(title);
            $('#' + target).find('#content').html(content);
            const element = document.getElementById(target);
            element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            $('#' + target).find('#title').click(() => {
                $('.footnote').hide();
                const element = document.getElementById(title + 'footnote');
                element.scrollIntoView({ behavior: "smooth", block: "nearest" });
            });
        });
    });

    $('.close-button').click(() => {
        $('.footnote').hide();
    });

});