const fetchbook  = function(){

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState !==4 ){
    return;
  }
    console.log("ready");
    const info = JSON.parse(xhr.responseText);
    // debugger;

    document.getElementById('results').innerHTML = ''; // Reset

    const img = document.createElement('img');
    img.src = info.items[0]["volumeInfo"]["imageLinks"]["thumbnail"] ;
    document.getElementById('results').appendChild(img);

    const p = document.createElement('p');
    p.innerHTML = '<strong>' + info.items[0]["volumeInfo"]["title"] + '</strong>: ';
    document.getElementById('results').appendChild(p);

    p.innerHTML +=  info.items[0]["volumeInfo"]["description"] ;
    document.getElementById('results').appendChild(p);

  };

  title = document.getElementById('booktitle').value;
  console.log(title)
  xhr.open('GET','https://www.googleapis.com/books/v1/volumes?q=title:'+ title )
  xhr.send();


};

const button = document.getElementById('fetch');
button.addEventListener('click',fetchbook)
