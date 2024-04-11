const DaumPostcode = () => {
  new Window.daum.Postcode({
    oncomplete: function (data) {
      console.log(data);
    },
  }).open();
};
export default DaumPostcode;
