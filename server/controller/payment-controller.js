import formidable from 'formidable';
import https from 'https';
import { paytmMerchantKey, paytmParams } from '../index.js';
import paytmchecksum from '../paytm/PaytmChecksum.js';


export const addPaymentGateway = async (request, response) => {
    const paytmCheckSum= await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
    try {
       const params = {
          ...paytmParams,
          'CHECKSUMHASH': paytmCheckSum
       }

    //    response.status(200).json(params);
       response.json(params);

    } catch (error) {
        // response.status(500).json({ error: error.message })
        console.log(error)
    }
}

export const paytmResponse = (request, response) => {
    const form = new formidable.IncomingForm();
    const paytmCheckSum = request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    const isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantKey, paytmCheckSum );
    if (isVerifySignature){
        let paytmParams = {};
        paytmParams['MID'] = request.body.MID;
        paytmParams['ORDERID'] = request.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, paytmMerchantKey).then(function(checksum){
            paytmParams['CHECKSUMHASH'] = checksum;

            const post_data = JSON.stringify(paytmParams);

            const options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            }

            let res = "";
            let post_req = https.request(options, function(post_res){
                post_res.on('data', function(chunk) {
                    res += chunk;
                });

                post_res.on('end', function(){
                    let result = JSON.parse(res)
                    console.log(result);
                    response.redirect('http://localhost:3000/')
                });
            });

            post_req.write(post_data);
            post_req.end();
        })
    } else {
        console.log('Checksum mismatched');
    }

}