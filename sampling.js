function Mean(){
	var x =document.getElementById("mean").value;
	document.getElementById("displayFormula").value = "𝝁 𝑿 = 𝜇 =" + x ;
	document.getElementById("displayMean").value = x ;
}

function StandardDeviation(){
	var y =document.getElementById("standardDeviation").value;
	var z =document.getElementById("sampleSize").value;

	document.getElementById("displayFormulaSD").value = "𝝈 𝑿 = 𝝈 / √n = \n" + y + "/√"+z ;
	document.getElementById("displayFormulaSD2").value = "= " +  y + " / " + Math.sqrt(z);
	document.getElementById("displaySD").value = y / Math.sqrt(z);
}

function Variance(){
	var y =document.getElementById("standardDeviation").value;
	var z =document.getElementById("sampleSize").value;

	document.getElementById("displayFormulaVariance").value = "𝝈² / n =  " + y+ "² /"+ z;
	document.getElementById("displayFormulaVariance2").value = " = " + y ** 2 + " /"+ z;
	document.getElementById("displayVariance").value = y ** 2 / z;
}

function Between(){
	var first =document.getElementById("firstValue").value;
	var second =document.getElementById("secondValue").value;
	var x =document.getElementById("mean").value;
	var y =document.getElementById("standardDeviation").value;
	var z =document.getElementById("sampleSize").value;

	var standardBetween = (y / Math.sqrt(z));
	var firstParenthesis= (first - x) / standardBetween ;
	var secondParenthesis = (second - x) / standardBetween;

	var fixPar1 = firstParenthesis.toFixed(2);
	var fixPar2 = secondParenthesis.toFixed(2);
   	
	var finalPar1;
	var finalPar2;

	//Negative Standard Normal Distribution
	//- 0.00
	if(fixPar1 == -0.00){finalPar1 = 1 - 0.5000;}
   	if(fixPar1 == -0.01){finalPar1 = 1 - 0.5040;}
   	if(fixPar1 == -0.02){finalPar1 = 1 - 0.5080;}
   	if(fixPar1 == -0.03){finalPar1 = 1 - 0.5120;}
   	if(fixPar1 == -0.04){finalPar1 = 1 - 0.5160;}
   	if(fixPar1 == -0.05){finalPar1 = 1 - 0.5199;}
   	if(fixPar1 == -0.06){finalPar1 = 1 - 0.5239;}
   	if(fixPar1 == -0.07){finalPar1 = 1 - 0.5279;}
   	if(fixPar1 == -0.08){finalPar1 = 1 - 0.5319;}
   	if(fixPar1 == -0.09){finalPar1 = 1 - 0.5359;}
   	//0.10
   	if(fixPar1 == -0.10){finalPar1 = 1 - 0.5398;}
   	if(fixPar1 == -0.11){finalPar1 = 1 - 0.5438;}
   	if(fixPar1 == -0.12){finalPar1 = 1 - 0.5478;}
   	if(fixPar1 == -0.13){finalPar1 = 1 - 0.5517;}
   	if(fixPar1 == -0.14){finalPar1 = 1 - 0.5557;}
   	if(fixPar1 == -0.15){finalPar1 = 1 - 0.5596;}
   	if(fixPar1 == -0.16){finalPar1 = 1 - 0.5636;}
   	if(fixPar1 == -0.17){finalPar1 = 1 - 0.5675;}
   	if(fixPar1 == -0.18){finalPar1 = 1 - 0.5714;}
   	if(fixPar1 == -0.19){finalPar1 = 1 - 0.5753;}
   	//0.20
   	if(fixPar1 == -0.20){finalPar1 = 1 - 0.5793;}
   	if(fixPar1 == -0.21){finalPar1 = 1 - 0.5832;}
   	if(fixPar1 == -0.22){finalPar1 = 1 - 0.5871;}
   	if(fixPar1 == -0.23){finalPar1 = 1 - 0.5910;}
   	if(fixPar1 == -0.24){finalPar1 = 1 - 0.5948;}
   	if(fixPar1 == -0.25){finalPar1 = 1 - 0.5987;}
   	if(fixPar1 == -0.26){finalPar1 = 1 - 0.6026;}
   	if(fixPar1 == -0.27){finalPar1 = 1 - 0.6064;}
   	if(fixPar1 == -0.28){finalPar1 = 1 - 0.6103;}
   	if(fixPar1 == -0.29){finalPar1 = 1 - 0.6141;}
   	//0.30
   	if(fixPar1 == -0.30){finalPar1 = 1 - 0.6179;}
   	if(fixPar1 == -0.31){finalPar1 = 1 - 0.6217;}
   	if(fixPar1 == -0.32){finalPar1 = 1 - 0.6255;}
   	if(fixPar1 == -0.33){finalPar1 = 1 - 0.6293;}
   	if(fixPar1 == -0.34){finalPar1 = 1 - 0.6331;}
   	if(fixPar1 == -0.35){finalPar1 = 1 - 0.6368;}
   	if(fixPar1 == -0.36){finalPar1 = 1 - 0.6406;}
   	if(fixPar1 == -0.37){finalPar1 = 1 - 0.6443;}
   	if(fixPar1 == -0.38){finalPar1 = 1 - 0.6480;}
   	if(fixPar1 == -0.39){finalPar1 = 1 - 0.6517;}
   	//0.04
   	if(fixPar1 == -0.40){finalPar1 = 1 - 0.6554;}
   	if(fixPar1 == -0.41){finalPar1 = 1 - 0.6591;}
   	if(fixPar1 == -0.42){finalPar1 = 1 - 0.6628;}
   	if(fixPar1 == -0.43){finalPar1 = 1 - 0.6664;}
   	if(fixPar1 == -0.44){finalPar1 = 1 - 0.6700;}
   	if(fixPar1 == -0.45){finalPar1 = 1 - 0.6736;}
   	if(fixPar1 == -0.46){finalPar1 = 1 - 0.6772;}
   	if(fixPar1 == -0.47){finalPar1 = 1 - 0.6808;}
   	if(fixPar1 == -0.48){finalPar1 = 1 - 0.6844;}
   	if(fixPar1 == -0.49){finalPar1 = 1 - 0.6879;}
   	//0.50
   	if(fixPar1 == -0.50){finalPar1 = 1 - 0.6915;}
   	if(fixPar1 == -0.51){finalPar1 = 1 - 0.6950;}
   	if(fixPar1 == -0.52){finalPar1 = 1 - 0.6985;}
   	if(fixPar1 == -0.53){finalPar1 = 1 - 0.7019;}
   	if(fixPar1 == -0.54){finalPar1 = 1 - 0.7054;}
   	if(fixPar1 == -0.55){finalPar1 = 1 - 0.7088;}
   	if(fixPar1 == -0.56){finalPar1 = 1 - 0.7123;}
   	if(fixPar1 == -0.57){finalPar1 = 1 - 0.7157;}
   	if(fixPar1 == -0.58){finalPar1 = 1 - 0.7190;}
   	if(fixPar1 == -0.59){finalPar1 = 1 - 0.7224;}
   	//0.60
   	if(fixPar1 == -0.60){finalPar1 = 1 - 0.7257;}
   	if(fixPar1 == -0.61){finalPar1 = 1 - 0.7291;}
   	if(fixPar1 == -0.62){finalPar1 = 1 - 0.7324;}
   	if(fixPar1 == -0.63){finalPar1 = 1 - 0.7357;}
   	if(fixPar1 == -0.64){finalPar1 = 1 - 0.7389;}
   	if(fixPar1 == -0.65){finalPar1 = 1 - 0.7422;}
   	if(fixPar1 == -0.66){finalPar1 = 1 - 0.7454;}
   	if(fixPar1 == -0.67){finalPar1 = 1 - 0.7486;}
   	if(fixPar1 == -0.68){finalPar1 = 1 - 0.7517;}
   	if(fixPar1 == -0.69){finalPar1 = 1 - 0.7549;}
   	//0.70
   	if(fixPar1 == -0.70){finalPar1 = 1 - 0.7257;}
   	if(fixPar1 == -0.71){finalPar1 = 1 - 0.7611;}
   	if(fixPar1 == -0.72){finalPar1 = 1 - 0.7642;}
   	if(fixPar1 == -0.73){finalPar1 = 1 - 0.7673;}
   	if(fixPar1 == -0.74){finalPar1 = 1 - 0.7704;}
   	if(fixPar1 == -0.75){finalPar1 = 1 - 0.7734;}
   	if(fixPar1 == -0.76){finalPar1 = 1 - 0.7764;}
   	if(fixPar1 == -0.77){finalPar1 = 1 - 0.7794;}
   	if(fixPar1 == -0.78){finalPar1 = 1 - 0.7823;}
   	if(fixPar1 == -0.79){finalPar1 = 1 - 0.7852;}
   	//0.80
   	if(fixPar1 == -0.80){finalPar1 = 1 - 0.7881;}
   	if(fixPar1 == -0.81){finalPar1 = 1 - 0.7910;}
   	if(fixPar1 == -0.82){finalPar1 = 1 - 0.7939;}
   	if(fixPar1 == -0.83){finalPar1 = 1 - 0.7967;}
   	if(fixPar1 == -0.84){finalPar1 = 1 - 0.7995;}
   	if(fixPar1 == -0.85){finalPar1 = 1 - 0.8023;}
   	if(fixPar1 == -0.86){finalPar1 = 1 - 0.8051;}
   	if(fixPar1 == -0.87){finalPar1 = 1 - 0.8078;}
   	if(fixPar1 == -0.88){finalPar1 = 1 - 0.8106;}
   	if(fixPar1 == -0.89){finalPar1 = 1 - 0.8133;}
   	//0.90
   	if(fixPar1 == -0.90){finalPar1 = 1 - 0.8159;}
   	if(fixPar1 == -0.91){finalPar1 = 1 - 0.8186;}
   	if(fixPar1 == -0.92){finalPar1 = 1 - 0.8212;}
   	if(fixPar1 == -0.93){finalPar1 = 1 - 0.8238;}
   	if(fixPar1 == -0.94){finalPar1 = 1 - 0.8264;}
   	if(fixPar1 == -0.95){finalPar1 = 1 - 0.8289;}
   	if(fixPar1 == -0.96){finalPar1 = 1 - 0.8315;}
   	if(fixPar1 == -0.97){finalPar1 = 1 - 0.8340;}
   	if(fixPar1 == -0.98){finalPar1 = 1 - 0.8365;}
   	if(fixPar1 == -0.99){finalPar1 = 1 - 0.8389;}
   	//1.00
   	if(fixPar1 == -1.00){finalPar1 = 1 - 0.8413;}
   	if(fixPar1 == -1.01){finalPar1 = 1 - 0.8438;}
   	if(fixPar1 == -1.02){finalPar1 = 1 - 0.8461;}
   	if(fixPar1 == -1.03){finalPar1 = 1 - 0.8485;}
   	if(fixPar1 == -1.04){finalPar1 = 1 - 0.8508;}
   	if(fixPar1 == -1.05){finalPar1 = 1 - 0.8531;}
   	if(fixPar1 == -1.06){finalPar1 = 1 - 0.8554;}
   	if(fixPar1 == -1.07){finalPar1 = 1 - 0.8577;}
   	if(fixPar1 == -1.08){finalPar1 = 1 - 0.8599;}
   	if(fixPar1 == -1.09){finalPar1 = 1 - 0.8621;}
   	//1.10
   	if(fixPar1 == -1.10){finalPar1 = 1 - 0.8643;}
   	if(fixPar1 == -1.11){finalPar1 = 1 - 0.8665;}
   	if(fixPar1 == -1.12){finalPar1 = 1 - 0.8686;}
   	if(fixPar1 == -1.13){finalPar1 = 1 - 0.8708;}
   	if(fixPar1 == -1.14){finalPar1 = 1 - 0.8729;}
   	if(fixPar1 == -1.15){finalPar1 = 1 - 0.8749;}
   	if(fixPar1 == -1.16){finalPar1 = 1 - 0.8770;}
   	if(fixPar1 == -1.17){finalPar1 = 1 - 0.8790;}
   	if(fixPar1 == -1.18){finalPar1 = 1 - 0.8810;}
   	if(fixPar1 == -1.19){finalPar1 = 1 - 0.8830;}
   	//1.20
   	if(fixPar1 == -1.20){finalPar1 = 1 - 0.8849;}
   	if(fixPar1 == -1.21){finalPar1 = 1 - 0.8869;}
   	if(fixPar1 == -1.22){finalPar1 = 1 - 0.8888;}
   	if(fixPar1 == -1.23){finalPar1 = 1 - 0.8907;}
   	if(fixPar1 == -1.24){finalPar1 = 1 - 0.8925;}
   	if(fixPar1 == -1.25){finalPar1 = 1 - 0.8944;}
   	if(fixPar1 == -1.26){finalPar1 = 1 - 0.8962;}
   	if(fixPar1 == -1.27){finalPar1 = 1 - 0.8980;}
   	if(fixPar1 == -1.28){finalPar1 = 1 - 0.8997;}
   	if(fixPar1 == -1.29){finalPar1 = 1 - 0.9015;}
   	//1.30
   	if(fixPar1 == -1.30){finalPar1 = 1 - 0.9032;}
   	if(fixPar1 == -1.31){finalPar1 = 1 - 0.9049;}
   	if(fixPar1 == -1.32){finalPar1 = 1 - 0.9066;}
   	if(fixPar1 == -1.33){finalPar1 = 1 - 0.9082;}
   	if(fixPar1 == -1.34){finalPar1 = 1 - 0.9099;}
   	if(fixPar1 == -1.35){finalPar1 = 1 - 0.9115;}
   	if(fixPar1 == -1.36){finalPar1 = 1 - 0.9131;}
   	if(fixPar1 == -1.37){finalPar1 = 1 - 0.9147;}
   	if(fixPar1 == -1.38){finalPar1 = 1 - 0.9162;}
   	if(fixPar1 == -1.39){finalPar1 = 1 - 0.9177;}
   	//1.40
    if(fixPar1 == -1.40){finalPar1 = 1 - 0.9192;}
   	if(fixPar1 == -1.41){finalPar1 = 1 - 0.9207;}
   	if(fixPar1 == -1.42){finalPar1 = 1 - 0.9222;}
   	if(fixPar1 == -1.43){finalPar1 = 1 - 0.9236;}
   	if(fixPar1 == -1.44){finalPar1 = 1 - 0.9251;}
   	if(fixPar1 == -1.45){finalPar1 = 1 - 0.9265;}
   	if(fixPar1 == -1.46){finalPar1 = 1 - 0.9279;}
   	if(fixPar1 == -1.47){finalPar1 = 1 - 0.9292;}
   	if(fixPar1 == -1.48){finalPar1 = 1 - 0.9306;}
   	if(fixPar1 == -1.49){finalPar1 = 1 - 0.9319;} 	
   	//1.50
    if(fixPar1 == -1.50){finalPar1 = 1 - 0.9332;}
   	if(fixPar1 == -1.51){finalPar1 = 1 - 0.9345;}
   	if(fixPar1 == -1.52){finalPar1 = 1 - 0.9357;}
   	if(fixPar1 == -1.53){finalPar1 = 1 - 0.9370;}
   	if(fixPar1 == -1.54){finalPar1 = 1 - 0.9382;}
   	if(fixPar1 == -1.55){finalPar1 = 1 - 0.9394;}
   	if(fixPar1 == -1.56){finalPar1 = 1 - 0.9406;}
   	if(fixPar1 == -1.57){finalPar1 = 1 - 0.9418;}
   	if(fixPar1 == -1.58){finalPar1 = 1 - 0.9429;}
   	if(fixPar1 == -1.59){finalPar1 = 1 - 0.9441;}
   	//1.60
    if(fixPar1 == -1.60){finalPar1 = 1 - 0.9452;}
   	if(fixPar1 == -1.61){finalPar1 = 1 - 0.9463;}
   	if(fixPar1 == -1.62){finalPar1 = 1 - 0.9474;}
   	if(fixPar1 == -1.63){finalPar1 = 1 - 0.9484;}
   	if(fixPar1 == -1.64){finalPar1 = 1 - 0.9495;}
   	if(fixPar1 == -1.65){finalPar1 = 1 - 0.9505;}
   	if(fixPar1 == -1.66){finalPar1 = 1 - 0.9515;}
   	if(fixPar1 == -1.67){finalPar1 = 1 - 0.9525;}
   	if(fixPar1 == -1.68){finalPar1 = 1 - 0.9535;}
   	if(fixPar1 == -1.69){finalPar1 = 1 - 0.9545;}
   	//1.70
    if(fixPar1 == -1.70){finalPar1 = 1 - 0.9554;}
   	if(fixPar1 == -1.71){finalPar1 = 1 - 0.9564;}
   	if(fixPar1 == -1.72){finalPar1 = 1 - 0.9573;}
   	if(fixPar1 == -1.73){finalPar1 = 1 - 0.9582;}
   	if(fixPar1 == -1.74){finalPar1 = 1 - 0.9591;}
   	if(fixPar1 == -1.75){finalPar1 = 1 - 0.9599;}
   	if(fixPar1 == -1.76){finalPar1 = 1 - 0.9608;}
   	if(fixPar1 == -1.77){finalPar1 = 1 - 0.9616;}
   	if(fixPar1 == -1.78){finalPar1 = 1 - 0.9625;}
   	if(fixPar1 == -1.79){finalPar1 = 1 - 0.9633;}
   	//1.80
    if(fixPar1 == -1.80){finalPar1 = 1 - 0.9641;}
   	if(fixPar1 == -1.81){finalPar1 = 1 - 0.9649;}
   	if(fixPar1 == -1.82){finalPar1 = 1 - 0.9656;}
   	if(fixPar1 == -1.83){finalPar1 = 1 - 0.9664;}
   	if(fixPar1 == -1.84){finalPar1 = 1 - 0.9671;}
   	if(fixPar1 == -1.85){finalPar1 = 1 - 0.9678;}
   	if(fixPar1 == -1.86){finalPar1 = 1 - 0.9686;}
   	if(fixPar1 == -1.87){finalPar1 = 1 - 0.9693;}
   	if(fixPar1 == -1.88){finalPar1 = 1 - 0.9699;}
   	if(fixPar1 == -1.89){finalPar1 = 1 - 0.9706;}
   	//1.90
    if(fixPar1 == -1.90){finalPar1 = 1 - 0.9713;}
   	if(fixPar1 == -1.91){finalPar1 = 1 - 0.9719;}
   	if(fixPar1 == -1.92){finalPar1 = 1 - 0.9726;}
   	if(fixPar1 == -1.93){finalPar1 = 1 - 0.9732;}
   	if(fixPar1 == -1.94){finalPar1 = 1 - 0.9738;}
   	if(fixPar1 == -1.95){finalPar1 = 1 - 0.9744;}
   	if(fixPar1 == -1.96){finalPar1 = 1 - 0.9750;}
   	if(fixPar1 == -1.97){finalPar1 = 1 - 0.9756;}
   	if(fixPar1 == -1.98){finalPar1 = 1 - 0.9761;}
   	if(fixPar1 == -1.99){finalPar1 = 1 - 0.9767;}
   	//2.00
    if(fixPar1 == -2.00){finalPar1 = 1 - 0.9722;}
   	if(fixPar1 == -2.01){finalPar1 = 1 - 0.9778;}
   	if(fixPar1 == -2.02){finalPar1 = 1 - 0.9783;}
   	if(fixPar1 == -2.03){finalPar1 = 1 - 0.9788;}
   	if(fixPar1 == -2.04){finalPar1 = 1 - 0.9793;}
   	if(fixPar1 == -2.05){finalPar1 = 1 - 0.9798;}
   	if(fixPar1 == -2.06){finalPar1 = 1 - 0.9803;}
   	if(fixPar1 == -2.07){finalPar1 = 1 - 0.9808;}
   	if(fixPar1 == -2.08){finalPar1 = 1 - 0.9812;}
   	if(fixPar1 == -2.09){finalPar1 = 1 - 0.9817;}
   	//2.10
   	if(fixPar1 == -2.10){finalPar1 = 1 - 0.9821;}
   	if(fixPar1 == -2.11){finalPar1 = 1 - 0.9826;}
   	if(fixPar1 == -2.12){finalPar1 = 1 - 0.9830;}
   	if(fixPar1 == -2.13){finalPar1 = 1 - 0.9834;}
   	if(fixPar1 == -2.14){finalPar1 = 1 - 0.9838;}
   	if(fixPar1 == -2.15){finalPar1 = 1 - 0.9842;}
   	if(fixPar1 == -2.16){finalPar1 = 1 - 0.9846;}
   	if(fixPar1 == -2.17){finalPar1 = 1 - 0.9850;}
   	if(fixPar1 == -2.18){finalPar1 = 1 - 0.9854;}
   	if(fixPar1 == -2.19){finalPar1 = 1 - 0.9857;}
   	//2.20
   	if(fixPar1 == -2.20){finalPar1 = 1 - 0.9861;}
   	if(fixPar1 == -2.21){finalPar1 = 1 - 0.9864;}
   	if(fixPar1 == -2.22){finalPar1 = 1 - 0.9868;}
   	if(fixPar1 == -2.23){finalPar1 = 1 - 0.9871;}
   	if(fixPar1 == -2.24){finalPar1 = 1 - 0.9875;}
   	if(fixPar1 == -2.25){finalPar1 = 1 - 0.9878;}
   	if(fixPar1 == -2.26){finalPar1 = 1 - 0.9881;}
   	if(fixPar1 == -2.27){finalPar1 = 1 - 0.9884;}
   	if(fixPar1 == -2.28){finalPar1 = 1 - 0.9887;}
   	if(fixPar1 == -2.29){finalPar1 = 1 - 0.9890;}
   	//2.30
   	if(fixPar1 == -2.30){finalPar1 = 1 - 0.9893;}
   	if(fixPar1 == -2.31){finalPar1 = 1 - 0.9896;}
   	if(fixPar1 == -2.32){finalPar1 = 1 - 0.9898;}
   	if(fixPar1 == -2.33){finalPar1 = 1 - 0.9901;}
   	if(fixPar1 == -2.34){finalPar1 = 1 - 0.9904;}
   	if(fixPar1 == -2.35){finalPar1 = 1 - 0.9906;}
   	if(fixPar1 == -2.36){finalPar1 = 1 - 0.9909;}
   	if(fixPar1 == -2.37){finalPar1 = 1 - 0.9911;}
   	if(fixPar1 == -2.38){finalPar1 = 1 - 0.9913;}
   	if(fixPar1 == -2.39){finalPar1 = 1 - 0.9916;}
   	//2.40
   	if(fixPar1 == -2.40){finalPar1 = 1 - 0.9918;}
   	if(fixPar1 == -2.41){finalPar1 = 1 - 0.9920;}
   	if(fixPar1 == -2.42){finalPar1 = 1 - 0.9922;}
   	if(fixPar1 == -2.43){finalPar1 = 1 - 0.9925;}
   	if(fixPar1 == -2.44){finalPar1 = 1 - 0.9927;}
   	if(fixPar1 == -2.45){finalPar1 = 1 - 0.9929;}
   	if(fixPar1 == -2.46){finalPar1 = 1 - 0.9931;}
   	if(fixPar1 == -2.47){finalPar1 = 1 - 0.9932;}
   	if(fixPar1 == -2.48){finalPar1 = 1 - 0.9934;}
   	if(fixPar1 == -2.49){finalPar1 = 1 - 0.9936;}
   	//2.50
   	if(fixPar1 == -2.50){finalPar1 = 1 - 0.9938;}
   	if(fixPar1 == -2.51){finalPar1 = 1 - 0.9940;}
   	if(fixPar1 == -2.52){finalPar1 = 1 - 0.9941;}
   	if(fixPar1 == -2.53){finalPar1 = 1 - 0.9943;}
   	if(fixPar1 == -2.54){finalPar1 = 1 - 0.9945;}
   	if(fixPar1 == -2.55){finalPar1 = 1 - 0.9946;}
   	if(fixPar1 == -2.56){finalPar1 = 1 - 0.9948;}
   	if(fixPar1 == -2.57){finalPar1 = 1 - 0.9949;}
   	if(fixPar1 == -2.58){finalPar1 = 1 - 0.9951;}
   	if(fixPar1 == -2.59){finalPar1 = 1 - 0.9952;}
   	//2.60
   	if(fixPar1 == -2.60){finalPar1 = 1 - 0.9953;}
   	if(fixPar1 == -2.61){finalPar1 = 1 - 0.9955;}
   	if(fixPar1 == -2.62){finalPar1 = 1 - 0.9956;}
   	if(fixPar1 == -2.63){finalPar1 = 1 - 0.9957;}
   	if(fixPar1 == -2.64){finalPar1 = 1 - 0.9959;}
   	if(fixPar1 == -2.65){finalPar1 = 1 - 0.9960;}
   	if(fixPar1 == -2.66){finalPar1 = 1 - 0.9961;}
   	if(fixPar1 == -2.67){finalPar1 = 1 - 0.9962;}
   	if(fixPar1 == -2.68){finalPar1 = 1 - 0.9963;}
   	if(fixPar1 == -2.69){finalPar1 = 1 - 0.9964;}
   	//2.70
   	if(fixPar1 == -2.70){finalPar1 = 1 - 0.9965;}
   	if(fixPar1 == -2.71){finalPar1 = 1 - 0.9966;}
   	if(fixPar1 == -2.72){finalPar1 = 1 - 0.9967;}
   	if(fixPar1 == -2.73){finalPar1 = 1 - 0.9968;}
   	if(fixPar1 == -2.74){finalPar1 = 1 - 0.9969;}
   	if(fixPar1 == -2.75){finalPar1 = 1 - 0.9970;}
   	if(fixPar1 == -2.76){finalPar1 = 1 - 0.9971;}
   	if(fixPar1 == -2.77){finalPar1 = 1 - 0.9972;}
   	if(fixPar1 == -2.78){finalPar1 = 1 - 0.9973;}
   	if(fixPar1 == -2.79){finalPar1 = 1 - 0.9974;}
   	//2.80
   	if(fixPar1 == -2.80){finalPar1 = 1 - 0.9974;}
   	if(fixPar1 == -2.81){finalPar1 = 1 - 0.9975;}
   	if(fixPar1 == -2.82){finalPar1 = 1 - 0.9976;}
   	if(fixPar1 == -2.83){finalPar1 = 1 - 0.9977;}
   	if(fixPar1 == -2.84){finalPar1 = 1 - 0.9977;}
   	if(fixPar1 == -2.85){finalPar1 = 1 - 0.9978;}
   	if(fixPar1 == -2.86){finalPar1 = 1 - 0.9979;}
   	if(fixPar1 == -2.87){finalPar1 = 1 - 0.9979;}
   	if(fixPar1 == -2.88){finalPar1 = 1 - 0.9980;}
   	if(fixPar1 == -2.89){finalPar1 = 1 - 0.9981;}
   	//2.90
   	if(fixPar1 == -2.90){finalPar1 = 1 - 0.9981;}
   	if(fixPar1 == -2.91){finalPar1 = 1 - 0.9982;}
   	if(fixPar1 == -2.92){finalPar1 = 1 - 0.9982;}
   	if(fixPar1 == -2.93){finalPar1 = 1 - 0.9983;}
   	if(fixPar1 == -2.94){finalPar1 = 1 - 0.9984;}
   	if(fixPar1 == -2.95){finalPar1 = 1 - 0.9984;}
   	if(fixPar1 == -2.96){finalPar1 = 1 - 0.9985;}
   	if(fixPar1 == -2.97){finalPar1 = 1 - 0.9985;}
   	if(fixPar1 == -2.98){finalPar1 = 1 - 0.9986;}
   	if(fixPar1 == -2.99){finalPar1 = 1 - 0.9986;}
   	//3.00
   	if(fixPar1 == -3.00){finalPar1 = 1 - 0.9987;}
   	if(fixPar1 == -3.01){finalPar1 = 1 - 0.9987;}
   	if(fixPar1 == -3.02){finalPar1 = 1 - 0.9987;}
   	if(fixPar1 == -3.03){finalPar1 = 1 - 0.9987;}
   	if(fixPar1 == -3.04){finalPar1 = 1 - 0.9988;}
   	if(fixPar1 == -3.05){finalPar1 = 1 - 0.9989;}
   	if(fixPar1 == -3.06){finalPar1 = 1 - 0.9989;}
   	if(fixPar1 == -3.07){finalPar1 = 1 - 0.9989;}
   	if(fixPar1 == -3.08){finalPar1 = 1 - 0.9990;}
   	if(fixPar1 == -3.09){finalPar1 = 1 - 0.9990;}
   	//3.10
   	if(fixPar1 == -3.10){finalPar1 = 1 - 0.9990;}
   	if(fixPar1 == -3.11){finalPar1 = 1 - 0.9991;}
   	if(fixPar1 == -3.12){finalPar1 = 1 - 0.9991;}
   	if(fixPar1 == -3.13){finalPar1 = 1 - 0.9991;}
   	if(fixPar1 == -3.14){finalPar1 = 1 - 0.9992;}
   	if(fixPar1 == -3.15){finalPar1 = 1 - 0.9992;}
   	if(fixPar1 == -3.16){finalPar1 = 1 - 0.9992;}
   	if(fixPar1 == -3.17){finalPar1 = 1 - 0.9992;}
   	if(fixPar1 == -3.18){finalPar1 = 1 - 0.9993;}
   	if(fixPar1 == -3.19){finalPar1 = 1 - 0.9993;}
   	//3.20
   	if(fixPar1 == -3.20){finalPar1 = 1 - 0.9993;}
   	if(fixPar1 == -3.21){finalPar1 = 1 - 0.9993;}
   	if(fixPar1 == -3.22){finalPar1 = 1 - 0.9994;}
   	if(fixPar1 == -3.23){finalPar1 = 1 - 0.9994;}
   	if(fixPar1 == -3.24){finalPar1 = 1 - 0.9994;}
   	if(fixPar1 == -3.25){finalPar1 = 1 - 0.9994;}
   	if(fixPar1 == -3.26){finalPar1 = 1 - 0.9994;}
   	if(fixPar1 == -3.27){finalPar1 = 1 - 0.9995;}
   	if(fixPar1 == -3.28){finalPar1 = 1 - 0.9995;}
   	if(fixPar1 == -3.29){finalPar1 = 1 - 0.9995;}
   	//3.30
   	if(fixPar1 == -3.30){finalPar1 = 1 - 0.9995;}
   	if(fixPar1 == -3.31){finalPar1 = 1 - 0.9995;}
   	if(fixPar1 == -3.32){finalPar1 = 1 - 0.9995;}
   	if(fixPar1 == -3.33){finalPar1 = 1 - 0.9996;}
   	if(fixPar1 == -3.34){finalPar1 = 1 - 0.9996;}
   	if(fixPar1 == -3.35){finalPar1 = 1 - 0.9996;}
   	if(fixPar1 == -3.36){finalPar1 = 1 - 0.9996;}
   	if(fixPar1 == -3.37){finalPar1 = 1 - 0.9996;}
   	if(fixPar1 == -3.38){finalPar1 = 1 - 0.9996;}
   	if(fixPar1 == -3.39){finalPar1 = 1 - 0.9997;}
   	//3.40
   	if(fixPar1 == -3.40){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.41){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.42){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.43){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.44){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.45){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.46){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.47){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.48){finalPar1 = 1 - 0.9997;}
   	if(fixPar1 == -3.49){finalPar1 = 1 - 0.9998;}
   	//3.50
   	if(fixPar1 == -3.50){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.51){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.52){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.53){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.54){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.55){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.56){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.57){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.58){finalPar1 = 1 - 0.9998;}
   	if(fixPar1 == -3.59){finalPar1 = 1 - 0.9999;}
   	//4.00
   	if(fixPar1 == -4.00){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.01){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.02){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.03){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.04){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.05){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.06){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.07){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.08){finalPar1 = 1 - 0.99997;}
   	if(fixPar1 == -4.09){finalPar1 = 1 - 0.99998;}
 
   	//Positive Standard Normal Distribution 
	if(fixPar2 == 0.00){finalPar2 =  0.5000;}
   	if(fixPar2 == 0.01){finalPar2 =  0.5040;}
   	if(fixPar2 == 0.02){finalPar2 =  0.5080;}
   	if(fixPar2 == 0.03){finalPar2 =  0.5120;}
   	if(fixPar2 == 0.04){finalPar2 =  0.5160;}
   	if(fixPar2 == 0.05){finalPar2 =  0.5199;}
   	if(fixPar2 == 0.06){finalPar2 =  0.5239;}
   	if(fixPar2 == 0.07){finalPar2 =  0.5279;}
   	if(fixPar2 == 0.08){finalPar2 =  0.5319;}
   	if(fixPar2 == 0.09){finalPar2 =  0.5359;}
   	//0.10
   	if(fixPar2 == 0.10){finalPar2 =  0.5398;}
   	if(fixPar2 == 0.11){finalPar2 =  0.5438;}
   	if(fixPar2 == 0.12){finalPar2 =  0.5478;}
   	if(fixPar2 == 0.13){finalPar2 =  0.5517;}
   	if(fixPar2 == 0.14){finalPar2 =  0.5557;}
   	if(fixPar2 == 0.15){finalPar2 =  0.5596;}
   	if(fixPar2 == 0.16){finalPar2 =  0.5636;}
   	if(fixPar2 == 0.17){finalPar2 =  0.5675;}
   	if(fixPar2 == 0.18){finalPar2 =  0.5714;}
   	if(fixPar2 == 0.19){finalPar2 =  0.5753;}
   	//0.20
   	if(fixPar2 == 0.20){finalPar2 =  0.5793;}
   	if(fixPar2 == 0.21){finalPar2 =  0.5832;}
   	if(fixPar2 == 0.22){finalPar2 =  0.5871;}
   	if(fixPar2 == 0.23){finalPar2 =  0.5910;}
   	if(fixPar2 == 0.24){finalPar2 =  0.5948;}
   	if(fixPar2 == 0.25){finalPar2 =  0.5987;}
   	if(fixPar2 == 0.26){finalPar2 =  0.6026;}
   	if(fixPar2 == 0.27){finalPar2 =  0.6064;}
   	if(fixPar2 == 0.28){finalPar2 =  0.6103;}
   	if(fixPar2 == 0.29){finalPar2 =  0.6141;}
   	//0.30
   	if(fixPar2 == 0.30){finalPar2 =  0.6179;}
   	if(fixPar2 == 0.31){finalPar2 =  0.6217;}
   	if(fixPar2 == 0.32){finalPar2 =  0.6255;}
   	if(fixPar2 == 0.33){finalPar2 =  0.6293;}
   	if(fixPar2 == 0.34){finalPar2 =  0.6331;}
   	if(fixPar2 == 0.35){finalPar2 =  0.6368;}
   	if(fixPar2 == 0.36){finalPar2 =  0.6406;}
   	if(fixPar2 == 0.37){finalPar2 =  0.6443;}
   	if(fixPar2 == 0.38){finalPar2 =  0.6480;}
   	if(fixPar2 == 0.39){finalPar2 =  0.6517;}
   	//0.04
   	if(fixPar2 == 0.40){finalPar2 =  0.6554;}
   	if(fixPar2 == 0.41){finalPar2 =  0.6591;}
   	if(fixPar2 == 0.42){finalPar2 =  0.6628;}
   	if(fixPar2 == 0.43){finalPar2 =  0.6664;}
   	if(fixPar2 == 0.44){finalPar2 =  0.6700;}
   	if(fixPar2 == 0.45){finalPar2 =  0.6736;}
   	if(fixPar2 == 0.46){finalPar2 =  0.6772;}
   	if(fixPar2 == 0.47){finalPar2 =  0.6808;}
   	if(fixPar2 == 0.48){finalPar2 =  0.6844;}
   	if(fixPar2 == 0.49){finalPar2 =  0.6879;}
   	//0.50
   	if(fixPar2 == 0.50){finalPar2 =  0.6915;}
   	if(fixPar2 == 0.51){finalPar2 =  0.6950;}
   	if(fixPar2 == 0.52){finalPar2 =  0.6985;}
   	if(fixPar2 == 0.53){finalPar2 =  0.7019;}
   	if(fixPar2 == 0.54){finalPar2 =  0.7054;}
   	if(fixPar2 == 0.55){finalPar2 =  0.7088;}
   	if(fixPar2 == 0.56){finalPar2 =  0.7123;}
   	if(fixPar2 == 0.57){finalPar2 =  0.7157;}
   	if(fixPar2 == 0.58){finalPar2 =  0.7190;}
   	if(fixPar2 == 0.59){finalPar2 =  0.7224;}
   	//0.60
   	if(fixPar2 == 0.60){finalPar2 =  0.7257;}
   	if(fixPar2 == 0.61){finalPar2 =  0.7291;}
   	if(fixPar2 == 0.62){finalPar2 =  0.7324;}
   	if(fixPar2 == 0.63){finalPar2 =  0.7357;}
   	if(fixPar2 == 0.64){finalPar2 =  0.7389;}
   	if(fixPar2 == 0.65){finalPar2 =  0.7422;}
   	if(fixPar2 == 0.66){finalPar2 =  0.7454;}
   	if(fixPar2 == 0.67){finalPar2 =  0.7486;}
   	if(fixPar2 == 0.68){finalPar2 =  0.7517;}
   	if(fixPar2 == 0.69){finalPar2 =  0.7549;}
   	//0.70
   	if(fixPar2 == 0.70){finalPar2 =  0.7257;}
   	if(fixPar2 == 0.71){finalPar2 =  0.7611;}
   	if(fixPar2 == 0.72){finalPar2 =  0.7642;}
   	if(fixPar2 == 0.73){finalPar2 =  0.7673;}
   	if(fixPar2 == 0.74){finalPar2 =  0.7704;}
   	if(fixPar2 == 0.75){finalPar2 =  0.7734;}
   	if(fixPar2 == 0.76){finalPar2 =  0.7764;}
   	if(fixPar2 == 0.77){finalPar2 =  0.7794;}
   	if(fixPar2 == 0.78){finalPar2 =  0.7823;}
   	if(fixPar2 == 0.79){finalPar2 =  0.7852;}
   	//0.80
   	if(fixPar2 == 0.80){finalPar2 =  0.7881;}
   	if(fixPar2 == 0.81){finalPar2 =  0.7910;}
   	if(fixPar2 == 0.82){finalPar2 =  0.7939;}
   	if(fixPar2 == 0.83){finalPar2 =  0.7967;}
   	if(fixPar2 == 0.84){finalPar2 =  0.7995;}
   	if(fixPar2 == 0.85){finalPar2 =  0.8023;}
   	if(fixPar2 == 0.86){finalPar2 =  0.8051;}
   	if(fixPar2 == 0.87){finalPar2 =  0.8078;}
   	if(fixPar2 == 0.88){finalPar2 =  0.8106;}
   	if(fixPar2 == 0.89){finalPar2 =  0.8133;}
   	//0.90
   	if(fixPar2 == 0.90){finalPar2 =  0.8159;}
   	if(fixPar2 == 0.91){finalPar2 =  0.8186;}
   	if(fixPar2 == 0.92){finalPar2 =  0.8212;}
   	if(fixPar2 == 0.93){finalPar2 =  0.8238;}
   	if(fixPar2 == 0.94){finalPar2 =  0.8264;}
   	if(fixPar2 == 0.95){finalPar2 =  0.8289;}
   	if(fixPar2 == 0.96){finalPar2 =  0.8315;}
   	if(fixPar2 == 0.97){finalPar2 =  0.8340;}
   	if(fixPar2 == 0.98){finalPar2 =  0.8365;}
   	if(fixPar2 == 0.99){finalPar2 =  0.8389;}
   	//1.00
   	if(fixPar2 == 1.00){finalPar2 =  0.8413;}
   	if(fixPar2 == 1.01){finalPar2 =  0.8438;}
   	if(fixPar2 == 1.02){finalPar2 =  0.8461;}
   	if(fixPar2 == 1.03){finalPar2 =  0.8485;}
   	if(fixPar2 == 1.04){finalPar2 =  0.8508;}
   	if(fixPar2 == 1.05){finalPar2 =  0.8531;}
   	if(fixPar2 == 1.06){finalPar2 =  0.8554;}
   	if(fixPar2 == 1.07){finalPar2 =  0.8577;}
   	if(fixPar2 == 1.08){finalPar2 =  0.8599;}
   	if(fixPar2 == 1.09){finalPar2 =  0.8621;}
   	//1.10
   	if(fixPar2 == 1.10){finalPar2 =  0.8643;}
   	if(fixPar2 == 1.11){finalPar2 =  0.8665;}
   	if(fixPar2 == 1.12){finalPar2 =  0.8686;}
   	if(fixPar2 == 1.13){finalPar2 =  0.8708;}
   	if(fixPar2 == 1.14){finalPar2 =  0.8729;}
   	if(fixPar2 == 1.15){finalPar2 =  0.8749;}
   	if(fixPar2 == 1.16){finalPar2 =  0.8770;}
   	if(fixPar2 == 1.17){finalPar2 =  0.8790;}
   	if(fixPar2 == 1.18){finalPar2 =  0.8810;}
   	if(fixPar2 == 1.19){finalPar2 =  0.8830;}
   	//1.20
   	if(fixPar2 == 1.20){finalPar2 =  0.8849;}
   	if(fixPar2 == 1.21){finalPar2 =  0.8869;}
   	if(fixPar2 == 1.22){finalPar2 =  0.8888;}
   	if(fixPar2 == 1.23){finalPar2 =  0.8907;}
   	if(fixPar2 == 1.24){finalPar2 =  0.8925;}
   	if(fixPar2 == 1.25){finalPar2 =  0.8944;}
   	if(fixPar2 == 1.26){finalPar2 =  0.8962;}
   	if(fixPar2 == 1.27){finalPar2 =  0.8980;}
   	if(fixPar2 == 1.28){finalPar2 =  0.8997;}
   	if(fixPar2 == 1.29){finalPar2 =  0.9015;}
   	//1.30
   	if(fixPar2 == 1.30){finalPar2 =  0.9032;}
   	if(fixPar2 == 1.31){finalPar2 =  0.9049;}
   	if(fixPar2 == 1.32){finalPar2 =  0.9066;}
   	if(fixPar2 == 1.33){finalPar2 =  0.9082;}
   	if(fixPar2 == 1.34){finalPar2 =  0.9099;}
   	if(fixPar2 == 1.35){finalPar2 =  0.9115;}
   	if(fixPar2 == 1.36){finalPar2 =  0.9131;}
   	if(fixPar2 == 1.37){finalPar2 =  0.9147;}
   	if(fixPar2 == 1.38){finalPar2 =  0.9162;}
   	if(fixPar2 == 1.39){finalPar2 =  0.9177;}
   	//1.40
    if(fixPar2 == 1.40){finalPar2 =  0.9192;}
   	if(fixPar2 == 1.41){finalPar2 =  0.9207;}
   	if(fixPar2 == 1.42){finalPar2 =  0.9222;}
   	if(fixPar2 == 1.43){finalPar2 =  0.9236;}
   	if(fixPar2 == 1.44){finalPar2 =  0.9251;}
   	if(fixPar2 == 1.45){finalPar2 =  0.9265;}
   	if(fixPar2 == 1.46){finalPar2 =  0.9279;}
   	if(fixPar2 == 1.47){finalPar2 =  0.9292;}
   	if(fixPar2 == 1.48){finalPar2 =  0.9306;}
   	if(fixPar2 == 1.49){finalPar2 =  0.9319;} 	
   	//1.50
    if(fixPar2 == 1.50){finalPar2 =  0.9332;}
   	if(fixPar2 == 1.51){finalPar2 =  0.9345;}
   	if(fixPar2 == 1.52){finalPar2 =  0.9357;}
   	if(fixPar2 == 1.53){finalPar2 =  0.9370;}
   	if(fixPar2 == 1.54){finalPar2 =  0.9382;}
   	if(fixPar2 == 1.55){finalPar2 =  0.9394;}
   	if(fixPar2 == 1.56){finalPar2 =  0.9406;}
   	if(fixPar2 == 1.57){finalPar2 =  0.9418;}
   	if(fixPar2 == 1.58){finalPar2 =  0.9429;}
   	if(fixPar2 == 1.59){finalPar2 =  0.9441;}
   	//1.60
    if(fixPar2 == 1.60){finalPar2 =  0.9452;}
   	if(fixPar2 == 1.61){finalPar2 =  0.9463;}
   	if(fixPar2 == 1.62){finalPar2 =  0.9474;}
   	if(fixPar2 == 1.63){finalPar2 =  0.9484;}
   	if(fixPar2 == 1.64){finalPar2 =  0.9495;}
   	if(fixPar2 == 1.65){finalPar2 =  0.9505;}
   	if(fixPar2 == 1.66){finalPar2 =  0.9515;}
   	if(fixPar2 == 1.67){finalPar2 =  0.9525;}
   	if(fixPar2 == 1.68){finalPar2 =  0.9535;}
   	if(fixPar2 == 1.69){finalPar2 =  0.9545;}
   	//1.70
    if(fixPar2 == 1.70){finalPar2 =  0.9554;}
   	if(fixPar2 == 1.71){finalPar2 =  0.9564;}
   	if(fixPar2 == 1.72){finalPar2 =  0.9573;}
   	if(fixPar2 == 1.73){finalPar2 =  0.9582;}
   	if(fixPar2 == 1.74){finalPar2 =  0.9591;}
   	if(fixPar2 == 1.75){finalPar2 =  0.9599;}
   	if(fixPar2 == 1.76){finalPar2 =  0.9608;}
   	if(fixPar2 == 1.77){finalPar2 =  0.9616;}
   	if(fixPar2 == 1.78){finalPar2 =  0.9625;}
   	if(fixPar2 == 1.79){finalPar2 =  0.9633;}
   	//1.80
    if(fixPar2 == 1.80){finalPar2 =  0.9641;}
   	if(fixPar2 == 1.81){finalPar2 =  0.9649;}
   	if(fixPar2 == 1.82){finalPar2 =  0.9656;}
   	if(fixPar2 == 1.83){finalPar2 =  0.9664;}
   	if(fixPar2 == 1.84){finalPar2 =  0.9671;}
   	if(fixPar2 == 1.85){finalPar2 =  0.9678;}
   	if(fixPar2 == 1.86){finalPar2 =  0.9686;}
   	if(fixPar2 == 1.87){finalPar2 =  0.9693;}
   	if(fixPar2 == 1.88){finalPar2 =  0.9699;}
   	if(fixPar2 == 1.89){finalPar2 =  0.9706;}
   	//1.90
    if(fixPar2 == 1.90){finalPar2 =  0.9713;}
   	if(fixPar2 == 1.91){finalPar2 =  0.9719;}
   	if(fixPar2 == 1.92){finalPar2 =  0.9726;}
   	if(fixPar2 == 1.93){finalPar2 =  0.9732;}
   	if(fixPar2 == 1.94){finalPar2 =  0.9738;}
   	if(fixPar2 == 1.95){finalPar2 =  0.9744;}
   	if(fixPar2 == 1.96){finalPar2 =  0.9750;}
   	if(fixPar2 == 1.97){finalPar2 =  0.9756;}
   	if(fixPar2 == 1.98){finalPar2 =  0.9761;}
   	if(fixPar2 == 1.99){finalPar2 =  0.9767;}
   	//2.00
    if(fixPar2 == 2.00){finalPar2 =  0.9722;}
   	if(fixPar2 == 2.01){finalPar2 =  0.9778;}
   	if(fixPar2 == 2.02){finalPar2 =  0.9783;}
   	if(fixPar2 == 2.03){finalPar2 =  0.9788;}
   	if(fixPar2 == 2.04){finalPar2 =  0.9793;}
   	if(fixPar2 == 2.05){finalPar2 =  0.9798;}
   	if(fixPar2 == 2.06){finalPar2 =  0.9803;}
   	if(fixPar2 == 2.07){finalPar2 =  0.9808;}
   	if(fixPar2 == 2.08){finalPar2 =  0.9812;}
   	if(fixPar2 == 2.09){finalPar2 =  0.9817;}
   	//2.10
   	if(fixPar2 == 2.10){finalPar2 =  0.9821;}
   	if(fixPar2 == 2.11){finalPar2 =  0.9826;}
   	if(fixPar2 == 2.12){finalPar2 =  0.9830;}
   	if(fixPar2 == 2.13){finalPar2 =  0.9834;}
   	if(fixPar2 == 2.14){finalPar2 =  0.9838;}
   	if(fixPar2 == 2.15){finalPar2 =  0.9842;}
   	if(fixPar2 == 2.16){finalPar2 =  0.9846;}
   	if(fixPar2 == 2.17){finalPar2 =  0.9850;}
   	if(fixPar2 == 2.18){finalPar2 =  0.9854;}
   	if(fixPar2 == 2.19){finalPar2 =  0.9857;}
   	//2.20
   	if(fixPar2 == 2.20){finalPar2 =  0.9861;}
   	if(fixPar2 == 2.21){finalPar2 =  0.9864;}
   	if(fixPar2 == 2.22){finalPar2 =  0.9868;}
   	if(fixPar2 == 2.23){finalPar2 =  0.9871;}
   	if(fixPar2 == 2.24){finalPar2 =  0.9875;}
   	if(fixPar2 == 2.25){finalPar2 =  0.9878;}
   	if(fixPar2 == 2.26){finalPar2 =  0.9881;}
   	if(fixPar2 == 2.27){finalPar2 =  0.9884;}
   	if(fixPar2 == 2.28){finalPar2 =  0.9887;}
   	if(fixPar2 == 2.29){finalPar2 =  0.9890;}
   	//2.30
   	if(fixPar2 == 2.30){finalPar2 =  0.9893;}
   	if(fixPar2 == 2.31){finalPar2 =  0.9896;}
   	if(fixPar2 == 2.32){finalPar2 =  0.9898;}
   	if(fixPar2 == 2.33){finalPar2 =  0.9901;}
   	if(fixPar2 == 2.34){finalPar2 =  0.9904;}
   	if(fixPar2 == 2.35){finalPar2 =  0.9906;}
   	if(fixPar2 == 2.36){finalPar2 =  0.9909;}
   	if(fixPar2 == 2.37){finalPar2 =  0.9911;}
   	if(fixPar2 == 2.38){finalPar2 =  0.9913;}
   	if(fixPar2 == 2.39){finalPar2 =  0.9916;}
   	//2.40
   	if(fixPar2 == 2.40){finalPar2 =  0.9918;}
   	if(fixPar2 == 2.41){finalPar2 =  0.9920;}
   	if(fixPar2 == 2.42){finalPar2 =  0.9922;}
   	if(fixPar2 == 2.43){finalPar2 =  0.9925;}
   	if(fixPar2 == 2.44){finalPar2 =  0.9927;}
   	if(fixPar2 == 2.45){finalPar2 =  0.9929;}
   	if(fixPar2 == 2.46){finalPar2 =  0.9931;}
   	if(fixPar2 == 2.47){finalPar2 =  0.9932;}
   	if(fixPar2 == 2.48){finalPar2 =  0.9934;}
   	if(fixPar2 == 2.49){finalPar2 =  0.9936;}
   	//2.50
   	if(fixPar2 == 2.50){finalPar2 =  0.9938;}
   	if(fixPar2 == 2.51){finalPar2 =  0.9940;}
   	if(fixPar2 == 2.52){finalPar2 =  0.9941;}
   	if(fixPar2 == 2.53){finalPar2 =  0.9943;}
   	if(fixPar2 == 2.54){finalPar2 =  0.9945;}
   	if(fixPar2 == 2.55){finalPar2 =  0.9946;}
   	if(fixPar2 == 2.56){finalPar2 =  0.9948;}
   	if(fixPar2 == 2.57){finalPar2 =  0.9949;}
   	if(fixPar2 == 2.58){finalPar2 =  0.9951;}
   	if(fixPar2 == 2.59){finalPar2 =  0.9952;}
   	//2.60
   	if(fixPar2 == 2.60){finalPar2 =  0.9953;}
   	if(fixPar2 == 2.61){finalPar2 =  0.9955;}
   	if(fixPar2 == 2.62){finalPar2 =  0.9956;}
   	if(fixPar2 == 2.63){finalPar2 =  0.9957;}
   	if(fixPar2 == 2.64){finalPar2 =  0.9959;}
   	if(fixPar2 == 2.65){finalPar2 =  0.9960;}
   	if(fixPar2 == 2.66){finalPar2 =  0.9961;}
   	if(fixPar2 == 2.67){finalPar2 =  0.9962;}
   	if(fixPar2 == 2.68){finalPar2 =  0.9963;}
   	if(fixPar2 == 2.69){finalPar2 =  0.9964;}
   	//2.70
   	if(fixPar2 == 2.70){finalPar2 =  0.9965;}
   	if(fixPar2 == 2.71){finalPar2 =  0.9966;}
   	if(fixPar2 == 2.72){finalPar2 =  0.9967;}
   	if(fixPar2 == 2.73){finalPar2 =  0.9968;}
   	if(fixPar2 == 2.74){finalPar2 =  0.9969;}
   	if(fixPar2 == 2.75){finalPar2 =  0.9970;}
   	if(fixPar2 == 2.76){finalPar2 =  0.9971;}
   	if(fixPar2 == 2.77){finalPar2 =  0.9972;}
   	if(fixPar2 == 2.78){finalPar2 =  0.9973;}
   	if(fixPar2 == 2.79){finalPar2 =  0.9974;}
   	//2.80
   	if(fixPar2 == 2.80){finalPar2 =  0.9974;}
   	if(fixPar2 == 2.81){finalPar2 =  0.9975;}
   	if(fixPar2 == 2.82){finalPar2 =  0.9976;}
   	if(fixPar2 == 2.83){finalPar2 =  0.9977;}
   	if(fixPar2 == 2.84){finalPar2 =  0.9977;}
   	if(fixPar2 == 2.85){finalPar2 =  0.9978;}
   	if(fixPar2 == 2.86){finalPar2 =  0.9979;}
   	if(fixPar2 == 2.87){finalPar2 =  0.9979;}
   	if(fixPar2 == 2.88){finalPar2 =  0.9980;}
   	if(fixPar2 == 2.89){finalPar2 =  0.9981;}
   	//2.90
   	if(fixPar2 == 2.90){finalPar2 =  0.9981;}
   	if(fixPar2 == 2.91){finalPar2 =  0.9982;}
   	if(fixPar2 == 2.92){finalPar2 =  0.9982;}
   	if(fixPar2 == 2.93){finalPar2 =  0.9983;}
   	if(fixPar2 == 2.94){finalPar2 =  0.9984;}
   	if(fixPar2 == 2.95){finalPar2 =  0.9984;}
   	if(fixPar2 == 2.96){finalPar2 =  0.9985;}
   	if(fixPar2 == 2.97){finalPar2 =  0.9985;}
   	if(fixPar2 == 2.98){finalPar2 =  0.9986;}
   	if(fixPar2 == 2.99){finalPar2 =  0.9986;}
   	//3.00
   	if(fixPar2 == 3.00){finalPar2 =  0.9987;}
   	if(fixPar2 == 3.01){finalPar2 =  0.9987;}
   	if(fixPar2 == 3.02){finalPar2 =  0.9987;}
   	if(fixPar2 == 3.03){finalPar2 =  0.9987;}
   	if(fixPar2 == 3.04){finalPar2 =  0.9988;}
   	if(fixPar2 == 3.05){finalPar2 =  0.9989;}
   	if(fixPar2 == 3.06){finalPar2 =  0.9989;}
   	if(fixPar2 == 3.07){finalPar2 =  0.9989;}
   	if(fixPar2 == 3.08){finalPar2 =  0.9990;}
   	if(fixPar2 == 3.09){finalPar2 =  0.9990;}
   	//3.10
   	if(fixPar2 == 3.10){finalPar2 =  0.9990;}
   	if(fixPar2 == 3.11){finalPar2 =  0.9991;}
   	if(fixPar2 == 3.12){finalPar2 =  0.9991;}
   	if(fixPar2 == 3.13){finalPar2 =  0.9991;}
   	if(fixPar2 == 3.14){finalPar2 =  0.9992;}
   	if(fixPar2 == 3.15){finalPar2 =  0.9992;}
   	if(fixPar2 == 3.16){finalPar2 =  0.9992;}
   	if(fixPar2 == 3.17){finalPar2 =  0.9992;}
   	if(fixPar2 == 3.18){finalPar2 =  0.9993;}
   	if(fixPar2 == 3.19){finalPar2 =  0.9993;}
   	//3.20
   	if(fixPar2 == 3.20){finalPar2 =  0.9993;}
   	if(fixPar2 == 3.21){finalPar2 =  0.9993;}
   	if(fixPar2 == 3.22){finalPar2 =  0.9994;}
   	if(fixPar2 == 3.23){finalPar2 =  0.9994;}
   	if(fixPar2 == 3.24){finalPar2 =  0.9994;}
   	if(fixPar2 == 3.25){finalPar2 =  0.9994;}
   	if(fixPar2 == 3.26){finalPar2 =  0.9994;}
   	if(fixPar2 == 3.27){finalPar2 =  0.9995;}
   	if(fixPar2 == 3.28){finalPar2 =  0.9995;}
   	if(fixPar2 == 3.29){finalPar2 =  0.9995;}
   	//3.30
   	if(fixPar2 == 3.30){finalPar2 =  0.9995;}
   	if(fixPar2 == 3.31){finalPar2 =  0.9995;}
   	if(fixPar2 == 3.32){finalPar2 =  0.9995;}
   	if(fixPar2 == 3.33){finalPar2 =  0.9996;}
   	if(fixPar2 == 3.34){finalPar2 =  0.9996;}
   	if(fixPar2 == 3.35){finalPar2 =  0.9996;}
   	if(fixPar2 == 3.36){finalPar2 =  0.9996;}
   	if(fixPar2 == 3.37){finalPar2 =  0.9996;}
   	if(fixPar2 == 3.38){finalPar2 =  0.9996;}
   	if(fixPar2 == 3.39){finalPar2 =  0.9997;}
   	//3.40
   	if(fixPar2 == 3.40){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.41){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.42){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.43){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.44){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.45){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.46){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.47){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.48){finalPar2 =  0.9997;}
   	if(fixPar2 == 3.49){finalPar2 =  0.9998;}
   	//3.50
   	if(fixPar2 == 3.50){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.51){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.52){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.53){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.54){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.55){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.56){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.57){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.58){finalPar2 =  0.9998;}
   	if(fixPar2 == 3.59){finalPar2 =  0.9999;}
   	//4.00
   	if(fixPar2 == 4.00){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.01){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.02){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.03){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.04){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.05){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.06){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.07){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.08){finalPar2 =  0.99997;}
   	if(fixPar2 == 4.09){finalPar2 =  0.99998;}

   	var betweenAnswer1 = finalPar2 - finalPar1;
   	var betweenAnswer2 = finalPar2 - finalPar1;
	document.getElementById("displayFormulaBetween").value = " P( " + first + "< 𝑿 < " + second + ") = P (" + first + " - 𝜇x ∕ 𝝈x   < Z <    " + second + " - 𝜇x ∕ 𝝈x) "  ;
	document.getElementById("displayFormulaBetween2").value = " = P ( " + first + " - "+ x +"/ " + standardBetween.toFixed(5) +  " < Z < " +  second + " - "+ x +"/ " + standardBetween.toFixed(5) +  ") "  ;
	document.getElementById("displayFormulaBetween3").value = " = P ( " + fixPar1 +  " < Z < " + fixPar2 + ")" ;
	document.getElementById("displayFormulaBetween4").value = " = " + finalPar2.toFixed(4) + " - " + finalPar1.toFixed(4);
	document.getElementById("displayBetween").value = betweenAnswer1 ;
	document.getElementById("displayRoundBetween").value = betweenAnswer2.toFixed(4) ;

}

function Less(){
	var k = document.getElementById("value").value;
	var x =document.getElementById("mean").value;
	var y = document.getElementById("standardDeviation").value;
	var z = document.getElementById("sampleSize").value;

	var standardLess = y / Math.sqrt(z);
	var parLess = (k - x) / standardLess;

	var fixParLess = parLess.toFixed(2); 

	var finalParLess;

	//Positive Standard Normal Distribution

	if(fixParLess == 0.00){finalParLess =  0.5000;}
   	if(fixParLess == 0.01){finalParLess =  0.5040;}
   	if(fixParLess == 0.02){finalParLess =  0.5080;}
   	if(fixParLess == 0.03){finalParLess =  0.5120;}
   	if(fixParLess == 0.04){finalParLess =  0.5160;}
   	if(fixParLess == 0.05){finalParLess =  0.5199;}
   	if(fixParLess == 0.06){finalParLess =  0.5239;}
   	if(fixParLess == 0.07){finalParLess =  0.5279;}
   	if(fixParLess == 0.08){finalParLess =  0.5319;}
   	if(fixParLess == 0.09){finalParLess =  0.5359;}
   	//0.10
   	if(fixParLess == 0.10){finalParLess =  0.5398;}
   	if(fixParLess == 0.11){finalParLess =  0.5438;}
   	if(fixParLess == 0.12){finalParLess =  0.5478;}
   	if(fixParLess == 0.13){finalParLess =  0.5517;}
   	if(fixParLess == 0.14){finalParLess =  0.5557;}
   	if(fixParLess == 0.15){finalParLess =  0.5596;}
   	if(fixParLess == 0.16){finalParLess =  0.5636;}
   	if(fixParLess == 0.17){finalParLess =  0.5675;}
   	if(fixParLess == 0.18){finalParLess =  0.5714;}
   	if(fixParLess == 0.19){finalParLess =  0.5753;}
   	//0.20
   	if(fixParLess == 0.20){finalParLess =  0.5793;}
   	if(fixParLess == 0.21){finalParLess =  0.5832;}
   	if(fixParLess == 0.22){finalParLess =  0.5871;}
   	if(fixParLess == 0.23){finalParLess =  0.5910;}
   	if(fixParLess == 0.24){finalParLess =  0.5948;}
   	if(fixParLess == 0.25){finalParLess =  0.5987;}
   	if(fixParLess == 0.26){finalParLess =  0.6026;}
   	if(fixParLess == 0.27){finalParLess =  0.6064;}
   	if(fixParLess == 0.28){finalParLess =  0.6103;}
   	if(fixParLess == 0.29){finalParLess =  0.6141;}
   	//0.30
   	if(fixParLess == 0.30){finalParLess =  0.6179;}
   	if(fixParLess == 0.31){finalParLess =  0.6217;}
   	if(fixParLess == 0.32){finalParLess =  0.6255;}
   	if(fixParLess == 0.33){finalParLess =  0.6293;}
   	if(fixParLess == 0.34){finalParLess =  0.6331;}
   	if(fixParLess == 0.35){finalParLess =  0.6368;}
   	if(fixParLess == 0.36){finalParLess =  0.6406;}
   	if(fixParLess == 0.37){finalParLess =  0.6443;}
   	if(fixParLess == 0.38){finalParLess =  0.6480;}
   	if(fixParLess == 0.39){finalParLess =  0.6517;}
   	//0.04
   	if(fixParLess == 0.40){finalParLess =  0.6554;}
   	if(fixParLess == 0.41){finalParLess =  0.6591;}
   	if(fixParLess == 0.42){finalParLess =  0.6628;}
   	if(fixParLess == 0.43){finalParLess =  0.6664;}
   	if(fixParLess == 0.44){finalParLess =  0.6700;}
   	if(fixParLess == 0.45){finalParLess =  0.6736;}
   	if(fixParLess == 0.46){finalParLess =  0.6772;}
   	if(fixParLess == 0.47){finalParLess =  0.6808;}
   	if(fixParLess == 0.48){finalParLess =  0.6844;}
   	if(fixParLess == 0.49){finalParLess =  0.6879;}
   	//0.50
   	if(fixParLess == 0.50){finalParLess =  0.6915;}
   	if(fixParLess == 0.51){finalParLess =  0.6950;}
   	if(fixParLess == 0.52){finalParLess =  0.6985;}
   	if(fixParLess == 0.53){finalParLess =  0.7019;}
   	if(fixParLess == 0.54){finalParLess =  0.7054;}
   	if(fixParLess == 0.55){finalParLess =  0.7088;}
   	if(fixParLess == 0.56){finalParLess =  0.7123;}
   	if(fixParLess == 0.57){finalParLess =  0.7157;}
   	if(fixParLess == 0.58){finalParLess =  0.7190;}
   	if(fixParLess == 0.59){finalParLess =  0.7224;}
   	//0.60
   	if(fixParLess == 0.60){finalParLess =  0.7257;}
   	if(fixParLess == 0.61){finalParLess =  0.7291;}
   	if(fixParLess == 0.62){finalParLess =  0.7324;}
   	if(fixParLess == 0.63){finalParLess =  0.7357;}
   	if(fixParLess == 0.64){finalParLess =  0.7389;}
   	if(fixParLess == 0.65){finalParLess =  0.7422;}
   	if(fixParLess == 0.66){finalParLess =  0.7454;}
   	if(fixParLess == 0.67){finalParLess =  0.7486;}
   	if(fixParLess == 0.68){finalParLess =  0.7517;}
   	if(fixParLess == 0.69){finalParLess =  0.7549;}
   	//0.70
   	if(fixParLess == 0.70){finalParLess =  0.7257;}
   	if(fixParLess == 0.71){finalParLess =  0.7611;}
   	if(fixParLess == 0.72){finalParLess =  0.7642;}
   	if(fixParLess == 0.73){finalParLess =  0.7673;}
   	if(fixParLess == 0.74){finalParLess =  0.7704;}
   	if(fixParLess == 0.75){finalParLess =  0.7734;}
   	if(fixParLess == 0.76){finalParLess =  0.7764;}
   	if(fixParLess == 0.77){finalParLess =  0.7794;}
   	if(fixParLess == 0.78){finalParLess =  0.7823;}
   	if(fixParLess == 0.79){finalParLess =  0.7852;}
   	//0.80
   	if(fixParLess == 0.80){finalParLess =  0.7881;}
   	if(fixParLess == 0.81){finalParLess =  0.7910;}
   	if(fixParLess == 0.82){finalParLess =  0.7939;}
   	if(fixParLess == 0.83){finalParLess =  0.7967;}
   	if(fixParLess == 0.84){finalParLess =  0.7995;}
   	if(fixParLess == 0.85){finalParLess =  0.8023;}
   	if(fixParLess == 0.86){finalParLess =  0.8051;}
   	if(fixParLess == 0.87){finalParLess =  0.8078;}
   	if(fixParLess == 0.88){finalParLess =  0.8106;}
   	if(fixParLess == 0.89){finalParLess =  0.8133;}
   	//0.90
   	if(fixParLess == 0.90){finalParLess =  0.8159;}
   	if(fixParLess == 0.91){finalParLess =  0.8186;}
   	if(fixParLess == 0.92){finalParLess =  0.8212;}
   	if(fixParLess == 0.93){finalParLess =  0.8238;}
   	if(fixParLess == 0.94){finalParLess =  0.8264;}
   	if(fixParLess == 0.95){finalParLess =  0.8289;}
   	if(fixParLess == 0.96){finalParLess =  0.8315;}
   	if(fixParLess == 0.97){finalParLess =  0.8340;}
   	if(fixParLess == 0.98){finalParLess =  0.8365;}
   	if(fixParLess == 0.99){finalParLess =  0.8389;}
   	//1.00
   	if(fixParLess == 1.00){finalParLess =  0.8413;}
   	if(fixParLess == 1.01){finalParLess =  0.8438;}
   	if(fixParLess == 1.02){finalParLess =  0.8461;}
   	if(fixParLess == 1.03){finalParLess =  0.8485;}
   	if(fixParLess == 1.04){finalParLess =  0.8508;}
   	if(fixParLess == 1.05){finalParLess =  0.8531;}
   	if(fixParLess == 1.06){finalParLess =  0.8554;}
   	if(fixParLess == 1.07){finalParLess =  0.8577;}
   	if(fixParLess == 1.08){finalParLess =  0.8599;}
   	if(fixParLess == 1.09){finalParLess =  0.8621;}
   	//1.10
   	if(fixParLess == 1.10){finalParLess =  0.8643;}
   	if(fixParLess == 1.11){finalParLess =  0.8665;}
   	if(fixParLess == 1.12){finalParLess =  0.8686;}
   	if(fixParLess == 1.13){finalParLess =  0.8708;}
   	if(fixParLess == 1.14){finalParLess =  0.8729;}
   	if(fixParLess == 1.15){finalParLess =  0.8749;}
   	if(fixParLess == 1.16){finalParLess =  0.8770;}
   	if(fixParLess == 1.17){finalParLess =  0.8790;}
   	if(fixParLess == 1.18){finalParLess =  0.8810;}
   	if(fixParLess == 1.19){finalParLess =  0.8830;}
   	//1.20
   	if(fixParLess == 1.20){finalParLess =  0.8849;}
   	if(fixParLess == 1.21){finalParLess =  0.8869;}
   	if(fixParLess == 1.22){finalParLess =  0.8888;}
   	if(fixParLess == 1.23){finalParLess =  0.8907;}
   	if(fixParLess == 1.24){finalParLess =  0.8925;}
   	if(fixParLess == 1.25){finalParLess =  0.8944;}
   	if(fixParLess == 1.26){finalParLess =  0.8962;}
   	if(fixParLess == 1.27){finalParLess =  0.8980;}
   	if(fixParLess == 1.28){finalParLess =  0.8997;}
   	if(fixParLess == 1.29){finalParLess =  0.9015;}
   	//1.30
   	if(fixParLess == 1.30){finalParLess =  0.9032;}
   	if(fixParLess == 1.31){finalParLess =  0.9049;}
   	if(fixParLess == 1.32){finalParLess =  0.9066;}
   	if(fixParLess == 1.33){finalParLess =  0.9082;}
   	if(fixParLess == 1.34){finalParLess =  0.9099;}
   	if(fixParLess == 1.35){finalParLess =  0.9115;}
   	if(fixParLess == 1.36){finalParLess =  0.9131;}
   	if(fixParLess == 1.37){finalParLess =  0.9147;}
   	if(fixParLess == 1.38){finalParLess =  0.9162;}
   	if(fixParLess == 1.39){finalParLess =  0.9177;}
   	//1.40
    if(fixParLess == 1.40){finalParLess =  0.9192;}
   	if(fixParLess == 1.41){finalParLess =  0.9207;}
   	if(fixParLess == 1.42){finalParLess =  0.9222;}
   	if(fixParLess == 1.43){finalParLess =  0.9236;}
   	if(fixParLess == 1.44){finalParLess =  0.9251;}
   	if(fixParLess == 1.45){finalParLess =  0.9265;}
   	if(fixParLess == 1.46){finalParLess =  0.9279;}
   	if(fixParLess == 1.47){finalParLess =  0.9292;}
   	if(fixParLess == 1.48){finalParLess =  0.9306;}
   	if(fixParLess == 1.49){finalParLess =  0.9319;} 	
   	//1.50
    if(fixParLess == 1.50){finalParLess =  0.9332;}
   	if(fixParLess == 1.51){finalParLess =  0.9345;}
   	if(fixParLess == 1.52){finalParLess =  0.9357;}
   	if(fixParLess == 1.53){finalParLess =  0.9370;}
   	if(fixParLess == 1.54){finalParLess =  0.9382;}
   	if(fixParLess == 1.55){finalParLess =  0.9394;}
   	if(fixParLess == 1.56){finalParLess =  0.9406;}
   	if(fixParLess == 1.57){finalParLess =  0.9418;}
   	if(fixParLess == 1.58){finalParLess =  0.9429;}
   	if(fixParLess == 1.59){finalParLess =  0.9441;}
   	//1.60
    if(fixParLess == 1.60){finalParLess =  0.9452;}
   	if(fixParLess == 1.61){finalParLess =  0.9463;}
   	if(fixParLess == 1.62){finalParLess =  0.9474;}
   	if(fixParLess == 1.63){finalParLess =  0.9484;}
   	if(fixParLess == 1.64){finalParLess =  0.9495;}
   	if(fixParLess == 1.65){finalParLess =  0.9505;}
   	if(fixParLess == 1.66){finalParLess =  0.9515;}
   	if(fixParLess == 1.67){finalParLess =  0.9525;}
   	if(fixParLess == 1.68){finalParLess =  0.9535;}
   	if(fixParLess == 1.69){finalParLess =  0.9545;}
   	//1.70
    if(fixParLess == 1.70){finalParLess =  0.9554;}
   	if(fixParLess == 1.71){finalParLess =  0.9564;}
   	if(fixParLess == 1.72){finalParLess =  0.9573;}
   	if(fixParLess == 1.73){finalParLess =  0.9582;}
   	if(fixParLess == 1.74){finalParLess =  0.9591;}
   	if(fixParLess == 1.75){finalParLess =  0.9599;}
   	if(fixParLess == 1.76){finalParLess =  0.9608;}
   	if(fixParLess == 1.77){finalParLess =  0.9616;}
   	if(fixParLess == 1.78){finalParLess =  0.9625;}
   	if(fixParLess == 1.79){finalParLess =  0.9633;}
   	//1.80
    if(fixParLess == 1.80){finalParLess =  0.9641;}
   	if(fixParLess == 1.81){finalParLess =  0.9649;}
   	if(fixParLess == 1.82){finalParLess =  0.9656;}
   	if(fixParLess == 1.83){finalParLess =  0.9664;}
   	if(fixParLess == 1.84){finalParLess =  0.9671;}
   	if(fixParLess == 1.85){finalParLess =  0.9678;}
   	if(fixParLess == 1.86){finalParLess =  0.9686;}
   	if(fixParLess == 1.87){finalParLess =  0.9693;}
   	if(fixParLess == 1.88){finalParLess =  0.9699;}
   	if(fixParLess == 1.89){finalParLess =  0.9706;}
   	//1.90
    if(fixParLess == 1.90){finalParLess =  0.9713;}
   	if(fixParLess == 1.91){finalParLess =  0.9719;}
   	if(fixParLess == 1.92){finalParLess =  0.9726;}
   	if(fixParLess == 1.93){finalParLess =  0.9732;}
   	if(fixParLess == 1.94){finalParLess =  0.9738;}
   	if(fixParLess == 1.95){finalParLess =  0.9744;}
   	if(fixParLess == 1.96){finalParLess =  0.9750;}
   	if(fixParLess == 1.97){finalParLess =  0.9756;}
   	if(fixParLess == 1.98){finalParLess =  0.9761;}
   	if(fixParLess == 1.99){finalParLess =  0.9767;}
   	//2.00
    if(fixParLess == 2.00){finalParLess =  0.9722;}
   	if(fixParLess == 2.01){finalParLess =  0.9778;}
   	if(fixParLess == 2.02){finalParLess =  0.9783;}
   	if(fixParLess == 2.03){finalParLess =  0.9788;}
   	if(fixParLess == 2.04){finalParLess =  0.9793;}
   	if(fixParLess == 2.05){finalParLess =  0.9798;}
   	if(fixParLess == 2.06){finalParLess =  0.9803;}
   	if(fixParLess == 2.07){finalParLess =  0.9808;}
   	if(fixParLess == 2.08){finalParLess =  0.9812;}
   	if(fixParLess == 2.09){finalParLess =  0.9817;}
   	//2.10
   	if(fixParLess == 2.10){finalParLess =  0.9821;}
   	if(fixParLess == 2.11){finalParLess =  0.9826;}
   	if(fixParLess == 2.12){finalParLess =  0.9830;}
   	if(fixParLess == 2.13){finalParLess =  0.9834;}
   	if(fixParLess == 2.14){finalParLess =  0.9838;}
   	if(fixParLess == 2.15){finalParLess =  0.9842;}
   	if(fixParLess == 2.16){finalParLess =  0.9846;}
   	if(fixParLess == 2.17){finalParLess =  0.9850;}
   	if(fixParLess == 2.18){finalParLess =  0.9854;}
   	if(fixParLess == 2.19){finalParLess =  0.9857;}
   	//2.20
   	if(fixParLess == 2.20){finalParLess =  0.9861;}
   	if(fixParLess == 2.21){finalParLess =  0.9864;}
   	if(fixParLess == 2.22){finalParLess =  0.9868;}
   	if(fixParLess == 2.23){finalParLess =  0.9871;}
   	if(fixParLess == 2.24){finalParLess =  0.9875;}
   	if(fixParLess == 2.25){finalParLess =  0.9878;}
   	if(fixParLess == 2.26){finalParLess =  0.9881;}
   	if(fixParLess == 2.27){finalParLess =  0.9884;}
   	if(fixParLess == 2.28){finalParLess =  0.9887;}
   	if(fixParLess == 2.29){finalParLess =  0.9890;}
   	//2.30
   	if(fixParLess == 2.30){finalParLess =  0.9893;}
   	if(fixParLess == 2.31){finalParLess =  0.9896;}
   	if(fixParLess == 2.32){finalParLess =  0.9898;}
   	if(fixParLess == 2.33){finalParLess =  0.9901;}
   	if(fixParLess == 2.34){finalParLess =  0.9904;}
   	if(fixParLess == 2.35){finalParLess =  0.9906;}
   	if(fixParLess == 2.36){finalParLess =  0.9909;}
   	if(fixParLess == 2.37){finalParLess =  0.9911;}
   	if(fixParLess == 2.38){finalParLess =  0.9913;}
   	if(fixParLess == 2.39){finalParLess =  0.9916;}
   	//2.40
   	if(fixParLess == 2.40){finalParLess =  0.9918;}
   	if(fixParLess == 2.41){finalParLess =  0.9920;}
   	if(fixParLess == 2.42){finalParLess =  0.9922;}
   	if(fixParLess == 2.43){finalParLess =  0.9925;}
   	if(fixParLess == 2.44){finalParLess =  0.9927;}
   	if(fixParLess == 2.45){finalParLess =  0.9929;}
   	if(fixParLess == 2.46){finalParLess =  0.9931;}
   	if(fixParLess == 2.47){finalParLess =  0.9932;}
   	if(fixParLess == 2.48){finalParLess =  0.9934;}
   	if(fixParLess == 2.49){finalParLess =  0.9936;}
   	//2.50
   	if(fixParLess == 2.50){finalParLess =  0.9938;}
   	if(fixParLess == 2.51){finalParLess =  0.9940;}
   	if(fixParLess == 2.52){finalParLess =  0.9941;}
   	if(fixParLess == 2.53){finalParLess =  0.9943;}
   	if(fixParLess == 2.54){finalParLess =  0.9945;}
   	if(fixParLess == 2.55){finalParLess =  0.9946;}
   	if(fixParLess == 2.56){finalParLess =  0.9948;}
   	if(fixParLess == 2.57){finalParLess =  0.9949;}
   	if(fixParLess == 2.58){finalParLess =  0.9951;}
   	if(fixParLess == 2.59){finalParLess =  0.9952;}
   	//2.60
   	if(fixParLess == 2.60){finalParLess =  0.9953;}
   	if(fixParLess == 2.61){finalParLess =  0.9955;}
   	if(fixParLess == 2.62){finalParLess =  0.9956;}
   	if(fixParLess == 2.63){finalParLess =  0.9957;}
   	if(fixParLess == 2.64){finalParLess =  0.9959;}
   	if(fixParLess == 2.65){finalParLess =  0.9960;}
   	if(fixParLess == 2.66){finalParLess =  0.9961;}
   	if(fixParLess == 2.67){finalParLess =  0.9962;}
   	if(fixParLess == 2.68){finalParLess =  0.9963;}
   	if(fixParLess == 2.69){finalParLess =  0.9964;}
   	//2.70
   	if(fixParLess == 2.70){finalParLess =  0.9965;}
   	if(fixParLess == 2.71){finalParLess =  0.9966;}
   	if(fixParLess == 2.72){finalParLess =  0.9967;}
   	if(fixParLess == 2.73){finalParLess =  0.9968;}
   	if(fixParLess == 2.74){finalParLess =  0.9969;}
   	if(fixParLess == 2.75){finalParLess =  0.9970;}
   	if(fixParLess == 2.76){finalParLess =  0.9971;}
   	if(fixParLess == 2.77){finalParLess =  0.9972;}
   	if(fixParLess == 2.78){finalParLess =  0.9973;}
   	if(fixParLess == 2.79){finalParLess =  0.9974;}
   	//2.80
   	if(fixParLess == 2.80){finalParLess =  0.9974;}
   	if(fixParLess == 2.81){finalParLess =  0.9975;}
   	if(fixParLess == 2.82){finalParLess =  0.9976;}
   	if(fixParLess == 2.83){finalParLess =  0.9977;}
   	if(fixParLess == 2.84){finalParLess =  0.9977;}
   	if(fixParLess == 2.85){finalParLess =  0.9978;}
   	if(fixParLess == 2.86){finalParLess =  0.9979;}
   	if(fixParLess == 2.87){finalParLess =  0.9979;}
   	if(fixParLess == 2.88){finalParLess =  0.9980;}
   	if(fixParLess == 2.89){finalParLess =  0.9981;}
   	//2.90
   	if(fixParLess == 2.90){finalParLess =  0.9981;}
   	if(fixParLess == 2.91){finalParLess =  0.9982;}
   	if(fixParLess == 2.92){finalParLess =  0.9982;}
   	if(fixParLess == 2.93){finalParLess =  0.9983;}
   	if(fixParLess == 2.94){finalParLess =  0.9984;}
   	if(fixParLess == 2.95){finalParLess =  0.9984;}
   	if(fixParLess == 2.96){finalParLess =  0.9985;}
   	if(fixParLess == 2.97){finalParLess =  0.9985;}
   	if(fixParLess == 2.98){finalParLess =  0.9986;}
   	if(fixParLess == 2.99){finalParLess =  0.9986;}
   	//3.00
   	if(fixParLess == 3.00){finalParLess =  0.9987;}
   	if(fixParLess == 3.01){finalParLess =  0.9987;}
   	if(fixParLess == 3.02){finalParLess =  0.9987;}
   	if(fixParLess == 3.03){finalParLess =  0.9987;}
   	if(fixParLess == 3.04){finalParLess =  0.9988;}
   	if(fixParLess == 3.05){finalParLess =  0.9989;}
   	if(fixParLess == 3.06){finalParLess =  0.9989;}
   	if(fixParLess == 3.07){finalParLess =  0.9989;}
   	if(fixParLess == 3.08){finalParLess =  0.9990;}
   	if(fixParLess == 3.09){finalParLess =  0.9990;}
   	//3.10
   	if(fixParLess == 3.10){finalParLess =  0.9990;}
   	if(fixParLess == 3.11){finalParLess =  0.9991;}
   	if(fixParLess == 3.12){finalParLess =  0.9991;}
   	if(fixParLess == 3.13){finalParLess =  0.9991;}
   	if(fixParLess == 3.14){finalParLess =  0.9992;}
   	if(fixParLess == 3.15){finalParLess =  0.9992;}
   	if(fixParLess == 3.16){finalParLess =  0.9992;}
   	if(fixParLess == 3.17){finalParLess =  0.9992;}
   	if(fixParLess == 3.18){finalParLess =  0.9993;}
   	if(fixParLess == 3.19){finalParLess =  0.9993;}
   	//3.20
   	if(fixParLess == 3.20){finalParLess =  0.9993;}
   	if(fixParLess == 3.21){finalParLess =  0.9993;}
   	if(fixParLess == 3.22){finalParLess =  0.9994;}
   	if(fixParLess == 3.23){finalParLess =  0.9994;}
   	if(fixParLess == 3.24){finalParLess =  0.9994;}
   	if(fixParLess == 3.25){finalParLess =  0.9994;}
   	if(fixParLess == 3.26){finalParLess =  0.9994;}
   	if(fixParLess == 3.27){finalParLess =  0.9995;}
   	if(fixParLess == 3.28){finalParLess =  0.9995;}
   	if(fixParLess == 3.29){finalParLess =  0.9995;}
   	//3.30
   	if(fixParLess == 3.30){finalParLess =  0.9995;}
   	if(fixParLess == 3.31){finalParLess =  0.9995;}
   	if(fixParLess == 3.32){finalParLess =  0.9995;}
   	if(fixParLess == 3.33){finalParLess =  0.9996;}
   	if(fixParLess == 3.34){finalParLess =  0.9996;}
   	if(fixParLess == 3.35){finalParLess =  0.9996;}
   	if(fixParLess == 3.36){finalParLess =  0.9996;}
   	if(fixParLess == 3.37){finalParLess =  0.9996;}
   	if(fixParLess == 3.38){finalParLess =  0.9996;}
   	if(fixParLess == 3.39){finalParLess =  0.9997;}
   	//3.40
   	if(fixParLess == 3.40){finalParLess =  0.9997;}
   	if(fixParLess == 3.41){finalParLess =  0.9997;}
   	if(fixParLess == 3.42){finalParLess =  0.9997;}
   	if(fixParLess == 3.43){finalParLess =  0.9997;}
   	if(fixParLess == 3.44){finalParLess =  0.9997;}
   	if(fixParLess == 3.45){finalParLess =  0.9997;}
   	if(fixParLess == 3.46){finalParLess =  0.9997;}
   	if(fixParLess == 3.47){finalParLess =  0.9997;}
   	if(fixParLess == 3.48){finalParLess =  0.9997;}
   	if(fixParLess == 3.49){finalParLess =  0.9998;}
   	//3.50
   	if(fixParLess == 3.50){finalParLess =  0.9998;}
   	if(fixParLess == 3.51){finalParLess =  0.9998;}
   	if(fixParLess == 3.52){finalParLess =  0.9998;}
   	if(fixParLess == 3.53){finalParLess =  0.9998;}
   	if(fixParLess == 3.54){finalParLess =  0.9998;}
   	if(fixParLess == 3.55){finalParLess =  0.9998;}
   	if(fixParLess == 3.56){finalParLess =  0.9998;}
   	if(fixParLess == 3.57){finalParLess =  0.9998;}
   	if(fixParLess == 3.58){finalParLess =  0.9998;}
   	if(fixParLess == 3.59){finalParLess =  0.9999;}
   	//4.00
   	if(fixParLess == 4.00){finalParLess =  0.99997;}
   	if(fixParLess == 4.01){finalParLess =  0.99997;}
   	if(fixParLess == 4.02){finalParLess =  0.99997;}
   	if(fixParLess == 4.03){finalParLess =  0.99997;}
   	if(fixParLess == 4.04){finalParLess =  0.99997;}
   	if(fixParLess == 4.05){finalParLess =  0.99997;}
   	if(fixParLess == 4.06){finalParLess =  0.99997;}
   	if(fixParLess == 4.07){finalParLess =  0.99997;}
   	if(fixParLess == 4.08){finalParLess =  0.99997;}
   	if(fixParLess == 4.09){finalParLess =  0.99998;}
   	//4.5
   	if(fixParLess == 4.50){finalParLess =  0.999997;}
   	if(fixParLess == 4.51){finalParLess =  0.999997;}
   	if(fixParLess == 4.52){finalParLess =  0.999997;}
   	if(fixParLess == 4.53){finalParLess =  0.999997;}
   	if(fixParLess == 4.54){finalParLess =  0.999997;}
   	if(fixParLess == 4.55){finalParLess =  0.999997;}
   	if(fixParLess == 4.56){finalParLess =  0.999997;}
   	if(fixParLess == 4.57){finalParLess =  0.999997;}
   	if(fixParLess == 4.58){finalParLess =  0.999997;}
   	if(fixParLess == 4.59){finalParLess =  0.999998;}
   	//5.0
   	if(fixParLess == 5.00){finalParLess =  0.9999997;}
   	if(fixParLess == 5.01){finalParLess =  0.9999997;}
   	if(fixParLess == 5.02){finalParLess =  0.9999997;}
   	if(fixParLess == 5.03){finalParLess =  0.9999997;}
   	if(fixParLess == 5.04){finalParLess =  0.9999997;}
   	if(fixParLess == 5.05){finalParLess =  0.9999997;}
   	if(fixParLess == 5.06){finalParLess =  0.9999997;}
   	if(fixParLess == 5.07){finalParLess =  0.9999997;}
   	if(fixParLess == 5.08){finalParLess =  0.9999997;}
   	if(fixParLess == 5.09){finalParLess =  0.9999998;}



   		//Negative Standard Normal Distribution
	//- 0.00
	if(fixParLess == -0.00){finalParLess = 1 - 0.5000;}
   	if(fixParLess == -0.01){finalParLess = 1 - 0.5040;}
   	if(fixParLess == -0.02){finalParLess = 1 - 0.5080;}
   	if(fixParLess == -0.03){finalParLess = 1 - 0.5120;}
   	if(fixParLess == -0.04){finalParLess = 1 - 0.5160;}
   	if(fixParLess == -0.05){finalParLess = 1 - 0.5199;}
   	if(fixParLess == -0.06){finalParLess = 1 - 0.5239;}
   	if(fixParLess == -0.07){finalParLess = 1 - 0.5279;}
   	if(fixParLess == -0.08){finalParLess = 1 - 0.5319;}
   	if(fixParLess == -0.09){finalParLess = 1 - 0.5359;}
   	//0.10
   	if(fixParLess == -0.10){finalParLess = 1 - 0.5398;}
   	if(fixParLess == -0.11){finalParLess = 1 - 0.5438;}
   	if(fixParLess == -0.12){finalParLess = 1 - 0.5478;}
   	if(fixParLess == -0.13){finalParLess = 1 - 0.5517;}
   	if(fixParLess == -0.14){finalParLess = 1 - 0.5557;}
   	if(fixParLess == -0.15){finalParLess = 1 - 0.5596;}
   	if(fixParLess == -0.16){finalParLess = 1 - 0.5636;}
   	if(fixParLess == -0.17){finalParLess = 1 - 0.5675;}
   	if(fixParLess == -0.18){finalParLess = 1 - 0.5714;}
   	if(fixParLess == -0.19){finalParLess = 1 - 0.5753;}
   	//0.20
   	if(fixParLess == -0.20){finalParLess = 1 - 0.5793;}
   	if(fixParLess == -0.21){finalParLess = 1 - 0.5832;}
   	if(fixParLess == -0.22){finalParLess = 1 - 0.5871;}
   	if(fixParLess == -0.23){finalParLess = 1 - 0.5910;}
   	if(fixParLess == -0.24){finalParLess = 1 - 0.5948;}
   	if(fixParLess == -0.25){finalParLess = 1 - 0.5987;}
   	if(fixParLess == -0.26){finalParLess = 1 - 0.6026;}
   	if(fixParLess == -0.27){finalParLess = 1 - 0.6064;}
   	if(fixParLess == -0.28){finalParLess = 1 - 0.6103;}
   	if(fixParLess == -0.29){finalParLess = 1 - 0.6141;}
   	//0.30
   	if(fixParLess == -0.30){finalParLess = 1 - 0.6179;}
   	if(fixParLess == -0.31){finalParLess = 1 - 0.6217;}
   	if(fixParLess == -0.32){finalParLess = 1 - 0.6255;}
   	if(fixParLess == -0.33){finalParLess = 1 - 0.6293;}
   	if(fixParLess == -0.34){finalParLess = 1 - 0.6331;}
   	if(fixParLess == -0.35){finalParLess = 1 - 0.6368;}
   	if(fixParLess == -0.36){finalParLess = 1 - 0.6406;}
   	if(fixParLess == -0.37){finalParLess = 1 - 0.6443;}
   	if(fixParLess == -0.38){finalParLess = 1 - 0.6480;}
   	if(fixParLess == -0.39){finalParLess = 1 - 0.6517;}
   	//0.04
   	if(fixParLess == -0.40){finalParLess = 1 - 0.6554;}
   	if(fixParLess == -0.41){finalParLess = 1 - 0.6591;}
   	if(fixParLess == -0.42){finalParLess = 1 - 0.6628;}
   	if(fixParLess == -0.43){finalParLess = 1 - 0.6664;}
   	if(fixParLess == -0.44){finalParLess = 1 - 0.6700;}
   	if(fixParLess == -0.45){finalParLess = 1 - 0.6736;}
   	if(fixParLess == -0.46){finalParLess = 1 - 0.6772;}
   	if(fixParLess == -0.47){finalParLess = 1 - 0.6808;}
   	if(fixParLess == -0.48){finalParLess = 1 - 0.6844;}
   	if(fixParLess == -0.49){finalParLess = 1 - 0.6879;}
   	//0.50
   	if(fixParLess == -0.50){finalParLess = 1 - 0.6915;}
   	if(fixParLess == -0.51){finalParLess = 1 - 0.6950;}
   	if(fixParLess == -0.52){finalParLess = 1 - 0.6985;}
   	if(fixParLess == -0.53){finalParLess = 1 - 0.7019;}
   	if(fixParLess == -0.54){finalParLess = 1 - 0.7054;}
   	if(fixParLess == -0.55){finalParLess = 1 - 0.7088;}
   	if(fixParLess == -0.56){finalParLess = 1 - 0.7123;}
   	if(fixParLess == -0.57){finalParLess = 1 - 0.7157;}
   	if(fixParLess == -0.58){finalParLess = 1 - 0.7190;}
   	if(fixParLess == -0.59){finalParLess = 1 - 0.7224;}
   	//0.60
   	if(fixParLess == -0.60){finalParLess = 1 - 0.7257;}
   	if(fixParLess == -0.61){finalParLess = 1 - 0.7291;}
   	if(fixParLess == -0.62){finalParLess = 1 - 0.7324;}
   	if(fixParLess == -0.63){finalParLess = 1 - 0.7357;}
   	if(fixParLess == -0.64){finalParLess = 1 - 0.7389;}
   	if(fixParLess == -0.65){finalParLess = 1 - 0.7422;}
   	if(fixParLess == -0.66){finalParLess = 1 - 0.7454;}
   	if(fixParLess == -0.67){finalParLess = 1 - 0.7486;}
   	if(fixParLess == -0.68){finalParLess = 1 - 0.7517;}
   	if(fixParLess == -0.69){finalParLess = 1 - 0.7549;}
   	//0.70
   	if(fixParLess == -0.70){finalParLess = 1 - 0.7257;}
   	if(fixParLess == -0.71){finalParLess = 1 - 0.7611;}
   	if(fixParLess == -0.72){finalParLess = 1 - 0.7642;}
   	if(fixParLess == -0.73){finalParLess = 1 - 0.7673;}
   	if(fixParLess == -0.74){finalParLess = 1 - 0.7704;}
   	if(fixParLess == -0.75){finalParLess = 1 - 0.7734;}
   	if(fixParLess == -0.76){finalParLess = 1 - 0.7764;}
   	if(fixParLess == -0.77){finalParLess = 1 - 0.7794;}
   	if(fixParLess == -0.78){finalParLess = 1 - 0.7823;}
   	if(fixParLess == -0.79){finalParLess = 1 - 0.7852;}
   	//0.80
   	if(fixParLess == -0.80){finalParLess = 1 - 0.7881;}
   	if(fixParLess == -0.81){finalParLess = 1 - 0.7910;}
   	if(fixParLess == -0.82){finalParLess = 1 - 0.7939;}
   	if(fixParLess == -0.83){finalParLess = 1 - 0.7967;}
   	if(fixParLess == -0.84){finalParLess = 1 - 0.7995;}
   	if(fixParLess == -0.85){finalParLess = 1 - 0.8023;}
   	if(fixParLess == -0.86){finalParLess = 1 - 0.8051;}
   	if(fixParLess == -0.87){finalParLess = 1 - 0.8078;}
   	if(fixParLess == -0.88){finalParLess = 1 - 0.8106;}
   	if(fixParLess == -0.89){finalParLess = 1 - 0.8133;}
   	//0.90
   	if(fixParLess == -0.90){finalParLess = 1 - 0.8159;}
   	if(fixParLess == -0.91){finalParLess = 1 - 0.8186;}
   	if(fixParLess == -0.92){finalParLess = 1 - 0.8212;}
   	if(fixParLess == -0.93){finalParLess = 1 - 0.8238;}
   	if(fixParLess == -0.94){finalParLess = 1 - 0.8264;}
   	if(fixParLess == -0.95){finalParLess = 1 - 0.8289;}
   	if(fixParLess == -0.96){finalParLess = 1 - 0.8315;}
   	if(fixParLess == -0.97){finalParLess = 1 - 0.8340;}
   	if(fixParLess == -0.98){finalParLess = 1 - 0.8365;}
   	if(fixParLess == -0.99){finalParLess = 1 - 0.8389;}
   	//1.00
   	if(fixParLess == -1.00){finalParLess = 1 - 0.8413;}
   	if(fixParLess == -1.01){finalParLess = 1 - 0.8438;}
   	if(fixParLess == -1.02){finalParLess = 1 - 0.8461;}
   	if(fixParLess == -1.03){finalParLess = 1 - 0.8485;}
   	if(fixParLess == -1.04){finalParLess = 1 - 0.8508;}
   	if(fixParLess == -1.05){finalParLess = 1 - 0.8531;}
   	if(fixParLess == -1.06){finalParLess = 1 - 0.8554;}
   	if(fixParLess == -1.07){finalParLess = 1 - 0.8577;}
   	if(fixParLess == -1.08){finalParLess = 1 - 0.8599;}
   	if(fixParLess == -1.09){finalParLess = 1 - 0.8621;}
   	//1.10
   	if(fixParLess == -1.10){finalParLess = 1 - 0.8643;}
   	if(fixParLess == -1.11){finalParLess = 1 - 0.8665;}
   	if(fixParLess == -1.12){finalParLess = 1 - 0.8686;}
   	if(fixParLess == -1.13){finalParLess = 1 - 0.8708;}
   	if(fixParLess == -1.14){finalParLess = 1 - 0.8729;}
   	if(fixParLess == -1.15){finalParLess = 1 - 0.8749;}
   	if(fixParLess == -1.16){finalParLess = 1 - 0.8770;}
   	if(fixParLess == -1.17){finalParLess = 1 - 0.8790;}
   	if(fixParLess == -1.18){finalParLess = 1 - 0.8810;}
   	if(fixParLess == -1.19){finalParLess = 1 - 0.8830;}
   	//1.20
   	if(fixParLess == -1.20){finalParLess = 1 - 0.8849;}
   	if(fixParLess == -1.21){finalParLess = 1 - 0.8869;}
   	if(fixParLess == -1.22){finalParLess = 1 - 0.8888;}
   	if(fixParLess == -1.23){finalParLess = 1 - 0.8907;}
   	if(fixParLess == -1.24){finalParLess = 1 - 0.8925;}
   	if(fixParLess == -1.25){finalParLess = 1 - 0.8944;}
   	if(fixParLess == -1.26){finalParLess = 1 - 0.8962;}
   	if(fixParLess == -1.27){finalParLess = 1 - 0.8980;}
   	if(fixParLess == -1.28){finalParLess = 1 - 0.8997;}
   	if(fixParLess == -1.29){finalParLess = 1 - 0.9015;}
   	//1.30
   	if(fixParLess == -1.30){finalParLess = 1 - 0.9032;}
   	if(fixParLess == -1.31){finalParLess = 1 - 0.9049;}
   	if(fixParLess == -1.32){finalParLess = 1 - 0.9066;}
   	if(fixParLess == -1.33){finalParLess = 1 - 0.9082;}
   	if(fixParLess == -1.34){finalParLess = 1 - 0.9099;}
   	if(fixParLess == -1.35){finalParLess = 1 - 0.9115;}
   	if(fixParLess == -1.36){finalParLess = 1 - 0.9131;}
   	if(fixParLess == -1.37){finalParLess = 1 - 0.9147;}
   	if(fixParLess == -1.38){finalParLess = 1 - 0.9162;}
   	if(fixParLess == -1.39){finalParLess = 1 - 0.9177;}
   	//1.40
    if(fixParLess == -1.40){finalParLess = 1 - 0.9192;}
   	if(fixParLess == -1.41){finalParLess = 1 - 0.9207;}
   	if(fixParLess == -1.42){finalParLess = 1 - 0.9222;}
   	if(fixParLess == -1.43){finalParLess = 1 - 0.9236;}
   	if(fixParLess == -1.44){finalParLess = 1 - 0.9251;}
   	if(fixParLess == -1.45){finalParLess = 1 - 0.9265;}
   	if(fixParLess == -1.46){finalParLess = 1 - 0.9279;}
   	if(fixParLess == -1.47){finalParLess = 1 - 0.9292;}
   	if(fixParLess == -1.48){finalParLess = 1 - 0.9306;}
   	if(fixParLess == -1.49){finalParLess = 1 - 0.9319;} 	
   	//1.50
    if(fixParLess == -1.50){finalParLess = 1 - 0.9332;}
   	if(fixParLess == -1.51){finalParLess = 1 - 0.9345;}
   	if(fixParLess == -1.52){finalParLess = 1 - 0.9357;}
   	if(fixParLess == -1.53){finalParLess = 1 - 0.9370;}
   	if(fixParLess == -1.54){finalParLess = 1 - 0.9382;}
   	if(fixParLess == -1.55){finalParLess = 1 - 0.9394;}
   	if(fixParLess == -1.56){finalParLess = 1 - 0.9406;}
   	if(fixParLess == -1.57){finalParLess = 1 - 0.9418;}
   	if(fixParLess == -1.58){finalParLess = 1 - 0.9429;}
   	if(fixParLess == -1.59){finalParLess = 1 - 0.9441;}
   	//1.60
    if(fixParLess == -1.60){finalParLess = 1 - 0.9452;}
   	if(fixParLess == -1.61){finalParLess = 1 - 0.9463;}
   	if(fixParLess == -1.62){finalParLess = 1 - 0.9474;}
   	if(fixParLess == -1.63){finalParLess = 1 - 0.9484;}
   	if(fixParLess == -1.64){finalParLess = 1 - 0.9495;}
   	if(fixParLess == -1.65){finalParLess = 1 - 0.9505;}
   	if(fixParLess == -1.66){finalParLess = 1 - 0.9515;}
   	if(fixParLess == -1.67){finalParLess = 1 - 0.9525;}
   	if(fixParLess == -1.68){finalParLess = 1 - 0.9535;}
   	if(fixParLess == -1.69){finalParLess = 1 - 0.9545;}
   	//1.70
    if(fixParLess == -1.70){finalParLess = 1 - 0.9554;}
   	if(fixParLess == -1.71){finalParLess = 1 - 0.9564;}
   	if(fixParLess == -1.72){finalParLess = 1 - 0.9573;}
   	if(fixParLess == -1.73){finalParLess = 1 - 0.9582;}
   	if(fixParLess == -1.74){finalParLess = 1 - 0.9591;}
   	if(fixParLess == -1.75){finalParLess = 1 - 0.9599;}
   	if(fixParLess == -1.76){finalParLess = 1 - 0.9608;}
   	if(fixParLess == -1.77){finalParLess = 1 - 0.9616;}
   	if(fixParLess == -1.78){finalParLess = 1 - 0.9625;}
   	if(fixParLess == -1.79){finalParLess = 1 - 0.9633;}
   	//1.80
    if(fixParLess == -1.80){finalParLess = 1 - 0.9641;}
   	if(fixParLess == -1.81){finalParLess = 1 - 0.9649;}
   	if(fixParLess == -1.82){finalParLess = 1 - 0.9656;}
   	if(fixParLess == -1.83){finalParLess = 1 - 0.9664;}
   	if(fixParLess == -1.84){finalParLess = 1 - 0.9671;}
   	if(fixParLess == -1.85){finalParLess = 1 - 0.9678;}
   	if(fixParLess == -1.86){finalParLess = 1 - 0.9686;}
   	if(fixParLess == -1.87){finalParLess = 1 - 0.9693;}
   	if(fixParLess == -1.88){finalParLess = 1 - 0.9699;}
   	if(fixParLess == -1.89){finalParLess = 1 - 0.9706;}
   	//1.90
    if(fixParLess == -1.90){finalParLess = 1 - 0.9713;}
   	if(fixParLess == -1.91){finalParLess = 1 - 0.9719;}
   	if(fixParLess == -1.92){finalParLess = 1 - 0.9726;}
   	if(fixParLess == -1.93){finalParLess = 1 - 0.9732;}
   	if(fixParLess == -1.94){finalParLess = 1 - 0.9738;}
   	if(fixParLess == -1.95){finalParLess = 1 - 0.9744;}
   	if(fixParLess == -1.96){finalParLess = 1 - 0.9750;}
   	if(fixParLess == -1.97){finalParLess = 1 - 0.9756;}
   	if(fixParLess == -1.98){finalParLess = 1 - 0.9761;}
   	if(fixParLess == -1.99){finalParLess = 1 - 0.9767;}
   	//2.00
    if(fixParLess == -2.00){finalParLess = 1 - 0.9722;}
   	if(fixParLess == -2.01){finalParLess = 1 - 0.9778;}
   	if(fixParLess == -2.02){finalParLess = 1 - 0.9783;}
   	if(fixParLess == -2.03){finalParLess = 1 - 0.9788;}
   	if(fixParLess == -2.04){finalParLess = 1 - 0.9793;}
   	if(fixParLess == -2.05){finalParLess = 1 - 0.9798;}
   	if(fixParLess == -2.06){finalParLess = 1 - 0.9803;}
   	if(fixParLess == -2.07){finalParLess = 1 - 0.9808;}
   	if(fixParLess == -2.08){finalParLess = 1 - 0.9812;}
   	if(fixParLess == -2.09){finalParLess = 1 - 0.9817;}
   	//2.10
   	if(fixParLess == -2.10){finalParLess = 1 - 0.9821;}
   	if(fixParLess == -2.11){finalParLess = 1 - 0.9826;}
   	if(fixParLess == -2.12){finalParLess = 1 - 0.9830;}
   	if(fixParLess == -2.13){finalParLess = 1 - 0.9834;}
   	if(fixParLess == -2.14){finalParLess = 1 - 0.9838;}
   	if(fixParLess == -2.15){finalParLess = 1 - 0.9842;}
   	if(fixParLess == -2.16){finalParLess = 1 - 0.9846;}
   	if(fixParLess == -2.17){finalParLess = 1 - 0.9850;}
   	if(fixParLess == -2.18){finalParLess = 1 - 0.9854;}
   	if(fixParLess == -2.19){finalParLess = 1 - 0.9857;}
   	//2.20
   	if(fixParLess == -2.20){finalParLess = 1 - 0.9861;}
   	if(fixParLess == -2.21){finalParLess = 1 - 0.9864;}
   	if(fixParLess == -2.22){finalParLess = 1 - 0.9868;}
   	if(fixParLess == -2.23){finalParLess = 1 - 0.9871;}
   	if(fixParLess == -2.24){finalParLess = 1 - 0.9875;}
   	if(fixParLess == -2.25){finalParLess = 1 - 0.9878;}
   	if(fixParLess == -2.26){finalParLess = 1 - 0.9881;}
   	if(fixParLess == -2.27){finalParLess = 1 - 0.9884;}
   	if(fixParLess == -2.28){finalParLess = 1 - 0.9887;}
   	if(fixParLess == -2.29){finalParLess = 1 - 0.9890;}
   	//2.30
   	if(fixParLess == -2.30){finalParLess = 1 - 0.9893;}
   	if(fixParLess == -2.31){finalParLess = 1 - 0.9896;}
   	if(fixParLess == -2.32){finalParLess = 1 - 0.9898;}
   	if(fixParLess == -2.33){finalParLess = 1 - 0.9901;}
   	if(fixParLess == -2.34){finalParLess = 1 - 0.9904;}
   	if(fixParLess == -2.35){finalParLess = 1 - 0.9906;}
   	if(fixParLess == -2.36){finalParLess = 1 - 0.9909;}
   	if(fixParLess == -2.37){finalParLess = 1 - 0.9911;}
   	if(fixParLess == -2.38){finalParLess = 1 - 0.9913;}
   	if(fixParLess == -2.39){finalParLess = 1 - 0.9916;}
   	//2.40
   	if(fixParLess == -2.40){finalParLess = 1 - 0.9918;}
   	if(fixParLess == -2.41){finalParLess = 1 - 0.9920;}
   	if(fixParLess == -2.42){finalParLess = 1 - 0.9922;}
   	if(fixParLess == -2.43){finalParLess = 1 - 0.9925;}
   	if(fixParLess == -2.44){finalParLess = 1 - 0.9927;}
   	if(fixParLess == -2.45){finalParLess = 1 - 0.9929;}
   	if(fixParLess == -2.46){finalParLess = 1 - 0.9931;}
   	if(fixParLess == -2.47){finalParLess = 1 - 0.9932;}
   	if(fixParLess == -2.48){finalParLess = 1 - 0.9934;}
   	if(fixParLess == -2.49){finalParLess = 1 - 0.9936;}
   	//2.50
   	if(fixParLess == -2.50){finalParLess = 1 - 0.9938;}
   	if(fixParLess == -2.51){finalParLess = 1 - 0.9940;}
   	if(fixParLess == -2.52){finalParLess = 1 - 0.9941;}
   	if(fixParLess == -2.53){finalParLess = 1 - 0.9943;}
   	if(fixParLess == -2.54){finalParLess = 1 - 0.9945;}
   	if(fixParLess == -2.55){finalParLess = 1 - 0.9946;}
   	if(fixParLess == -2.56){finalParLess = 1 - 0.9948;}
   	if(fixParLess == -2.57){finalParLess = 1 - 0.9949;}
   	if(fixParLess == -2.58){finalParLess = 1 - 0.9951;}
   	if(fixParLess == -2.59){finalParLess = 1 - 0.9952;}
   	//2.60
   	if(fixParLess == -2.60){finalParLess = 1 - 0.9953;}
   	if(fixParLess == -2.61){finalParLess = 1 - 0.9955;}
   	if(fixParLess == -2.62){finalParLess = 1 - 0.9956;}
   	if(fixParLess == -2.63){finalParLess = 1 - 0.9957;}
   	if(fixParLess == -2.64){finalParLess = 1 - 0.9959;}
   	if(fixParLess == -2.65){finalParLess = 1 - 0.9960;}
   	if(fixParLess == -2.66){finalParLess = 1 - 0.9961;}
   	if(fixParLess == -2.67){finalParLess = 1 - 0.9962;}
   	if(fixParLess == -2.68){finalParLess = 1 - 0.9963;}
   	if(fixParLess == -2.69){finalParLess = 1 - 0.9964;}
   	//2.70
   	if(fixParLess == -2.70){finalParLess = 1 - 0.9965;}
   	if(fixParLess == -2.71){finalParLess = 1 - 0.9966;}
   	if(fixParLess == -2.72){finalParLess = 1 - 0.9967;}
   	if(fixParLess == -2.73){finalParLess = 1 - 0.9968;}
   	if(fixParLess == -2.74){finalParLess = 1 - 0.9969;}
   	if(fixParLess == -2.75){finalParLess = 1 - 0.9970;}
   	if(fixParLess == -2.76){finalParLess = 1 - 0.9971;}
   	if(fixParLess == -2.77){finalParLess = 1 - 0.9972;}
   	if(fixParLess == -2.78){finalParLess = 1 - 0.9973;}
   	if(fixParLess == -2.79){finalParLess = 1 - 0.9974;}
   	//2.80
   	if(fixParLess == -2.80){finalParLess = 1 - 0.9974;}
   	if(fixParLess == -2.81){finalParLess = 1 - 0.9975;}
   	if(fixParLess == -2.82){finalParLess = 1 - 0.9976;}
   	if(fixParLess == -2.83){finalParLess = 1 - 0.9977;}
   	if(fixParLess == -2.84){finalParLess = 1 - 0.9977;}
   	if(fixParLess == -2.85){finalParLess = 1 - 0.9978;}
   	if(fixParLess == -2.86){finalParLess = 1 - 0.9979;}
   	if(fixParLess == -2.87){finalParLess = 1 - 0.9979;}
   	if(fixParLess == -2.88){finalParLess = 1 - 0.9980;}
   	if(fixParLess == -2.89){finalParLess = 1 - 0.9981;}
   	//2.90
   	if(fixParLess == -2.90){finalParLess = 1 - 0.9981;}
   	if(fixParLess == -2.91){finalParLess = 1 - 0.9982;}
   	if(fixParLess == -2.92){finalParLess = 1 - 0.9982;}
   	if(fixParLess == -2.93){finalParLess = 1 - 0.9983;}
   	if(fixParLess == -2.94){finalParLess = 1 - 0.9984;}
   	if(fixParLess == -2.95){finalParLess = 1 - 0.9984;}
   	if(fixParLess == -2.96){finalParLess = 1 - 0.9985;}
   	if(fixParLess == -2.97){finalParLess = 1 - 0.9985;}
   	if(fixParLess == -2.98){finalParLess = 1 - 0.9986;}
   	if(fixParLess == -2.99){finalParLess = 1 - 0.9986;}
   	//3.00
   	if(fixParLess == -3.00){finalParLess = 1 - 0.9987;}
   	if(fixParLess == -3.01){finalParLess = 1 - 0.9987;}
   	if(fixParLess == -3.02){finalParLess = 1 - 0.9987;}
   	if(fixParLess == -3.03){finalParLess = 1 - 0.9987;}
   	if(fixParLess == -3.04){finalParLess = 1 - 0.9988;}
   	if(fixParLess == -3.05){finalParLess = 1 - 0.9989;}
   	if(fixParLess == -3.06){finalParLess = 1 - 0.9989;}
   	if(fixParLess == -3.07){finalParLess = 1 - 0.9989;}
   	if(fixParLess == -3.08){finalParLess = 1 - 0.9990;}
   	if(fixParLess == -3.09){finalParLess = 1 - 0.9990;}
   	//3.10
   	if(fixParLess == -3.10){finalParLess = 1 - 0.9990;}
   	if(fixParLess == -3.11){finalParLess = 1 - 0.9991;}
   	if(fixParLess == -3.12){finalParLess = 1 - 0.9991;}
   	if(fixParLess == -3.13){finalParLess = 1 - 0.9991;}
   	if(fixParLess == -3.14){finalParLess = 1 - 0.9992;}
   	if(fixParLess == -3.15){finalParLess = 1 - 0.9992;}
   	if(fixParLess == -3.16){finalParLess = 1 - 0.9992;}
   	if(fixParLess == -3.17){finalParLess = 1 - 0.9992;}
   	if(fixParLess == -3.18){finalParLess = 1 - 0.9993;}
   	if(fixParLess == -3.19){finalParLess = 1 - 0.9993;}
   	//3.20
   	if(fixParLess == -3.20){finalParLess = 1 - 0.9993;}
   	if(fixParLess == -3.21){finalParLess = 1 - 0.9993;}
   	if(fixParLess == -3.22){finalParLess = 1 - 0.9994;}
   	if(fixParLess == -3.23){finalParLess = 1 - 0.9994;}
   	if(fixParLess == -3.24){finalParLess = 1 - 0.9994;}
   	if(fixParLess == -3.25){finalParLess = 1 - 0.9994;}
   	if(fixParLess == -3.26){finalParLess = 1 - 0.9994;}
   	if(fixParLess == -3.27){finalParLess = 1 - 0.9995;}
   	if(fixParLess == -3.28){finalParLess = 1 - 0.9995;}
   	if(fixParLess == -3.29){finalParLess = 1 - 0.9995;}
   	//3.30
   	if(fixParLess == -3.30){finalParLess = 1 - 0.9995;}
   	if(fixParLess == -3.31){finalParLess = 1 - 0.9995;}
   	if(fixParLess == -3.32){finalParLess = 1 - 0.9995;}
   	if(fixParLess == -3.33){finalParLess = 1 - 0.9996;}
   	if(fixParLess == -3.34){finalParLess = 1 - 0.9996;}
   	if(fixParLess == -3.35){finalParLess = 1 - 0.9996;}
   	if(fixParLess == -3.36){finalParLess = 1 - 0.9996;}
   	if(fixParLess == -3.37){finalParLess = 1 - 0.9996;}
   	if(fixParLess == -3.38){finalParLess = 1 - 0.9996;}
   	if(fixParLess == -3.39){finalParLess = 1 - 0.9997;}
   	//3.40
   	if(fixParLess == -3.40){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.41){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.42){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.43){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.44){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.45){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.46){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.47){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.48){finalParLess = 1 - 0.9997;}
   	if(fixParLess == -3.49){finalParLess = 1 - 0.9998;}
   	//3.50
   	if(fixParLess == -3.50){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.51){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.52){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.53){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.54){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.55){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.56){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.57){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.58){finalParLess = 1 - 0.9998;}
   	if(fixParLess == -3.59){finalParLess = 1 - 0.9999;}
   	//4.00
   	if(fixParLess == -4.00){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.01){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.02){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.03){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.04){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.05){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.06){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.07){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.08){finalParLess = 1 - 0.99997;}
   	if(fixParLess == -4.09){finalParLess = 1 - 0.99998;}
   	//4.5
   	if(fixParLess == -4.50){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.51){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.52){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.53){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.54){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.55){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.56){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.57){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.58){finalParLess = 1 - 0.999997;}
   	if(fixParLess == -4.59){finalParLess = 1 - 0.999998;}
   	//5.0
   	if(fixParLess == -5.00){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.01){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.02){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.03){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.04){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.05){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.06){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.07){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.08){finalParLess = 1 - 0.9999997;}
   	if(fixParLess == -5.09){finalParLess = 1 - 0.9999998;}


   	document.getElementById("displayFormulaLess").value = " P( 𝑿 <" + k + " ) = P (  Z < " + k + " - 𝜇x ∕ 𝝈x ) "  ;
   	document.getElementById("displayFormulaLess2").value= " = P (  Z < " + k + " - "+ x + " / " + standardLess.toFixed(5) + " ) "  ;
	document.getElementById("displayLess").value = finalParLess ;
}
function Greater(){
	var k = document.getElementById("value").value;
	var x =document.getElementById("mean").value;
	var y = document.getElementById("standardDeviation").value;
	var z = document.getElementById("sampleSize").value;

	var standardGreater = y / Math.sqrt(z);
	var parGreater = (k - x) / standardGreater;

	var fixParGreater = parGreater.toFixed(2); 

	var finalParGreater;

	//Positive Standard Normal Distribution

	if(fixParGreater == 0.00){finalParGreater =  1 - 0.5000;}
   	if(fixParGreater == 0.01){finalParGreater =  1 - 0.5040;}
   	if(fixParGreater == 0.02){finalParGreater =  1 - 0.5080;}
   	if(fixParGreater == 0.03){finalParGreater =  1 - 0.5120;}
   	if(fixParGreater == 0.04){finalParGreater =  1 - 0.5160;}
   	if(fixParGreater == 0.05){finalParGreater =  1 - 0.5199;}
   	if(fixParGreater == 0.06){finalParGreater =  1 - 0.5239;}
   	if(fixParGreater == 0.07){finalParGreater =  1 - 0.5279;}
   	if(fixParGreater == 0.08){finalParGreater =  1 - 0.5319;}
   	if(fixParGreater == 0.09){finalParGreater =  1 - 0.5359;}
   	//0.10
   	if(fixParGreater == 0.10){finalParGreater =  1 - 0.5398;}
   	if(fixParGreater == 0.11){finalParGreater =  1 - 0.5438;}
   	if(fixParGreater == 0.12){finalParGreater =  1 - 0.5478;}
   	if(fixParGreater == 0.13){finalParGreater =  1 - 0.5517;}
   	if(fixParGreater == 0.14){finalParGreater =  1 - 0.5557;}
   	if(fixParGreater == 0.15){finalParGreater =  1 - 0.5596;}
   	if(fixParGreater == 0.16){finalParGreater =  1 - 0.5636;}
   	if(fixParGreater == 0.17){finalParGreater =  1 - 0.5675;}
   	if(fixParGreater == 0.18){finalParGreater =  1 - 0.5714;}
   	if(fixParGreater == 0.19){finalParGreater =  1 - 0.5753;}
   	//0.20
   	if(fixParGreater == 0.20){finalParGreater =  1 - 0.5793;}
   	if(fixParGreater == 0.21){finalParGreater =  1 - 0.5832;}
   	if(fixParGreater == 0.22){finalParGreater =  1 - 0.5871;}
   	if(fixParGreater == 0.23){finalParGreater =  1 - 0.5910;}
   	if(fixParGreater == 0.24){finalParGreater =  1 - 0.5948;}
   	if(fixParGreater == 0.25){finalParGreater =  1 - 0.5987;}
   	if(fixParGreater == 0.26){finalParGreater =  1 - 0.6026;}
   	if(fixParGreater == 0.27){finalParGreater =  1 - 0.6064;}
   	if(fixParGreater == 0.28){finalParGreater =  1 - 0.6103;}
   	if(fixParGreater == 0.29){finalParGreater =  1 - 0.6141;}
   	//0.30
   	if(fixParGreater == 0.30){finalParGreater =  1 - 0.6179;}
   	if(fixParGreater == 0.31){finalParGreater =  1 - 0.6217;}
   	if(fixParGreater == 0.32){finalParGreater =  1 - 0.6255;}
   	if(fixParGreater == 0.33){finalParGreater =  1 - 0.6293;}
   	if(fixParGreater == 0.34){finalParGreater =  1 - 0.6331;}
   	if(fixParGreater == 0.35){finalParGreater =  1 - 0.6368;}
   	if(fixParGreater == 0.36){finalParGreater =  1 - 0.6406;}
   	if(fixParGreater == 0.37){finalParGreater =  1 - 0.6443;}
   	if(fixParGreater == 0.38){finalParGreater =  1 - 0.6480;}
   	if(fixParGreater == 0.39){finalParGreater =  1 - 0.6517;}
   	//0.04
   	if(fixParGreater == 0.40){finalParGreater =  1 - 0.6554;}
   	if(fixParGreater == 0.41){finalParGreater =  1 - 0.6591;}
   	if(fixParGreater == 0.42){finalParGreater =  1 - 0.6628;}
   	if(fixParGreater == 0.43){finalParGreater =  1 - 0.6664;}
   	if(fixParGreater == 0.44){finalParGreater =  1 - 0.6700;}
   	if(fixParGreater == 0.45){finalParGreater =  1 - 0.6736;}
   	if(fixParGreater == 0.46){finalParGreater =  1 - 0.6772;}
   	if(fixParGreater == 0.47){finalParGreater =  1 - 0.6808;}
   	if(fixParGreater == 0.48){finalParGreater =  1 - 0.6844;}
   	if(fixParGreater == 0.49){finalParGreater =  1 - 0.6879;}
   	//0.50
   	if(fixParGreater == 0.50){finalParGreater =  1 - 0.6915;}
   	if(fixParGreater == 0.51){finalParGreater =  1 - 0.6950;}
   	if(fixParGreater == 0.52){finalParGreater =  1 - 0.6985;}
   	if(fixParGreater == 0.53){finalParGreater =  1 - 0.7019;}
   	if(fixParGreater == 0.54){finalParGreater =  1 - 0.7054;}
   	if(fixParGreater == 0.55){finalParGreater =  1 - 0.7088;}
   	if(fixParGreater == 0.56){finalParGreater =  1 - 0.7123;}
   	if(fixParGreater == 0.57){finalParGreater =  1 - 0.7157;}
   	if(fixParGreater == 0.58){finalParGreater =  1 - 0.7190;}
   	if(fixParGreater == 0.59){finalParGreater =  1 - 0.7224;}
   	//0.60
   	if(fixParGreater == 0.60){finalParGreater =  1 - 0.7257;}
   	if(fixParGreater == 0.61){finalParGreater =  1 - 0.7291;}
   	if(fixParGreater == 0.62){finalParGreater =  1 - 0.7324;}
   	if(fixParGreater == 0.63){finalParGreater =  1 - 0.7357;}
   	if(fixParGreater == 0.64){finalParGreater =  1 - 0.7389;}
   	if(fixParGreater == 0.65){finalParGreater =  1 - 0.7422;}
   	if(fixParGreater == 0.66){finalParGreater =  1 - 0.7454;}
   	if(fixParGreater == 0.67){finalParGreater =  1 - 0.7486;}
   	if(fixParGreater == 0.68){finalParGreater =  1 - 0.7517;}
   	if(fixParGreater == 0.69){finalParGreater =  1 - 0.7549;}
   	//0.70
   	if(fixParGreater == 0.70){finalParGreater =  1 - 0.7257;}
   	if(fixParGreater == 0.71){finalParGreater =  1 - 0.7611;}
   	if(fixParGreater == 0.72){finalParGreater =  1 - 0.7642;}
   	if(fixParGreater == 0.73){finalParGreater =  1 - 0.7673;}
   	if(fixParGreater == 0.74){finalParGreater =  1 - 0.7704;}
   	if(fixParGreater == 0.75){finalParGreater =  1 - 0.7734;}
   	if(fixParGreater == 0.76){finalParGreater =  1 - 0.7764;}
   	if(fixParGreater == 0.77){finalParGreater =  1 - 0.7794;}
   	if(fixParGreater == 0.78){finalParGreater =  1 - 0.7823;}
   	if(fixParGreater == 0.79){finalParGreater =  1 - 0.7852;}
   	//0.80
   	if(fixParGreater == 0.80){finalParGreater =  1 - 0.7881;}
   	if(fixParGreater == 0.81){finalParGreater =  1 - 0.7910;}
   	if(fixParGreater == 0.82){finalParGreater =  1 - 0.7939;}
   	if(fixParGreater == 0.83){finalParGreater =  1 - 0.7967;}
   	if(fixParGreater == 0.84){finalParGreater =  1 - 0.7995;}
   	if(fixParGreater == 0.85){finalParGreater =  1 - 0.8023;}
   	if(fixParGreater == 0.86){finalParGreater =  1 - 0.8051;}
   	if(fixParGreater == 0.87){finalParGreater =  1 - 0.8078;}
   	if(fixParGreater == 0.88){finalParGreater =  1 - 0.8106;}
   	if(fixParGreater == 0.89){finalParGreater =  1 - 0.8133;}
   	//0.90
   	if(fixParGreater == 0.90){finalParGreater =  1 - 0.8159;}
   	if(fixParGreater == 0.91){finalParGreater =  1 - 0.8186;}
   	if(fixParGreater == 0.92){finalParGreater =  1 - 0.8212;}
   	if(fixParGreater == 0.93){finalParGreater =  1 - 0.8238;}
   	if(fixParGreater == 0.94){finalParGreater =  1 - 0.8264;}
   	if(fixParGreater == 0.95){finalParGreater =  1 - 0.8289;}
   	if(fixParGreater == 0.96){finalParGreater =  1 - 0.8315;}
   	if(fixParGreater == 0.97){finalParGreater =  1 - 0.8340;}
   	if(fixParGreater == 0.98){finalParGreater =  1 - 0.8365;}
   	if(fixParGreater == 0.99){finalParGreater =  1 - 0.8389;}
   	//1.00
   	if(fixParGreater == 1.00){finalParGreater =  1 - 0.8413;}
   	if(fixParGreater == 1.01){finalParGreater =  1 - 0.8438;}
   	if(fixParGreater == 1.02){finalParGreater =  1 - 0.8461;}
   	if(fixParGreater == 1.03){finalParGreater =  1 - 0.8485;}
   	if(fixParGreater == 1.04){finalParGreater =  1 - 0.8508;}
   	if(fixParGreater == 1.05){finalParGreater =  1 - 0.8531;}
   	if(fixParGreater == 1.06){finalParGreater =  1 - 0.8554;}
   	if(fixParGreater == 1.07){finalParGreater =  1 - 0.8577;}
   	if(fixParGreater == 1.08){finalParGreater =  1 - 0.8599;}
   	if(fixParGreater == 1.09){finalParGreater =  1 - 0.8621;}
   	//1.10
   	if(fixParGreater == 1.10){finalParGreater =  1 - 0.8643;}
   	if(fixParGreater == 1.11){finalParGreater =  1 - 0.8665;}
   	if(fixParGreater == 1.12){finalParGreater =  1 - 0.8686;}
   	if(fixParGreater == 1.13){finalParGreater =  1 - 0.8708;}
   	if(fixParGreater == 1.14){finalParGreater =  1 - 0.8729;}
   	if(fixParGreater == 1.15){finalParGreater =  1 - 0.8749;}
   	if(fixParGreater == 1.16){finalParGreater =  1 - 0.8770;}
   	if(fixParGreater == 1.17){finalParGreater =  1 - 0.8790;}
   	if(fixParGreater == 1.18){finalParGreater =  1 - 0.8810;}
   	if(fixParGreater == 1.19){finalParGreater =  1 - 0.8830;}
   	//1.20
   	if(fixParGreater == 1.20){finalParGreater =  1 - 0.8849;}
   	if(fixParGreater == 1.21){finalParGreater =  1 - 0.8869;}
   	if(fixParGreater == 1.22){finalParGreater =  1 - 0.8888;}
   	if(fixParGreater == 1.23){finalParGreater =  1 - 0.8907;}
   	if(fixParGreater == 1.24){finalParGreater =  1 - 0.8925;}
   	if(fixParGreater == 1.25){finalParGreater =  1 - 0.8944;}
   	if(fixParGreater == 1.26){finalParGreater =  1 - 0.8962;}
   	if(fixParGreater == 1.27){finalParGreater =  1 - 0.8980;}
   	if(fixParGreater == 1.28){finalParGreater =  1 - 0.8997;}
   	if(fixParGreater == 1.29){finalParGreater =  1 - 0.9015;}
   	//1.30
   	if(fixParGreater == 1.30){finalParGreater =  1 - 0.9032;}
   	if(fixParGreater == 1.31){finalParGreater =  1 - 0.9049;}
   	if(fixParGreater == 1.32){finalParGreater =  1 - 0.9066;}
   	if(fixParGreater == 1.33){finalParGreater =  1 - 0.9082;}
   	if(fixParGreater == 1.34){finalParGreater =  1 - 0.9099;}
   	if(fixParGreater == 1.35){finalParGreater =  1 - 0.9115;}
   	if(fixParGreater == 1.36){finalParGreater =  1 - 0.9131;}
   	if(fixParGreater == 1.37){finalParGreater =  1 - 0.9147;}
   	if(fixParGreater == 1.38){finalParGreater =  1 - 0.9162;}
   	if(fixParGreater == 1.39){finalParGreater =  1 - 0.9177;}
   	//1.40
    if(fixParGreater == 1.40){finalParGreater =  1 - 0.9192;}
   	if(fixParGreater == 1.41){finalParGreater =  1 - 0.9207;}
   	if(fixParGreater == 1.42){finalParGreater =  1 - 0.9222;}
   	if(fixParGreater == 1.43){finalParGreater =  1 - 0.9236;}
   	if(fixParGreater == 1.44){finalParGreater =  1 - 0.9251;}
   	if(fixParGreater == 1.45){finalParGreater =  1 - 0.9265;}
   	if(fixParGreater == 1.46){finalParGreater =  1 - 0.9279;}
   	if(fixParGreater == 1.47){finalParGreater =  1 - 0.9292;}
   	if(fixParGreater == 1.48){finalParGreater =  1 - 0.9306;}
   	if(fixParGreater == 1.49){finalParGreater =  1 - 0.9319;} 	
   	//1.50
    if(fixParGreater == 1.50){finalParGreater =  1 - 0.9332;}
   	if(fixParGreater == 1.51){finalParGreater =  1 - 0.9345;}
   	if(fixParGreater == 1.52){finalParGreater =  1 - 0.9357;}
   	if(fixParGreater == 1.53){finalParGreater =  1 - 0.9370;}
   	if(fixParGreater == 1.54){finalParGreater =  1 - 0.9382;}
   	if(fixParGreater == 1.55){finalParGreater =  1 - 0.9394;}
   	if(fixParGreater == 1.56){finalParGreater =  1 - 0.9406;}
   	if(fixParGreater == 1.57){finalParGreater =  1 - 0.9418;}
   	if(fixParGreater == 1.58){finalParGreater =  1 - 0.9429;}
   	if(fixParGreater == 1.59){finalParGreater =  1 - 0.9441;}
   	//1.60
    if(fixParGreater == 1.60){finalParGreater =  1 - 0.9452;}
   	if(fixParGreater == 1.61){finalParGreater =  1 - 0.9463;}
   	if(fixParGreater == 1.62){finalParGreater =  1 - 0.9474;}
   	if(fixParGreater == 1.63){finalParGreater =  1 - 0.9484;}
   	if(fixParGreater == 1.64){finalParGreater =  1 - 0.9495;}
   	if(fixParGreater == 1.65){finalParGreater =  1 - 0.9505;}
   	if(fixParGreater == 1.66){finalParGreater =  1 - 0.9515;}
   	if(fixParGreater == 1.67){finalParGreater =  1 - 0.9525;}
   	if(fixParGreater == 1.68){finalParGreater =  1 - 0.9535;}
   	if(fixParGreater == 1.69){finalParGreater =  1 - 0.9545;}
   	//1.70
    if(fixParGreater == 1.70){finalParGreater =  1 - 0.9554;}
   	if(fixParGreater == 1.71){finalParGreater =  1 - 0.9564;}
   	if(fixParGreater == 1.72){finalParGreater =  1 - 0.9573;}
   	if(fixParGreater == 1.73){finalParGreater =  1 - 0.9582;}
   	if(fixParGreater == 1.74){finalParGreater =  1 - 0.9591;}
   	if(fixParGreater == 1.75){finalParGreater =  1 - 0.9599;}
   	if(fixParGreater == 1.76){finalParGreater =  1 - 0.9608;}
   	if(fixParGreater == 1.77){finalParGreater =  1 - 0.9616;}
   	if(fixParGreater == 1.78){finalParGreater =  1 - 0.9625;}
   	if(fixParGreater == 1.79){finalParGreater =  1 - 0.9633;}
   	//1.80
    if(fixParGreater == 1.80){finalParGreater =  1 - 0.9641;}
   	if(fixParGreater == 1.81){finalParGreater =  1 - 0.9649;}
   	if(fixParGreater == 1.82){finalParGreater =  1 - 0.9656;}
   	if(fixParGreater == 1.83){finalParGreater =  1 - 0.9664;}
   	if(fixParGreater == 1.84){finalParGreater =  1 - 0.9671;}
   	if(fixParGreater == 1.85){finalParGreater =  1 - 0.9678;}
   	if(fixParGreater == 1.86){finalParGreater =  1 - 0.9686;}
   	if(fixParGreater == 1.87){finalParGreater =  1 - 0.9693;}
   	if(fixParGreater == 1.88){finalParGreater =  1 - 0.9699;}
   	if(fixParGreater == 1.89){finalParGreater =  1 - 0.9706;}
   	//1.90
    if(fixParGreater == 1.90){finalParGreater =  1 - 0.9713;}
   	if(fixParGreater == 1.91){finalParGreater =  1 - 0.9719;}
   	if(fixParGreater == 1.92){finalParGreater =  1 - 0.9726;}
   	if(fixParGreater == 1.93){finalParGreater =  1 - 0.9732;}
   	if(fixParGreater == 1.94){finalParGreater =  1 - 0.9738;}
   	if(fixParGreater == 1.95){finalParGreater =  1 - 0.9744;}
   	if(fixParGreater == 1.96){finalParGreater =  1 - 0.9750;}
   	if(fixParGreater == 1.97){finalParGreater =  1 - 0.9756;}
   	if(fixParGreater == 1.98){finalParGreater =  1 - 0.9761;}
   	if(fixParGreater == 1.99){finalParGreater =  1 - 0.9767;}
   	//2.00
    if(fixParGreater == 2.00){finalParGreater =  1 - 0.9722;}
   	if(fixParGreater == 2.01){finalParGreater =  1 - 0.9778;}
   	if(fixParGreater == 2.02){finalParGreater =  1 - 0.9783;}
   	if(fixParGreater == 2.03){finalParGreater =  1 - 0.9788;}
   	if(fixParGreater == 2.04){finalParGreater =  1 - 0.9793;}
   	if(fixParGreater == 2.05){finalParGreater =  1 - 0.9798;}
   	if(fixParGreater == 2.06){finalParGreater =  1 - 0.9803;}
   	if(fixParGreater == 2.07){finalParGreater =  1 - 0.9808;}
   	if(fixParGreater == 2.08){finalParGreater =  1 - 0.9812;}
   	if(fixParGreater == 2.09){finalParGreater =  1 - 0.9817;}
   	//2.10
   	if(fixParGreater == 2.10){finalParGreater =  1 - 0.9821;}
   	if(fixParGreater == 2.11){finalParGreater =  1 - 0.9826;}
   	if(fixParGreater == 2.12){finalParGreater =  1 - 0.9830;}
   	if(fixParGreater == 2.13){finalParGreater =  1 - 0.9834;}
   	if(fixParGreater == 2.14){finalParGreater =  1 - 0.9838;}
   	if(fixParGreater == 2.15){finalParGreater =  1 - 0.9842;}
   	if(fixParGreater == 2.16){finalParGreater =  1 - 0.9846;}
   	if(fixParGreater == 2.17){finalParGreater =  1 - 0.9850;}
   	if(fixParGreater == 2.18){finalParGreater =  1 - 0.9854;}
   	if(fixParGreater == 2.19){finalParGreater =  1 - 0.9857;}
   	//2.20
   	if(fixParGreater == 2.20){finalParGreater =  1 - 0.9861;}
   	if(fixParGreater == 2.21){finalParGreater =  1 - 0.9864;}
   	if(fixParGreater == 2.22){finalParGreater =  1 - 0.9868;}
   	if(fixParGreater == 2.23){finalParGreater =  1 - 0.9871;}
   	if(fixParGreater == 2.24){finalParGreater =  1 - 0.9875;}
   	if(fixParGreater == 2.25){finalParGreater =  1 - 0.9878;}
   	if(fixParGreater == 2.26){finalParGreater =  1 - 0.9881;}
   	if(fixParGreater == 2.27){finalParGreater =  1 - 0.9884;}
   	if(fixParGreater == 2.28){finalParGreater =  1 - 0.9887;}
   	if(fixParGreater == 2.29){finalParGreater =  1 - 0.9890;}
   	//2.30
   	if(fixParGreater == 2.30){finalParGreater =  1 - 0.9893;}
   	if(fixParGreater == 2.31){finalParGreater =  1 - 0.9896;}
   	if(fixParGreater == 2.32){finalParGreater =  1 - 0.9898;}
   	if(fixParGreater == 2.33){finalParGreater =  1 - 0.9901;}
   	if(fixParGreater == 2.34){finalParGreater =  1 - 0.9904;}
   	if(fixParGreater == 2.35){finalParGreater =  1 - 0.9906;}
   	if(fixParGreater == 2.36){finalParGreater =  1 - 0.9909;}
   	if(fixParGreater == 2.37){finalParGreater =  1 - 0.9911;}
   	if(fixParGreater == 2.38){finalParGreater =  1 - 0.9913;}
   	if(fixParGreater == 2.39){finalParGreater =  1 - 0.9916;}
   	//2.40
   	if(fixParGreater == 2.40){finalParGreater =  1 - 0.9918;}
   	if(fixParGreater == 2.41){finalParGreater =  1 - 0.9920;}
   	if(fixParGreater == 2.42){finalParGreater =  1 - 0.9922;}
   	if(fixParGreater == 2.43){finalParGreater =  1 - 0.9925;}
   	if(fixParGreater == 2.44){finalParGreater =  1 - 0.9927;}
   	if(fixParGreater == 2.45){finalParGreater =  1 - 0.9929;}
   	if(fixParGreater == 2.46){finalParGreater =  1 - 0.9931;}
   	if(fixParGreater == 2.47){finalParGreater =  1 - 0.9932;}
   	if(fixParGreater == 2.48){finalParGreater =  1 - 0.9934;}
   	if(fixParGreater == 2.49){finalParGreater =  1 - 0.9936;}
   	//2.50
   	if(fixParGreater == 2.50){finalParGreater =  1 - 0.9938;}
   	if(fixParGreater == 2.51){finalParGreater =  1 - 0.9940;}
   	if(fixParGreater == 2.52){finalParGreater =  1 - 0.9941;}
   	if(fixParGreater == 2.53){finalParGreater =  1 - 0.9943;}
   	if(fixParGreater == 2.54){finalParGreater =  1 - 0.9945;}
   	if(fixParGreater == 2.55){finalParGreater =  1 - 0.9946;}
   	if(fixParGreater == 2.56){finalParGreater =  1 - 0.9948;}
   	if(fixParGreater == 2.57){finalParGreater =  1 - 0.9949;}
   	if(fixParGreater == 2.58){finalParGreater =  1 - 0.9951;}
   	if(fixParGreater == 2.59){finalParGreater =  1 - 0.9952;}
   	//2.60
   	if(fixParGreater == 2.60){finalParGreater =  1 - 0.9953;}
   	if(fixParGreater == 2.61){finalParGreater =  1 - 0.9955;}
   	if(fixParGreater == 2.62){finalParGreater =  1 - 0.9956;}
   	if(fixParGreater == 2.63){finalParGreater =  1 - 0.9957;}
   	if(fixParGreater == 2.64){finalParGreater =  1 - 0.9959;}
   	if(fixParGreater == 2.65){finalParGreater =  1 - 0.9960;}
   	if(fixParGreater == 2.66){finalParGreater =  1 - 0.9961;}
   	if(fixParGreater == 2.67){finalParGreater =  1 - 0.9962;}
   	if(fixParGreater == 2.68){finalParGreater =  1 - 0.9963;}
   	if(fixParGreater == 2.69){finalParGreater =  1 - 0.9964;}
   	//2.70
   	if(fixParGreater == 2.70){finalParGreater =  1 - 0.9965;}
   	if(fixParGreater == 2.71){finalParGreater =  1 - 0.9966;}
   	if(fixParGreater == 2.72){finalParGreater =  1 - 0.9967;}
   	if(fixParGreater == 2.73){finalParGreater =  1 - 0.9968;}
   	if(fixParGreater == 2.74){finalParGreater =  1 - 0.9969;}
   	if(fixParGreater == 2.75){finalParGreater =  1 - 0.9970;}
   	if(fixParGreater == 2.76){finalParGreater =  1 - 0.9971;}
   	if(fixParGreater == 2.77){finalParGreater =  1 - 0.9972;}
   	if(fixParGreater == 2.78){finalParGreater =  1 - 0.9973;}
   	if(fixParGreater == 2.79){finalParGreater =  1 - 0.9974;}
   	//2.80
   	if(fixParGreater == 2.80){finalParGreater =  1 - 0.9974;}
   	if(fixParGreater == 2.81){finalParGreater =  1 - 0.9975;}
   	if(fixParGreater == 2.82){finalParGreater =  1 - 0.9976;}
   	if(fixParGreater == 2.83){finalParGreater =  1 - 0.9977;}
   	if(fixParGreater == 2.84){finalParGreater =  1 - 0.9977;}
   	if(fixParGreater == 2.85){finalParGreater =  1 - 0.9978;}
   	if(fixParGreater == 2.86){finalParGreater =  1 - 0.9979;}
   	if(fixParGreater == 2.87){finalParGreater =  1 - 0.9979;}
   	if(fixParGreater == 2.88){finalParGreater =  1 - 0.9980;}
   	if(fixParGreater == 2.89){finalParGreater =  1 - 0.9981;}
   	//2.90
   	if(fixParGreater == 2.90){finalParGreater =  1 - 0.9981;}
   	if(fixParGreater == 2.91){finalParGreater =  1 - 0.9982;}
   	if(fixParGreater == 2.92){finalParGreater =  1 - 0.9982;}
   	if(fixParGreater == 2.93){finalParGreater =  1 - 0.9983;}
   	if(fixParGreater == 2.94){finalParGreater =  1 - 0.9984;}
   	if(fixParGreater == 2.95){finalParGreater =  1 - 0.9984;}
   	if(fixParGreater == 2.96){finalParGreater =  1 - 0.9985;}
   	if(fixParGreater == 2.97){finalParGreater =  1 - 0.9985;}
   	if(fixParGreater == 2.98){finalParGreater =  1 - 0.9986;}
   	if(fixParGreater == 2.99){finalParGreater =  1 - 0.9986;}
   	//3.00
   	if(fixParGreater == 3.00){finalParGreater =  1 - 0.9987;}
   	if(fixParGreater == 3.01){finalParGreater =  1 - 0.9987;}
   	if(fixParGreater == 3.02){finalParGreater =  1 - 0.9987;}
   	if(fixParGreater == 3.03){finalParGreater =  1 - 0.9987;}
   	if(fixParGreater == 3.04){finalParGreater =  1 - 0.9988;}
   	if(fixParGreater == 3.05){finalParGreater =  1 - 0.9989;}
   	if(fixParGreater == 3.06){finalParGreater =  1 - 0.9989;}
   	if(fixParGreater == 3.07){finalParGreater =  1 - 0.9989;}
   	if(fixParGreater == 3.08){finalParGreater =  1 - 0.9990;}
   	if(fixParGreater == 3.09){finalParGreater =  1 - 0.9990;}
   	//3.10
   	if(fixParGreater == 3.10){finalParGreater =  1 - 0.9990;}
   	if(fixParGreater == 3.11){finalParGreater =  1 - 0.9991;}
   	if(fixParGreater == 3.12){finalParGreater =  1 - 0.9991;}
   	if(fixParGreater == 3.13){finalParGreater =  1 - 0.9991;}
   	if(fixParGreater == 3.14){finalParGreater =  1 - 0.9992;}
   	if(fixParGreater == 3.15){finalParGreater =  1 - 0.9992;}
   	if(fixParGreater == 3.16){finalParGreater =  1 - 0.9992;}
   	if(fixParGreater == 3.17){finalParGreater =  1 - 0.9992;}
   	if(fixParGreater == 3.18){finalParGreater =  1 - 0.9993;}
   	if(fixParGreater == 3.19){finalParGreater =  1 - 0.9993;}
   	//3.20
   	if(fixParGreater == 3.20){finalParGreater =  1 - 0.9993;}
   	if(fixParGreater == 3.21){finalParGreater =  1 - 0.9993;}
   	if(fixParGreater == 3.22){finalParGreater =  1 - 0.9994;}
   	if(fixParGreater == 3.23){finalParGreater =  1 - 0.9994;}
   	if(fixParGreater == 3.24){finalParGreater =  1 - 0.9994;}
   	if(fixParGreater == 3.25){finalParGreater =  1 - 0.9994;}
   	if(fixParGreater == 3.26){finalParGreater =  1 - 0.9994;}
   	if(fixParGreater == 3.27){finalParGreater =  1 - 0.9995;}
   	if(fixParGreater == 3.28){finalParGreater =  1 - 0.9995;}
   	if(fixParGreater == 3.29){finalParGreater =  1 - 0.9995;}
   	//3.30
   	if(fixParGreater == 3.30){finalParGreater =  1 - 0.9995;}
   	if(fixParGreater == 3.31){finalParGreater =  1 - 0.9995;}
   	if(fixParGreater == 3.32){finalParGreater =  1 - 0.9995;}
   	if(fixParGreater == 3.33){finalParGreater =  1 - 0.9996;}
   	if(fixParGreater == 3.34){finalParGreater =  1 - 0.9996;}
   	if(fixParGreater == 3.35){finalParGreater =  1 - 0.9996;}
   	if(fixParGreater == 3.36){finalParGreater =  1 - 0.9996;}
   	if(fixParGreater == 3.37){finalParGreater =  1 - 0.9996;}
   	if(fixParGreater == 3.38){finalParGreater =  1 - 0.9996;}
   	if(fixParGreater == 3.39){finalParGreater =  1 - 0.9997;}
   	//3.40
   	if(fixParGreater == 3.40){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.41){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.42){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.43){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.44){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.45){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.46){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.47){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.48){finalParGreater =  1 - 0.9997;}
   	if(fixParGreater == 3.49){finalParGreater =  1 - 0.9998;}
   	//3.50
   	if(fixParGreater == 3.50){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.51){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.52){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.53){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.54){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.55){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.56){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.57){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.58){finalParGreater =  1 - 0.9998;}
   	if(fixParGreater == 3.59){finalParGreater =  1 - 0.9999;}
   	//4.00
   	if(fixParGreater == 4.00){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.01){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.02){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.03){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.04){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.05){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.06){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.07){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.08){finalParGreater =  1 - 0.99997;}
   	if(fixParGreater == 4.09){finalParGreater =  1 - 0.99998;}
   	//4.5
   	if(fixParGreater == 4.50){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.51){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.52){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.53){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.54){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.55){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.56){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.57){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.58){finalParGreater =  1 - 0.999997;}
   	if(fixParGreater == 4.59){finalParGreater =  1 - 0.999998;}
   	//5.0
   	if(fixParGreater == 5.00){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.01){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.02){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.03){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.04){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.05){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.06){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.07){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.08){finalParGreater =  1 - 0.9999997;}
   	if(fixParGreater == 5.09){finalParGreater =  1 - 0.9999998;}

   		//Negative Standard Normal Distribution
	//- 0.00
	if(fixParGreater == -0.00){finalParGreater = 0.5000;}
   	if(fixParGreater == -0.01){finalParGreater = 0.5040;}
   	if(fixParGreater == -0.02){finalParGreater = 0.5080;}
   	if(fixParGreater == -0.03){finalParGreater = 0.5120;}
   	if(fixParGreater == -0.04){finalParGreater = 0.5160;}
   	if(fixParGreater == -0.05){finalParGreater = 0.5199;}
   	if(fixParGreater == -0.06){finalParGreater = 0.5239;}
   	if(fixParGreater == -0.07){finalParGreater = 0.5279;}
   	if(fixParGreater == -0.08){finalParGreater = 0.5319;}
   	if(fixParGreater == -0.09){finalParGreater = 0.5359;}
   	//0.10
   	if(fixParGreater == -0.10){finalParGreater = 0.5398;}
   	if(fixParGreater == -0.11){finalParGreater = 0.5438;}
   	if(fixParGreater == -0.12){finalParGreater = 0.5478;}
   	if(fixParGreater == -0.13){finalParGreater = 0.5517;}
   	if(fixParGreater == -0.14){finalParGreater = 0.5557;}
   	if(fixParGreater == -0.15){finalParGreater = 0.5596;}
   	if(fixParGreater == -0.16){finalParGreater = 0.5636;}
   	if(fixParGreater == -0.17){finalParGreater = 0.5675;}
   	if(fixParGreater == -0.18){finalParGreater = 0.5714;}
   	if(fixParGreater == -0.19){finalParGreater = 0.5753;}
   	//0.20
   	if(fixParGreater == -0.20){finalParGreater = 0.5793;}
   	if(fixParGreater == -0.21){finalParGreater = 0.5832;}
   	if(fixParGreater == -0.22){finalParGreater = 0.5871;}
   	if(fixParGreater == -0.23){finalParGreater = 0.5910;}
   	if(fixParGreater == -0.24){finalParGreater = 0.5948;}
   	if(fixParGreater == -0.25){finalParGreater = 0.5987;}
   	if(fixParGreater == -0.26){finalParGreater = 0.6026;}
   	if(fixParGreater == -0.27){finalParGreater = 0.6064;}
   	if(fixParGreater == -0.28){finalParGreater = 0.6103;}
   	if(fixParGreater == -0.29){finalParGreater = 0.6141;}
   	//0.30
   	if(fixParGreater == -0.30){finalParGreater = 0.6179;}
   	if(fixParGreater == -0.31){finalParGreater = 0.6217;}
   	if(fixParGreater == -0.32){finalParGreater = 0.6255;}
   	if(fixParGreater == -0.33){finalParGreater = 0.6293;}
   	if(fixParGreater == -0.34){finalParGreater = 0.6331;}
   	if(fixParGreater == -0.35){finalParGreater = 0.6368;}
   	if(fixParGreater == -0.36){finalParGreater = 0.6406;}
   	if(fixParGreater == -0.37){finalParGreater = 0.6443;}
   	if(fixParGreater == -0.38){finalParGreater = 0.6480;}
   	if(fixParGreater == -0.39){finalParGreater = 0.6517;}
   	//0.04
   	if(fixParGreater == -0.40){finalParGreater = 0.6554;}
   	if(fixParGreater == -0.41){finalParGreater = 0.6591;}
   	if(fixParGreater == -0.42){finalParGreater = 0.6628;}
   	if(fixParGreater == -0.43){finalParGreater = 0.6664;}
   	if(fixParGreater == -0.44){finalParGreater = 0.6700;}
   	if(fixParGreater == -0.45){finalParGreater = 0.6736;}
   	if(fixParGreater == -0.46){finalParGreater = 0.6772;}
   	if(fixParGreater == -0.47){finalParGreater = 0.6808;}
   	if(fixParGreater == -0.48){finalParGreater = 0.6844;}
   	if(fixParGreater == -0.49){finalParGreater = 0.6879;}
   	//0.50
   	if(fixParGreater == -0.50){finalParGreater = 0.6915;}
   	if(fixParGreater == -0.51){finalParGreater = 0.6950;}
   	if(fixParGreater == -0.52){finalParGreater = 0.6985;}
   	if(fixParGreater == -0.53){finalParGreater = 0.7019;}
   	if(fixParGreater == -0.54){finalParGreater = 0.7054;}
   	if(fixParGreater == -0.55){finalParGreater = 0.7088;}
   	if(fixParGreater == -0.56){finalParGreater = 0.7123;}
   	if(fixParGreater == -0.57){finalParGreater = 0.7157;}
   	if(fixParGreater == -0.58){finalParGreater = 0.7190;}
   	if(fixParGreater == -0.59){finalParGreater = 0.7224;}
   	//0.60
   	if(fixParGreater == -0.60){finalParGreater = 0.7257;}
   	if(fixParGreater == -0.61){finalParGreater = 0.7291;}
   	if(fixParGreater == -0.62){finalParGreater = 0.7324;}
   	if(fixParGreater == -0.63){finalParGreater = 0.7357;}
   	if(fixParGreater == -0.64){finalParGreater = 0.7389;}
   	if(fixParGreater == -0.65){finalParGreater = 0.7422;}
   	if(fixParGreater == -0.66){finalParGreater = 0.7454;}
   	if(fixParGreater == -0.67){finalParGreater = 0.7486;}
   	if(fixParGreater == -0.68){finalParGreater = 0.7517;}
   	if(fixParGreater == -0.69){finalParGreater = 0.7549;}
   	//0.70
   	if(fixParGreater == -0.70){finalParGreater = 0.7257;}
   	if(fixParGreater == -0.71){finalParGreater = 0.7611;}
   	if(fixParGreater == -0.72){finalParGreater = 0.7642;}
   	if(fixParGreater == -0.73){finalParGreater = 0.7673;}
   	if(fixParGreater == -0.74){finalParGreater = 0.7704;}
   	if(fixParGreater == -0.75){finalParGreater = 0.7734;}
   	if(fixParGreater == -0.76){finalParGreater = 0.7764;}
   	if(fixParGreater == -0.77){finalParGreater = 0.7794;}
   	if(fixParGreater == -0.78){finalParGreater = 0.7823;}
   	if(fixParGreater == -0.79){finalParGreater = 0.7852;}
   	//0.80
   	if(fixParGreater == -0.80){finalParGreater = 0.7881;}
   	if(fixParGreater == -0.81){finalParGreater = 0.7910;}
   	if(fixParGreater == -0.82){finalParGreater = 0.7939;}
   	if(fixParGreater == -0.83){finalParGreater = 0.7967;}
   	if(fixParGreater == -0.84){finalParGreater = 0.7995;}
   	if(fixParGreater == -0.85){finalParGreater = 0.8023;}
   	if(fixParGreater == -0.86){finalParGreater = 0.8051;}
   	if(fixParGreater == -0.87){finalParGreater = 0.8078;}
   	if(fixParGreater == -0.88){finalParGreater = 0.8106;}
   	if(fixParGreater == -0.89){finalParGreater = 0.8133;}
   	//0.90
   	if(fixParGreater == -0.90){finalParGreater = 0.8159;}
   	if(fixParGreater == -0.91){finalParGreater = 0.8186;}
   	if(fixParGreater == -0.92){finalParGreater = 0.8212;}
   	if(fixParGreater == -0.93){finalParGreater = 0.8238;}
   	if(fixParGreater == -0.94){finalParGreater = 0.8264;}
   	if(fixParGreater == -0.95){finalParGreater = 0.8289;}
   	if(fixParGreater == -0.96){finalParGreater = 0.8315;}
   	if(fixParGreater == -0.97){finalParGreater = 0.8340;}
   	if(fixParGreater == -0.98){finalParGreater = 0.8365;}
   	if(fixParGreater == -0.99){finalParGreater = 0.8389;}
   	//1.00
   	if(fixParGreater == -1.00){finalParGreater = 0.8413;}
   	if(fixParGreater == -1.01){finalParGreater = 0.8438;}
   	if(fixParGreater == -1.02){finalParGreater = 0.8461;}
   	if(fixParGreater == -1.03){finalParGreater = 0.8485;}
   	if(fixParGreater == -1.04){finalParGreater = 0.8508;}
   	if(fixParGreater == -1.05){finalParGreater = 0.8531;}
   	if(fixParGreater == -1.06){finalParGreater = 0.8554;}
   	if(fixParGreater == -1.07){finalParGreater = 0.8577;}
   	if(fixParGreater == -1.08){finalParGreater = 0.8599;}
   	if(fixParGreater == -1.09){finalParGreater = 0.8621;}
   	//1.10
   	if(fixParGreater == -1.10){finalParGreater = 0.8643;}
   	if(fixParGreater == -1.11){finalParGreater = 0.8665;}
   	if(fixParGreater == -1.12){finalParGreater = 0.8686;}
   	if(fixParGreater == -1.13){finalParGreater = 0.8708;}
   	if(fixParGreater == -1.14){finalParGreater = 0.8729;}
   	if(fixParGreater == -1.15){finalParGreater = 0.8749;}
   	if(fixParGreater == -1.16){finalParGreater = 0.8770;}
   	if(fixParGreater == -1.17){finalParGreater = 0.8790;}
   	if(fixParGreater == -1.18){finalParGreater = 0.8810;}
   	if(fixParGreater == -1.19){finalParGreater = 0.8830;}
   	//1.20
   	if(fixParGreater == -1.20){finalParGreater = 0.8849;}
   	if(fixParGreater == -1.21){finalParGreater = 0.8869;}
   	if(fixParGreater == -1.22){finalParGreater = 0.8888;}
   	if(fixParGreater == -1.23){finalParGreater = 0.8907;}
   	if(fixParGreater == -1.24){finalParGreater = 0.8925;}
   	if(fixParGreater == -1.25){finalParGreater = 0.8944;}
   	if(fixParGreater == -1.26){finalParGreater = 0.8962;}
   	if(fixParGreater == -1.27){finalParGreater = 0.8980;}
   	if(fixParGreater == -1.28){finalParGreater = 0.8997;}
   	if(fixParGreater == -1.29){finalParGreater = 0.9015;}
   	//1.30
   	if(fixParGreater == -1.30){finalParGreater = 0.9032;}
   	if(fixParGreater == -1.31){finalParGreater = 0.9049;}
   	if(fixParGreater == -1.32){finalParGreater = 0.9066;}
   	if(fixParGreater == -1.33){finalParGreater = 0.9082;}
   	if(fixParGreater == -1.34){finalParGreater = 0.9099;}
   	if(fixParGreater == -1.35){finalParGreater = 0.9115;}
   	if(fixParGreater == -1.36){finalParGreater = 0.9131;}
   	if(fixParGreater == -1.37){finalParGreater = 0.9147;}
   	if(fixParGreater == -1.38){finalParGreater = 0.9162;}
   	if(fixParGreater == -1.39){finalParGreater = 0.9177;}
   	//1.40
    if(fixParGreater == -1.40){finalParGreater = 0.9192;}
   	if(fixParGreater == -1.41){finalParGreater = 0.9207;}
   	if(fixParGreater == -1.42){finalParGreater = 0.9222;}
   	if(fixParGreater == -1.43){finalParGreater = 0.9236;}
   	if(fixParGreater == -1.44){finalParGreater = 0.9251;}
   	if(fixParGreater == -1.45){finalParGreater = 0.9265;}
   	if(fixParGreater == -1.46){finalParGreater = 0.9279;}
   	if(fixParGreater == -1.47){finalParGreater = 0.9292;}
   	if(fixParGreater == -1.48){finalParGreater = 0.9306;}
   	if(fixParGreater == -1.49){finalParGreater = 0.9319;} 	
   	//1.50
    if(fixParGreater == -1.50){finalParGreater = 0.9332;}
   	if(fixParGreater == -1.51){finalParGreater = 0.9345;}
   	if(fixParGreater == -1.52){finalParGreater = 0.9357;}
   	if(fixParGreater == -1.53){finalParGreater = 0.9370;}
   	if(fixParGreater == -1.54){finalParGreater = 0.9382;}
   	if(fixParGreater == -1.55){finalParGreater = 0.9394;}
   	if(fixParGreater == -1.56){finalParGreater = 0.9406;}
   	if(fixParGreater == -1.57){finalParGreater = 0.9418;}
   	if(fixParGreater == -1.58){finalParGreater = 0.9429;}
   	if(fixParGreater == -1.59){finalParGreater = 0.9441;}
   	//1.60
    if(fixParGreater == -1.60){finalParGreater = 0.9452;}
   	if(fixParGreater == -1.61){finalParGreater = 0.9463;}
   	if(fixParGreater == -1.62){finalParGreater = 0.9474;}
   	if(fixParGreater == -1.63){finalParGreater = 0.9484;}
   	if(fixParGreater == -1.64){finalParGreater = 0.9495;}
   	if(fixParGreater == -1.65){finalParGreater = 0.9505;}
   	if(fixParGreater == -1.66){finalParGreater = 0.9515;}
   	if(fixParGreater == -1.67){finalParGreater = 0.9525;}
   	if(fixParGreater == -1.68){finalParGreater = 0.9535;}
   	if(fixParGreater == -1.69){finalParGreater = 0.9545;}
   	//1.70
    if(fixParGreater == -1.70){finalParGreater = 0.9554;}
   	if(fixParGreater == -1.71){finalParGreater = 0.9564;}
   	if(fixParGreater == -1.72){finalParGreater = 0.9573;}
   	if(fixParGreater == -1.73){finalParGreater = 0.9582;}
   	if(fixParGreater == -1.74){finalParGreater = 0.9591;}
   	if(fixParGreater == -1.75){finalParGreater = 0.9599;}
   	if(fixParGreater == -1.76){finalParGreater = 0.9608;}
   	if(fixParGreater == -1.77){finalParGreater = 0.9616;}
   	if(fixParGreater == -1.78){finalParGreater = 0.9625;}
   	if(fixParGreater == -1.79){finalParGreater = 0.9633;}
   	//1.80
    if(fixParGreater == -1.80){finalParGreater = 0.9641;}
   	if(fixParGreater == -1.81){finalParGreater = 0.9649;}
   	if(fixParGreater == -1.82){finalParGreater = 0.9656;}
   	if(fixParGreater == -1.83){finalParGreater = 0.9664;}
   	if(fixParGreater == -1.84){finalParGreater = 0.9671;}
   	if(fixParGreater == -1.85){finalParGreater = 0.9678;}
   	if(fixParGreater == -1.86){finalParGreater = 0.9686;}
   	if(fixParGreater == -1.87){finalParGreater = 0.9693;}
   	if(fixParGreater == -1.88){finalParGreater = 0.9699;}
   	if(fixParGreater == -1.89){finalParGreater = 0.9706;}
   	//1.90
    if(fixParGreater == -1.90){finalParGreater = 0.9713;}
   	if(fixParGreater == -1.91){finalParGreater = 0.9719;}
   	if(fixParGreater == -1.92){finalParGreater = 0.9726;}
   	if(fixParGreater == -1.93){finalParGreater = 0.9732;}
   	if(fixParGreater == -1.94){finalParGreater = 0.9738;}
   	if(fixParGreater == -1.95){finalParGreater = 0.9744;}
   	if(fixParGreater == -1.96){finalParGreater = 0.9750;}
   	if(fixParGreater == -1.97){finalParGreater = 0.9756;}
   	if(fixParGreater == -1.98){finalParGreater = 0.9761;}
   	if(fixParGreater == -1.99){finalParGreater = 0.9767;}
   	//2.00
    if(fixParGreater == -2.00){finalParGreater = 0.9722;}
   	if(fixParGreater == -2.01){finalParGreater = 0.9778;}
   	if(fixParGreater == -2.02){finalParGreater = 0.9783;}
   	if(fixParGreater == -2.03){finalParGreater = 0.9788;}
   	if(fixParGreater == -2.04){finalParGreater = 0.9793;}
   	if(fixParGreater == -2.05){finalParGreater = 0.9798;}
   	if(fixParGreater == -2.06){finalParGreater = 0.9803;}
   	if(fixParGreater == -2.07){finalParGreater = 0.9808;}
   	if(fixParGreater == -2.08){finalParGreater = 0.9812;}
   	if(fixParGreater == -2.09){finalParGreater = 0.9817;}
   	//2.10
   	if(fixParGreater == -2.10){finalParGreater = 0.9821;}
   	if(fixParGreater == -2.11){finalParGreater = 0.9826;}
   	if(fixParGreater == -2.12){finalParGreater = 0.9830;}
   	if(fixParGreater == -2.13){finalParGreater = 0.9834;}
   	if(fixParGreater == -2.14){finalParGreater = 0.9838;}
   	if(fixParGreater == -2.15){finalParGreater = 0.9842;}
   	if(fixParGreater == -2.16){finalParGreater = 0.9846;}
   	if(fixParGreater == -2.17){finalParGreater = 0.9850;}
   	if(fixParGreater == -2.18){finalParGreater = 0.9854;}
   	if(fixParGreater == -2.19){finalParGreater = 0.9857;}
   	//2.20
   	if(fixParGreater == -2.20){finalParGreater = 0.9861;}
   	if(fixParGreater == -2.21){finalParGreater = 0.9864;}
   	if(fixParGreater == -2.22){finalParGreater = 0.9868;}
   	if(fixParGreater == -2.23){finalParGreater = 0.9871;}
   	if(fixParGreater == -2.24){finalParGreater = 0.9875;}
   	if(fixParGreater == -2.25){finalParGreater = 0.9878;}
   	if(fixParGreater == -2.26){finalParGreater = 0.9881;}
   	if(fixParGreater == -2.27){finalParGreater = 0.9884;}
   	if(fixParGreater == -2.28){finalParGreater = 0.9887;}
   	if(fixParGreater == -2.29){finalParGreater = 0.9890;}
   	//2.30
   	if(fixParGreater == -2.30){finalParGreater = 0.9893;}
   	if(fixParGreater == -2.31){finalParGreater = 0.9896;}
   	if(fixParGreater == -2.32){finalParGreater = 0.9898;}
   	if(fixParGreater == -2.33){finalParGreater = 0.9901;}
   	if(fixParGreater == -2.34){finalParGreater = 0.9904;}
   	if(fixParGreater == -2.35){finalParGreater = 0.9906;}
   	if(fixParGreater == -2.36){finalParGreater = 0.9909;}
   	if(fixParGreater == -2.37){finalParGreater = 0.9911;}
   	if(fixParGreater == -2.38){finalParGreater = 0.9913;}
   	if(fixParGreater == -2.39){finalParGreater = 0.9916;}
   	//2.40
   	if(fixParGreater == -2.40){finalParGreater = 0.9918;}
   	if(fixParGreater == -2.41){finalParGreater = 0.9920;}
   	if(fixParGreater == -2.42){finalParGreater = 0.9922;}
   	if(fixParGreater == -2.43){finalParGreater = 0.9925;}
   	if(fixParGreater == -2.44){finalParGreater = 0.9927;}
   	if(fixParGreater == -2.45){finalParGreater = 0.9929;}
   	if(fixParGreater == -2.46){finalParGreater = 0.9931;}
   	if(fixParGreater == -2.47){finalParGreater = 0.9932;}
   	if(fixParGreater == -2.48){finalParGreater = 0.9934;}
   	if(fixParGreater == -2.49){finalParGreater = 0.9936;}
   	//2.50
   	if(fixParGreater == -2.50){finalParGreater = 0.9938;}
   	if(fixParGreater == -2.51){finalParGreater = 0.9940;}
   	if(fixParGreater == -2.52){finalParGreater = 0.9941;}
   	if(fixParGreater == -2.53){finalParGreater = 0.9943;}
   	if(fixParGreater == -2.54){finalParGreater = 0.9945;}
   	if(fixParGreater == -2.55){finalParGreater = 0.9946;}
   	if(fixParGreater == -2.56){finalParGreater = 0.9948;}
   	if(fixParGreater == -2.57){finalParGreater = 0.9949;}
   	if(fixParGreater == -2.58){finalParGreater = 0.9951;}
   	if(fixParGreater == -2.59){finalParGreater = 0.9952;}
   	//2.60
   	if(fixParGreater == -2.60){finalParGreater = 0.9953;}
   	if(fixParGreater == -2.61){finalParGreater = 0.9955;}
   	if(fixParGreater == -2.62){finalParGreater = 0.9956;}
   	if(fixParGreater == -2.63){finalParGreater = 0.9957;}
   	if(fixParGreater == -2.64){finalParGreater = 0.9959;}
   	if(fixParGreater == -2.65){finalParGreater = 0.9960;}
   	if(fixParGreater == -2.66){finalParGreater = 0.9961;}
   	if(fixParGreater == -2.67){finalParGreater = 0.9962;}
   	if(fixParGreater == -2.68){finalParGreater = 0.9963;}
   	if(fixParGreater == -2.69){finalParGreater = 0.9964;}
   	//2.70
   	if(fixParGreater == -2.70){finalParGreater = 0.9965;}
   	if(fixParGreater == -2.71){finalParGreater = 0.9966;}
   	if(fixParGreater == -2.72){finalParGreater = 0.9967;}
   	if(fixParGreater == -2.73){finalParGreater = 0.9968;}
   	if(fixParGreater == -2.74){finalParGreater = 0.9969;}
   	if(fixParGreater == -2.75){finalParGreater = 0.9970;}
   	if(fixParGreater == -2.76){finalParGreater = 0.9971;}
   	if(fixParGreater == -2.77){finalParGreater = 0.9972;}
   	if(fixParGreater == -2.78){finalParGreater = 0.9973;}
   	if(fixParGreater == -2.79){finalParGreater = 0.9974;}
   	//2.80
   	if(fixParGreater == -2.80){finalParGreater = 0.9974;}
   	if(fixParGreater == -2.81){finalParGreater = 0.9975;}
   	if(fixParGreater == -2.82){finalParGreater = 0.9976;}
   	if(fixParGreater == -2.83){finalParGreater = 0.9977;}
   	if(fixParGreater == -2.84){finalParGreater = 0.9977;}
   	if(fixParGreater == -2.85){finalParGreater = 0.9978;}
   	if(fixParGreater == -2.86){finalParGreater = 0.9979;}
   	if(fixParGreater == -2.87){finalParGreater = 0.9979;}
   	if(fixParGreater == -2.88){finalParGreater = 0.9980;}
   	if(fixParGreater == -2.89){finalParGreater = 0.9981;}
   	//2.90
   	if(fixParGreater == -2.90){finalParGreater = 0.9981;}
   	if(fixParGreater == -2.91){finalParGreater = 0.9982;}
   	if(fixParGreater == -2.92){finalParGreater = 0.9982;}
   	if(fixParGreater == -2.93){finalParGreater = 0.9983;}
   	if(fixParGreater == -2.94){finalParGreater = 0.9984;}
   	if(fixParGreater == -2.95){finalParGreater = 0.9984;}
   	if(fixParGreater == -2.96){finalParGreater = 0.9985;}
   	if(fixParGreater == -2.97){finalParGreater = 0.9985;}
   	if(fixParGreater == -2.98){finalParGreater = 0.9986;}
   	if(fixParGreater == -2.99){finalParGreater = 0.9986;}
   	//3.00
   	if(fixParGreater == -3.00){finalParGreater = 0.9987;}
   	if(fixParGreater == -3.01){finalParGreater = 0.9987;}
   	if(fixParGreater == -3.02){finalParGreater = 0.9987;}
   	if(fixParGreater == -3.03){finalParGreater = 0.9987;}
   	if(fixParGreater == -3.04){finalParGreater = 0.9988;}
   	if(fixParGreater == -3.05){finalParGreater = 0.9989;}
   	if(fixParGreater == -3.06){finalParGreater = 0.9989;}
   	if(fixParGreater == -3.07){finalParGreater = 0.9989;}
   	if(fixParGreater == -3.08){finalParGreater = 0.9990;}
   	if(fixParGreater == -3.09){finalParGreater = 0.9990;}
   	//3.10
   	if(fixParGreater == -3.10){finalParGreater = 0.9990;}
   	if(fixParGreater == -3.11){finalParGreater = 0.9991;}
   	if(fixParGreater == -3.12){finalParGreater = 0.9991;}
   	if(fixParGreater == -3.13){finalParGreater = 0.9991;}
   	if(fixParGreater == -3.14){finalParGreater = 0.9992;}
   	if(fixParGreater == -3.15){finalParGreater = 0.9992;}
   	if(fixParGreater == -3.16){finalParGreater = 0.9992;}
   	if(fixParGreater == -3.17){finalParGreater = 0.9992;}
   	if(fixParGreater == -3.18){finalParGreater = 0.9993;}
   	if(fixParGreater == -3.19){finalParGreater = 0.9993;}
   	//3.20
   	if(fixParGreater == -3.20){finalParGreater = 0.9993;}
   	if(fixParGreater == -3.21){finalParGreater = 0.9993;}
   	if(fixParGreater == -3.22){finalParGreater = 0.9994;}
   	if(fixParGreater == -3.23){finalParGreater = 0.9994;}
   	if(fixParGreater == -3.24){finalParGreater = 0.9994;}
   	if(fixParGreater == -3.25){finalParGreater = 0.9994;}
   	if(fixParGreater == -3.26){finalParGreater = 0.9994;}
   	if(fixParGreater == -3.27){finalParGreater = 0.9995;}
   	if(fixParGreater == -3.28){finalParGreater = 0.9995;}
   	if(fixParGreater == -3.29){finalParGreater = 0.9995;}
   	//3.30
   	if(fixParGreater == -3.30){finalParGreater = 0.9995;}
   	if(fixParGreater == -3.31){finalParGreater = 0.9995;}
   	if(fixParGreater == -3.32){finalParGreater = 0.9995;}
   	if(fixParGreater == -3.33){finalParGreater = 0.9996;}
   	if(fixParGreater == -3.34){finalParGreater = 0.9996;}
   	if(fixParGreater == -3.35){finalParGreater = 0.9996;}
   	if(fixParGreater == -3.36){finalParGreater = 0.9996;}
   	if(fixParGreater == -3.37){finalParGreater = 0.9996;}
   	if(fixParGreater == -3.38){finalParGreater = 0.9996;}
   	if(fixParGreater == -3.39){finalParGreater = 0.9997;}
   	//3.40
   	if(fixParGreater == -3.40){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.41){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.42){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.43){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.44){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.45){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.46){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.47){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.48){finalParGreater = 0.9997;}
   	if(fixParGreater == -3.49){finalParGreater = 0.9998;}
   	//3.50
   	if(fixParGreater == -3.50){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.51){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.52){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.53){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.54){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.55){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.56){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.57){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.58){finalParGreater = 0.9998;}
   	if(fixParGreater == -3.59){finalParGreater = 0.9999;}
   	//4.00
   	if(fixParGreater == -4.00){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.01){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.02){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.03){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.04){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.05){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.06){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.07){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.08){finalParGreater = 0.99997;}
   	if(fixParGreater == -4.09){finalParGreater = 0.99998;}
   	//4.5
   	if(fixParGreater == -4.50){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.51){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.52){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.53){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.54){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.55){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.56){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.57){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.58){finalParGreater = 0.999997;}
   	if(fixParGreater == -4.59){finalParGreater = 0.999998;}
   	//5.0
   	if(fixParGreater == -5.00){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.01){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.02){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.03){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.04){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.05){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.06){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.07){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.08){finalParGreater = 0.9999997;}
   	if(fixParGreater == -5.09){finalParGreater = 0.9999998;}


   	document.getElementById("displayFormulaGreater").value = " P( 𝑿 >" + k + " ) = P (  Z > " + k + " - 𝜇x ∕ 𝝈x ) "  ;
   	document.getElementById("displayFormulaGreater2").value= " = P (  Z > " + k + " - "+ x + " / " + standardGreater.toFixed(5) + " ) "  ;
	document.getElementById("displayGreat").value = finalParGreater ;
}


