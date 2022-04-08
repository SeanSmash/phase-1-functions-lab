/*function distanceFromHqInBlocks(pickUpBlock){
    let blockTotal;
    (pickUpBlock >= 42) ? (blockTotal = pickUpBlock - 42) : (blockTotal = 42 - pickUpBlock);
    return blockTotal;
}*/

function distanceFromHqInBlocks(pickUpBlock){
    return (pickUpBlock >= 42) ? (pickUpBlock - 42) : (42 - pickUpBlock);
}

function distanceFromHqInFeet(pickUpBlock){
    return distanceFromHqInBlocks(pickUpBlock) * 264;
}

function distanceTravelledInFeet(pickUpBlock, dropOffBlock){
    return Math.abs(pickUpBlock - dropOffBlock) * 264;
}

function calculatesFarePrice(pickUpBlock, dropOffBlock){
    const feetDistance = Math.abs(pickUpBlock - dropOffBlock) * 264;
    if (feetDistance <= 400) {
        return 0;
    }
    else if (feetDistance <= 2000) {
        return (feetDistance - 400) * .02;
    }
    else if (feetDistance <=2500){
        return 25;
    }
    else if (feetDistance >2500){
        return "cannot travel that far";
    }
}