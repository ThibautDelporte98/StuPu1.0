const scrollToElement = (event, id, setIsOpen) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (setIsOpen) setIsOpen(false);
    }
  };
  
  export default scrollToElement;
  