import { useEffect, useState } from "react";
import '../style/chirp.css';

export function Chirp({id}) {
  const [chirp, setChirp] = useState({ text:"", attachment:"", reply_chirp_id:null, unix_timestamp:0, user: { display_name:"", username:"", icon:"" }  })

  useEffect(() => {
    setChirp({
      text:"The British decided to turn off Big Ben for a couple of years thinking there would be no consequences.\nYOU'VE ANGERED YOUR CLOCK GOD",
      attachment:"",
      reply_chirp_id:null,
      unix_timestamp:1666287600,
      user: {
        display_name:"Mr. Kilian",
        username: "KilExperience",
        icon:"https://pbs.twimg.com/profile_images/1145405999915896833/EKG4Tujc_400x400.png"
      }
    })
    // fetch data
  }, [])

  return <div className="chirp row">
    <div className="chirp_icon_container">
      <img src={chirp.user.icon} alt={`${chirp.user.display_name}'s icon`}/>
    </div>
    <div className="chirp_content_container col">
      <div className="chirp_header row">
        <span className="chirp_display_name">{chirp.user.display_name}</span>
        <span className="chirp_username">{"@" + chirp.user.username}</span>
        <span className="chirp_spacer">·</span>
        {/* TODO: PARSE DATE TIME */}
        <span className="chirp_time">chirp.unix_timestamp</span>
        <div className="spacer"/>
        <button className="chirp_extra_controls_button">
          <svg viewBox="0 0 24 24"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
        </button>
      </div>
    </div>
  </div>
}