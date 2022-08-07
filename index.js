// Import Constant
import { Vowel, ISN, IPN } from './src/constant';
// Import function
import { checkingCondition } from './src/function';

// Plural Func
const Plural = (arr) => {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    // Irregular
    if (checkingCondition([temp], ISN)) {
      tempArr.push(IPN[ISN.indexOf(temp)]);
    }
    // y
    else if (temp.slice(-1) === 'y') {
      let tempChar = temp.slice(-2);
      // Vowel
      if (checkingCondition([tempChar.charAt(0)], Vowel)) {
        tempArr.push(`${temp}s`);
      } else {
        tempArr.push(`${temp.slice(0, -1)}ies`);
      }
    }
    // ss, sh, ch, o, is
    else if (
      checkingCondition(
        [temp.slice(-2), temp.slice(-1)],
        ['ss', 'sh', 'ch', 'o', 'is']
      )
    ) {
      tempArr.push(`${temp}es`);
    }
    // us
    else if (checkingCondition([temp.slice(-2)], ['us'])) {
      tempArr.push(temp.replace(temp.slice(-2), 'i'));
    }
    // on
    else if (checkingCondition([temp.slice(-2)], ['on'])) {
      tempArr.push(temp.replace(temp.slice(-2), 'a'));
    }
    // fe
    else if (checkingCondition([temp.slice(-2)], ['fe'])) {
      tempArr.push(temp.replace(temp.slice(-2), 'ves'));
    }
    // f
    else if (checkingCondition([temp.slice(-1)], ['f'])) {
      tempArr.push(temp.replace(temp.slice(-1), 'ves'));
    }
    // for the rest
    else {
      tempArr.push(`${temp}s`);
    }
  }
  return tempArr;
};

export default Plural;
