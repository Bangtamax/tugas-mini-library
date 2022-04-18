const table = new Table({
  columns: ["Name", "Email"],
  data: [
    ["Edi Hartono", "edi.eduwork@gmail.com"],
    ["Dodi Prakoso", "dodi@upscale.id"],
    ["Kurniawan Pratama", "k.cadenza13@gmail.com"],
  ],
});
const app = document.getElementById("app");
table.render(app);

export default table;
