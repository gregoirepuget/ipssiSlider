const sliderIpssi = document.querySelector('.sliderIpssi')
const sliderImages = sliderIpssi.querySelectorAll('img')
const sliderIpssiContainer =document.createElement('div')
const sliderNext = document.createElement('div')
const sliderPrev = document.createElement('div')
let currentPosition = 0

sliderIpssiContainer.classList.add('sliderIpssiContainer')

sliderIpssi.innerHTML = ''
sliderIpssi.appendChild(sliderIpssiContainer)
for(let i=0; i<sliderImages.length;i++)
{
  sliderIpssiContainer.appendChild(sliderImages[i])
}

sliderNext.classList.add('nextSlide')
sliderIpssi.appendChild(sliderNext)
sliderNext.innerHTML='&gt;'

sliderPrev.classList.add('prevSlide')
sliderIpssi.appendChild(sliderPrev)
sliderPrev.innerHTML='&lt;'

sliderNext.addEventListener(
  'click',
  function()
  {
    currentPosition++
    sliderIpssiContainer.style.transform='translateX('+(currentPosition * -960)+'px)'
  }
)

sliderPrev.addEventListener(
  'click',
  function()
  {
    currentPosition--
    sliderIpssiContainer.style.transform='translateX('+(currentPosition * -960)+'px)'
  }
)
