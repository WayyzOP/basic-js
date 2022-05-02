const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let teamNames = [];
  let res = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) != 'string') {
      continue;
    } else {
      teamNames.push(members[i]);
    }
  }

  
  // tempArr = teamNames.map((x) => x.split(''));
  
  for(let i = 0; i < teamNames.length; i++) {
    // let pos;
    // for (let j = 0; j < teamNames[i].length; j++) {
    //   if ('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('').includes(teamNames[i].charAt(j))) {
    //     pos = j;
    //   }
    // }
    res.push(teamNames[i].charAt(0).toUpperCase());
  }

  // return res.sort().join(' ');
  return res.sort().join('');
}

module.exports = {
  createDreamTeam
};
 