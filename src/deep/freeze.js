'use strict';

import isObject from '../object/is';
import isArray  from '../array/is';

function deep (obj, next = Object.seal) {
    (Object.keys(obj) || []).forEach(key => {
        if (isObject(obj[key]) || isArray(obj[key])) {
            deep(obj[key], next);
        }
    });
    return next(obj);
}

//  Freeze nested structures
export default function deepFreeze (obj) {
    if (!isObject(obj) && !isArray(obj)) throw new TypeError('Only objects can be frozen');
    return deep(obj, Object.freeze);
}
