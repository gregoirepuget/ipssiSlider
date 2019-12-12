const sliderIpssi = document.querySelector('.sliderIpssi')
const sliderImages = sliderIpssi.querySelectorAll('img')
const sliderIpssiContainer =document.createElement('div')

sliderIpssiContainer.classList.add('sliderIpssiContainer')

sliderIpssi.innerHTML = ''
sliderIpssi.appendChild(sliderIpssiContainer)
for(let i=0; i<sliderImages.length;i++)
{
  sliderIpssiContainer.appendChild(sliderImages[i])
}
