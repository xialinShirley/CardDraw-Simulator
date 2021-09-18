import React from "react";
function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-fixed-top navbar-transparent"
        role="navigation"
      >
        <div className="container-fluid">
          <a href="https://game.bilibili.com/bangdream/#p1">
            <img
              src="https://e.im5i.com/2021/08/28/4xoma.png"
              alt="logo"
              id="logo"
            />
          </a>
          <a
            className="nav-link active"
            aria-current="page"
            href="https://wiki.biligame.com/bangdream/%E9%A6%96%E9%A1%B5"
          >
            游戏介绍
          </a>
          <a
            className="nav-link"
            href="https://wiki.biligame.com/bangdream/%E6%B4%BB%E5%8A%A8"
          >
            活动
          </a>
          <a
            className="nav-link"
            href="https://wiki.biligame.com/bangdream/%E5%9B%BE%E9%89%B4"
          >
            图鉴
          </a>
          <span className="navbar-text">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </span>
          {/* 登录注册部分 */}
          <a className="nav-link active login" aria-current="page" href="#">
            注册
          </a>
          <a className="nav-link logout" href="#">
            登录
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
