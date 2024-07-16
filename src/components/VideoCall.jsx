import React from 'react'
import { useParams } from 'react-router-dom';
import { APP_ID, SERVER_SECRET } from './variables.js'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
 import { ZegoSuperBoardManager } from "zego-superboard-web";


const VideoCall = () => {

  const { roomID } = useParams();

  const handleMyMeeting = (element) => {
    const appID = APP_ID;
    const serverSecret = SERVER_SECRET;
    const userID = `USER_${Date.now()}`;


    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, "Programmer");


    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.addPlugins({ZegoSuperBoardManager});

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
            window.location.protocol + '//' +
            window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });
  }


  return (
    <>
      <div
        className="myCallContainer"
        ref={handleMyMeeting}
        style={{ width: '100vw', height: '100vh' }}
      ></div>
    </>
  )
}

export default VideoCall