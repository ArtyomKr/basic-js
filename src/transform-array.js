import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
    if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error("'arr' parameter must be an instance of the Array!");

    let transformed = [].concat(arr);

    transformed.forEach((item, i) => {
        switch(item) {
            case '--discard-next':
                transformed.splice(i, 2);
                break;
            case '--discard-prev':
                if (i === 0) {
                    transformed.splice(i, 1);
                    break;
                } else {
                   transformed.splice(i-1, 2)
                break; 
                }
            case '--double-next':
                if (i === transformed.length-1) {
                    transformed.splice(i, 1);
                    break;
                } else {
                    transformed.splice(i, 1, transformed[i+1])
                    break;  
                }
                
            case '--double-prev':
                if (i === 0) {
                    transformed.splice(i, 1);
                    break;
                } else {
                   transformed.splice(i, 1, transformed[i-1])
                break; 
                }
            default: 
               break;
        }
    })

    return transformed;
}

console.log(transform([ 1, 2, 3, '--double-prev', 4, 5 ]));