const colorToggle = document.querySelectorAll('.fab');

for(let i = 0; i < colorToggle.length; i++){
  colorToggle[i].addEventListener('mouseover', function handleMouseOver(){colorToggle[i].style.color = '#B6E2A1';});

colorToggle[i].addEventListener('mouseout', function handleMouseOver(){colorToggle[i].style.color = '#f9b7a9';});
}
