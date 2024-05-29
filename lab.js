url = "https://fakestoreapi.com/products"
const row = document.querySelector('.row')
// const Cname = document.querySelector('#cname')


async function fakeStore() {
    const res = await fetch(url)
    const data = await res.json()
    
    console.log(data);
    data.forEach(e => {
        // console.log(element);
        const col = document.createElement('div')
        const h1 = document.createElement('h1')
        const h2 = document.createElement('h2')
        const img = document.createElement('img')
        h1.innerText = e.title
        img.src = e.image
        h2.innerText = e.price
        row.append(col)
        col.classList.add("col-sm-6","col-md-3","text-center","test")
        col.append(h1,img,h2)
        img.classList.add("img-thumbnail")



    });
}



fakeStore()