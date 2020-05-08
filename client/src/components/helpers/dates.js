const formatDate = (date) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  let newDate = new Date(date);
  let month = newDate.getMonth();
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  return monthNames[month] + ' ' + day + ', ' + year;
}

export default formatDate;