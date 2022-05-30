$(document).ready(
    function(){
        var params = new URLSearchParams(location.search);
        var opcao = params.get("opcao");
        alert(opcao);

        $.ajax({
            url:"http://jsonplaceholder.typicode.com/posts/"+opcao,
            type:"GET",
            success:function(data){

                console.log(data);
                
                $('#titulo').append(data.title);
                $('#corpo').append('<p>'+data.body+'</p>');
            
      
            
            },
            error:function(data){}

            
            
        })

        $.ajax({
            url:"http://jsonplaceholder.typicode.com/posts/"+opcao+"/comments",
            type:"GET",
            success:function(data){
                $.each(
                    data,
                    function(i, item){
                        $('#comentarios').append(
                            '<div>'+
                            '<b>'+item.name+'</b><br>'+
                            item.email+
                            '<p>'+item.body+'</p>'+
                            '</div><br>'
                        )
                    }
                )
            }
        })
    }
)
