require(['jquery','handlebars'],function($,Handlebars){
    $.ajax({
        url:'/api/data?id=0',
        dataType:'json',
        success:function(data){
            var source = $('#tpl').html();
            var tamplate = Handlebars.compile(source);
            var data = data;
            var html = tamplate(data);
            $(".list").append(html);
        }
    })
})