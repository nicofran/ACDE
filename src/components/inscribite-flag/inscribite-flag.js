const InscribiteFlag = () => {
  var button = document.getElementById("topbutton");
  const scrollFunction = () => {
    const scrollMax = 40810;
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
    if ((document.body.scrollTop = scrollMax)) {
      button.style.display = "none";
    } else if (document.body.scrollTop < scrollMax) {
      button.style.display = "block";
    }
  };
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = () => {
    scrollFunction();
  };

  // When the user clicks on the button, scroll to the top of the document
  const backtotop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="inscribite_flag">
      <button className="backtotop__button" id="topbutton" onClick={backtotop}>
        Top
      </button>
    </div>
  );
};

export default InscribiteFlag;
