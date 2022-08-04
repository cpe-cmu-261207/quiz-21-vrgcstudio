const btnRandom = document.querySelector("#btn-random");
const imgProfile = document.querySelector("#img-profile");
const pName = document.querySelector("#p-name");
const pEmail = document.querySelector("#p-email");
const pAddress = document.querySelector("#p-address");
const divLoading = document.querySelector("#div-loading-card");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  console.log(resp.data);

  imgProfile.src = resp.data.picture;
  pName.text = resp.data.name.first + resp.data.name.last;
  pEmail.text = resp.data.email;
  pAddress.text = resp.data.address;
}

callApi();

btnRandom.onclick = async () => {
  callApi();
};

imgProfile.onload = () => {
  divLoading.style.display = "";
};
