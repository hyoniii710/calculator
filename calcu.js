let calNum1 = "";
let operator = "";
let calNum2 = "";
let result = "";
let temp = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");
// 계산기 숫자, 연산부호 클릭이벤트 생성생성
// if문 중첩
// const onClickNum = (e) => {
//   if (!operator) {
//     calNum1 += e.target.textContent;
//     $result.value += e.target.textContent;
//     return;
//   }
//   if (!calNum2) {
//     $result.value = "";
//   }
//   calNum2 += e.target.textContent;
//   $result.value += e.target.textContent;
// };

const onClickNum = (e) => {
  if (operator) {
    if (!calNum2) {
      // num2가 없는 상황에서는 화면의 숫자를 "" 지워라..
      $result.value = "";
    }
    // 처음 클릭할때 num2가 없고, 두번째 숫자 클릭할때 num2가 생김 -> 화면을 잠깐 지우고나서 num2의 숫자가 생성
    calNum2 += e.target.textContent;
  } else {
    calNum1 += e.target.textContent;
  }
  $result.value += e.target.textContent;
};
document.querySelector("#num-0").addEventListener("click", onClickNum);
document.querySelector("#num-1").addEventListener("click", onClickNum);
document.querySelector("#num-2").addEventListener("click", onClickNum);
document.querySelector("#num-3").addEventListener("click", onClickNum);
document.querySelector("#num-4").addEventListener("click", onClickNum);
document.querySelector("#num-5").addEventListener("click", onClickNum);
document.querySelector("#num-6").addEventListener("click", onClickNum);
document.querySelector("#num-7").addEventListener("click", onClickNum);
document.querySelector("#num-8").addEventListener("click", onClickNum);
document.querySelector("#num-9").addEventListener("click", onClickNum);

const onClickOper = (op) => () => {
  //ex) +를 누르면 op가 +가 됨
  if (calNum1) {
    operator = op;
    $operator.value = op;
  } else if (!calNum2) {
    alert("숫자를 입력하세요.");
  }
};

document.querySelector("#plus").addEventListener("click", onClickOper("+"));
document.querySelector("#minus").addEventListener("click", onClickOper("-"));
document.querySelector("#divide").addEventListener("click", onClickOper("/"));
document.querySelector("#multiply").addEventListener("click", onClickOper("*"));
document.querySelector("#calculate").addEventListener("click", () => {
  if (calNum2) {
    if (operator == "+") {
      $result.value = parseInt(calNum1) + parseInt(calNum2);
    } else if (operator == "-") {
      $result.value = parseInt(calNum1) - parseInt(calNum2);
    } else if (operator == "*") {
      $result.value = parseInt(calNum1) * parseInt(calNum2);
    } else {
      $result.value = parseInt(calNum1) / parseInt(calNum2);
    }
    // 누적이 안됐던 부분 추가~~!
    $operator.value = "";
    calNum1 = $result.value;
    operator = "";
    calNum2 = "";
  } else {
    alert("숫자를 먼저 입력하세요.");
  }
});
// switch문
// document.querySelector("#calculate").addEventListener("click", () => {
//   if (calNum2) {
//     switch (operator) {
//       case "+":
//         $result.value = parseInt(calNum1) + parseInt(calNum2);
//         break;
//       case "-":
//         $result.value = calNum1 - calNum2;
//         break;
//       case "*":
//         $result.value = calNum1 * calNum2;
//         break;
//       case "/":
//         $result.value = calNum1 / calNum2;
//         break;
//       default:
//         break;
//     }

//     $operator.value = "";
//     calNum1 = "$result.value";
//     operator = "";
//     calNum2 = "";
//   } else {
//     alert("먼저 숫자를 입력하세요.");
//   }
// });

document.querySelector("#clear").addEventListener("click", () => {
  calNum1 = "";
  calNum2 = "";
  operator = "";
  $operator.value = "";
  $result.value = "";
});
