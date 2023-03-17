window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

const x = document.getElementById("output");
window.promises = Array.from({length: 5}=> 
	new Promise((resolve, reject)=>{
		const time=Math.floor(Math.random()*5)+1;
	setTimeout(()=>{
		resolve(${time});
	},time*1000);
}));

Promise.any(window.promises)
	.then((element)=>x.innerHTML=element;
		)