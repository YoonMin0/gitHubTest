//버튼0 누르면,
//	-모든버튼에 붙은 orange 클래스명 제거
//	- 버튼 0에 orange 클래스명 추가
//	- 모든 div에 붙은 show 클래스명 제거
//	- div0에 show클래스명 추가

//var 버튼 = $('.tab-button'); - 변수쓰면 속도가 더 빨라진다!




//$('.tab-button').eq(0).on('click', function() {
//	$('.tab-button').removeClass('orange');
//	$('.tab-button').eq(0).addClass('orange');
//	
//	$('.tab-content').removeClass('show');
//	$('.tab-content').eq(0).addClass('show');
//});
//
//$('.tab-button').eq(1).on('click', function() {
//	$('.tab-button').removeClass('orange');
//	$('.tab-button').eq(1).addClass('orange');
//	
//	$('.tab-content').removeClass('show');
//	$('.tab-content').eq(1).addClass('show');
//});
//
//$('.tab-button').eq(2).on('click', function() {
//	$('.tab-button').removeClass('orange');
//	$('.tab-button').eq(2).addClass('orange');
//	
//	$('.tab-content').removeClass('show');
//	$('.tab-content').eq(2).addClass('show');
//});

//반복문 안의 변수는 let으로 넣어준다. (var X / 범위의 차이가 있다.)


for(let i=0; i<$('.tab-button').length; i++){
	$('.tab-button').eq(i).on('click', function() {
	$('.tab-button').removeClass('orange');
	$('.tab-button').eq(i).addClass('orange');
	
	$('.tab-content').removeClass('show');
	$('.tab-content').eq(i).addClass('show');
});

}