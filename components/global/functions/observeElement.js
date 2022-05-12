const observeElement = (box, funcA, funcB = (e) => {return}, top="0px") => {
  const sectionOne = document.querySelector(box);
  const classOptions = {rootMargin: "" + top + " 0px 0px 0px"};
  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {if(entry.isIntersecting) funcA(observer); else funcB(observer);});
  }, classOptions);
  observer.observe(sectionOne);
  return observer;
}

export default observeElement