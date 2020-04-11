export default function log(msg) {
    /* IFDEBUG */
    console.error(msg);
    /* FIDEBUG */
    /* IFTRUE_test */
    console.log(msg);
    /* FITRUE_test */
}

export function log2(msg) {
    /* IFTRUE_test */
    console.log(msg);
    /* FITRUE_test */

    /* IFFALSE_test */
    console.error(msg);
    /* FIFALSE_test */
}
