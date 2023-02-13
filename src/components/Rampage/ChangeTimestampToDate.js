const Timestamp = ({ timestamp }) => {
  let date = new Date(timestamp);
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export default Timestamp;
