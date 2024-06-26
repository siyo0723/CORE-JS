/* ---------------------- */
/* Garbage Collection     */
/* ---------------------- */


/* 가비지 컬렉션 기준 -------------------------------------------------------- */
// JavaScript는 도달 가능성(reachability)에 따라 메모리를 관리합니다.
// 도달 가능한 값은 쉽게 말해 어떻게든 접근하거나 사용할 수 있는 값을 의미합니다.
// 도달 가능한 값은 메모리에서 삭제되지 않습니다.

// JavaScript Engine 내부의 Garbage Collector가 끊임없이 도달 가능한 값을 확인합니다.
// Garbage Collector에 의해 확인 된 도달 할 수 없는 값은 메모리에서 삭제됩니다.

let memoizedObject = {
  name: '메모리에 기억된 객체',
};


memoizedObject = null;




// memoizedObject가 참조한 데이터를 메모리 상에서 제거하도록 코드를 작성해봅니다.
// ※ 도달할 수 없는 상태가 되면 Garbage Collector에 의해 메모리 상에서 제거됩니다.



/**
 * JavaScript는 Garbage Collector에 의해 메모리가 관리되므로
 * 개발자가 임의로 데이터를 메모리에 상주할 수 없도록 막거나 하는 것을 할 수 없습니다.
 */
