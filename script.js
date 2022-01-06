function filterData(searchTerm) {
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
  item.classList.remove('hide')
    } else {
  item.classList.add('hide')
  }
    })
  }