var markupTabs = document.getElementsByClassName('js-c-markup-toggle');

  if (markupTabs) {
    if (localStorage.getItem('activeTab') === 'html' ||
        localStorage.getItem('activeTab') === 'css' ||
        localStorage.getItem('activeTab') === 'js') {
          document.querySelector('#' + localStorage.getItem('activeTab')).classList.add('is-active');
          document.querySelector('.evo_c-markup__container').classList.add('is-expanded');
          document.querySelector('#' + localStorage.getItem('activeTab') + '-content').classList.add('is-active');
        }
    for (var i = 0; i < markupTabs.length; i++) {
      //FIXME: Should be a better way than adding a listener to each element??
      markupTabs[i].addEventListener('click', function(event) {
        var clickedTabClassList = event.target.classList;
        var markupContainerClassList = this.parentNode.children[1].classList;
        var markupContentDivs = this.parentNode.children[1].children;

        if (clickedTabClassList.contains("is-active")) {
          clickedTabClassList.remove("is-active");
          markupContainerClassList.remove("is-expanded");
          localStorage.setItem('activeTab', 'none');
        } else {
          for (var i = 0; i < this.children.length; i++) {
            if (this.children[i].classList.contains("is-active")) {
              this.children[i].classList.remove("is-active");
            }
          }
          clickedTabClassList.add("is-active");
          this.parentNode.children[1].scrollTop = 0;
          markupContainerClassList.add("is-expanded");
          localStorage.setItem('activeTab', event.target.id);
          for (var j = 0; j < markupContentDivs.length; j++) {
            if (markupContentDivs[j].classList.contains("is-active")) {
              markupContentDivs[j].classList.remove("is-active");
            }
            if (this.children[j].classList.contains("is-active")) {
              markupContentDivs[j].classList.add("is-active");
            }
          }
        }
      }, false);
    }
  }
