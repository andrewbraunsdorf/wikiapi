function searchWikipedia(){
const url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search=";
// const data = JSON.parse(this.response);


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

    }).then(function(data) {
    	// var output = `<h2> Search results from Wikipedia </h2>`;
    	// data.forEach(function(searchResult) {
    		
    	// 	output +=
    	// 	`<div>
    	// 	<h5> Result </h5>
    	// 	<ul class="results">
    	// 	<li> </liv> `;
    	// });
        console.log(data);
        
        
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
