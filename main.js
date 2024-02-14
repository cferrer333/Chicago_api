
// Function to get Img Info when image figure is clicked
/**
 * @param img_index
 * 
 * Function gets the image info from Chicago Art API using the image index of our gallery.
 * Then finds the correct item_index inside of the JSON response data from Chicago Art API
 * which will produce a image info that will be displayed to the user
 */


async function clickedEvent(img_index) {
    // Get image id
    let id = document.getElementsByTagName('img')[img_index].attributes[2].value;
    let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json']
    ]);
  
    // Get Title, Artist, Date
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${id}`, {
      method: 'GET',
      headers: headers
    });
    let result = await fetch(request);
  
    let response = await result.json(); 
    let info = response.data
    let title = info.title
    let artist = info.artist_title
    let date = info.date_display
  
    // Function to display the data in an alert popup
    function displayPopup() {
      alert(`Artist: ${artist}\nTitle: ${title}\nDate: ${date}`);
    }
  
    console.log(info);
  
    // Call the function to display the popup
    displayPopup();
  }
 /**
  * @param id
  * @param event
  * 
  * id = image id for gallery image
  * event = Mouse event given by the action from our user
  * 
  * Function produces the image info from the clickedEvent based 
  * on index of image.
  */

  function getInfo(id,event){
      switch(id){
          case 'fig1': {
              event.stopPropagation();
              clickedEvent(0,3)
              break;
          }
          case 'fig2': {
              event.stopPropagation();
              clickedEvent(1,3)
              break;
          }
          case 'fig3': {
              event.stopPropagation();
              clickedEvent(2,3)
              break;
          }
          case 'fig4': {
              event.stopPropagation();
              clickedEvent(3,0)
              break;
          }
          case 'fig5': {
              event.stopPropagation();
              clickedEvent(4,0)
              break;
          }
          case 'fig6': {
              event.stopPropagation();
              clickedEvent(5,1)
              break;
          }
      }
  }

  // Create a alert popup box with image info for each image in gallery
