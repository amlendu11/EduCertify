'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Sample transaction
 * @param {org.certification.iitkgp1.ChangeAssetValue} changeAssetValue
 * @transaction
 */

//var certjson = require("/home/amlendu/code/hyperledger/edu-certify/package.json");
//var certjsonstring = JSON.stringify(certjson);

//jsSHA = require("jssha");
//var shaObj = new jsSHA("SHA-512", "TEXT");
//shaObj.update(certjsonstring);
//var hashcert = shaObj.getHash("HEX");

function onCertification(certification) {
    console.log('onCertification');
 
    return getAssetRegistry('org.certification.iitkgp1.Sva')
  		.then(function(ar) {
            //certification.sva.hash = hashcert;
        	return ar.update(certification.sva);
  });
}
