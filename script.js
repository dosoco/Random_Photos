const imageContainerEl = document.querySelector('.image-container')

const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click', () => {
    addNewImages()
})

function addNewImages() {
    const newImgEl = document.createElement("img")

    newImgEl.src = "images/PH01046J.JPG"

    imageContainerEl.appendChild(newImgEl)
}