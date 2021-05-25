import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../index.js';
import formidable from 'formidable';



export const addPaymentGateway = async (request, response) => {
    let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
    try { 
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}

export const paymentResponse = (request, response) => {
    console.log('Hi')
    const form = new formidable.IncomingForm();
    form.parse(request, (error, fields, file) => {
        console.log(fields);
    })

}