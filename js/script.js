let url = "https://breakingbadapi.com/api/characters";
let allnamecontainer = document.getElementById("cards_container");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.forEach((dataitem) => {
      let cardtemplate = `
<div class="card" style="background-color: black">
<div class="card-inner">
  <div class="card-front">
    <img
      src="${dataitem.img}"
      alt=""
    />
  </div>
  <div class="card-back">
    <div style="text-align: center">
      <img
        src="${dataitem.img}"
        alt=""
      />
    </div>
    <h1>${dataitem.name}</h1>
    <ul>
      <li><strong>Actor Name:</strong> ${dataitem.portrayed}</li>
      <li><strong>Nickname:</strong>  ${dataitem.nickname}</li>
      <li><strong>Birthday:</strong> ${dataitem.birthday}</li>
      <li><strong>Status:</strong> ${dataitem.status}</li>
    </ul>
  </div>
</div>
</div>
`;

      allnamecontainer.insertAdjacentHTML("afterbegin", cardtemplate);
    });
  });
