let sendout = document.getElementsByClassName('sendout')[0];
let mesboard = document.getElementById('mesboard');
let forum = document.getElementsByClassName('forum')[0];
let item_id = Date.now();
sendout.addEventListener("click", function () {
	// console.log('123');
	let htmltext = `
        <li data-id="${item_id}" class="forumid">
        <div class="user">
                <img src="img/Facebook-no-profile-picture-icon-620x389 (3).png" alt="">
                <h1>name</h1>
            </div>
            <div class="poutput">
                <p class= "p_content">${mesboard.value}</p>
                <textarea type="text" class="newmesboard -none" placeholder="更新待辦事項…" value="${mesboard.value}"></textarea>
                <div class="btn">
                <button class="update" type="submit" value="編輯">編輯</button>
                <button class="delete" type="submit" value="刪除">刪除</button>
                </div>
            </div>
            </li >`

	forum.insertAdjacentHTML("afterend", htmltext);

	let del = document.getElementsByClassName('delete')[0];
	del.addEventListener('click', function () {

		let point = del.closest('li');
		point.remove();
	});

	let index = 0;
	let update = document.getElementsByClassName('update')[0];
	// let para = document.getElementsByClassName('para')[0];
	update.addEventListener('click', function (e) {
		index++;
		if (index % 2 == 1) {

			//         update.closest("li").querySelector('.para').classList.add('-none');
			//         update.closest("li").querySelector('p.content').classList.remove('-none');

			// console.log(update);
			//     
			//         update.closest("li").querySelector('.para').classList.remove('-none');
			//         update.closest("li").querySelector('p.content').classList.add('-none');

			let mesboard_text = (mesboard.value).trim();
			// console.log(mesboard_text);
			if (mesboard_text == "") {
				alert("請輸入待辦事項");
			} else {
				// let mesboard_text = (mesboard.value).trim();
				// console.log(mesboard_text);
				update.closest("li").querySelector('.newmesboard').classList.remove('-none');
				update.closest("li").querySelector('p').classList.add('-none');

			}
		} else {


			update.closest("li").querySelector('.newmesboard').classList.add('-none');
			// 隱藏修改留言板
			update.closest("li").querySelector('p').classList.remove('-none');
			// 顯示修改後留言板
			let li = e.target.closest("li");
			// 設變數li為點擊按鈕那一欄的li
			let newmesboard = li.querySelector('.newmesboard ');
			// 設變數newmesboard為li下面的新修正後留言板


			// let p_content = li.querySelector(' .p_content');
			// e.target.closest("li").querySelector(".p_content").innerHTML = newmesboard.value;



			li.querySelector(".p_content").innerHTML = newmesboard.value;
			// 將變數li底下p_content留言板的字變成newmesboard新修正留言板的值


		};
	})


});


