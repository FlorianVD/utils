'use strict';

/**
 * Check whether or not a provided value is an array
 *
 * @param val - Value to verify
 *
 * @returns Whether or not the value is an array
 */
export default function isArray (val:unknown):val is unknown[] {
    return Array.isArray(val);
}
