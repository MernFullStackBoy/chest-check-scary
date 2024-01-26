setTimeout(() => {
    first.style.display = 'flex'
}, 50)
setTimeout(() => {
    second.style.display = 'flex'
    first.style.display = 'none'
}, 4000)

setTimeout(() => {
    second.style.display = 'none'
    header.style.display = 'flex'
}, 8000)

const reset = document.querySelector(".reset")

const first = document.querySelector(".first")

const second = document.querySelector(".second")

const header = document.querySelector("header")

let count = Math.trunc(Math.random() * 6)
console.log(count);

const vidArr = [
    "jumpscare1.mp4",
    "jumpscare2.mp4",
    "jumpscare3.mp4",
    "jumpscare4.mp4",
    "jumpscare5.mp4",
]

const video = document.querySelector("video")

const section = document.querySelector("section")

const btns = document.querySelectorAll("button")


btns.forEach((btn) => {

    btn.addEventListener("click", () => {
        section.style.display = 'block'
        video.src = `./video/${vidArr[count]}`
        video.play()
        if (count == 5) {
            video.src = './video/Success.mp4'
            video.play()
        }
    })

})

reset.addEventListener("click", () => {
    section.style.display = 'none'
    video.pause()
    console.log(count = 0 + Math.trunc(Math.random() * 6));
})