/**
 * @description 메인화면의 메뉴 목록을 조회하는 함수이다.
 * @returns {Promise} 플레이그라운드 메뉴 목록
 */
const getPlayItems = async () => {
  return await fetch('./src/assets/jsons/playItems.json').then(resp =>
    resp.json(),
  );
};

/**
 * @description 메인화면의 메뉴 목록을 생성하는 함수이다.
 * @returns {undefined} 반환값 없음
 */
const makeMainMenu = async () => {
  const ol = document.createElement('ol');
  const playItems = await getPlayItems().then(resp => resp);

  playItems.forEach(item => {
    const li = document.createElement('li');
    let a = document.createElement('a');
    a.href = item.href;
    a.textContent = item.name;
    li.appendChild(a);
    ol.appendChild(li);
  });

  document.querySelector('main').appendChild(ol);
};

makeMainMenu();
