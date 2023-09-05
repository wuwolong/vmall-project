export function throttle(fun: Function, time: number): Function {
  let t1 = 0 //初始时间
  return function () {
    let t2 = new Date().getTime()
    if (t2 - t1 > time) {
      //@ts-ignore
      fun.apply(this, arguments)
      t1 = t2
    }
  }
}
