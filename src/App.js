import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import Seaman from "./components/Seaman/Seaman";
import Shipowners from "./components/Shipowners/Shipowners";
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

function App() {
  const [isArrow, setIsArrow] = React.useState(false);

  // const [isSecond, setIsSecond] = React.useState(JSON.parse(sessionStorage.getItem("isSecond")) || false )
  // const [isLoader, setIsLoader] = React.useState(isSecond ? false : true);
  const [isLoader, setIsLoader] = React.useState(true);
  // React.useEffect(()=>{
  //   sessionStorage.setItem("isSecond", "true");
  // },[])

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 500) {
        setIsArrow(true);
      } else setIsArrow(false);
    });
    setTimeout(() => {
      setIsLoader(false);
      let body = document.querySelector("body");
      body.classList.remove("fix");
    }, 3500);
  }, []);
  return (
    <div className="App">
      <div className={`loader ${!isLoader && "hide"}`}>
        <div className="loader_inner">
          <div className="loader_logo">
            <div className="loader_logo_left">
              <div className="stick"></div>
              <div className="stick"></div>
              <div className="stick"></div>
            </div>
            <div className="loader_logo_img">
              <svg
                width="156"
                height="156"
                viewBox="0 0 156 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M143.63 117.229L138.658 90.9205C138.45 89.8301 137.725 88.9095 136.71 88.4569C135.699 88.0017 134.527 88.0749 133.577 88.6464L110.647 102.469C109.304 103.278 108.692 104.902 109.165 106.394C109.636 107.889 111.069 108.862 112.633 108.754L121.589 108.129C113.037 119.622 100.166 124.339 85.4027 125.548V50.2837H92.7756C93.9645 51.1689 95.4261 51.7101 97.0219 51.7101C100.97 51.7101 104.172 48.5105 104.172 44.5621C104.172 40.6114 100.97 37.4119 97.0219 37.4119C95.4234 37.4119 93.9616 37.9558 92.7727 38.8409H85.4024V28.5042C89.5984 25.7145 92.3753 20.9545 92.3753 15.5522C92.3756 6.97817 85.3981 0 76.8237 0C68.2494 0 61.2712 6.97817 61.2712 15.5522C61.2712 20.9545 64.0484 25.7145 68.2441 28.5042V38.8412H60.8742C59.6852 37.9561 58.2237 37.4122 56.6252 37.4122C52.6772 37.4122 49.475 40.6118 49.475 44.5625C49.475 48.5105 52.6772 51.7104 56.6252 51.7104C58.2211 51.7104 59.6826 51.1692 60.8715 50.2841H68.2441V125.548C53.4812 124.339 40.61 119.622 32.059 108.129L41.0149 108.754C42.5779 108.863 44.0119 107.889 44.4825 106.394C44.9555 104.902 44.3436 103.278 43.0003 102.469L20.0706 88.6467C19.1195 88.0753 17.9486 88.002 16.9367 88.4572C15.9225 88.9098 15.1967 89.8304 14.9891 90.9208L10.0167 117.229C9.72568 118.769 10.5274 120.307 11.9564 120.95C13.3854 121.595 15.0673 121.175 16.0286 119.935L21.3777 113.036C31.836 129.971 48.2808 144.15 67.2477 147.83L74.4252 155.008C75.7508 156.331 77.8951 156.331 79.2183 155.008L86.3959 147.83C105.363 144.153 121.81 129.971 132.268 113.036L137.618 119.935C138.579 121.175 140.261 121.595 141.689 120.95C143.119 120.307 143.921 118.769 143.63 117.229ZM76.8237 11.4422C79.0899 11.4422 80.9334 13.286 80.9334 15.5522C80.9334 17.8184 79.0899 19.6622 76.8237 19.6622C74.5576 19.6622 72.7134 17.8184 72.7134 15.5522C72.7138 13.286 74.5576 11.4422 76.8237 11.4422Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="loader_logo_right">
              <div className="stick"></div>
              <div className="stick"></div>
              <div className="stick"></div>
            </div>
          </div>
          <div className="loader_text">
            <p>International</p>
            <p>Crewing Group</p>
          </div>
        </div>
      </div>
      <div
        className={`arrow ${isArrow && "active"}`}
        onClick={() => {
          document.querySelector("body").scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }}
      >
        <svg
          width="20"
          height="11"
          viewBox="0 0 20 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.2827 0.286601C10.6085 0.289119 10.9325 0.415839 11.179 0.665429L19.6646 9.28323C19.9532 9.57628 19.9496 10.0463 19.6565 10.3349C19.3634 10.6235 18.8934 10.6198 18.6048 10.3268L10.2705 1.86262L1.80639 10.1969C1.51333 10.4855 1.04328 10.4819 0.754715 10.1888C0.466155 9.89574 0.469788 9.42569 0.762844 9.13713L9.38064 0.651528C9.63023 0.405772 9.95695 0.284083 10.2827 0.286601Z"
            fill="#7FB0D7"
          />
        </svg>
      </div>
      <Header isLoader={isLoader} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/shipowners" component={Shipowners} />
        <Route path="/seaman" component={Seaman} />
        <Redirect to="/" />
      </Switch>
      <Header isLoader={isLoader} footer={true} />
    </div>
  );
}

export default App;
