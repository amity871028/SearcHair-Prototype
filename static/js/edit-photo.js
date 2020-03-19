function downloadIamge(selector, name) {
    // 通過選擇器獲取img元素
    var img = document.querySelector(selector);
    // 將圖片的src屬性作為URL地址
    var url = img.src;
    var a = document.createElement('a');
    var event = new MouseEvent('click');
    
    a.download = name || '下載圖片名稱';
    a.href = url;
    
    a.dispatchEvent(event);
}


function init(){
    document.getElementById('dismiss').addEventListener('click', function(){
        document.getElementById('sidebar').classList.remove('active');
    });
    document.getElementById('sidebarCollapse').addEventListener('click', function(){
        document.getElementById('sidebar').classList.add('active');
    });
    var favorite_list = document.getElementsByClassName('favorite');
    for(let i = 0; i < favorite_list.length; i++){
        favorite_list[i].addEventListener('mouseover', function(){
            this.src = "../static/img/favorite.png";
        });
        favorite_list[i].addEventListener('mouseout', function(){
            this.src = "../static/img/favorite_undo.png";
        });
    }

    var store_btn = document.getElementById('store-photo');
    store_btn.addEventListener('click', downloadIamge(this, '../static/img/test_photo2.png'));
}

window.addEventListener('load', init);