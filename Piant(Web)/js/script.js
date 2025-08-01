const canvas = document.querySelector('canvas'),
    toolBtns = document.querySelectorAll('.tool'),
    fillColor = document.querySelector('#fill-color'),
    sizeSlider = document.querySelector('#size-slider'),
    colorBtns = document.querySelectorAll('.colors .option'),
    colorPicker = document.querySelector('#color-picker'),
    clearCanvasBtn = document.querySelector(".clear-canvas"),
    saveImgBtn = document.querySelector(".save-img")

let ctx = canvas.getContext('2d')
    isDrawing = false,
    brushWith = 5,
    selectedColor = '#000',
    selectedTool = 'brush' 
    let prevMouseX,
    prevMouseY,
    snapshot


const setCanvasBackround = () =>{
    ctx.fillStyle = '#fff'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = selectedColor
}

window.addEventListener("load", ()=>{
    canvas.width = canvas.offsetWidth,
    canvas.height = canvas.offsetHeight
    setCanvasBackround()
})


const startDraw = e =>{
    isDrawing = true
    prevMouseX = e.offsetX
    prevMouseY = e.offsetY
    ctx.beginPath()
    ctx.lineWidth = brushWith
    ctx.strokeStyle = selectedColor
    ctx.fillStyle = selectedColor
    snapshot = ctx.getImageData(0,0,canvas.width,canvas.height)
    
}

const drawRectangle = e => {
    // Now 'e' is defined and you can access its properties
    fillColor.checked
    ? ctx.fillRect(e.offsetX, e.offsetY, prevMouseX-e.offsetX, prevMouseY-e.offsetY)

    :ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX-e.offsetX, prevMouseY-e.offsetY)
    
}

const drawCircle = e =>{
    ctx.beginPath()
    const radius = Math.sqrt(Math.pow(prevMouseX-e.offsetX,2)) + Math.pow(prevMouseY-e.offsetY,2)
    ctx.arc(prevMouseX,prevMouseY,radius,0,2*Math.PI)
    fillColor.checked  ? ctx.fill() : ctx.stroke()
    ctx.stroke()
}

const drawTriangle = e =>{
    ctx.beginPath()
    ctx.moveTo(prevMouseX,prevMouseY)
    ctx.lineTo(e.offsetX,e.offsetY)
    ctx.lineTo(prevMouseX * 2 - e.offsetX,e.offsetY)
    ctx.closePath()
    ctx.stroke()
    fillColor.checked  ? ctx.fill() : ctx.stroke()
}

const drawing = e =>{
    if(!isDrawing) return
    ctx.putImageData(snapshot,0,0 )

    switch (selectedTool) {
        case "brush":
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()
            break;
            case "rectangle":
            drawRectangle(e)
            break;
            case "circle":
            drawCircle(e)
            break;
            case "triangle":
            drawTriangle(e)
            break;
            case "eraser":
            ctx.strokeStyle = '#fff'
            ctx.lineTo(e.offsetX, e.offsetY)
            ctx.stroke()            
            break;
    
        default:
            break;
    }

    

}

toolBtns.forEach(btn  => {
    btn.addEventListener('click', () => {
        document.querySelector(".options .active").classList.remove('active')
        btn.classList.add('active')
        selectedTool = btn.id
        console.log(`Selected tool: ${selectedTool}`)
    })
});

sizeSlider.addEventListener('change', () => (brushWith = sizeSlider.value))
colorBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        document.querySelector(".options .selected").classList.remove('selected')
        btn.classList.add('selected')
        const bgColor = window.getComputedStyle(btn).getPropertyValue("background-color")
        selectedColor = bgColor
        console.log(bgColor)

    })
})

colorPicker.addEventListener('change', () =>{
    colorPicker.parentElement.style.background = colorPicker.value
    colorPicker.parentElement.click()
})

clearCanvasBtn.addEventListener("click", () => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    setCanvasBackround()
})

saveImgBtn.addEventListener("click", () =>{
    const link = document.createElement('a')
    link.download = `Sityuz-paint_${Date.now()}.jpg`;
    link.href = canvas.toDataURL()
    link.click()
})

const stopDraw = () =>{
    isDrawing = false
}

canvas.addEventListener("mousedown",startDraw)
canvas.addEventListener("mousemove",drawing)
canvas.addEventListener("mouseup",stopDraw)