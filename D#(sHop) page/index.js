/* 전체 cart */
let cart = [];

/* 상의 장바구니 추가 */

function topFunc1() {
  localStorage.setItem(
    "EFF 베츠 맨투맨 그레이",
    "https://image.msscdn.net/images/goods_img/20200820/1557508/1557508_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function topFunc2() {
  localStorage.setItem(
    "M/G STRIPE LONG SLEEVE BLACK",
    "https://image.msscdn.net/images/goods_img/20200225/1322019/1322019_5_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}

function topFunc3() {
  localStorage.setItem(
    "레이어드 어센틱 롱슬리브 블랙",
    "https://image.msscdn.net/images/goods_img/20200819/1555103/1555103_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}

function topFunc4() {
  localStorage.setItem(
    " [Mmlg] MMLG SWEAT (MELANGE BLUE)",
    "https://image.msscdn.net/images/goods_img/20170905/624899/624899_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}

/* 아우터 장바구니 추가 */
function outerFunc1() {
  localStorage.setItem(
    "LUSH TRENCH COAT DRESS_BROWN",
    "https://image.msscdn.net/images/goods_img/20200928/1629488/1629488_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function outerFunc2() {
  localStorage.setItem(
    "IVORY MILLY TRENCH HANDMADE COAT",
    "https://image.msscdn.net/images/goods_img/20200928/1628344/1628344_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function outerFunc3() {
  localStorage.setItem(
    "M/G ANGEL FLEECE ZIP UP IVORY",
    "https://image.msscdn.net/images/goods_img/20191021/1195240/1195240_13_500.jpg"

  );
  alert("장바구니에 추가되었습니다.");
}

/* 원피스 장바구니 추가 */
function onepieceFunc1() {
  localStorage.setItem(
    "르메이 코트 원피스",
    "https://image.msscdn.net/images/goods_img/20200903/1581482/1581482_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function onepieceFunc2() {
  localStorage.setItem(
    "FRILL BUTTON RIBBON DRESS - SKYBLUE",
    "https://image.msscdn.net/images/goods_img/20190416/1015887/1015887_2_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function onepieceFunc3() {
  localStorage.setItem(
    "flare stitch onepiece - ivory",
    "https://image.msscdn.net/images/goods_img/20200923/1620162/1620162_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}

/* 스니커즈 장바구니 추가*/

function sneakersFunc1() {
  localStorage.setItem(
    "에라 - 트루 화이트 / VN000EWZW001",
    "https://image.msscdn.net/images/goods_img/20150223/165996/165996_4_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function sneakersFunc2() {
  localStorage.setItem(
    "Chuck 70 Classic Black 162050C",
    "https://image.msscdn.net/images/goods_img/20180703/810033/810033_2_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}

/* 하의 장바구니 추가*/

function pantsFunc1() {
  localStorage.setItem(
    "P[1005]롱 와이드 데님팬츠 (라이트블루)",
    "https://image.msscdn.net/images/goods_img/20200227/1326769/1326769_1_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}
function pantsFunc2() {
  localStorage.setItem(
    "WIDE DENIM PANTS (DEEP GREY)",
    "https://image.msscdn.net/images/goods_img/20181025/890338/890338_8_500.jpg"
  );
  alert("장바구니에 추가되었습니다.");
}

/* 기본 화면의 shopcart */

if (document.querySelector(".cart")) {
  const cartTag = document.querySelector(".cart");
  const cartP = document.createElement("p");
  const localValue = localStorage.length;
  const cartText = document.createTextNode(
    `현재 ${localValue}개의 물품이 장바구니에 있습니다.`
  );
  cartP.appendChild(cartText);
  cartTag.appendChild(cartP);
}


