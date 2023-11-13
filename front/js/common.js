$(function(){

    // /front/html/user/login.html 해당 페이지에서 '로그인' 텍스트 '로그아웃'으로 변경
    $("header").load("/front/html/layout/header.html", function() {
        if (window.location.href.endsWith('login.html')) {
            $('body > header > div > div.right_menu > a:nth-child(2)').text('');
        }
    });
    // 
    
    $("footer").load("/front/html/layout/footer.html");   

    //비밀번호 보기/숨기기
    $('.pwdToggle').on('click',function(){
        let input=$(this).prev('#pwdCheck, #sign_pwd, #sign_pwd2, #login_password');
        if($(input).attr("type") == "password"){
            $(input).attr("type", "text");
            $(this).html('visibility');
        }else{
            $(input).attr("type", "password");
            $(this).html('visibility_off');
        }
    });
    


    //내가 쓴글 - 탭
    $('ul.tabGroup a').click(function(){
        var tab_id = $(this).attr('data-tab');
     
        $('ul.tabGroup a').removeClass('active');
        $('.tabCont').removeClass('show');
     
        $(this).addClass('active');
        $("#"+tab_id).addClass('show');

        return false;
    });
});

//리스트 삭제 확인 modal
function modalHide(){
    $('#modal').hide();
};