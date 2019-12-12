const sliderIpssi = document.querySelector('.sliderIpssi')
const sliderImages = sliderIpssi.querySelectorAll('img')
const sliderIpssiContainer =document.createElement('div')
const sliderNext = document.createElement('div')
const sliderPrev = document.createElement('div')
const sliderPagination = document.createElement('div')

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
    currentPosition = (currentPosition+1) % sliderImages.length
    console.log(currentPosition)
    setSliderPosition(currentPosition)
  }
)

sliderPrev.addEventListener(
  'click',
  function()
  {
    currentPosition--
    if(currentPosition<0)
    {
      currentPosition = sliderImages.length - 1
    }
    console.log(currentPosition)
    setSliderPosition(currentPosition)
  }
)


sliderPagination.classList.add('sliderPagination')
sliderIpssi.appendChild(sliderPagination)

for(let i=0; i<sliderImages.length;i++)
{
  let sliderDot = document.createElement('div')
  sliderDot.classList.add('dot')
  sliderDot.classList.add('dot-'+i)
  sliderDot.setAttribute('data-position',i)
  sliderPagination.appendChild(sliderDot)

  sliderDot.addEventListener(
    'click',
    function()
    {
      currentPosition = sliderDot.getAttribute('data-position')
      setSliderPosition(currentPosition)
      console.log(currentPosition)
    }
  )

}

function setSliderPosition(position)
{
  let pastDot = document.querySelector('.dot.current')
  if(pastDot != null)
  {
    pastDot.classList.remove('current')
  }

  sliderIpssiContainer.style.transform='translateX('+(position * -960)+'px)'
  let currentDot = document.querySelector('.dot-'+position);
  currentDot.classList.add('current')
}
