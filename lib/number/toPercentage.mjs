'use strict';

import round from './round.mjs';

export default function toPercentage (val, precision = 0, min = 0, max = 1) {
    if (
        !Number.isFinite(val) ||
        !Number.isFinite(min) ||
        !Number.isFinite(max)
    ) throw new TypeError('value/min/max should be numeric');

    return round(((val - min)/ (max - min)) * 100, precision);
}
