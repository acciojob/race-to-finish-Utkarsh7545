window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`


window.promises = Array.from({length: 5}=> 
	new Promise((resolve, reject)=>{
		const time=Math.floor(Math.random()*5)+1;
	setTimeout(()=>{
		resolve(`Promise resolved after ${timeout} seconds`);
	},time*1000);
}));

Promise.any(window.promises)
	.then((element)=>document.getElementById("output").innerHTML=element
);