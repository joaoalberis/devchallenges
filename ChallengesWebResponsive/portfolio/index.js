const filterProject = document.querySelectorAll('.menu-type');
const projects = document.querySelectorAll('.project');

for (var i = 0; i < filterProject.length; i++) {
  filterProject[i].addEventListener('click', (e) => {
    const element = e.target;
    element.classList.toggle('active');

    const activeButtons = document.querySelectorAll('.menu-type.active');

    for (var j = 0; j < projects.length; j++) {
      const projectTags = projects[j].querySelector('span').textContent;
      let showProject = false;

      for (var k = 0; k < activeButtons.length; k++) {
        if (projectTags.includes(activeButtons[k].textContent)) {
          showProject = true;
          break;
        }
      }

      if (showProject || activeButtons.length === 0) {
        projects[j].style.display = 'grid';
      } else {
        projects[j].style.display = 'none';
      }
    }
  });
}
