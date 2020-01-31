var header = '<!--Navbar--> \
<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark"> \
    <!-- Navbar brand --> \
    <a class="navbar-brand" href="#">SearcHair</a> \
 \
    <!-- Collapse button --> \
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" \
      aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation"> \
      <span class="navbar-toggler-icon"></span> \
    </button> \
    <!-- Collapsible content --> \
    <div class="collapse navbar-collapse" id="basicExampleNav"> \
   \
    <!-- Links --> \
    <ul class="navbar-nav mr-auto"> \
        <li class="nav-item dropdown"> \
        <a class="nav-link dropdown-toggle active" href="#"  id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">搜尋</a> \
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> \
            <a class="dropdown-item" href="search-salon.html">店家</a> \
            <a class="dropdown-item" href="search-stylist.html">設計師</a> \
            <a class="dropdown-item" href="search-hairstyle.html">髮型</a> \
        </div> \
        </li> \
        <li class="nav-item"> \
        <a class="nav-link" href="#">推薦商品</a> \
        </li> \
        <li class="nav-item"> \
        <a class="nav-link" href="#">Hair Match</a> \
        </li> \
        <li class="nav-item"> \
            <a class="nav-link" href="#">美髮地圖</a> \
        </li> \
        <li class="nav-item"> \
            <a class="nav-link" href="#">聊天室</a> \
        </li> \
    </ul> \
     \
    <ul class="navbar-nav ml-auto"> \
        <li class="nav-item active"> \
            <a class="nav-link" href="#login-modal" data-toggle="modal">登入</a> \
        </li> \
        <li class="nav-item active"> \
            <a class="nav-link" href="#register-modal" data-toggle="modal">註冊</a> \
        </li> \
    </ul> \
</nav> \
<!--/.Navbar-->';
document.write(header);