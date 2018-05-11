//get input Element
let filterInput = document.getElementById('filterInput');
//Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	//get value from input
	let filterValue = filterInput.value.toUpperCase();

	//Get names ul
	let ul = document.getElementById('names');
	//Get lis from ul
	let li = ul.querySelectorAll('li.collection-item');

	//loop through collection-item li
	for(let i = 0; i < li.length; i++){
		//get all links
		let a = li[i].getElementsByTagName('a')[0];
		//if matched
		if( a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
		} else{
			li[i].style.display = 'none';
		}
	}
};