const slide = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
  };
  
  console.log(slide.input);
  console.log(slide.span);
  
  slide.input.addEventListener('input', changeFontSizeText);
  function changeFontSizeText() {
    
    slide.span.style.fontSize = `${slide.input.value}px`;
  }