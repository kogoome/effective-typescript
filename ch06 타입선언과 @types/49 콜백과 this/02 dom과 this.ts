// ! this는 클래스의 인스턴스 뿐 아니라 돔객체에서도 바인딩


document.querySelector('input')!.addEventListener('change', function (e) {
  // * 이벤트가 일어난 주체, 셀렉트 된 input Element로 this 바인딩
  console.log(this) 
})



export default {}
