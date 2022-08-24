const update = ()=>{
    const element=`
    <h3>hello<h3>
    <form>
      <input type="text"/>
    </form>
    <span>Time: ${new Date().toLocaleTimeString()}</span>
    `;

    document.getElementById("root1").innerHTML = element;
}

setInterval(update, 1000);