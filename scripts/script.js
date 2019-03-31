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
        return res.json();

    }).then(function(data) {
        console.log(data)
        .catch(function(err) {
        	console.log(err);
        });
        
    });





// fetch(url, {
// 		method: 'GET',
// 		body: JSON.stringify(data),
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
	
	
	
	
	
	
	
}