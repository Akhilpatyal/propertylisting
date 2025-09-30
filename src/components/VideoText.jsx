import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const VideoText = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    let split1, split2;

    document.fonts.ready.then(() => {
      gsap.set(containerRef.current, { opacity: 1 });

      // Split "Who"
      split1 = new SplitText(line1Ref.current, { type: "words", aria: "hidden" });
      gsap.from(split1.words, {
        opacity: 0,
        y: 40, // slide-up
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
      });

      // Split "WE Are"
      split2 = new SplitText(line2Ref.current, { type: "words", aria: "hidden" });
      gsap.from(split2.words, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
        delay: 0.5, // starts after first line
      });
    });

    return () => {
      if (split1) split1.revert();
      if (split2) split2.revert();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className="text-center pt-5 mt-5 mt-lg-0" style={{ fontFamily: "font1" }}>
        
        {/* First Line */}
        <div
          ref={line1Ref}
          className="text-uppercase text-light"
          style={{
            fontSize: "9.5vw",
            lineHeight: "8vw",
          }}
        >
          Who
        </div>

        {/* Second Line */}
        <div
          ref={line2Ref}
          className="d-flex justify-content-center align-items-center text-uppercase text-light"
          style={{
            fontSize: "9.5vw",
            lineHeight: "8vw",
          }}
        >
          WE &nbsp;
          <div
            className="rounded-pill overflow-hidden"
            style={{
              height: "7vw",
              width: "16vw",
              marginTop: "0.75rem",
            }}
          >
            <video
              className="object-fit-cover"
              style={{ height: "10vw", width: "16vw" }}
              autoPlay
              loop
              muted
              src="https://www.pexels.com/download/video/3205624/"
            ></video>
          </div>
          &nbsp;Are
        </div>
      </div>
    </div>
  );
};

export default VideoText;
