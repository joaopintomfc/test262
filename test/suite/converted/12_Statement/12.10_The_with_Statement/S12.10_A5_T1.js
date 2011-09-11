// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Deleting property using "eval" statement containing "with" statement
 *
 * @section: 12.10;
 * @path: 12_Statement/12.10_The_with_Statement/S12.10_A5_T1.js;
 * @description: Deleting string property;
 * @strict_only;
 * @strict_mode_negative;
 */

this.p1 = 1;
var myObj = {
  p1: 'a', 
  del:false
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 === 'a'){
  $ERROR('#1: myObj.p1 !== "a"');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  $ERROR('#2: myObj.p1 === undefined. Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  $ERROR('#3: myObj.del === true. Actual:  myObj.del ==='+ myObj.del  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 1){
  $ERROR('#4: myObj.p1 !== 1');
}
//
//////////////////////////////////////////////////////////////////////////////
