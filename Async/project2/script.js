const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class="color">
        <table border="1" style="width: 100%; border-collapse: collapse; text-align: center;">
            <thead>
                <tr style="background-color: #f2f2f2;">
                    <th>Key</th>
                    <th>Key Code</th>
                    <th>Code</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode || e.which}</td>
                    <td>${e.code}</td>
                </tr>
            </tbody>
        </table>
    </div>`;
});
