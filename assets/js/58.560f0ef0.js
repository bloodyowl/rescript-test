exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 6058:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "deepEqual": () => (/* binding */ deepEqual),
  "equal": () => (/* binding */ TestAllPass_equal),
  "isCharCode": () => (/* binding */ isCharCode),
  "stringMapEqual": () => (/* binding */ stringMapEqual),
  "testAsyncWithSetupAndTeardown": () => (/* binding */ testAsyncWithSetupAndTeardown),
  "testWithSetup": () => (/* binding */ testWithSetup),
  "testWithSetupAndTeardown": () => (/* binding */ testWithSetupAndTeardown)
});

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Stdlib_List.js






function head(x) {
  if (x !== 0) {
    return Primitive_option.some(x.hd);
  }
}

function headOrThrow(x) {
  if (x !== 0) {
    return x.hd;
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}

function tail(x) {
  if (x !== 0) {
    return x.tl;
  }
}

function tailOrThrow(x) {
  if (x !== 0) {
    return x.tl;
  }
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}

function add(xs, x) {
  return {
    hd: x,
    tl: xs
  };
}

function get(x, n) {
  if (n < 0) {
    return;
  } else {
    let _x = x;
    let _n = n;
    while (true) {
      let n$1 = _n;
      let x$1 = _x;
      if (x$1 === 0) {
        return;
      }
      if (n$1 === 0) {
        return Primitive_option.some(x$1.hd);
      }
      _n = n$1 - 1 | 0;
      _x = x$1.tl;
      continue;
    };
  }
}

function getOrThrow(x, n) {
  if (n < 0) {
    throw {
      RE_EXN_ID: "Not_found",
      Error: new Error()
    };
  }
  let _x = x;
  let _n = n;
  while (true) {
    let n$1 = _n;
    let x$1 = _x;
    if (x$1 !== 0) {
      if (n$1 === 0) {
        return x$1.hd;
      }
      _n = n$1 - 1 | 0;
      _x = x$1.tl;
      continue;
    }
    throw {
      RE_EXN_ID: "Not_found",
      Error: new Error()
    };
  };
}

function partitionAux(p, _cell, _precX, _precY) {
  while (true) {
    let precY = _precY;
    let precX = _precX;
    let cell = _cell;
    if (cell === 0) {
      return;
    }
    let t = cell.tl;
    let h = cell.hd;
    let next = {
      hd: h,
      tl: /* [] */0
    };
    if (p(h)) {
      precX.tl = next;
      _precX = next;
      _cell = t;
      continue;
    }
    precY.tl = next;
    _precY = next;
    _cell = t;
    continue;
  };
}

function splitAux(_cell, _precX, _precY) {
  while (true) {
    let precY = _precY;
    let precX = _precX;
    let cell = _cell;
    if (cell === 0) {
      return;
    }
    let match = cell.hd;
    let nextA = {
      hd: match[0],
      tl: /* [] */0
    };
    let nextB = {
      hd: match[1],
      tl: /* [] */0
    };
    precX.tl = nextA;
    precY.tl = nextB;
    _precY = nextB;
    _precX = nextA;
    _cell = cell.tl;
    continue;
  };
}

function copyAuxCont(_cellX, _prec) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return prec;
    }
    let next = {
      hd: cellX.hd,
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = cellX.tl;
    continue;
  };
}

function copyAuxWitFilter(f, _cellX, _prec) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (f(h)) {
      let next = {
        hd: h,
        tl: /* [] */0
      };
      prec.tl = next;
      _prec = next;
      _cellX = t;
      continue;
    }
    _cellX = t;
    continue;
  };
}

function copyAuxWithFilterIndex(f, _cellX, _prec, _i) {
  while (true) {
    let i = _i;
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (f(h, i)) {
      let next = {
        hd: h,
        tl: /* [] */0
      };
      prec.tl = next;
      _i = i + 1 | 0;
      _prec = next;
      _cellX = t;
      continue;
    }
    _i = i + 1 | 0;
    _cellX = t;
    continue;
  };
}

function copyAuxWitFilterMap(f, _cellX, _prec) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let t = cellX.tl;
    let h = f(cellX.hd);
    if (h !== undefined) {
      let next = {
        hd: Primitive_option.valFromOption(h),
        tl: /* [] */0
      };
      prec.tl = next;
      _prec = next;
      _cellX = t;
      continue;
    }
    _cellX = t;
    continue;
  };
}

function removeAssocAuxWithMap(_cellX, x, _prec, f) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return false;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (f(h[0], x)) {
      prec.tl = t;
      return true;
    }
    let next = {
      hd: h,
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = t;
    continue;
  };
}

function setAssocAuxWithMap(_cellX, x, k, _prec, eq) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return false;
    }
    let t = cellX.tl;
    let h = cellX.hd;
    if (eq(h[0], x)) {
      prec.tl = {
        hd: [
          x,
          k
        ],
        tl: t
      };
      return true;
    }
    let next = {
      hd: h,
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = t;
    continue;
  };
}

function copyAuxWithMap(_cellX, _prec, f) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    let next = {
      hd: f(cellX.hd),
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = cellX.tl;
    continue;
  };
}

function zipAux(_cellX, _cellY, _prec) {
  while (true) {
    let prec = _prec;
    let cellY = _cellY;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    if (cellY === 0) {
      return;
    }
    let next = {
      hd: [
        cellX.hd,
        cellY.hd
      ],
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellY = cellY.tl;
    _cellX = cellX.tl;
    continue;
  };
}

function copyAuxWithMap2(f, _cellX, _cellY, _prec) {
  while (true) {
    let prec = _prec;
    let cellY = _cellY;
    let cellX = _cellX;
    if (cellX === 0) {
      return;
    }
    if (cellY === 0) {
      return;
    }
    let next = {
      hd: f(cellX.hd, cellY.hd),
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellY = cellY.tl;
    _cellX = cellX.tl;
    continue;
  };
}

function copyAuxWithMapI(f, _i, _cellX, _prec) {
  while (true) {
    let prec = _prec;
    let cellX = _cellX;
    let i = _i;
    if (cellX === 0) {
      return;
    }
    let next = {
      hd: f(cellX.hd, i),
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = cellX.tl;
    _i = i + 1 | 0;
    continue;
  };
}

function takeAux(_n, _cell, _prec) {
  while (true) {
    let prec = _prec;
    let cell = _cell;
    let n = _n;
    if (n === 0) {
      return true;
    }
    if (cell === 0) {
      return false;
    }
    let cell$1 = {
      hd: cell.hd,
      tl: /* [] */0
    };
    prec.tl = cell$1;
    _prec = cell$1;
    _cell = cell.tl;
    _n = n - 1 | 0;
    continue;
  };
}

function splitAtAux(_n, _cell, _prec) {
  while (true) {
    let prec = _prec;
    let cell = _cell;
    let n = _n;
    if (n === 0) {
      return cell;
    }
    if (cell === 0) {
      return;
    }
    let cell$1 = {
      hd: cell.hd,
      tl: /* [] */0
    };
    prec.tl = cell$1;
    _prec = cell$1;
    _cell = cell.tl;
    _n = n - 1 | 0;
    continue;
  };
}

function take(lst, n) {
  if (n < 0) {
    return;
  }
  if (n === 0) {
    return /* [] */0;
  }
  if (lst === 0) {
    return;
  }
  let cell = {
    hd: lst.hd,
    tl: /* [] */0
  };
  let has = takeAux(n - 1 | 0, lst.tl, cell);
  if (has) {
    return cell;
  }
}

function drop(lst, n) {
  if (n < 0) {
    return;
  } else {
    let _l = lst;
    let _n = n;
    while (true) {
      let n$1 = _n;
      let l = _l;
      if (n$1 === 0) {
        return l;
      }
      if (l === 0) {
        return;
      }
      _n = n$1 - 1 | 0;
      _l = l.tl;
      continue;
    };
  }
}

function splitAt(lst, n) {
  if (n < 0) {
    return;
  }
  if (n === 0) {
    return [
      /* [] */0,
      lst
    ];
  }
  if (lst === 0) {
    return;
  }
  let cell = {
    hd: lst.hd,
    tl: /* [] */0
  };
  let rest = splitAtAux(n - 1 | 0, lst.tl, cell);
  if (rest !== undefined) {
    return [
      cell,
      rest
    ];
  }
}

function concat(xs, ys) {
  if (xs === 0) {
    return ys;
  }
  let cell = {
    hd: xs.hd,
    tl: /* [] */0
  };
  copyAuxCont(xs.tl, cell).tl = ys;
  return cell;
}

function map(xs, f) {
  if (xs === 0) {
    return /* [] */0;
  }
  let cell = {
    hd: f(xs.hd),
    tl: /* [] */0
  };
  copyAuxWithMap(xs.tl, cell, f);
  return cell;
}

function zipBy(l1, l2, f) {
  if (l1 === 0) {
    return /* [] */0;
  }
  if (l2 === 0) {
    return /* [] */0;
  }
  let cell = {
    hd: f(l1.hd, l2.hd),
    tl: /* [] */0
  };
  copyAuxWithMap2(f, l1.tl, l2.tl, cell);
  return cell;
}

function mapWithIndex(xs, f) {
  if (xs === 0) {
    return /* [] */0;
  }
  let cell = {
    hd: f(xs.hd, 0),
    tl: /* [] */0
  };
  copyAuxWithMapI(f, 1, xs.tl, cell);
  return cell;
}

function fromInitializer(n, f) {
  if (n <= 0) {
    return /* [] */0;
  }
  let headX = {
    hd: f(0),
    tl: /* [] */0
  };
  let cur = headX;
  let i = 1;
  while (i < n) {
    let v = {
      hd: f(i),
      tl: /* [] */0
    };
    cur.tl = v;
    cur = v;
    i = i + 1 | 0;
  };
  return headX;
}

function make(n, v) {
  if (n <= 0) {
    return /* [] */0;
  }
  let headX = {
    hd: v,
    tl: /* [] */0
  };
  let cur = headX;
  let i = 1;
  while (i < n) {
    let v$1 = {
      hd: v,
      tl: /* [] */0
    };
    cur.tl = v$1;
    cur = v$1;
    i = i + 1 | 0;
  };
  return headX;
}

function Stdlib_List_length(xs) {
  let _x = xs;
  let _acc = 0;
  while (true) {
    let acc = _acc;
    let x = _x;
    if (x === 0) {
      return acc;
    }
    _acc = acc + 1 | 0;
    _x = x.tl;
    continue;
  };
}

function fillAux(arr, _i, _x) {
  while (true) {
    let x = _x;
    let i = _i;
    if (x === 0) {
      return;
    }
    arr[i] = x.hd;
    _x = x.tl;
    _i = i + 1 | 0;
    continue;
  };
}

function fromArray(a) {
  let _i = a.length - 1 | 0;
  let _res = /* [] */0;
  while (true) {
    let res = _res;
    let i = _i;
    if (i < 0) {
      return res;
    }
    _res = {
      hd: a[i],
      tl: res
    };
    _i = i - 1 | 0;
    continue;
  };
}

function toArray(x) {
  let len = Stdlib_List_length(x);
  let arr = new Array(len);
  fillAux(arr, 0, x);
  return arr;
}

function shuffle(xs) {
  let v = toArray(xs);
  Stdlib_Array.shuffle(v);
  return fromArray(v);
}

function reverseConcat(_l1, _l2) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return l2;
    }
    _l2 = {
      hd: l1.hd,
      tl: l2
    };
    _l1 = l1.tl;
    continue;
  };
}

function reverse(l) {
  return reverseConcat(l, /* [] */0);
}

function flatAux(_prec, _xs) {
  while (true) {
    let xs = _xs;
    let prec = _prec;
    if (xs !== 0) {
      _xs = xs.tl;
      _prec = copyAuxCont(xs.hd, prec);
      continue;
    }
    prec.tl = /* [] */0;
    return;
  };
}

function flat(_xs) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return /* [] */0;
    }
    let match = xs.hd;
    if (match !== 0) {
      let cell = {
        hd: match.hd,
        tl: /* [] */0
      };
      flatAux(copyAuxCont(match.tl, cell), xs.tl);
      return cell;
    }
    _xs = xs.tl;
    continue;
  };
}

function concatMany(xs) {
  let len = xs.length;
  if (len === 1) {
    return xs[0];
  }
  if (len === 0) {
    return /* [] */0;
  }
  let len$1 = xs.length;
  let v = xs[len$1 - 1 | 0];
  for (let i = len$1 - 2 | 0; i >= 0; --i) {
    v = concat(xs[i], v);
  }
  return v;
}

function mapReverse(l, f) {
  let _accu = /* [] */0;
  let _xs = l;
  while (true) {
    let xs = _xs;
    let accu = _accu;
    if (xs === 0) {
      return accu;
    }
    _xs = xs.tl;
    _accu = {
      hd: f(xs.hd),
      tl: accu
    };
    continue;
  };
}

function forEach(_xs, f) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    f(xs.hd);
    _xs = xs.tl;
    continue;
  };
}

function forEachWithIndex(l, f) {
  let _xs = l;
  let _i = 0;
  while (true) {
    let i = _i;
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    f(xs.hd, i);
    _i = i + 1 | 0;
    _xs = xs.tl;
    continue;
  };
}

function reduce(_l, _accu, f) {
  while (true) {
    let accu = _accu;
    let l = _l;
    if (l === 0) {
      return accu;
    }
    _accu = f(accu, l.hd);
    _l = l.tl;
    continue;
  };
}

function reduceReverseUnsafe(l, accu, f) {
  if (l !== 0) {
    return f(reduceReverseUnsafe(l.tl, accu, f), l.hd);
  } else {
    return accu;
  }
}

function reduceReverse(l, acc, f) {
  let len = Stdlib_List_length(l);
  if (len < 1000) {
    return reduceReverseUnsafe(l, acc, f);
  } else {
    let a = toArray(l);
    let r = acc;
    for (let i = a.length - 1 | 0; i >= 0; --i) {
      r = f(r, a[i]);
    }
    return r;
  }
}

function reduceWithIndex(l, acc, f) {
  let _l = l;
  let _acc = acc;
  let _i = 0;
  while (true) {
    let i = _i;
    let acc$1 = _acc;
    let l$1 = _l;
    if (l$1 === 0) {
      return acc$1;
    }
    _i = i + 1 | 0;
    _acc = f(acc$1, l$1.hd, i);
    _l = l$1.tl;
    continue;
  };
}

function mapReverse2(l1, l2, f) {
  let _l1 = l1;
  let _l2 = l2;
  let _accu = /* [] */0;
  while (true) {
    let accu = _accu;
    let l2$1 = _l2;
    let l1$1 = _l1;
    if (l1$1 === 0) {
      return accu;
    }
    if (l2$1 === 0) {
      return accu;
    }
    _accu = {
      hd: f(l1$1.hd, l2$1.hd),
      tl: accu
    };
    _l2 = l2$1.tl;
    _l1 = l1$1.tl;
    continue;
  };
}

function forEach2(_l1, _l2, f) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return;
    }
    if (l2 === 0) {
      return;
    }
    f(l1.hd, l2.hd);
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function reduce2(_l1, _l2, _accu, f) {
  while (true) {
    let accu = _accu;
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return accu;
    }
    if (l2 === 0) {
      return accu;
    }
    _accu = f(accu, l1.hd, l2.hd);
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function reduceReverse2Unsafe(l1, l2, accu, f) {
  if (l1 !== 0 && l2 !== 0) {
    return f(reduceReverse2Unsafe(l1.tl, l2.tl, accu, f), l1.hd, l2.hd);
  } else {
    return accu;
  }
}

function reduceReverse2(l1, l2, acc, f) {
  let len = Stdlib_List_length(l1);
  if (len < 1000) {
    return reduceReverse2Unsafe(l1, l2, acc, f);
  } else {
    let a = toArray(l1);
    let b = toArray(l2);
    let r = acc;
    let len$1 = Primitive_int.min(a.length, b.length);
    for (let i = len$1 - 1 | 0; i >= 0; --i) {
      r = f(r, a[i], b[i]);
    }
    return r;
  }
}

function every(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return true;
    }
    if (!p(xs.hd)) {
      return false;
    }
    _xs = xs.tl;
    continue;
  };
}

function some(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return false;
    }
    if (p(xs.hd)) {
      return true;
    }
    _xs = xs.tl;
    continue;
  };
}

function every2(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return true;
    }
    if (l2 === 0) {
      return true;
    }
    if (!p(l1.hd, l2.hd)) {
      return false;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function compareLength(_l1, _l2) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      if (l2 !== 0) {
        return -1;
      } else {
        return 0;
      }
    }
    if (l2 === 0) {
      return 1;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function compare(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      if (l2 !== 0) {
        return -1;
      } else {
        return 0;
      }
    }
    if (l2 === 0) {
      return 1;
    }
    let c = p(l1.hd, l2.hd);
    if (c !== 0) {
      return c;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function equal(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return l2 === 0;
    }
    if (l2 === 0) {
      return false;
    }
    if (!p(l1.hd, l2.hd)) {
      return false;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function some2(_l1, _l2, p) {
  while (true) {
    let l2 = _l2;
    let l1 = _l1;
    if (l1 === 0) {
      return false;
    }
    if (l2 === 0) {
      return false;
    }
    if (p(l1.hd, l2.hd)) {
      return true;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue;
  };
}

function has(_xs, x, eq) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return false;
    }
    if (eq(xs.hd, x)) {
      return true;
    }
    _xs = xs.tl;
    continue;
  };
}

function getAssoc(_xs, x, eq) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    let match = xs.hd;
    if (eq(match[0], x)) {
      return Primitive_option.some(match[1]);
    }
    _xs = xs.tl;
    continue;
  };
}

function hasAssoc(_xs, x, eq) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return false;
    }
    if (eq(xs.hd[0], x)) {
      return true;
    }
    _xs = xs.tl;
    continue;
  };
}

function removeAssoc(xs, x, eq) {
  if (xs === 0) {
    return /* [] */0;
  }
  let l = xs.tl;
  let pair = xs.hd;
  if (eq(pair[0], x)) {
    return l;
  }
  let cell = {
    hd: pair,
    tl: /* [] */0
  };
  let removed = removeAssocAuxWithMap(l, x, cell, eq);
  if (removed) {
    return cell;
  } else {
    return xs;
  }
}

function setAssoc(xs, x, k, eq) {
  if (xs === 0) {
    return {
      hd: [
        x,
        k
      ],
      tl: /* [] */0
    };
  }
  let l = xs.tl;
  let pair = xs.hd;
  if (eq(pair[0], x)) {
    return {
      hd: [
        x,
        k
      ],
      tl: l
    };
  }
  let cell = {
    hd: pair,
    tl: /* [] */0
  };
  let replaced = setAssocAuxWithMap(l, x, k, cell, eq);
  if (replaced) {
    return cell;
  } else {
    return {
      hd: [
        x,
        k
      ],
      tl: xs
    };
  }
}

function sort(xs, cmp) {
  let arr = toArray(xs);
  arr.sort(cmp);
  return fromArray(arr);
}

function find(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return;
    }
    let x = xs.hd;
    if (p(x)) {
      return Primitive_option.some(x);
    }
    _xs = xs.tl;
    continue;
  };
}

function filter(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return /* [] */0;
    }
    let t = xs.tl;
    let h = xs.hd;
    if (p(h)) {
      let cell = {
        hd: h,
        tl: /* [] */0
      };
      copyAuxWitFilter(p, t, cell);
      return cell;
    }
    _xs = t;
    continue;
  };
}

function filterWithIndex(xs, p) {
  let _xs = xs;
  let _i = 0;
  while (true) {
    let i = _i;
    let xs$1 = _xs;
    if (xs$1 === 0) {
      return /* [] */0;
    }
    let t = xs$1.tl;
    let h = xs$1.hd;
    if (p(h, i)) {
      let cell = {
        hd: h,
        tl: /* [] */0
      };
      copyAuxWithFilterIndex(p, t, cell, i + 1 | 0);
      return cell;
    }
    _i = i + 1 | 0;
    _xs = t;
    continue;
  };
}

function filterMap(_xs, p) {
  while (true) {
    let xs = _xs;
    if (xs === 0) {
      return /* [] */0;
    }
    let t = xs.tl;
    let h = p(xs.hd);
    if (h !== undefined) {
      let cell = {
        hd: Primitive_option.valFromOption(h),
        tl: /* [] */0
      };
      copyAuxWitFilterMap(p, t, cell);
      return cell;
    }
    _xs = t;
    continue;
  };
}

function partition(l, p) {
  if (l === 0) {
    return [
      /* [] */0,
      /* [] */0
    ];
  }
  let h = l.hd;
  let nextX = {
    hd: h,
    tl: /* [] */0
  };
  let nextY = {
    hd: h,
    tl: /* [] */0
  };
  let b = p(h);
  partitionAux(p, l.tl, nextX, nextY);
  if (b) {
    return [
      nextX,
      nextY.tl
    ];
  } else {
    return [
      nextX.tl,
      nextY
    ];
  }
}

function unzip(xs) {
  if (xs === 0) {
    return [
      /* [] */0,
      /* [] */0
    ];
  }
  let match = xs.hd;
  let cellX = {
    hd: match[0],
    tl: /* [] */0
  };
  let cellY = {
    hd: match[1],
    tl: /* [] */0
  };
  splitAux(xs.tl, cellX, cellY);
  return [
    cellX,
    cellY
  ];
}

function zip(l1, l2) {
  if (l1 === 0) {
    return /* [] */0;
  }
  if (l2 === 0) {
    return /* [] */0;
  }
  let cell = {
    hd: [
      l1.hd,
      l2.hd
    ],
    tl: /* [] */0
  };
  zipAux(l1.tl, l2.tl, cell);
  return cell;
}

let size = (/* unused pure expression or super */ null && (Stdlib_List_length));

let headExn = (/* unused pure expression or super */ null && (headOrThrow));

let tailExn = (/* unused pure expression or super */ null && (tailOrThrow));

let getExn = (/* unused pure expression or super */ null && (getOrThrow));

let toShuffled = (/* unused pure expression or super */ null && (shuffle));


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Primitive_exceptions.js



function isExtension(e) {
  if (e == null) {
    return false;
  } else {
    return typeof e.RE_EXN_ID === "string";
  }
}

function internalToException(e) {
  if (isExtension(e)) {
    return e;
  } else {
    return {
      RE_EXN_ID: "JsExn",
      _1: e
    };
  }
}

let idMap = {};

function create(str) {
  let v = idMap[str];
  if (v !== undefined) {
    let id = v + 1 | 0;
    idMap[str] = id;
    return str + ("/" + id);
  }
  idMap[str] = 1;
  return str;
}

let $$Error = "JsExn";


/* No side effect */

;// CONCATENATED MODULE: ../src/Test.mjs
// Generated by ReScript, PLEASE EDIT WITH CARE




function exit(code) {
  if (typeof process !== "undefined") {
    process.exit(code);
  } else {
    console.log(`# Exit code: ` + code.toString());
  }
}

function red(text) {
  if (typeof process !== "undefined") {
    return `\u001b[31m` + text + `\u001b[0m`;
  } else {
    return text;
  }
}

function green(text) {
  if (typeof process !== "undefined") {
    return `\u001b[32m` + text + `\u001b[0m`;
  } else {
    return text;
  }
}

function pink(text) {
  if (typeof process !== "undefined") {
    return `\u001b[34m` + text + `\u001b[0m`;
  } else {
    return text;
  }
}

function yellow(text) {
  if (typeof process !== "undefined") {
    return `\u001b[33m` + text + `\u001b[0m`;
  } else {
    return text;
  }
}

function grey(text) {
  if (typeof process !== "undefined") {
    return `\u001b[2m` + text + `\u001b[0m`;
  } else {
    return text;
  }
}

let passText = green(`PASS`);

let failText = red(`FAIL`);

let todoText = yellow(`TODO`);

let running = {
  contents: false
};

let testCounter = {
  contents: 0
};

let testPassedCounter = {
  contents: 0
};

let testFailedCounter = {
  contents: 0
};

let testTimeoutCounter = {
  contents: 0
};

function testText(name, index) {
  let index$1 = index.toString();
  let total = testCounter.contents.toString();
  console.log(index$1 + `/` + total + `: ` + name);
}

let passCounter = {
  contents: 0
};

let failCounter = {
  contents: 0
};

function total() {
  return (passCounter.contents + failCounter.contents | 0).toString();
}

let queue = {
  contents: /* [] */0
};

function registerTest(test) {
  queue.contents = {
    hd: test,
    tl: queue.contents
  };
}

function formatMessage(message) {
  if (message !== undefined) {
    return ` - ` + message;
  } else {
    return grey(` - No message`);
  }
}

function assertion(message, operator, compare, a, b) {
  if (compare(a, b)) {
    passCounter.contents = passCounter.contents + 1 | 0;
    console.log(`  ` + passText + formatMessage(message));
  } else {
    failCounter.contents = failCounter.contents + 1 | 0;
    console.log(`  ` + failText + formatMessage(message));
    console.log(`    ---`);
    if (operator !== undefined) {
      console.log(`    ` + pink("operator") + `: ` + operator);
    }
    console.log(`    ` + pink("left") + `: `, a);
    console.log(`    ` + pink("right") + `:`, b);
    console.log(`    ...`);
  }
}

function doesNotThrow(message, func) {
  try {
    func();
    passCounter.contents = passCounter.contents + 1 | 0;
    console.log(`  ` + passText + formatMessage(message));
    return;
  } catch (raw_exn) {
    let exn = Primitive_exceptions.internalToException(raw_exn);
    failCounter.contents = failCounter.contents + 1 | 0;
    console.log(`  ` + failText + formatMessage(message));
    console.log(`    ---`);
    console.log(`    ` + pink("operator") + `: doesNotThrow`);
    console.log(`    ` + pink("error") + `:`, exn);
    console.log(`    ...`);
    return;
  }
}

function Test_throws(message, test, func) {
  try {
    func();
    failCounter.contents = failCounter.contents + 1 | 0;
    console.log(`  ` + failText + formatMessage(message));
    return;
  } catch (raw_exn) {
    let exn = Primitive_exceptions.internalToException(raw_exn);
    if (test !== undefined && test(exn) === false) {
      failCounter.contents = failCounter.contents + 1 | 0;
      console.log(`  ` + failText + formatMessage(message));
      return;
    }
    passCounter.contents = passCounter.contents + 1 | 0;
    console.log(`  ` + passText + formatMessage(message));
    return;
  }
}

function todo(message) {
  console.log(`  ` + todoText + formatMessage(message));
}

function pass(message, param) {
  passCounter.contents = passCounter.contents + 1 | 0;
  console.log(`  ` + passText + formatMessage(message));
}

function fail(message, param) {
  failCounter.contents = failCounter.contents + 1 | 0;
  console.log(`  ` + failText + formatMessage(message));
  console.log(`    ---`);
  console.log(`    ` + pink("operator") + `: fail`);
  console.log(`    ...`);
}

function testAsync(name, timeoutOpt, func) {
  let timeout = timeoutOpt !== undefined ? timeoutOpt : 5000;
  if (running.contents) {
    console.error(red(`# Cannot add testAsync("` + name + `", ...), tests must be defined at the top level`));
    return;
  }
  testCounter.contents = testCounter.contents + 1 | 0;
  let index = testCounter.contents;
  registerTest(resolve => {
    let failedAtStart = failCounter.contents;
    let passedAtStart = passCounter.contents;
    testText(name, index);
    try {
      let timeoutId = setTimeout(() => {
        let message = `Timed out after ` + timeout.toString() + `ms`;
        testTimeoutCounter.contents = testTimeoutCounter.contents + 1 | 0;
        console.log(`  ` + failText + formatMessage(message));
        resolve();
      }, timeout);
      return func((planned, param) => {
        if (planned !== undefined) {
          assertion("Correct assertion count", "planned", (a, b) => a === b, planned, (passCounter.contents + failCounter.contents | 0) - (passedAtStart + failedAtStart | 0) | 0);
        }
        clearTimeout(timeoutId);
        if (failCounter.contents > failedAtStart) {
          testFailedCounter.contents = testFailedCounter.contents + 1 | 0;
        } else {
          testPassedCounter.contents = testPassedCounter.contents + 1 | 0;
        }
        resolve();
      });
    } catch (raw_exn) {
      let exn = internalToException(raw_exn);
      console.error(exn);
      return exit(1);
    }
  });
}

function testAsyncWith(setup, teardown, name, timeout, func) {
  testAsync(name, timeout, callback => {
    let value = setup();
    func(value, (planned, param) => {
      try {
        if (teardown !== undefined) {
          teardown(value);
        }
      } catch (raw_exn) {
        let exn = internalToException(raw_exn);
        console.error(exn);
        exit(1);
      }
      callback(planned, undefined);
    });
  });
}

function createTestAsyncWith(setup, teardown) {
  return (name, timeout, func) => testAsyncWith(setup, teardown, name, timeout, func);
}

function test(name, func) {
  if (running.contents) {
    console.error(red(`# Cannot add test("` + name + `", ...), tests must be defined at the top level`));
    return;
  }
  testCounter.contents = testCounter.contents + 1 | 0;
  let index = testCounter.contents;
  registerTest(resolve => {
    let failedAtStart = failCounter.contents;
    testText(name, index);
    try {
      func();
    } catch (raw_exn) {
      let exn = internalToException(raw_exn);
      console.error(exn);
      exit(1);
    }
    if (failCounter.contents > failedAtStart) {
      testFailedCounter.contents = testFailedCounter.contents + 1 | 0;
    } else {
      testPassedCounter.contents = testPassedCounter.contents + 1 | 0;
    }
    resolve();
  });
}

function testWith(setup, teardown, name, func) {
  test(name, () => {
    let value = setup();
    func(value);
    if (teardown !== undefined) {
      return teardown(value);
    }
  });
}

function createTestWith(setup, teardown) {
  return (name, func) => testWith(setup, teardown, name, func);
}

let autoBoot = {
  contents: true
};

function runTests() {
  running.contents = true;
  let onEnd = () => {
    console.log(``);
    console.log(grey(`# Ran ` + testCounter.contents.toString() + ` tests (` + total() + ` assertions)`));
    console.log(grey(`# ` + testPassedCounter.contents.toString() + ` passed`));
    console.log(grey(`# ` + (testFailedCounter.contents + testTimeoutCounter.contents | 0).toString() + ` failed` + (
      testTimeoutCounter.contents > 0 ? ` (` + testTimeoutCounter.contents.toString() + ` timed out)` : ``
    )));
    if ((testFailedCounter.contents + testTimeoutCounter.contents | 0) > 0) {
      return exit(1);
    } else {
      return exit(0);
    }
  };
  let tests = reverse(queue.contents);
  let runNextTest = tests => {
    if (tests !== 0) {
      let rest = tests.tl;
      return tests.hd(() => runNextTest(rest));
    }
    onEnd();
  };
  runNextTest(tests);
}

setTimeout(() => {
  if (autoBoot.contents) {
    return runTests();
  }
}, 0);


/* passText Not a pure module */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Stdlib_String.js



function charCodeAt(s, i) {
  let c = s.charCodeAt(i);
  if (Number.isNaN(c)) {
    return;
  } else {
    return c | 0;
  }
}

function indexOfOpt(s, search) {
  let index = s.indexOf(search);
  if (index !== -1) {
    return index;
  }
}

function lastIndexOfOpt(s, search) {
  let index = s.lastIndexOf(search);
  if (index !== -1) {
    return index;
  }
}

function searchOpt(s, re) {
  let index = s.search(re);
  if (index !== -1) {
    return index;
  }
}

function isEmpty(s) {
  return s.length === 0;
}

function capitalize(s) {
  if (s.length === 0) {
    return s;
  } else {
    return s[0].toUpperCase() + s.slice(1);
  }
}


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Primitive_int.js



function Primitive_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function div(x, y) {
  if (y === 0) {
    throw {
      RE_EXN_ID: "Division_by_zero",
      Error: new Error()
    };
  }
  return x / y | 0;
}

function mod_(x, y) {
  if (y === 0) {
    throw {
      RE_EXN_ID: "Division_by_zero",
      Error: new Error()
    };
  }
  return x % y;
}


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Primitive_option.js



function isNested(x) {
  return x.BS_PRIVATE_NESTED_SOME_NONE !== undefined;
}

function Primitive_option_some(x) {
  if (x === undefined) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: 0
    };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
    };
  } else {
    return x;
  }
}

function fromNullable(x) {
  if (x == null) {
    return;
  } else {
    return Primitive_option_some(x);
  }
}

function fromUndefined(x) {
  if (x === undefined) {
    return;
  } else {
    return Primitive_option_some(x);
  }
}

function fromNull(x) {
  if (x === null) {
    return;
  } else {
    return Primitive_option_some(x);
  }
}

function valFromOption(x) {
  if (x === null || x.BS_PRIVATE_NESTED_SOME_NONE === undefined) {
    return x;
  }
  let depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return;
  } else {
    return {
      BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
    };
  }
}

function toUndefined(x) {
  if (x === undefined) {
    return;
  } else {
    return valFromOption(x);
  }
}

function unwrapPolyVar(x) {
  if (x !== undefined) {
    return x.VAL;
  } else {
    return x;
  }
}


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Belt_internalAVLtree.js






function treeHeight(n) {
  if (n !== undefined) {
    return n.h;
  } else {
    return 0;
  }
}

function copy(n) {
  if (n !== undefined) {
    return {
      k: n.k,
      v: n.v,
      h: n.h,
      l: copy(n.l),
      r: copy(n.r)
    };
  } else {
    return n;
  }
}

function Belt_internalAVLtree_create(l, x, d, r) {
  let hl = treeHeight(l);
  let hr = treeHeight(r);
  return {
    k: x,
    v: d,
    h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
    l: l,
    r: r
  };
}

function singleton(x, d) {
  return {
    k: x,
    v: d,
    h: 1,
    l: undefined,
    r: undefined
  };
}

function heightGe(l, r) {
  if (r !== undefined) {
    if (l !== undefined) {
      return l.h >= r.h;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function updateValue(n, newValue) {
  if (n.v === newValue) {
    return n;
  } else {
    return {
      k: n.k,
      v: newValue,
      h: n.h,
      l: n.l,
      r: n.r
    };
  }
}

function bal(l, x, d, r) {
  let hl = l !== undefined ? l.h : 0;
  let hr = r !== undefined ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    let ll = l.l;
    let lr = l.r;
    if (treeHeight(ll) >= treeHeight(lr)) {
      return Belt_internalAVLtree_create(ll, l.k, l.v, Belt_internalAVLtree_create(lr, x, d, r));
    } else {
      return Belt_internalAVLtree_create(Belt_internalAVLtree_create(ll, l.k, l.v, lr.l), lr.k, lr.v, Belt_internalAVLtree_create(lr.r, x, d, r));
    }
  }
  if (hr <= (hl + 2 | 0)) {
    return {
      k: x,
      v: d,
      h: hl >= hr ? hl + 1 | 0 : hr + 1 | 0,
      l: l,
      r: r
    };
  }
  let rl = r.l;
  let rr = r.r;
  if (treeHeight(rr) >= treeHeight(rl)) {
    return Belt_internalAVLtree_create(Belt_internalAVLtree_create(l, x, d, rl), r.k, r.v, rr);
  } else {
    return Belt_internalAVLtree_create(Belt_internalAVLtree_create(l, x, d, rl.l), rl.k, rl.v, Belt_internalAVLtree_create(rl.r, r.k, r.v, rr));
  }
}

function minKey0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.l;
    if (n$1 === undefined) {
      return n.k;
    }
    _n = n$1;
    continue;
  };
}

function minKey(n) {
  if (n !== undefined) {
    return Primitive_option_some(minKey0Aux(n));
  }
}

function minKeyUndefined(n) {
  if (n !== undefined) {
    return minKey0Aux(n);
  }
}

function maxKey0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.r;
    if (n$1 === undefined) {
      return n.k;
    }
    _n = n$1;
    continue;
  };
}

function maxKey(n) {
  if (n !== undefined) {
    return Primitive_option_some(maxKey0Aux(n));
  }
}

function maxKeyUndefined(n) {
  if (n !== undefined) {
    return maxKey0Aux(n);
  }
}

function minKV0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.l;
    if (n$1 === undefined) {
      return [
        n.k,
        n.v
      ];
    }
    _n = n$1;
    continue;
  };
}

function minimum(n) {
  if (n !== undefined) {
    return minKV0Aux(n);
  }
}

function minUndefined(n) {
  if (n !== undefined) {
    return minKV0Aux(n);
  }
}

function maxKV0Aux(_n) {
  while (true) {
    let n = _n;
    let n$1 = n.r;
    if (n$1 === undefined) {
      return [
        n.k,
        n.v
      ];
    }
    _n = n$1;
    continue;
  };
}

function maximum(n) {
  if (n !== undefined) {
    return maxKV0Aux(n);
  }
}

function maxUndefined(n) {
  if (n !== undefined) {
    return maxKV0Aux(n);
  }
}

function removeMinAuxWithRef(n, kr, vr) {
  let ln = n.l;
  if (ln !== undefined) {
    return bal(removeMinAuxWithRef(ln, kr, vr), n.k, n.v, n.r);
  } else {
    kr.contents = n.k;
    vr.contents = n.v;
    return n.r;
  }
}

function Belt_internalAVLtree_isEmpty(x) {
  return x === undefined;
}

function stackAllLeft(_v, _s) {
  while (true) {
    let s = _s;
    let v = _v;
    if (v === undefined) {
      return s;
    }
    _s = {
      hd: v,
      tl: s
    };
    _v = v.l;
    continue;
  };
}

function findFirstBy(n, p) {
  if (n === undefined) {
    return;
  }
  let left = findFirstBy(n.l, p);
  if (left !== undefined) {
    return left;
  }
  let v = n.k;
  let d = n.v;
  let pvd = p(v, d);
  if (pvd) {
    return [
      v,
      d
    ];
  }
  let right = findFirstBy(n.r, p);
  if (right !== undefined) {
    return right;
  }
}

function Belt_internalAVLtree_forEach(_n, f) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return;
    }
    Belt_internalAVLtree_forEach(n.l, f);
    f(n.k, n.v);
    _n = n.r;
    continue;
  };
}

function Belt_internalAVLtree_map(n, f) {
  if (n === undefined) {
    return;
  }
  let newLeft = Belt_internalAVLtree_map(n.l, f);
  let newD = f(n.v);
  let newRight = Belt_internalAVLtree_map(n.r, f);
  return {
    k: n.k,
    v: newD,
    h: n.h,
    l: newLeft,
    r: newRight
  };
}

function mapWithKey(n, f) {
  if (n === undefined) {
    return;
  }
  let key = n.k;
  let newLeft = mapWithKey(n.l, f);
  let newD = f(key, n.v);
  let newRight = mapWithKey(n.r, f);
  return {
    k: key,
    v: newD,
    h: n.h,
    l: newLeft,
    r: newRight
  };
}

function Belt_internalAVLtree_reduce(_m, _accu, f) {
  while (true) {
    let accu = _accu;
    let m = _m;
    if (m === undefined) {
      return accu;
    }
    let v = m.k;
    let d = m.v;
    let l = m.l;
    let r = m.r;
    _accu = f(Belt_internalAVLtree_reduce(l, accu, f), v, d);
    _m = r;
    continue;
  };
}

function Belt_internalAVLtree_every(_n, p) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return true;
    }
    if (!p(n.k, n.v)) {
      return false;
    }
    if (!Belt_internalAVLtree_every(n.l, p)) {
      return false;
    }
    _n = n.r;
    continue;
  };
}

function Belt_internalAVLtree_some(_n, p) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return false;
    }
    if (p(n.k, n.v)) {
      return true;
    }
    if (Belt_internalAVLtree_some(n.l, p)) {
      return true;
    }
    _n = n.r;
    continue;
  };
}

function addMinElement(n, k, v) {
  if (n !== undefined) {
    return bal(addMinElement(n.l, k, v), n.k, n.v, n.r);
  } else {
    return singleton(k, v);
  }
}

function addMaxElement(n, k, v) {
  if (n !== undefined) {
    return bal(n.l, n.k, n.v, addMaxElement(n.r, k, v));
  } else {
    return singleton(k, v);
  }
}

function join(ln, v, d, rn) {
  if (ln === undefined) {
    return addMinElement(rn, v, d);
  }
  if (rn === undefined) {
    return addMaxElement(ln, v, d);
  }
  let lv = ln.k;
  let ld = ln.v;
  let lh = ln.h;
  let ll = ln.l;
  let lr = ln.r;
  let rv = rn.k;
  let rd = rn.v;
  let rh = rn.h;
  let rl = rn.l;
  let rr = rn.r;
  if (lh > (rh + 2 | 0)) {
    return bal(ll, lv, ld, join(lr, v, d, rn));
  } else if (rh > (lh + 2 | 0)) {
    return bal(join(ln, v, d, rl), rv, rd, rr);
  } else {
    return Belt_internalAVLtree_create(ln, v, d, rn);
  }
}

function Belt_internalAVLtree_concat(t1, t2) {
  if (t1 === undefined) {
    return t2;
  }
  if (t2 === undefined) {
    return t1;
  }
  let kr = {
    contents: t2.k
  };
  let vr = {
    contents: t2.v
  };
  let t2r = removeMinAuxWithRef(t2, kr, vr);
  return join(t1, kr.contents, vr.contents, t2r);
}

function concatOrJoin(t1, v, d, t2) {
  if (d !== undefined) {
    return join(t1, v, valFromOption(d), t2);
  } else {
    return Belt_internalAVLtree_concat(t1, t2);
  }
}

function keepShared(n, p) {
  if (n === undefined) {
    return;
  }
  let v = n.k;
  let d = n.v;
  let newLeft = keepShared(n.l, p);
  let pvd = p(v, d);
  let newRight = keepShared(n.r, p);
  if (pvd) {
    return join(newLeft, v, d, newRight);
  } else {
    return Belt_internalAVLtree_concat(newLeft, newRight);
  }
}

function keepMap(n, p) {
  if (n === undefined) {
    return;
  }
  let v = n.k;
  let d = n.v;
  let newLeft = keepMap(n.l, p);
  let pvd = p(v, d);
  let newRight = keepMap(n.r, p);
  if (pvd !== undefined) {
    return join(newLeft, v, Primitive_option.valFromOption(pvd), newRight);
  } else {
    return Belt_internalAVLtree_concat(newLeft, newRight);
  }
}

function partitionShared(n, p) {
  if (n === undefined) {
    return [
      undefined,
      undefined
    ];
  }
  let key = n.k;
  let value = n.v;
  let match = partitionShared(n.l, p);
  let lf = match[1];
  let lt = match[0];
  let pvd = p(key, value);
  let match$1 = partitionShared(n.r, p);
  let rf = match$1[1];
  let rt = match$1[0];
  if (pvd) {
    return [
      join(lt, key, value, rt),
      Belt_internalAVLtree_concat(lf, rf)
    ];
  } else {
    return [
      Belt_internalAVLtree_concat(lt, rt),
      join(lf, key, value, rf)
    ];
  }
}

function lengthNode(n) {
  let l = n.l;
  let r = n.r;
  let sizeL = l !== undefined ? lengthNode(l) : 0;
  let sizeR = r !== undefined ? lengthNode(r) : 0;
  return (1 + sizeL | 0) + sizeR | 0;
}

function Belt_internalAVLtree_size(n) {
  if (n !== undefined) {
    return lengthNode(n);
  } else {
    return 0;
  }
}

function toListAux(_n, _accu) {
  while (true) {
    let accu = _accu;
    let n = _n;
    if (n === undefined) {
      return accu;
    }
    let k = n.k;
    let v = n.v;
    let l = n.l;
    let r = n.r;
    _accu = {
      hd: [
        k,
        v
      ],
      tl: toListAux(r, accu)
    };
    _n = l;
    continue;
  };
}

function toList(s) {
  return toListAux(s, /* [] */0);
}

function checkInvariantInternal(_v) {
  while (true) {
    let v = _v;
    if (v === undefined) {
      return;
    }
    let l = v.l;
    let r = v.r;
    let diff = treeHeight(l) - treeHeight(r) | 0;
    if (!(diff <= 2 && diff >= -2)) {
      throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "Belt_internalAVLtree.res",
          432,
          4
        ],
        Error: new Error()
      };
    }
    checkInvariantInternal(l);
    _v = r;
    continue;
  };
}

function fillArrayKey(_n, _i, arr) {
  while (true) {
    let i = _i;
    let n = _n;
    let v = n.k;
    let l = n.l;
    let r = n.r;
    let next = l !== undefined ? fillArrayKey(l, i, arr) : i;
    arr[next] = v;
    let rnext = next + 1 | 0;
    if (r === undefined) {
      return rnext;
    }
    _i = rnext;
    _n = r;
    continue;
  };
}

function fillArrayValue(_n, _i, arr) {
  while (true) {
    let i = _i;
    let n = _n;
    let l = n.l;
    let r = n.r;
    let next = l !== undefined ? fillArrayValue(l, i, arr) : i;
    arr[next] = n.v;
    let rnext = next + 1 | 0;
    if (r === undefined) {
      return rnext;
    }
    _i = rnext;
    _n = r;
    continue;
  };
}

function fillArray(_n, _i, arr) {
  while (true) {
    let i = _i;
    let n = _n;
    let l = n.l;
    let v = n.k;
    let r = n.r;
    let next = l !== undefined ? fillArray(l, i, arr) : i;
    arr[next] = [
      v,
      n.v
    ];
    let rnext = next + 1 | 0;
    if (r === undefined) {
      return rnext;
    }
    _i = rnext;
    _n = r;
    continue;
  };
}

function Belt_internalAVLtree_toArray(n) {
  if (n === undefined) {
    return [];
  }
  let size = lengthNode(n);
  let v = new Array(size);
  fillArray(n, 0, v);
  return v;
}

function keysToArray(n) {
  if (n === undefined) {
    return [];
  }
  let size = lengthNode(n);
  let v = new Array(size);
  fillArrayKey(n, 0, v);
  return v;
}

function valuesToArray(n) {
  if (n === undefined) {
    return [];
  }
  let size = lengthNode(n);
  let v = new Array(size);
  fillArrayValue(n, 0, v);
  return v;
}

function fromSortedArrayRevAux(arr, off, len) {
  switch (len) {
    case 0 :
      return;
    case 1 :
      let match = arr[off];
      return singleton(match[0], match[1]);
    case 2 :
      let match_0 = arr[off];
      let match_1 = arr[off - 1 | 0];
      let match$1 = match_1;
      let match$2 = match_0;
      return {
        k: match$1[0],
        v: match$1[1],
        h: 2,
        l: singleton(match$2[0], match$2[1]),
        r: undefined
      };
    case 3 :
      let match_0$1 = arr[off];
      let match_1$1 = arr[off - 1 | 0];
      let match_2 = arr[off - 2 | 0];
      let match$3 = match_2;
      let match$4 = match_1$1;
      let match$5 = match_0$1;
      return {
        k: match$4[0],
        v: match$4[1],
        h: 2,
        l: singleton(match$5[0], match$5[1]),
        r: singleton(match$3[0], match$3[1])
      };
    default:
      let nl = len / 2 | 0;
      let left = fromSortedArrayRevAux(arr, off, nl);
      let match$6 = arr[off - nl | 0];
      let right = fromSortedArrayRevAux(arr, (off - nl | 0) - 1 | 0, (len - nl | 0) - 1 | 0);
      return Belt_internalAVLtree_create(left, match$6[0], match$6[1], right);
  }
}

function fromSortedArrayAux(arr, off, len) {
  switch (len) {
    case 0 :
      return;
    case 1 :
      let match = arr[off];
      return singleton(match[0], match[1]);
    case 2 :
      let match_0 = arr[off];
      let match_1 = arr[off + 1 | 0];
      let match$1 = match_1;
      let match$2 = match_0;
      return {
        k: match$1[0],
        v: match$1[1],
        h: 2,
        l: singleton(match$2[0], match$2[1]),
        r: undefined
      };
    case 3 :
      let match_0$1 = arr[off];
      let match_1$1 = arr[off + 1 | 0];
      let match_2 = arr[off + 2 | 0];
      let match$3 = match_2;
      let match$4 = match_1$1;
      let match$5 = match_0$1;
      return {
        k: match$4[0],
        v: match$4[1],
        h: 2,
        l: singleton(match$5[0], match$5[1]),
        r: singleton(match$3[0], match$3[1])
      };
    default:
      let nl = len / 2 | 0;
      let left = fromSortedArrayAux(arr, off, nl);
      let match$6 = arr[off + nl | 0];
      let right = fromSortedArrayAux(arr, (off + nl | 0) + 1 | 0, (len - nl | 0) - 1 | 0);
      return Belt_internalAVLtree_create(left, match$6[0], match$6[1], right);
  }
}

function fromSortedArrayUnsafe(arr) {
  return fromSortedArrayAux(arr, 0, arr.length);
}

function cmp(s1, s2, kcmp, vcmp) {
  let len1 = Belt_internalAVLtree_size(s1);
  let len2 = Belt_internalAVLtree_size(s2);
  if (len1 === len2) {
    let _e1 = stackAllLeft(s1, /* [] */0);
    let _e2 = stackAllLeft(s2, /* [] */0);
    while (true) {
      let e2 = _e2;
      let e1 = _e1;
      if (e1 === 0) {
        return 0;
      }
      if (e2 === 0) {
        return 0;
      }
      let h2 = e2.hd;
      let h1 = e1.hd;
      let c = kcmp(h1.k, h2.k);
      if (c !== 0) {
        return c;
      }
      let cx = vcmp(h1.v, h2.v);
      if (cx !== 0) {
        return cx;
      }
      _e2 = stackAllLeft(h2.r, e2.tl);
      _e1 = stackAllLeft(h1.r, e1.tl);
      continue;
    };
  } else if (len1 < len2) {
    return -1;
  } else {
    return 1;
  }
}

function eq(s1, s2, kcmp, veq) {
  let len1 = Belt_internalAVLtree_size(s1);
  let len2 = Belt_internalAVLtree_size(s2);
  if (len1 === len2) {
    let _e1 = stackAllLeft(s1, /* [] */0);
    let _e2 = stackAllLeft(s2, /* [] */0);
    while (true) {
      let e2 = _e2;
      let e1 = _e1;
      if (e1 === 0) {
        return true;
      }
      if (e2 === 0) {
        return true;
      }
      let h2 = e2.hd;
      let h1 = e1.hd;
      if (!(kcmp(h1.k, h2.k) === 0 && veq(h1.v, h2.v))) {
        return false;
      }
      _e2 = stackAllLeft(h2.r, e2.tl);
      _e1 = stackAllLeft(h1.r, e1.tl);
      continue;
    };
  } else {
    return false;
  }
}

function Belt_internalAVLtree_get(_n, x, cmp) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return;
    }
    let v = n.k;
    let c = cmp(x, v);
    if (c === 0) {
      return Primitive_option.some(n.v);
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  };
}

function getUndefined(_n, x, cmp) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return;
    }
    let v = n.k;
    let c = cmp(x, v);
    if (c === 0) {
      return n.v;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  };
}

function Belt_internalAVLtree_getOrThrow(_n, x, cmp) {
  while (true) {
    let n = _n;
    if (n !== undefined) {
      let v = n.k;
      let c = cmp(x, v);
      if (c === 0) {
        return n.v;
      }
      _n = c < 0 ? n.l : n.r;
      continue;
    }
    throw {
      RE_EXN_ID: "Not_found",
      Error: new Error()
    };
  };
}

function getWithDefault(_n, x, def, cmp) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return def;
    }
    let v = n.k;
    let c = cmp(x, v);
    if (c === 0) {
      return n.v;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  };
}

function Belt_internalAVLtree_has(_n, x, cmp) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return false;
    }
    let v = n.k;
    let c = cmp(x, v);
    if (c === 0) {
      return true;
    }
    _n = c < 0 ? n.l : n.r;
    continue;
  };
}

function rotateWithLeftChild(k2) {
  let k1 = k2.l;
  k2.l = k1.r;
  k1.r = k2;
  let hlk2 = treeHeight(k2.l);
  let hrk2 = treeHeight(k2.r);
  k2.h = max(hlk2, hrk2) + 1 | 0;
  let hlk1 = treeHeight(k1.l);
  let hk2 = k2.h;
  k1.h = max(hlk1, hk2) + 1 | 0;
  return k1;
}

function rotateWithRightChild(k1) {
  let k2 = k1.r;
  k1.r = k2.l;
  k2.l = k1;
  let hlk1 = treeHeight(k1.l);
  let hrk1 = treeHeight(k1.r);
  k1.h = max(hlk1, hrk1) + 1 | 0;
  let hrk2 = treeHeight(k2.r);
  let hk1 = k1.h;
  k2.h = max(hrk2, hk1) + 1 | 0;
  return k2;
}

function doubleWithLeftChild(k3) {
  let x = k3.l;
  let v = rotateWithRightChild(x);
  k3.l = v;
  return rotateWithLeftChild(k3);
}

function doubleWithRightChild(k2) {
  let x = k2.r;
  let v = rotateWithLeftChild(x);
  k2.r = v;
  return rotateWithRightChild(k2);
}

function heightUpdateMutate(t) {
  let hlt = treeHeight(t.l);
  let hrt = treeHeight(t.r);
  t.h = max(hlt, hrt) + 1 | 0;
  return t;
}

function balMutate(nt) {
  let l = nt.l;
  let r = nt.r;
  let hl = treeHeight(l);
  let hr = treeHeight(r);
  if (hl > (2 + hr | 0)) {
    let ll = l.l;
    let lr = l.r;
    if (heightGe(ll, lr)) {
      return heightUpdateMutate(rotateWithLeftChild(nt));
    } else {
      return heightUpdateMutate(doubleWithLeftChild(nt));
    }
  }
  if (hr > (2 + hl | 0)) {
    let rl = r.l;
    let rr = r.r;
    if (heightGe(rr, rl)) {
      return heightUpdateMutate(rotateWithRightChild(nt));
    } else {
      return heightUpdateMutate(doubleWithRightChild(nt));
    }
  }
  nt.h = max(hl, hr) + 1 | 0;
  return nt;
}

function updateMutate(t, x, data, cmp) {
  if (t === undefined) {
    return singleton(x, data);
  }
  let k = t.k;
  let c = cmp(x, k);
  if (c === 0) {
    t.v = data;
    return t;
  }
  let l = t.l;
  let r = t.r;
  if (c < 0) {
    let ll = updateMutate(l, x, data, cmp);
    t.l = ll;
  } else {
    t.r = updateMutate(r, x, data, cmp);
  }
  return balMutate(t);
}

function Belt_internalAVLtree_fromArray(xs, cmp) {
  let len = xs.length;
  if (len === 0) {
    return;
  }
  let next = Belt_SortArray.strictlySortedLength(xs, (param, param$1) => cmp(param[0], param$1[0]) < 0);
  let result;
  if (next >= 0) {
    result = fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for (let i = next; i < len; ++i) {
    let match = xs[i];
    result = updateMutate(result, match[0], match[1], cmp);
  }
  return result;
}

function removeMinAuxWithRootMutate(nt, n) {
  let rn = n.r;
  let ln = n.l;
  if (ln !== undefined) {
    n.l = removeMinAuxWithRootMutate(nt, ln);
    return balMutate(n);
  } else {
    nt.k = n.k;
    nt.v = n.v;
    return rn;
  }
}


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Belt_SortArray.js




function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
  while (true) {
    let acc = _acc;
    let prec = _prec;
    if (acc >= len) {
      return acc;
    }
    let v = xs[acc];
    if (!lt(v, prec)) {
      return acc;
    }
    _acc = acc + 1 | 0;
    _prec = v;
    continue;
  };
}

function strictlySortedLength(xs, lt) {
  let len = xs.length;
  if (len === 0 || len === 1) {
    return len;
  }
  let x0 = xs[0];
  let x1 = xs[1];
  if (lt(x0, x1)) {
    let _prec = x1;
    let _acc = 2;
    while (true) {
      let acc = _acc;
      let prec = _prec;
      if (acc >= len) {
        return acc;
      }
      let v = xs[acc];
      if (!lt(prec, v)) {
        return acc;
      }
      _acc = acc + 1 | 0;
      _prec = v;
      continue;
    };
  } else if (lt(x1, x0)) {
    return -sortedLengthAuxMore(xs, x1, 2, len, lt) | 0;
  } else {
    return 1;
  }
}

function isSorted(a, cmp) {
  let len = a.length;
  if (len === 0) {
    return true;
  } else {
    let _i = 0;
    let last_bound = len - 1 | 0;
    while (true) {
      let i = _i;
      if (i === last_bound) {
        return true;
      }
      if (cmp(a[i], a[i + 1 | 0]) > 0) {
        return false;
      }
      _i = i + 1 | 0;
      continue;
    };
  }
}

function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    if (cmp(s1, s2) <= 0) {
      dst[d] = s1;
      let i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return Belt_Array.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
      _d = d + 1 | 0;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    dst[d] = s2;
    let i2$1 = i2 + 1 | 0;
    if (i2$1 >= src2r) {
      return Belt_Array.blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
    }
    _d = d + 1 | 0;
    _s2 = src2[i2$1];
    _i2 = i2$1;
    continue;
  };
}

function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    let c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      let i1$1 = i1 + 1 | 0;
      let d$1 = d + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue;
      }
      Belt_Array.blitUnsafe(src2, i2, dst, d$1, src2r - i2 | 0);
      return (d$1 + src2r | 0) - i2 | 0;
    }
    if (c === 0) {
      dst[d] = s1;
      let i1$2 = i1 + 1 | 0;
      let i2$1 = i2 + 1 | 0;
      let d$2 = d + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        if (i1$2 === src1r) {
          Belt_Array.blitUnsafe(src2, i2$1, dst, d$2, src2r - i2$1 | 0);
          return (d$2 + src2r | 0) - i2$1 | 0;
        } else {
          Belt_Array.blitUnsafe(src, i1$2, dst, d$2, src1r - i1$2 | 0);
          return (d$2 + src1r | 0) - i1$2 | 0;
        }
      }
      _d = d$2;
      _s2 = src2[i2$1];
      _i2 = i2$1;
      _s1 = src[i1$2];
      _i1 = i1$2;
      continue;
    }
    dst[d] = s2;
    let i2$2 = i2 + 1 | 0;
    let d$3 = d + 1 | 0;
    if (i2$2 < src2r) {
      _d = d$3;
      _s2 = src2[i2$2];
      _i2 = i2$2;
      continue;
    }
    Belt_Array.blitUnsafe(src, i1, dst, d$3, src1r - i1 | 0);
    return (d$3 + src1r | 0) - i1 | 0;
  };
}

function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    let c = cmp(s1, s2);
    if (c < 0) {
      let i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d;
      }
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    if (c === 0) {
      dst[d] = s1;
      let i1$2 = i1 + 1 | 0;
      let i2$1 = i2 + 1 | 0;
      let d$1 = d + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        return d$1;
      }
      _d = d$1;
      _s2 = src2[i2$1];
      _i2 = i2$1;
      _s1 = src[i1$2];
      _i1 = i1$2;
      continue;
    }
    let i2$2 = i2 + 1 | 0;
    if (i2$2 >= src2r) {
      return d;
    }
    _s2 = src2[i2$2];
    _i2 = i2$2;
    continue;
  };
}

function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  let src1r = src1ofs + src1len | 0;
  let src2r = src2ofs + src2len | 0;
  let _i1 = src1ofs;
  let _s1 = src[src1ofs];
  let _i2 = src2ofs;
  let _s2 = src2[src2ofs];
  let _d = dstofs;
  while (true) {
    let d = _d;
    let s2 = _s2;
    let i2 = _i2;
    let s1 = _s1;
    let i1 = _i1;
    let c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      let d$1 = d + 1 | 0;
      let i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d$1;
      }
      _d = d$1;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue;
    }
    if (c === 0) {
      let i1$2 = i1 + 1 | 0;
      let i2$1 = i2 + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        if (i1$2 === src1r) {
          return d;
        } else {
          Belt_Array.blitUnsafe(src, i1$2, dst, d, src1r - i1$2 | 0);
          return (d + src1r | 0) - i1$2 | 0;
        }
      }
      _s2 = src2[i2$1];
      _i2 = i2$1;
      _s1 = src[i1$2];
      _i1 = i1$2;
      continue;
    }
    let i2$2 = i2 + 1 | 0;
    if (i2$2 < src2r) {
      _s2 = src2[i2$2];
      _i2 = i2$2;
      continue;
    }
    Belt_Array.blitUnsafe(src, i1, dst, d, src1r - i1 | 0);
    return (d + src1r | 0) - i1 | 0;
  };
}

function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
  for (let i = 0; i < len; ++i) {
    let e = src[srcofs + i | 0];
    let j = (dstofs + i | 0) - 1 | 0;
    while (j >= dstofs && cmp(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    };
    dst[j + 1 | 0] = e;
  }
}

function sortTo(src, srcofs, dst, dstofs, len, cmp) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp);
  }
  let l1 = len / 2 | 0;
  let l2 = len - l1 | 0;
  sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
  sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
  merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
}

function stableSortInPlaceBy(a, cmp) {
  let l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp);
  }
  let l1 = l / 2 | 0;
  let l2 = l - l1 | 0;
  let t = new Array(l2);
  sortTo(a, l1, t, 0, l2, cmp);
  sortTo(a, 0, a, l2, l1, cmp);
  merge(a, l2, l1, t, 0, l2, a, 0, cmp);
}

function stableSortBy(a, cmp) {
  let b = a.slice(0);
  stableSortInPlaceBy(b, cmp);
  return b;
}

function binarySearchBy(sorted, key, cmp) {
  let len = sorted.length;
  if (len === 0) {
    return -1;
  }
  let lo = sorted[0];
  let c = cmp(key, lo);
  if (c < 0) {
    return -1;
  }
  let hi = sorted[len - 1 | 0];
  let c2 = cmp(key, hi);
  if (c2 > 0) {
    return -(len + 1 | 0) | 0;
  } else {
    let _lo = 0;
    let _hi = len - 1 | 0;
    while (true) {
      let hi$1 = _hi;
      let lo$1 = _lo;
      let mid = (lo$1 + hi$1 | 0) / 2 | 0;
      let midVal = sorted[mid];
      let c$1 = cmp(key, midVal);
      if (c$1 === 0) {
        return mid;
      }
      if (c$1 < 0) {
        if (hi$1 === mid) {
          if (cmp(sorted[lo$1], key) === 0) {
            return lo$1;
          } else {
            return -(hi$1 + 1 | 0) | 0;
          }
        }
        _hi = mid;
        continue;
      }
      if (lo$1 === mid) {
        if (cmp(sorted[hi$1], key) === 0) {
          return hi$1;
        } else {
          return -(hi$1 + 1 | 0) | 0;
        }
      }
      _lo = mid;
      continue;
    };
  }
}

let Int;

let $$String;

let strictlySortedLengthU = (/* unused pure expression or super */ null && (strictlySortedLength));

let isSortedU = (/* unused pure expression or super */ null && (isSorted));

let stableSortInPlaceByU = (/* unused pure expression or super */ null && (stableSortInPlaceBy));

let stableSortByU = (/* unused pure expression or super */ null && (stableSortBy));

let binarySearchByU = (/* unused pure expression or super */ null && (binarySearchBy));

let unionU = (/* unused pure expression or super */ null && (union));

let intersectU = (/* unused pure expression or super */ null && (intersect));

let diffU = (/* unused pure expression or super */ null && (diff));


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Primitive_string.js



function Primitive_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function Primitive_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function Primitive_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function getChar(s, i) {
  if (i >= s.length || i < 0) {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "index out of bounds",
      Error: new Error()
    };
  }
  return s.codePointAt(i);
}

function Primitive_string_make(n, ch) {
  return String.fromCodePoint(ch).repeat(n);
}


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Belt_internalMapString.js







function Belt_internalMapString_add(t, x, data) {
  if (t === undefined) {
    return Belt_internalAVLtree.singleton(x, data);
  }
  let k = t.k;
  if (x === k) {
    return Belt_internalAVLtree.updateValue(t, data);
  }
  let v = t.v;
  if (x < k) {
    return Belt_internalAVLtree.bal(Belt_internalMapString_add(t.l, x, data), k, v, t.r);
  } else {
    return Belt_internalAVLtree.bal(t.l, k, v, Belt_internalMapString_add(t.r, x, data));
  }
}

function Belt_internalMapString_get(_n, x) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return;
    }
    let v = n.k;
    if (x === v) {
      return Primitive_option_some(n.v);
    }
    _n = x < v ? n.l : n.r;
    continue;
  };
}

function Belt_internalMapString_getUndefined(_n, x) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return;
    }
    let v = n.k;
    if (x === v) {
      return n.v;
    }
    _n = x < v ? n.l : n.r;
    continue;
  };
}

function Belt_internalMapString_getOrThrow(_n, x) {
  while (true) {
    let n = _n;
    if (n !== undefined) {
      let v = n.k;
      if (x === v) {
        return n.v;
      }
      _n = x < v ? n.l : n.r;
      continue;
    }
    throw {
      RE_EXN_ID: "Not_found",
      Error: new Error()
    };
  };
}

function Belt_internalMapString_getWithDefault(_n, x, def) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return def;
    }
    let v = n.k;
    if (x === v) {
      return n.v;
    }
    _n = x < v ? n.l : n.r;
    continue;
  };
}

function Belt_internalMapString_has(_n, x) {
  while (true) {
    let n = _n;
    if (n === undefined) {
      return false;
    }
    let v = n.k;
    if (x === v) {
      return true;
    }
    _n = x < v ? n.l : n.r;
    continue;
  };
}

function remove(n, x) {
  if (n === undefined) {
    return n;
  }
  let v = n.k;
  let l = n.l;
  let r = n.r;
  if (x !== v) {
    if (x < v) {
      return Belt_internalAVLtree.bal(remove(l, x), v, n.v, r);
    } else {
      return Belt_internalAVLtree.bal(l, v, n.v, remove(r, x));
    }
  }
  if (l === undefined) {
    return r;
  }
  if (r === undefined) {
    return l;
  }
  let kr = {
    contents: r.k
  };
  let vr = {
    contents: r.v
  };
  let r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
  return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
}

function Belt_internalMapString_splitAux(x, n) {
  let v = n.k;
  let d = n.v;
  let l = n.l;
  let r = n.r;
  if (x === v) {
    return [
      l,
      Primitive_option_some(d),
      r
    ];
  }
  if (x < v) {
    if (l === undefined) {
      return [
        undefined,
        undefined,
        n
      ];
    }
    let match = Belt_internalMapString_splitAux(x, l);
    return [
      match[0],
      match[1],
      join(match[2], v, d, r)
    ];
  }
  if (r === undefined) {
    return [
      n,
      undefined,
      undefined
    ];
  }
  let match$1 = Belt_internalMapString_splitAux(x, r);
  return [
    join(l, v, d, match$1[0]),
    match$1[1],
    match$1[2]
  ];
}

function split(x, n) {
  if (n !== undefined) {
    return Belt_internalMapString_splitAux(x, n);
  } else {
    return [
      undefined,
      undefined,
      undefined
    ];
  }
}

function Belt_internalMapString_merge(s1, s2, f) {
  if (s1 !== undefined) {
    if (s1.h >= (
        s2 !== undefined ? s2.h : 0
      )) {
      let v1 = s1.k;
      let d1 = s1.v;
      let l1 = s1.l;
      let r1 = s1.r;
      let match = split(v1, s2);
      return concatOrJoin(Belt_internalMapString_merge(l1, match[0], f), v1, f(v1, Primitive_option_some(d1), match[1]), Belt_internalMapString_merge(r1, match[2], f));
    }
  } else if (s2 === undefined) {
    return;
  }
  let v2 = s2.k;
  let d2 = s2.v;
  let l2 = s2.l;
  let r2 = s2.r;
  let match$1 = split(v2, s1);
  return concatOrJoin(Belt_internalMapString_merge(match$1[0], l2, f), v2, f(v2, match$1[1], Primitive_option_some(d2)), Belt_internalMapString_merge(match$1[2], r2, f));
}

function compareAux(_e1, _e2, vcmp) {
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (e1 === 0) {
      return 0;
    }
    if (e2 === 0) {
      return 0;
    }
    let h2 = e2.hd;
    let h1 = e1.hd;
    let c = Primitive_string_compare(h1.k, h2.k);
    if (c !== 0) {
      return c;
    }
    let cx = vcmp(h1.v, h2.v);
    if (cx !== 0) {
      return cx;
    }
    _e2 = stackAllLeft(h2.r, e2.tl);
    _e1 = stackAllLeft(h1.r, e1.tl);
    continue;
  };
}

function Belt_internalMapString_cmp(s1, s2, cmp$1) {
  let len1 = Belt_internalAVLtree_size(s1);
  let len2 = Belt_internalAVLtree_size(s2);
  if (len1 === len2) {
    return compareAux(stackAllLeft(s1, /* [] */0), stackAllLeft(s2, /* [] */0), cmp$1);
  } else if (len1 < len2) {
    return -1;
  } else {
    return 1;
  }
}

function eqAux(_e1, _e2, eq) {
  while (true) {
    let e2 = _e2;
    let e1 = _e1;
    if (e1 === 0) {
      return true;
    }
    if (e2 === 0) {
      return true;
    }
    let h2 = e2.hd;
    let h1 = e1.hd;
    if (!(h1.k === h2.k && eq(h1.v, h2.v))) {
      return false;
    }
    _e2 = stackAllLeft(h2.r, e2.tl);
    _e1 = stackAllLeft(h1.r, e1.tl);
    continue;
  };
}

function Belt_internalMapString_eq(s1, s2, eq$1) {
  let len1 = Belt_internalAVLtree_size(s1);
  let len2 = Belt_internalAVLtree_size(s2);
  if (len1 === len2) {
    return eqAux(stackAllLeft(s1, /* [] */0), stackAllLeft(s2, /* [] */0), eq$1);
  } else {
    return false;
  }
}

function addMutate(t, x, data) {
  if (t === undefined) {
    return singleton(x, data);
  }
  let k = t.k;
  if (x === k) {
    t.k = x;
    t.v = data;
    return t;
  }
  let l = t.l;
  let r = t.r;
  if (x < k) {
    let ll = addMutate(l, x, data);
    t.l = ll;
  } else {
    t.r = addMutate(r, x, data);
  }
  return balMutate(t);
}

function Belt_internalMapString_fromArray(xs) {
  let len = xs.length;
  if (len === 0) {
    return;
  }
  let next = strictlySortedLength(xs, (param, param$1) => param[0] < param$1[0]);
  let result;
  if (next >= 0) {
    result = fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for (let i = next; i < len; ++i) {
    let match = xs[i];
    result = addMutate(result, match[0], match[1]);
  }
  return result;
}

let N;

let A;

let S;

let cmpU = (/* unused pure expression or super */ null && (Belt_internalMapString_cmp));

let eqU = (/* unused pure expression or super */ null && (Belt_internalMapString_eq));

let mergeU = (/* unused pure expression or super */ null && (Belt_internalMapString_merge));


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Belt_MapString.js






function set(t, newK, newD) {
  if (t === undefined) {
    return Belt_internalAVLtree.singleton(newK, newD);
  }
  let k = t.k;
  if (newK === k) {
    return Belt_internalAVLtree.updateValue(t, newD);
  }
  let v = t.v;
  if (newK < k) {
    return Belt_internalAVLtree.bal(set(t.l, newK, newD), k, v, t.r);
  } else {
    return Belt_internalAVLtree.bal(t.l, k, v, set(t.r, newK, newD));
  }
}

function update(t, x, f) {
  if (t !== undefined) {
    let k = t.k;
    if (x === k) {
      let data = f(Primitive_option.some(t.v));
      if (data !== undefined) {
        return Belt_internalAVLtree.updateValue(t, Primitive_option.valFromOption(data));
      }
      let l = t.l;
      let r = t.r;
      if (l === undefined) {
        return r;
      }
      if (r === undefined) {
        return l;
      }
      let kr = {
        contents: r.k
      };
      let vr = {
        contents: r.v
      };
      let r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
      return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
    }
    let v = t.v;
    let l$1 = t.l;
    let r$2 = t.r;
    if (x < k) {
      let ll = update(l$1, x, f);
      if (l$1 === ll) {
        return t;
      } else {
        return Belt_internalAVLtree.bal(ll, k, v, r$2);
      }
    }
    let rr = update(r$2, x, f);
    if (r$2 === rr) {
      return t;
    } else {
      return Belt_internalAVLtree.bal(l$1, k, v, rr);
    }
  }
  let data$1 = f(undefined);
  if (data$1 !== undefined) {
    return Belt_internalAVLtree.singleton(x, Primitive_option.valFromOption(data$1));
  } else {
    return t;
  }
}

function removeAux(n, x) {
  let v = n.k;
  let l = n.l;
  let r = n.r;
  if (x === v) {
    if (l === undefined) {
      return r;
    }
    if (r === undefined) {
      return l;
    }
    let kr = {
      contents: r.k
    };
    let vr = {
      contents: r.v
    };
    let r$1 = Belt_internalAVLtree.removeMinAuxWithRef(r, kr, vr);
    return Belt_internalAVLtree.bal(l, kr.contents, vr.contents, r$1);
  }
  if (x < v) {
    if (l === undefined) {
      return n;
    }
    let ll = removeAux(l, x);
    if (ll === l) {
      return n;
    } else {
      return Belt_internalAVLtree.bal(ll, v, n.v, r);
    }
  }
  if (r === undefined) {
    return n;
  }
  let rr = removeAux(r, x);
  return Belt_internalAVLtree.bal(l, v, n.v, rr);
}

function Belt_MapString_remove(n, x) {
  if (n !== undefined) {
    return removeAux(n, x);
  }
}

function removeMany(t, keys) {
  let len = keys.length;
  if (t !== undefined) {
    let _t = t;
    let _i = 0;
    while (true) {
      let i = _i;
      let t$1 = _t;
      if (i >= len) {
        return t$1;
      }
      let ele = keys[i];
      let u = removeAux(t$1, ele);
      if (u === undefined) {
        return u;
      }
      _i = i + 1 | 0;
      _t = u;
      continue;
    };
  }
}

function mergeMany(h, arr) {
  let len = arr.length;
  let v = h;
  for (let i = 0; i < len; ++i) {
    let match = arr[i];
    v = set(v, match[0], match[1]);
  }
  return v;
}

let empty;

let Belt_MapString_isEmpty = Belt_internalAVLtree_isEmpty;

let Belt_MapString_has = Belt_internalMapString_has;

let Belt_MapString_cmpU = Belt_internalMapString_cmp;

let Belt_MapString_cmp = Belt_internalMapString_cmp;

let Belt_MapString_eqU = Belt_internalMapString_eq;

let Belt_MapString_eq = Belt_internalMapString_eq;

let findFirstByU = findFirstBy;

let Belt_MapString_findFirstBy = findFirstBy;

let forEachU = Belt_internalAVLtree_forEach;

let Belt_MapString_forEach = Belt_internalAVLtree_forEach;

let reduceU = Belt_internalAVLtree_reduce;

let Belt_MapString_reduce = Belt_internalAVLtree_reduce;

let everyU = Belt_internalAVLtree_every;

let Belt_MapString_every = Belt_internalAVLtree_every;

let someU = Belt_internalAVLtree_some;

let Belt_MapString_some = Belt_internalAVLtree_some;

let Belt_MapString_size = Belt_internalAVLtree_size;

let Belt_MapString_toList = toList;

let Belt_MapString_toArray = Belt_internalAVLtree_toArray;

let Belt_MapString_fromArray = Belt_internalMapString_fromArray;

let Belt_MapString_keysToArray = keysToArray;

let Belt_MapString_valuesToArray = valuesToArray;

let Belt_MapString_minKey = minKey;

let Belt_MapString_minKeyUndefined = minKeyUndefined;

let Belt_MapString_maxKey = maxKey;

let Belt_MapString_maxKeyUndefined = maxKeyUndefined;

let Belt_MapString_minimum = minimum;

let Belt_MapString_minUndefined = minUndefined;

let Belt_MapString_maximum = maximum;

let Belt_MapString_maxUndefined = maxUndefined;

let Belt_MapString_get = Belt_internalMapString_get;

let Belt_MapString_getUndefined = Belt_internalMapString_getUndefined;

let Belt_MapString_getWithDefault = Belt_internalMapString_getWithDefault;

let Belt_MapString_getExn = Belt_internalMapString_getOrThrow;

let Belt_MapString_getOrThrow = Belt_internalMapString_getOrThrow;

let Belt_MapString_checkInvariantInternal = checkInvariantInternal;

let updateU = (/* unused pure expression or super */ null && (update));

let Belt_MapString_mergeU = Belt_internalMapString_merge;

let Belt_MapString_merge = Belt_internalMapString_merge;

let keepU = keepShared;

let keep = keepShared;

let partitionU = partitionShared;

let Belt_MapString_partition = partitionShared;

let Belt_MapString_split = split;

let mapU = Belt_internalAVLtree_map;

let Belt_MapString_map = Belt_internalAVLtree_map;

let mapWithKeyU = mapWithKey;

let Belt_MapString_mapWithKey = mapWithKey;


/* No side effect */

;// CONCATENATED MODULE: ../node_modules/@rescript/runtime/lib/es6/Primitive_object.js






let for_in = (function(o,foo){
        for (var x in o) { foo(x) }});

function updateDummy(prim0, prim1) {
  Object.assign(prim0, prim1);
}

function Primitive_object_compare(a, b) {
  if (a === b) {
    return 0;
  }
  let a_type = typeof a;
  let b_type = typeof b;
  switch (a_type) {
    case "bigint" :
      if (b_type === "bigint") {
        return Primitive_float.compare(a, b);
      }
      break;
    case "boolean" :
      if (b_type === "boolean") {
        return Primitive_bool.compare(a, b);
      }
      break;
    case "function" :
      if (b_type === "function") {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "compare: functional value",
          Error: new Error()
        };
      }
      break;
    case "number" :
      if (b_type === "number") {
        return Primitive_float.compare(a, b);
      }
      break;
    case "string" :
      if (b_type === "string") {
        return Primitive_string.compare(a, b);
      } else {
        return 1;
      }
    case "undefined" :
      return -1;
  }
  switch (b_type) {
    case "string" :
      return -1;
    case "undefined" :
      return 1;
    default:
      if (a_type === "boolean") {
        return 1;
      }
      if (b_type === "boolean") {
        return -1;
      }
      if (a_type === "function") {
        return 1;
      }
      if (b_type === "function") {
        return -1;
      }
      if (a_type === "number") {
        if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b_type === "number") {
        if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a === null) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b === null) {
        if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return aux_obj_compare(a, b);
        } else {
          return -1;
        }
      }
      let tag_a = a.TAG;
      let tag_b = b.TAG;
      if (tag_a !== tag_b) {
        if (tag_a < tag_b) {
          return -1;
        } else {
          return 1;
        }
      }
      let len_a = a.length | 0;
      let len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          let _i = 0;
          while (true) {
            let i = _i;
            if (i === len_a) {
              return 0;
            }
            let res = Primitive_object_compare(a[i], b[i]);
            if (res !== 0) {
              return res;
            }
            _i = i + 1 | 0;
            continue;
          };
        } else if ((a instanceof Date && b instanceof Date)) {
          return (a - b);
        } else {
          return aux_obj_compare(a, b);
        }
      } else if (len_a < len_b) {
        let _i$1 = 0;
        while (true) {
          let i$1 = _i$1;
          if (i$1 === len_a) {
            return -1;
          }
          let res$1 = Primitive_object_compare(a[i$1], b[i$1]);
          if (res$1 !== 0) {
            return res$1;
          }
          _i$1 = i$1 + 1 | 0;
          continue;
        };
      } else {
        let _i$2 = 0;
        while (true) {
          let i$2 = _i$2;
          if (i$2 === len_b) {
            return 1;
          }
          let res$2 = Primitive_object_compare(a[i$2], b[i$2]);
          if (res$2 !== 0) {
            return res$2;
          }
          _i$2 = i$2 + 1 | 0;
          continue;
        };
      }
  }
}

function aux_obj_compare(a, b) {
  let min_key_lhs = {
    contents: undefined
  };
  let min_key_rhs = {
    contents: undefined
  };
  let do_key = (param, key) => {
    let min_key = param[2];
    let b = param[1];
    if (!(!Object.prototype.hasOwnProperty.call(b, key) || Primitive_object_compare(param[0][key], b[key]) > 0)) {
      return;
    }
    let mk = min_key.contents;
    if (mk !== undefined && key >= mk) {
      return;
    } else {
      min_key.contents = key;
      return;
    }
  };
  let do_key_a = key => do_key([
    a,
    b,
    min_key_rhs
  ], key);
  let do_key_b = key => do_key([
    b,
    a,
    min_key_lhs
  ], key);
  for_in(a, do_key_a);
  for_in(b, do_key_b);
  let match = min_key_lhs.contents;
  let match$1 = min_key_rhs.contents;
  if (match !== undefined) {
    if (match$1 !== undefined) {
      return Primitive_string.compare(match, match$1);
    } else {
      return -1;
    }
  } else if (match$1 !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

function Primitive_object_equal(a, b) {
  if (a === b) {
    return true;
  }
  let a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "bigint" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  let b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
      RE_EXN_ID: "Invalid_argument",
      _1: "equal: functional value",
      Error: new Error()
    };
  }
  if (b_type === "number" || b_type === "bigint" || b_type === "undefined" || b === null) {
    return false;
  }
  let tag_a = a.TAG;
  let tag_b = b.TAG;
  if (tag_a !== tag_b) {
    return false;
  }
  let len_a = a.length | 0;
  let len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      let _i = 0;
      while (true) {
        let i = _i;
        if (i === len_a) {
          return true;
        }
        if (!Primitive_object_equal(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue;
      };
    } else if ((a instanceof Date && b instanceof Date)) {
      return !(a > b || a < b);
    } else {
      let result = {
        contents: true
      };
      let do_key_a = key => {
        if (!Object.prototype.hasOwnProperty.call(b, key)) {
          result.contents = false;
          return;
        }
      };
      let do_key_b = key => {
        if (!Object.prototype.hasOwnProperty.call(a, key) || !Primitive_object_equal(b[key], a[key])) {
          result.contents = false;
          return;
        }
      };
      for_in(a, do_key_a);
      if (result.contents) {
        for_in(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}

function notequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a !== b;
  } else {
    return !Primitive_object_equal(a, b);
  }
}

function greaterequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a >= b;
  } else {
    return Primitive_object_compare(a, b) >= 0;
  }
}

function greaterthan(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a > b;
  } else {
    return Primitive_object_compare(a, b) > 0;
  }
}

function lessequal(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a <= b;
  } else {
    return Primitive_object_compare(a, b) <= 0;
  }
}

function lessthan(a, b) {
  if ((typeof a === "number" || typeof a === "bigint") && (typeof b === "number" || typeof b === "bigint")) {
    return a < b;
  } else {
    return Primitive_object_compare(a, b) < 0;
  }
}

function Primitive_object_min(x, y) {
  if (Primitive_object_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function Primitive_object_max(x, y) {
  if (Primitive_object_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
  }
}


/* No side effect */

;// CONCATENATED MODULE: ../test/TestAllPass.mjs
// Generated by ReScript, PLEASE EDIT WITH CARE






function TestAllPass_equal(message, a, b) {
  assertion(message, "equal", (a, b) => a === b, a, b);
}

function deepEqual(message, a, b) {
  assertion(message, "deepEqual", Primitive_object_equal, a, b);
}

testAsync("Async", undefined, cb => {
  setTimeout(() => {
    pass(undefined, undefined);
    cb(undefined, undefined);
  }, 100);
});

test("Equals", () => TestAllPass_equal(undefined, 1, 1));

function isCharCode(a, b) {
  return Primitive_object_equal(charCodeAt(a, 0), b);
}

test("Custom comparator", () => assertion("Char code should match", "isCharCode", isCharCode, "a", 97));

test("DeepEquals", () => {
  TestAllPass_equal(undefined, "user", "user");
  deepEqual(undefined, {
    username: "user",
    id: "a"
  }, {
    username: "user",
    id: "a"
  });
});

let testWithSetup = createTestWith(() => ({
  contents: 0
}), undefined);

testWithSetup("Setup", someRef => {
  someRef.contents = someRef.contents + 1 | 0;
  TestAllPass_equal(undefined, someRef.contents, 1);
});

testWithSetup("Setup", someRef => {
  TestAllPass_equal(undefined, someRef.contents, 0);
  someRef.contents = someRef.contents + 1 | 0;
  someRef.contents = someRef.contents + 1 | 0;
  TestAllPass_equal(undefined, someRef.contents, 2);
});

let testWithSetupAndTeardown = createTestWith(() => ({
  contents: 0
}), someRef => {
  someRef.contents = 0;
});

testWithSetupAndTeardown("Setup & teardown", someRef => {
  someRef.contents = someRef.contents + 1 | 0;
  TestAllPass_equal(undefined, someRef.contents, 1);
});

testWithSetupAndTeardown("Setup & teardown 2", someRef => {
  TestAllPass_equal(undefined, someRef.contents, 0);
  someRef.contents = someRef.contents + 1 | 0;
  someRef.contents = someRef.contents + 1 | 0;
  TestAllPass_equal(undefined, someRef.contents, 2);
});

let testAsyncWithSetupAndTeardown = createTestAsyncWith(() => ({
  contents: 0
}), someRef => {
  someRef.contents = 0;
});

testAsyncWithSetupAndTeardown("Async setup & teardown", undefined, (someRef, callback) => {
  someRef.contents = someRef.contents + 1 | 0;
  TestAllPass_equal(undefined, someRef.contents, 1);
  callback(undefined, undefined);
});

testAsyncWithSetupAndTeardown("Async setup & teardown 2", undefined, (someRef, callback) => {
  TestAllPass_equal(undefined, someRef.contents, 0);
  someRef.contents = someRef.contents + 1 | 0;
  someRef.contents = someRef.contents + 1 | 0;
  TestAllPass_equal(undefined, someRef.contents, 2);
  callback(undefined, undefined);
});

function stringMapEqual(message, a, b) {
  assertion(message, "stringMapEqual", (a, b) => Belt_MapString_eq(a, b, (a, b) => a === b), a, b);
}

test("Cutom operator Equals", () => stringMapEqual(undefined, Belt_MapString_fromArray([[
    "a",
    1
  ]]), Belt_MapString_fromArray([[
    "a",
    1
  ]])));


/*  Not a pure module */


/***/ })

};
;