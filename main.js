

function startClassification(e){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier=ml5.soundClassifier("model.json",modelReady)
}

function modelReady(e){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById("label").innerHTML="I can hear: "+results[0].label
        document.getElementById("confidence").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(2)+"%"
    }
}