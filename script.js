newDate = () => {
  let d = new Date();
  $(".dayDate").html(`${d.toDateString()} + ${d.toLocaleTimeString()}`);
};

let si = setInterval(newDate, 1000);
