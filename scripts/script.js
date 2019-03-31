function searchWikipedia(){
const url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";
const data = JSON.parse(this.response);


fetch(url, {
		method: 'GET',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));
	
	
	
	
	
	
	
}