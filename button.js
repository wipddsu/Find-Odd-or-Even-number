// set id in td element
let $tr = document.querySelectorAll('tr')
let cnt = 1;
for(let i = 0; i < $tr.length; i++){
  let $td = $tr[i].querySelectorAll('td');
  for(let j = 0; j < $td.length; j++){
    $td[j].setAttribute('id', cnt);
    cnt++;
  }
}

// add event on 'odd' button
function clickOdd(){
  let $td = document.querySelectorAll('td');
  
  for(let i = 0; i < $td.length; i++){
    $td[i].classList.remove('on');
    if($td[i].id % 2 !== 1) continue;
    $td[i].classList.add('on');
  }
}

// add event on 'even' button
function clickEven(){
  let $td = document.querySelectorAll('td');
  
  for(let i = 0; i < $td.length; i++){
    $td[i].classList.remove('on');
    if($td[i].id % 2 === 1) continue;
    $td[i].classList.add('on');
  }
}

document.getElementById('odd').addEventListener('click', clickOdd);
document.getElementById('even').addEventListener('click', clickEven);
