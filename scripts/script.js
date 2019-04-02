function searchWikipedia(){
const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=";
// const data = JSON.parse(this.response);
 function submit(e){
     e.preventdefault();
 }

	const searchData = document.getElementById('wikisearch').value;
   //var searchData = "";
   // searchData = document.getElementById('wikisearch').value;
    console.log(searchData);
    fetch(url  + searchData + "&limit=15")
    .then(function(res) {
    		
        console.log("Loading Results");
        
        // returns JSON data
        return res.json();
        
        // // Returns text instead of json data
        //return res.text();

    })
    
    
    .then(function(data) {
        var str = 'ul';
    	data.forEach(function(res){
    	    
    	    document.getElementById("myList").appendChild();
    	   // str += '<li>' + document.write(`ID ${data[1]} was created!`) + '</li>'
    	    str += '<li>' + data[2] + '</li>';
    	    '<li>' + data[2] + '</li>';
    	    '<li>' + data[3] + '</li>';
    	});
    	str += '</ul>';
    	console.log(data);
    	
    	
    // 	str += '<li>' + document.write(`ID ${data[1]} was created!`) + '</li>';
    	
    	// var output = `<h2> Search results from Wikipedia </h2>`;
    	// data.forEach(function(searchResult) {
    		
    	// 	output +=
    	// 	`<div>
    	// 	<h5> Result </h5>
    	// 	<ul class="results">
    	// 	<li> </liv> `;
    	// });
    		//for each result
        //console.log(data);
        //[1,2,3].forEach(function(res) {
        	
        //};
        
    });
}




// fetch(url, {
// 		method: 'GET',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
