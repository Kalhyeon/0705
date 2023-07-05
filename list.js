// http://localhost:5500/contacts?pageno=값
function getPageno() {
  // get 방식의 querystring 을 읽을 수 있는 객체를 생성한다.
  const params = new URLSearchParams(location.search);
  const pageno = parseInt(params.get('pageno'));
  // pageno 가 없거나 숫자로 바꿀 수 없는 값인 경우, parseInt 의 결과는 NaN 이다.
  // NaN 를 비교하면 무조건 false (JS 에서 NaN 는 비교되는 값이 아니다)이다.
  // NaN 와 비교할 때에는 isNaN() 함수를 사용해야 한다.
  if(isNaN(pageno)) {
    return 1;
  }else if(pageno<1) {
    return 1;
  }
  return pageno;
}

// 기본 매개변수 (default parameter)
async function fetch(pageno=1, pagesize=10) {
  const api = 'http://sample.bmaster.kro.kr/contacts';
  const url = `${api}?pageno=${pageno}&pagesize=${pagesize}`;
  // $.ajax() 는 비동기 처리되는 코드 => 언제 끝날 지 모른다.
  // 비동기 코드를 리턴 받는 result 는 "미래에 값이 들어올 것이다" 라는 값을 가진다.
  // Promise
  try {
    return await $.ajax(url);
  }catch(err) {
    console.log(err);
    return null;
  }
}