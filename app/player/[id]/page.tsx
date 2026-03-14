import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import AudioPlayer from "@/components/player/AudioPlayer";

import "./page.css";

const Page = () => {
  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row summary__row"></div>
        <AudioPlayer />
      </div>
    </div>
  );
};

export default Page;
