module.exports = function getStatistics(numArray:Array){
    Array.prototype.max = function(){
        return Math.max.apply(null,this);
    }
     Array.prototype.min = function(){
        return Math.min.apply(null,this);
    }
    
     Array.prototype.average = function(){
        var arrSum = 0;
        for(var count = 0;count<numArray.length;count++){
            arrSum += numArray[count];
        }
        var avgSum =  arrSum/numArray.length;
        return avgSum;
    }
    //implement the computation of statistics here
}

