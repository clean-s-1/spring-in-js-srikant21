function getStatistics(numArray){
    if (!numArray.some(isNaN) && numArray.length > 0) {
        arrMax = () => {
            return Math.max.apply(null, numArray);
        }
        arrMin = () => {
            return Math.min.apply(null, numArray);
        }
        
        arrAverage = () => {
            var arrSum = 0;
            for(var count = 0;count<numArray.length;count++){
                arrSum += numArray[count];
            }
            var avgSum =  arrSum/numArray.length;
            return avgSum;
        }
        return {min:arrMin(),max:arrMax(),average:arrAverage()}
    }else{
        return {min:NaN,max:NaN,average:NaN}
    }
    //implement the computation of statistics here
}

function EmailAlert() {
    emailSent: true;
}


function LEDAlert() {
    ledGlows: true;
}

class StatsAlerter {

    constructor(mThreshold, alerts) {
        this.threshold = mThreshold;
        [this.emailAlert, this.ledAlert] = alerts;
    }

    checkAndAlert(numArray) {
        let checkMaxThreshold = numArray.some(element => element > this.threshold);
        if (checkMaxThreshold) {
            this.emailAlert.emailSent = true;
            this.ledAlert.ledGlows = true;
        }
    };

}

module.exports = {getStatistics,EmailAlert,LEDAlert,StatsAlerter}
